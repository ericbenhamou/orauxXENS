import {
  APP_META,
  COURSE_MODULES,
  EXERCISES,
  GLOSSARY,
  JURY_ALERTS,
  NAV_ITEMS,
  PROFILES,
  QCM_QUESTIONS,
  RESOURCE_LINKS,
} from "./content.js";

const STORAGE_KEY = "oraux-x-ens-state-v1";
const ROUTE_FALLBACK = "dashboard";

const state = loadState();

const ui = {
  timer: {
    exerciseId: state.selectedExerciseId,
    running: false,
    startedAt: 0,
    elapsedMs: 0,
    intervalId: null,
  },
};

const navRoot = document.getElementById("nav");
const accountRoot = document.getElementById("account-panel");
const mainRoot = document.getElementById("main-content");

window.addEventListener("hashchange", renderApp);
document.addEventListener("click", handleDocumentClick);
document.addEventListener("input", handleDocumentInput);

renderApp();

function createDefaultProfileData() {
  return {
    completedCourses: [],
    starredGlossary: [],
    results: [],
    qcmHistory: [],
    qcmLastReport: null,
    qcmMistakes: [],
    noteDrafts: {},
  };
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const base = {
    selectedProfileId: PROFILES[0].id,
    selectedCourseId: COURSE_MODULES[0].id,
    selectedExerciseId: EXERCISES[0].id,
    glossaryQuery: "",
    glossaryCategory: "all",
    qcmCategory: "all",
    exerciseTheme: "all",
    exerciseDifficulty: "all",
    exerciseQuery: "",
    profiles: Object.fromEntries(PROFILES.map((profile) => [profile.id, createDefaultProfileData()])),
  };

  if (!raw) {
    return base;
  }

  try {
    const parsed = JSON.parse(raw);
    const mergedProfiles = Object.fromEntries(
      PROFILES.map((profile) => [
        profile.id,
        {
          ...createDefaultProfileData(),
          ...(parsed.profiles?.[profile.id] || {}),
        },
      ]),
    );

    return {
      ...base,
      ...parsed,
      profiles: mergedProfiles,
    };
  } catch {
    return base;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function route() {
  const raw = window.location.hash.replace("#", "").trim();
  return NAV_ITEMS.some((item) => item.id === raw) ? raw : ROUTE_FALLBACK;
}

function getProfileData(profileId = state.selectedProfileId) {
  return state.profiles[profileId];
}

function getProfileMeta(profileId = state.selectedProfileId) {
  return PROFILES.find((profile) => profile.id === profileId);
}

function getExerciseById(id = state.selectedExerciseId) {
  return EXERCISES.find((exercise) => exercise.id === id) || EXERCISES[0];
}

function getCourseById(id = state.selectedCourseId) {
  return COURSE_MODULES.find((course) => course.id === id) || COURSE_MODULES[0];
}

function ensureHash() {
  if (!window.location.hash) {
    window.location.hash = `#${ROUTE_FALLBACK}`;
  }
}

function renderApp() {
  ensureHash();
  renderNav();
  renderAccounts();
  renderMain();
}

function renderNav() {
  const currentRoute = route();
  navRoot.innerHTML = NAV_ITEMS.map(
    (item) => `
      <a
        href="#${item.id}"
        class="nav-item ${item.id === currentRoute ? "active" : ""}"
      >
        <span>${item.label}</span>
      </a>
    `,
  ).join("");
}

function renderAccounts() {
  const current = state.selectedProfileId;
  accountRoot.innerHTML = `
    <div class="section-label">
      <span>Comptes dédiés</span>
      <small>Persistance locale par profil</small>
    </div>
    <div class="account-grid">
      ${PROFILES.map((profile) => {
        const stats = getStatsForProfile(profile.id);
        return `
          <button
            class="account-card ${profile.id === current ? "active" : ""}"
            data-action="select-profile"
            data-profile-id="${profile.id}"
            type="button"
          >
            <div class="account-avatar">${profile.name.slice(0, 1)}</div>
            <div class="account-copy">
              <strong>${profile.name}</strong>
              <span>${profile.tagline}</span>
              <small>${stats.successes} réussites · ${stats.errors} erreurs mémorisées</small>
            </div>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderMain() {
  const currentRoute = route();
  const profile = getProfileMeta();
  const titleMap = {
    dashboard: "Tableau de bord",
    cours: "Zone de cours",
    glossaire: "Glossaire",
    qcm: "QCM classiques",
    oraux: "Oraux blancs",
    memoire: "Mémoire des erreurs",
    resultats: "Résultats",
    ressources: "Ressources",
  };

  const introMap = {
    dashboard: "Vue prioritaire de la préparation, par profil.",
    cours: "Cours structurés pour fixer les réflexes qui tombent vraiment à l'oral.",
    glossaire: "Définitions propres, usage à l'oral et pièges associés.",
    qcm: "Résultats de cours à reconnaître vite, proprement, sans hésitation.",
    oraux: "Corpus d'exercices classiques, filtrable et annotable.",
    memoire: "Ce qu'il ne faut plus rater deux fois.",
    resultats: "Suivi des progrès, comparaison Raphael / Henry et points faibles.",
    ressources: "Rapports, sujets et ancrage Francinou.",
  };

  mainRoot.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">${APP_META.title} · ${profile.name}</p>
        <h1>${titleMap[currentRoute]}</h1>
        <p class="lead">${introMap[currentRoute]}</p>
      </div>
      <div class="topbar-actions">
        <button class="button secondary" data-action="go-route" data-route="resultats" type="button">
          Voir les résultats
        </button>
        <button class="button primary" data-action="go-route" data-route="oraux" type="button">
          Lancer un oral blanc
        </button>
      </div>
    </header>
    ${renderRoute(currentRoute)}
  `;

  syncTimerDisplay();
}

function renderRoute(currentRoute) {
  switch (currentRoute) {
    case "cours":
      return renderCoursesPage();
    case "glossaire":
      return renderGlossaryPage();
    case "qcm":
      return renderQcmPage();
    case "oraux":
      return renderOralsPage();
    case "memoire":
      return renderMemoryPage();
    case "resultats":
      return renderResultsPage();
    case "ressources":
      return renderResourcesPage();
    default:
      return renderDashboardPage();
  }
}

function getStatsForProfile(profileId = state.selectedProfileId) {
  const profileData = getProfileData(profileId);
  const total = profileData.results.length;
  const successes = profileData.results.filter((item) => item.status === "success").length;
  const review = profileData.results.filter((item) => item.status === "review").length;
  const errors = profileData.results.filter((item) => item.status === "error").length;
  const completedCourses = profileData.completedCourses.length;
  return {
    total,
    successes,
    review,
    errors,
    completedCourses,
  };
}

function getRecentResults(profileId = state.selectedProfileId, limit = 5) {
  return [...getProfileData(profileId).results]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);
}

function getWeakThemes(profileId = state.selectedProfileId) {
  const scores = new Map();
  for (const result of getProfileData(profileId).results) {
    const exercise = EXERCISES.find((item) => item.id === result.exerciseId);
    if (!exercise) {
      continue;
    }
    const current = scores.get(exercise.theme) || { theme: exercise.theme, penalty: 0, count: 0 };
    current.count += 1;
    current.penalty += result.status === "error" ? 3 : result.status === "review" ? 2 : 0;
    scores.set(exercise.theme, current);
  }
  return [...scores.values()]
    .sort((a, b) => b.penalty - a.penalty || b.count - a.count)
    .slice(0, 3);
}

function getStrongThemes(profileId = state.selectedProfileId) {
  const scores = new Map();
  for (const result of getProfileData(profileId).results) {
    const exercise = EXERCISES.find((item) => item.id === result.exerciseId);
    if (!exercise) {
      continue;
    }
    const current = scores.get(exercise.theme) || { theme: exercise.theme, score: 0, count: 0 };
    current.count += 1;
    current.score += result.status === "success" ? 2 : result.status === "review" ? 1 : 0;
    scores.set(exercise.theme, current);
  }
  return [...scores.values()]
    .sort((a, b) => b.score - a.score || b.count - a.count)
    .slice(0, 3);
}

function getLastStatusForExercise(profileId, exerciseId) {
  const sorted = [...getProfileData(profileId).results]
    .filter((item) => item.exerciseId === exerciseId)
    .sort((a, b) => b.timestamp - a.timestamp);
  return sorted[0] || null;
}

function getErrorResults(profileId = state.selectedProfileId) {
  return [...getProfileData(profileId).results]
    .filter((item) => item.status === "error")
    .sort((a, b) => b.timestamp - a.timestamp);
}

function getQcmQuestions(category = state.qcmCategory) {
  return QCM_QUESTIONS.filter((question) => category === "all" || question.category === category);
}

function getQcmLastReport(profileId = state.selectedProfileId) {
  return getProfileData(profileId).qcmLastReport;
}

function getQcmStatsForProfile(profileId = state.selectedProfileId) {
  const history = getProfileData(profileId).qcmHistory;
  if (!history.length) {
    return {
      attempts: 0,
      averagePct: 0,
      bestPct: 0,
      totalQuestionsSeen: 0,
      lastScoreLabel: "Aucun QCM",
    };
  }

  const percentages = history.map((entry) => (entry.total ? Math.round((entry.score / entry.total) * 100) : 0));
  const last = history[history.length - 1];
  return {
    attempts: history.length,
    averagePct: Math.round(percentages.reduce((sum, value) => sum + value, 0) / percentages.length),
    bestPct: Math.max(...percentages),
    totalQuestionsSeen: history.reduce((sum, entry) => sum + entry.total, 0),
    lastScoreLabel: `${last.score}/${last.total}`,
  };
}

function getQcmMistakes(profileId = state.selectedProfileId) {
  return [...getProfileData(profileId).qcmMistakes].sort((a, b) => b.timestamp - a.timestamp);
}

function renderDashboardPage() {
  const profile = getProfileMeta();
  const stats = getStatsForProfile();
  const qcmStats = getQcmStatsForProfile();
  const weakThemes = getWeakThemes();
  const strongThemes = getStrongThemes();
  const recent = getRecentResults();
  const currentExercise = getExerciseById();
  const completedPct = Math.round((stats.completedCourses / COURSE_MODULES.length) * 100);

  return `
    <section class="hero-grid">
      <article class="hero-card">
        <p class="eyebrow">Vue rapide</p>
        <h2>${profile.goal}</h2>
        <p>${APP_META.pitch}</p>
        <div class="button-row">
          <button class="button primary" type="button" data-action="go-route" data-route="oraux">
            Ouvrir l'oral du jour
          </button>
          <button class="button secondary" type="button" data-action="go-route" data-route="qcm">
            Lancer un QCM de cours
          </button>
          <button class="button secondary" type="button" data-action="go-route" data-route="memoire">
            Relire mes erreurs
          </button>
        </div>
      </article>
      <article class="focus-card">
        <p class="eyebrow">Prochain focus</p>
        <strong>${currentExercise.title}</strong>
        <span>${currentExercise.theme} · ${currentExercise.duration}</span>
        <p>${currentExercise.statement}</p>
        <button class="button secondary wide" type="button" data-action="go-route" data-route="oraux">
          Travailler cet exercice
        </button>
      </article>
    </section>

    <section class="stats-grid">
      ${renderMetric("Oral blancs lancés", String(stats.total))}
      ${renderMetric("Réussites", String(stats.successes))}
      ${renderMetric("Erreurs mémorisées", String(stats.errors))}
      ${renderMetric("Cours revus", `${stats.completedCourses}/${COURSE_MODULES.length}`)}
      ${renderMetric("QCM corrigés", String(qcmStats.attempts))}
      ${renderMetric("Dernier QCM", qcmStats.lastScoreLabel)}
    </section>

    <section class="content-grid">
      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Rattrapage prioritaire</p>
            <h2>Thèmes à remettre sous tension</h2>
          </div>
          <span class="pill copper">${completedPct}% du socle cours révisé</span>
        </div>
        ${
          weakThemes.length
            ? weakThemes
                .map(
                  (item) => `
                    <div class="bar-row">
                      <strong>${item.theme}</strong>
                      <div class="bar"><span style="width:${Math.min(100, item.penalty * 12)}%"></span></div>
                      <small>${item.count} tentatives · score d'alerte ${item.penalty}</small>
                    </div>
                  `,
                )
                .join("")
            : renderEmpty("Aucune faiblesse enregistrée pour l'instant. Lance un oral blanc pour commencer le suivi.")
        }
      </article>

      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Récitation active</p>
            <h2>QCM de résultats classiques</h2>
          </div>
        </div>
        <div class="stack-list">
          <div class="mini-card">
            <strong>Dernier score</strong>
            <p>${qcmStats.lastScoreLabel}</p>
          </div>
          <div class="mini-card">
            <strong>Moyenne</strong>
            <p>${qcmStats.attempts ? `${qcmStats.averagePct}%` : "Pas encore de tentative"}</p>
          </div>
          <div class="mini-card">
            <strong>Meilleur score</strong>
            <p>${qcmStats.attempts ? `${qcmStats.bestPct}%` : "—"}</p>
          </div>
          <button class="button secondary wide" type="button" data-action="go-route" data-route="qcm">
            Ouvrir le QCM
          </button>
        </div>
      </article>

      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Points d'appui</p>
            <h2>Ce qui tient déjà</h2>
          </div>
        </div>
        ${
          strongThemes.length
            ? strongThemes
                .map(
                  (item) => `
                    <div class="check-row">
                      <strong>${item.theme}</strong>
                      <span>${item.score} points de réussite sur ${item.count} passages</span>
                    </div>
                  `,
                )
                .join("")
            : renderEmpty("Les points forts apparaîtront après quelques exercices évalués.")
        }
      </article>

      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Historique récent</p>
            <h2>Derniers passages</h2>
          </div>
        </div>
        ${
          recent.length
            ? `
              <div class="table-list">
                ${recent
                  .map((item) => {
                    const exercise = EXERCISES.find((entry) => entry.id === item.exerciseId);
                    return `
                      <div class="table-row">
                        <strong>${exercise?.title || item.exerciseId}</strong>
                        <span>${exercise?.theme || "—"}</span>
                        <span>${renderStatusBadge(item.status)}</span>
                        <span>${formatDate(item.timestamp)}</span>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            `
            : renderEmpty("Aucun passage enregistré. Le site est prêt ; à toi de remplir la partie résultats.")
        }
      </article>

      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Erreurs du jury</p>
            <h2>Ce qu'il faut garder en tête</h2>
          </div>
        </div>
        <div class="stack-list">
          ${JURY_ALERTS.slice(0, 4)
            .map(
              (alert) => `
                <div class="alert-card">
                  <strong>${alert.title}</strong>
                  <p>${alert.body}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function renderCoursesPage() {
  const profileData = getProfileData();
  const activeCourse = getCourseById();
  return `
    <section class="split-layout">
      <aside class="side-list">
        <div class="panel side-panel">
          <p class="eyebrow">Modules</p>
          <h2>Socle X/ENS</h2>
          <div class="course-list">
            ${COURSE_MODULES.map(
              (course) => `
                <button
                  class="course-item ${course.id === activeCourse.id ? "active" : ""}"
                  data-action="select-course"
                  data-course-id="${course.id}"
                  type="button"
                >
                  <strong>${course.title}</strong>
                  <span>${course.family}</span>
                  ${
                    profileData.completedCourses.includes(course.id)
                      ? '<small>Révisé</small>'
                      : '<small>À cadrer</small>'
                  }
                </button>
              `,
            ).join("")}
          </div>
        </div>
      </aside>

      <section class="content-panel">
        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">${activeCourse.family}</p>
              <h2>${activeCourse.title}</h2>
            </div>
            <button
              class="button ${profileData.completedCourses.includes(activeCourse.id) ? "secondary" : "primary"}"
              type="button"
              data-action="toggle-course"
              data-course-id="${activeCourse.id}"
            >
              ${profileData.completedCourses.includes(activeCourse.id) ? "Marqué révisé" : "Marquer ce module révisé"}
            </button>
          </div>
          <p class="lead compact">${activeCourse.summary}</p>
          ${
            activeCourse.note
              ? `<div class="callout">${activeCourse.note}</div>`
              : ""
          }
          <div class="mini-grid">
            <div class="mini-card">
              <strong>Attendus du jury</strong>
              <ul class="plain-list">
                ${activeCourse.juryExpectations.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="mini-card">
              <strong>Mouvements classiques</strong>
              <ul class="plain-list">
                ${activeCourse.classicMoves.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="section-stack">
            ${activeCourse.sections
              .map(
                (section) => `
                  <section class="section-card">
                    <h3>${section.title}</h3>
                    <ul class="plain-list">
                      ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                    </ul>
                  </section>
                `,
              )
              .join("")}
          </div>
          <section class="section-card">
            <h3>Exercices associés</h3>
            <div class="chip-grid">
              ${activeCourse.featuredExercises
                .map((exerciseId) => {
                  const exercise = EXERCISES.find((item) => item.id === exerciseId);
                  if (!exercise) {
                    return "";
                  }
                  return `
                    <button
                      class="chip-button"
                      type="button"
                      data-action="open-exercise"
                      data-exercise-id="${exercise.id}"
                    >
                      ${exercise.title}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </section>
          <section class="section-card">
            <h3>Sources de construction</h3>
            <ul class="plain-list">
              ${activeCourse.sourceRefs.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </article>
      </section>
    </section>
  `;
}

function renderGlossaryPage() {
  const categories = ["all", ...new Set(GLOSSARY.map((item) => item.category))];
  const filtered = GLOSSARY.filter((entry) => {
    const matchesCategory =
      state.glossaryCategory === "all" || entry.category === state.glossaryCategory;
    const query = state.glossaryQuery.trim().toLowerCase();
    const haystack = `${entry.term} ${entry.definition} ${entry.oralUse} ${entry.trap}`.toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
  const profileData = getProfileData();

  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Définitions orales</p>
          <h2>Glossaire opérationnel</h2>
        </div>
      </div>
      <div class="toolbar-grid">
        <label>
          <span>Recherche</span>
          <input
            type="search"
            placeholder="Différentiabilité, projecteur, Gronwall..."
            value="${escapeHtml(state.glossaryQuery)}"
            data-input="glossary-query"
          />
        </label>
        <div>
          <span class="toolbar-label">Catégories</span>
          <div class="chip-grid">
            ${categories
              .map(
                (category) => `
                  <button
                    class="chip-button ${state.glossaryCategory === category ? "active" : ""}"
                    type="button"
                    data-action="set-glossary-category"
                    data-category="${category}"
                  >
                    ${category === "all" ? "Tout" : category}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="glossary-list">
        ${
          filtered.length
            ? filtered
                .map(
                  (entry) => `
                    <article class="glossary-card">
                      <div class="glossary-head">
                        <div>
                          <p class="eyebrow">${entry.category}</p>
                          <h3>${entry.term}</h3>
                        </div>
                        <button
                          class="button ${profileData.starredGlossary.includes(entry.id) ? "primary" : "secondary"}"
                          type="button"
                          data-action="toggle-glossary-star"
                          data-glossary-id="${entry.id}"
                        >
                          ${profileData.starredGlossary.includes(entry.id) ? "Gardé" : "Épingler"}
                        </button>
                      </div>
                      <dl class="definition-grid">
                        <div>
                          <dt>Définition</dt>
                          <dd>${entry.definition}</dd>
                        </div>
                        <div>
                          <dt>À l'oral</dt>
                          <dd>${entry.oralUse}</dd>
                        </div>
                        <div>
                          <dt>Piège</dt>
                          <dd>${entry.trap}</dd>
                        </div>
                        <div>
                          <dt>Repères</dt>
                          <dd>${entry.refs.join(" · ")}</dd>
                        </div>
                      </dl>
                    </article>
                  `,
                )
                .join("")
            : renderEmpty("Aucune entrée ne correspond à la recherche.")
        }
      </div>
    </section>
  `;
}

function renderQcmPage() {
  const categories = ["all", ...new Set(QCM_QUESTIONS.map((item) => item.category))];
  const questions = getQcmQuestions();
  const qcmStats = getQcmStatsForProfile();
  const lastReport = getQcmLastReport();
  const correctedQuestionCount = lastReport ? Object.keys(lastReport.answers).length : 0;

  return `
    <section class="content-grid">
      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">QCM de socle</p>
            <h2>Résultats à reconnaître vite</h2>
          </div>
        </div>
        <div class="stack-list">
          <div class="mini-card">
            <strong>Objectif</strong>
            <p>
              Consolider les résultats que le jury attend comme des réflexes de cours :
              théorème spectral, Cayley-Hamilton, Weierstrass, convergence uniforme,
              espérance, variance, structure de groupe.
            </p>
          </div>
          <div class="mini-card">
            <strong>Historique</strong>
            <p>${qcmStats.attempts} QCM corrigés · moyenne ${qcmStats.attempts ? `${qcmStats.averagePct}%` : "—"} · meilleur score ${qcmStats.attempts ? `${qcmStats.bestPct}%` : "—"}</p>
          </div>
          <div class="mini-card">
            <strong>Dernier passage</strong>
            <p>${qcmStats.lastScoreLabel}</p>
          </div>
        </div>
      </article>

      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Filtre</p>
            <h2>Par famille de résultats</h2>
          </div>
        </div>
        <div class="chip-grid">
          ${categories
            .map(
              (category) => `
                <button
                  class="chip-button ${state.qcmCategory === category ? "active" : ""}"
                  type="button"
                  data-action="set-qcm-category"
                  data-category="${category}"
                >
                  ${category === "all" ? "Tout le socle" : category}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="qcm-toolbar">
          <span>${questions.length} questions affichées</span>
          <div class="button-row">
            <button class="button primary" type="button" data-action="submit-qcm">
              Corriger ce QCM
            </button>
            <button class="button secondary" type="button" data-action="reset-qcm-report">
              Réinitialiser l'affichage
            </button>
          </div>
        </div>
        ${
          lastReport
            ? `
              <div class="qcm-summary">
                <strong>Score affiché : ${lastReport.score}/${lastReport.total}</strong>
                <span>${correctedQuestionCount} réponse(s) corrigée(s) · ${formatDate(lastReport.timestamp)}</span>
              </div>
            `
            : ""
        }
      </article>

      <article class="panel span-12">
        <form id="qcm-form" class="qcm-form">
          ${questions
            .map((question, index) => {
              const lastAnswer = lastReport?.answers?.[question.id] || null;
              return `
                <section class="qcm-question">
                  <div class="qcm-question-head">
                    <p class="eyebrow">${question.category}</p>
                    <h3>${index + 1}. ${question.prompt}</h3>
                  </div>
                  <div class="choice-list">
                    ${question.choices
                      .map((choice) => {
                        const isChecked = lastAnswer?.selectedChoiceId === choice.id;
                        const isCorrectChoice = Boolean(lastAnswer) && choice.id === question.correctChoiceId;
                        const isWrongSelected = Boolean(lastAnswer) && isChecked && !lastAnswer.isCorrect;
                        const className = [
                          "choice-option",
                          isCorrectChoice ? "correct" : "",
                          isWrongSelected ? "incorrect" : "",
                        ]
                          .filter(Boolean)
                          .join(" ");
                        return `
                          <label class="${className}">
                            <input
                              type="radio"
                              name="qcm-${question.id}"
                              value="${choice.id}"
                              ${isChecked ? "checked" : ""}
                            />
                            <span>${choice.text}</span>
                          </label>
                        `;
                      })
                      .join("")}
                  </div>
                  ${
                    lastAnswer
                      ? `
                        <div class="qcm-explanation ${lastAnswer.isCorrect ? "success" : "warning"}">
                          <strong>${lastAnswer.isCorrect ? "Bonne réponse" : "À retenir"}</strong>
                          <p>${question.explanation}</p>
                          <small>${question.refs.join(" · ")}</small>
                        </div>
                      `
                      : ""
                  }
                </section>
              `;
            })
            .join("")}
        </form>
      </article>
    </section>
  `;
}

function renderOralsPage() {
  const activeExercise = getExerciseById();
  const profileData = getProfileData();
  const filtered = EXERCISES.filter((exercise) => {
    const themeOk = state.exerciseTheme === "all" || exercise.theme === state.exerciseTheme;
    const difficultyOk =
      state.exerciseDifficulty === "all" || exercise.difficulty === state.exerciseDifficulty;
    const query = state.exerciseQuery.trim().toLowerCase();
    const haystack = `${exercise.title} ${exercise.theme} ${exercise.tags.join(" ")} ${exercise.statement}`.toLowerCase();
    return themeOk && difficultyOk && (!query || haystack.includes(query));
  });

  const noteDraft = profileData.noteDrafts[activeExercise.id] || "";
  const lastStatus = getLastStatusForExercise(state.selectedProfileId, activeExercise.id);
  const linkedCourses = activeExercise.relatedCourseIds
    .map((courseId) => COURSE_MODULES.find((item) => item.id === courseId))
    .filter(Boolean);

  return `
    <section class="split-layout">
      <aside class="side-list">
        <div class="panel side-panel">
          <p class="eyebrow">Filtres</p>
          <div class="filter-stack">
            <label>
              <span>Thème</span>
              <select data-input="exercise-theme">
                ${renderOptions(["all", ...new Set(EXERCISES.map((item) => item.theme))], state.exerciseTheme)}
              </select>
            </label>
            <label>
              <span>Difficulté</span>
              <select data-input="exercise-difficulty">
                ${renderOptions(["all", ...new Set(EXERCISES.map((item) => item.difficulty))], state.exerciseDifficulty)}
              </select>
            </label>
            <label>
              <span>Recherche</span>
              <input
                type="search"
                value="${escapeHtml(state.exerciseQuery)}"
                placeholder="Newton, projecteur, suite..."
                data-input="exercise-query"
              />
            </label>
          </div>
        </div>
        <div class="panel side-panel">
          <p class="eyebrow">Corpus classique</p>
          <div class="exercise-list">
            ${filtered
              .map((exercise) => {
                const status = getLastStatusForExercise(state.selectedProfileId, exercise.id);
                return `
                  <button
                    class="exercise-item ${exercise.id === activeExercise.id ? "active" : ""}"
                    type="button"
                    data-action="select-exercise"
                    data-exercise-id="${exercise.id}"
                  >
                    <div>
                      <strong>${exercise.title}</strong>
                      <span>${exercise.theme} · ${exercise.duration}</span>
                    </div>
                    ${status ? renderStatusBadge(status.status) : '<span class="pill muted">Neuf</span>'}
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
      </aside>

      <section class="content-panel">
        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">${activeExercise.theme}</p>
              <h2>${activeExercise.title}</h2>
            </div>
            <div class="stack-actions">
              <span class="pill">${activeExercise.priority}</span>
              <span class="pill muted">${activeExercise.difficulty}</span>
            </div>
          </div>
          <p class="lead compact">${activeExercise.statement}</p>
          <div class="mini-grid">
            <div class="mini-card">
              <strong>Cadre d'oral</strong>
              <p>${activeExercise.oralFrame}</p>
            </div>
            <div class="mini-card timer-card">
              <strong>Chrono de passage</strong>
              <div class="timer-value" id="session-timer">${formatDuration(ui.timer.elapsedMs)}</div>
              <div class="button-row">
                <button class="button secondary" type="button" data-action="timer-start">Démarrer</button>
                <button class="button secondary" type="button" data-action="timer-stop">Stop</button>
                <button class="button secondary" type="button" data-action="timer-reset">Remise à zéro</button>
              </div>
            </div>
          </div>

          <section class="section-card">
            <h3>Ce que le jury veut entendre</h3>
            <ul class="plain-list">
              ${activeExercise.expectedMoves.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="section-card warning">
            <h3>Erreurs à mémoriser</h3>
            <ul class="plain-list">
              ${activeExercise.commonErrors.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="section-card">
            <h3>Liens de cours recommandés</h3>
            <div class="chip-grid">
              ${linkedCourses
                .map(
                  (course) => `
                    <button
                      class="chip-button"
                      type="button"
                      data-action="select-course-and-route"
                      data-course-id="${course.id}"
                    >
                      ${course.title}
                    </button>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section class="section-card">
            <h3>Trace personnelle</h3>
            <label class="textarea-label">
              <span>Ce que j'ai raté, ou ce que je veux retenir pour le prochain passage</span>
              <textarea
                rows="5"
                data-input="exercise-note"
                data-exercise-id="${activeExercise.id}"
                placeholder="Exemple : j'ai oublié d'utiliser la décomposition Im(p) ⊕ Ker(p), ou j'ai lancé un calcul sans choisir le bon état."
              >${escapeHtml(noteDraft)}</textarea>
            </label>
            <div class="button-row">
              <button class="button primary" type="button" data-action="record-result" data-status="success">
                Marquer réussi
              </button>
              <button class="button secondary" type="button" data-action="record-result" data-status="review">
                Marquer à reprendre
              </button>
              <button class="button danger" type="button" data-action="record-result" data-status="error">
                Mémoriser une erreur
              </button>
            </div>
            ${
              lastStatus
                ? `<p class="last-status">Dernier statut : ${humanStatus(lastStatus.status)} · ${formatDate(
                    lastStatus.timestamp,
                  )}</p>`
                : '<p class="last-status">Aucun passage encore enregistré sur cet exercice.</p>'
            }
          </section>

          <section class="section-card">
            <h3>Sources</h3>
            <ul class="plain-list">
              <li>${activeExercise.sourceUrl ? `<a href="${activeExercise.sourceUrl}" target="_blank" rel="noreferrer">${activeExercise.sourceLabel}</a>` : activeExercise.sourceLabel}</li>
              ${activeExercise.bookRefs.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </article>
      </section>
    </section>
  `;
}

function renderMemoryPage() {
  const errors = getErrorResults();
  const qcmMistakes = getQcmMistakes();
  return `
    <section class="content-grid">
      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Mémoire du jury</p>
            <h2>Erreurs à bannir</h2>
          </div>
        </div>
        <div class="stack-list">
          ${JURY_ALERTS.map(
            (alert) => `
              <div class="alert-card">
                <strong>${alert.title}</strong>
                <p>${alert.body}</p>
                <small>${alert.source}</small>
              </div>
            `,
          ).join("")}
        </div>
      </article>

      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Mémoire personnalisée</p>
            <h2>Erreurs enregistrées pour ${getProfileMeta().name}</h2>
          </div>
        </div>
        ${
          errors.length
            ? errors
                .map((item) => {
                  const exercise = EXERCISES.find((entry) => entry.id === item.exerciseId);
                  return `
                    <div class="memory-row">
                      <div>
                        <strong>${exercise?.title || item.exerciseId}</strong>
                        <span>${exercise?.theme || "—"} · ${formatDate(item.timestamp)}</span>
                        <p>${item.note ? escapeHtml(item.note) : "Erreur mémorisée sans commentaire. Ajoute un message lors du prochain passage pour capter la cause exacte."}</p>
                      </div>
                      <div class="memory-actions">
                        <button
                          class="button secondary"
                          type="button"
                          data-action="open-exercise"
                          data-exercise-id="${item.exerciseId}"
                        >
                          Rejouer
                        </button>
                      </div>
                    </div>
                  `;
                })
                .join("")
            : renderEmpty("Aucune erreur mémorisée pour le moment. Le carnet se remplit automatiquement quand tu marques un passage en erreur.")
        }
      </article>

      <article class="panel span-12">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">QCM de résultats</p>
            <h2>Résultats de cours encore fragiles</h2>
          </div>
        </div>
        ${
          qcmMistakes.length
            ? qcmMistakes
                .map((mistake) => {
                  const question = QCM_QUESTIONS.find((entry) => entry.id === mistake.questionId);
                  if (!question) {
                    return "";
                  }
                  const selectedText =
                    question.choices.find((choice) => choice.id === mistake.selectedChoiceId)?.text || "Pas de réponse";
                  const correctText =
                    question.choices.find((choice) => choice.id === question.correctChoiceId)?.text || "";
                  return `
                    <div class="memory-row">
                      <div>
                        <strong>${question.prompt}</strong>
                        <span>${question.category} · ${formatDate(mistake.timestamp)}</span>
                        <p><strong>Réponse donnée :</strong> ${escapeHtml(selectedText)}</p>
                        <p><strong>Réponse attendue :</strong> ${escapeHtml(correctText)}</p>
                      </div>
                      <div class="memory-actions">
                        <button class="button secondary" type="button" data-action="go-route" data-route="qcm">
                          Refaire le QCM
                        </button>
                      </div>
                    </div>
                  `;
                })
                .join("")
            : renderEmpty("Aucune erreur QCM mémorisée. Les résultats de cours mal reconnus apparaîtront ici après correction.")
        }
      </article>
    </section>
  `;
}

function renderResultsPage() {
  const currentStats = getStatsForProfile();
  const qcmStats = getQcmStatsForProfile();
  const attemptBar = EXERCISES.map((exercise) => {
    const last = getLastStatusForExercise(state.selectedProfileId, exercise.id);
    return `
      <div class="progress-card">
        <strong>${exercise.title}</strong>
        <span>${exercise.theme}</span>
        ${last ? renderStatusBadge(last.status) : '<span class="pill muted">Neuf</span>'}
      </div>
    `;
  }).join("");

  return `
    <section class="stats-grid">
      ${renderMetric("Total passages", String(currentStats.total))}
      ${renderMetric("Réussites", String(currentStats.successes))}
      ${renderMetric("À reprendre", String(currentStats.review))}
      ${renderMetric("Erreurs", String(currentStats.errors))}
      ${renderMetric("QCM corrigés", String(qcmStats.attempts))}
      ${renderMetric("Moyenne QCM", qcmStats.attempts ? `${qcmStats.averagePct}%` : "—")}
    </section>

    <section class="content-grid">
      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Comparatif</p>
            <h2>Raphael vs Henry</h2>
          </div>
        </div>
        <div class="comparison-grid">
          ${PROFILES.map((profile) => renderComparisonCard(profile.id)).join("")}
        </div>
      </article>

      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Répartition</p>
            <h2>États du corpus</h2>
          </div>
        </div>
        <div class="progress-grid">
          ${attemptBar}
        </div>
      </article>

      <article class="panel span-7">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Thèmes faibles</p>
            <h2>Où regagner des points</h2>
          </div>
        </div>
        ${
          getWeakThemes().length
            ? getWeakThemes()
                .map(
                  (item) => `
                    <div class="bar-row">
                      <strong>${item.theme}</strong>
                      <div class="bar"><span style="width:${Math.min(100, item.penalty * 12)}%"></span></div>
                      <small>${item.count} passages</small>
                    </div>
                  `,
                )
                .join("")
            : renderEmpty("Les angles faibles apparaîtront après quelques séances.")
        }
      </article>

      <article class="panel span-5">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">Derniers passages</p>
            <h2>Chronologie</h2>
          </div>
        </div>
        ${
          getRecentResults().length
            ? `
              <div class="timeline">
                ${getRecentResults()
                  .map((item) => {
                    const exercise = EXERCISES.find((entry) => entry.id === item.exerciseId);
                    return `
                      <div class="timeline-item">
                        <span>${formatDate(item.timestamp)}</span>
                        <strong>${exercise?.title || item.exerciseId}</strong>
                        ${renderStatusBadge(item.status)}
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            `
            : renderEmpty("La chronologie des résultats se construira au fil des oraux blancs.")
        }
      </article>
    </section>
  `;
}

function renderResourcesPage() {
  return `
    <section class="panel">
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Sources et ancrage</p>
          <h2>Ressources mobilisées</h2>
        </div>
      </div>
      <p class="lead compact">
        Le site privilégie des formulations originales et des parcours de travail, mais s'appuie sur des rapports officiels ENS et sur la collection Francinou pour choisir les thèmes et les exercices les plus structurants.
      </p>
      <div class="resource-grid">
        ${RESOURCE_LINKS.map((resource) =>
          resource.href
            ? `
              <a class="resource-card" href="${resource.href}" target="_blank" rel="noreferrer">
                <strong>${resource.label}</strong>
                <span>${resource.note}</span>
              </a>
            `
            : `
              <div class="resource-card static">
                <strong>${resource.label}</strong>
                <span>${resource.note}</span>
              </div>
            `,
        ).join("")}
      </div>
    </section>
  `;
}

function renderComparisonCard(profileId) {
  const meta = getProfileMeta(profileId);
  const stats = getStatsForProfile(profileId);
  const qcmStats = getQcmStatsForProfile(profileId);
  const weak = getWeakThemes(profileId)[0]?.theme || "Pas encore de signal";
  const strong = getStrongThemes(profileId)[0]?.theme || "À construire";
  return `
    <article class="compare-card ${profileId === state.selectedProfileId ? "current" : ""}">
      <div class="compare-head">
        <strong>${meta.name}</strong>
        <span>${meta.tagline}</span>
      </div>
      <div class="compare-metrics">
        <div><small>Passages</small><strong>${stats.total}</strong></div>
        <div><small>Réussites</small><strong>${stats.successes}</strong></div>
        <div><small>Erreurs</small><strong>${stats.errors}</strong></div>
        <div><small>QCM</small><strong>${qcmStats.attempts}</strong></div>
      </div>
      <p><strong>Point fort :</strong> ${strong}</p>
      <p><strong>Point faible :</strong> ${weak}</p>
      <p><strong>Dernier QCM :</strong> ${qcmStats.lastScoreLabel}</p>
    </article>
  `;
}

function renderMetric(label, value) {
  return `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderEmpty(message) {
  return `<div class="empty-state"><p>${message}</p></div>`;
}

function renderStatusBadge(status) {
  const label = humanStatus(status);
  return `<span class="pill ${status}">${label}</span>`;
}

function humanStatus(status) {
  switch (status) {
    case "success":
      return "Réussi";
    case "review":
      return "À reprendre";
    case "error":
      return "Erreur";
    default:
      return "Neuf";
  }
}

function renderOptions(values, selected) {
  return values
    .map((value) => {
      const label = value === "all" ? "Tout" : value;
      return `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${label}</option>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatDate(timestamp) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
  });
  return formatter.format(new Date(timestamp));
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function handleDocumentClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const { action } = target.dataset;

  switch (action) {
    case "select-profile":
      state.selectedProfileId = target.dataset.profileId;
      saveState();
      renderApp();
      break;
    case "go-route":
      window.location.hash = `#${target.dataset.route}`;
      break;
    case "select-course":
      state.selectedCourseId = target.dataset.courseId;
      saveState();
      renderApp();
      break;
    case "toggle-course":
      toggleCourse(target.dataset.courseId);
      break;
    case "set-glossary-category":
      state.glossaryCategory = target.dataset.category;
      saveState();
      renderApp();
      break;
    case "set-qcm-category":
      state.qcmCategory = target.dataset.category;
      saveState();
      renderApp();
      break;
    case "toggle-glossary-star":
      toggleGlossary(target.dataset.glossaryId);
      break;
    case "select-exercise":
      state.selectedExerciseId = target.dataset.exerciseId;
      if (ui.timer.exerciseId !== state.selectedExerciseId) {
        resetTimer();
        ui.timer.exerciseId = state.selectedExerciseId;
      }
      saveState();
      renderApp();
      break;
    case "record-result":
      recordResult(target.dataset.status);
      break;
    case "submit-qcm":
      submitQcm();
      break;
    case "reset-qcm-report":
      resetQcmReport();
      break;
    case "open-exercise":
      state.selectedExerciseId = target.dataset.exerciseId;
      ui.timer.exerciseId = state.selectedExerciseId;
      saveState();
      window.location.hash = "#oraux";
      renderApp();
      break;
    case "select-course-and-route":
      state.selectedCourseId = target.dataset.courseId;
      saveState();
      window.location.hash = "#cours";
      renderApp();
      break;
    case "timer-start":
      startTimer();
      break;
    case "timer-stop":
      stopTimer();
      break;
    case "timer-reset":
      resetTimer();
      syncTimerDisplay();
      break;
    default:
      break;
  }
}

function handleDocumentInput(event) {
  const inputType = event.target.dataset.input;
  if (!inputType) {
    return;
  }

  switch (inputType) {
    case "glossary-query":
      state.glossaryQuery = event.target.value;
      saveState();
      renderApp();
      break;
    case "exercise-theme":
      state.exerciseTheme = event.target.value;
      saveState();
      renderApp();
      break;
    case "exercise-difficulty":
      state.exerciseDifficulty = event.target.value;
      saveState();
      renderApp();
      break;
    case "exercise-query":
      state.exerciseQuery = event.target.value;
      saveState();
      renderApp();
      break;
    case "exercise-note":
      getProfileData().noteDrafts[event.target.dataset.exerciseId] = event.target.value;
      saveState();
      break;
    default:
      break;
  }
}

function toggleCourse(courseId) {
  const profile = getProfileData();
  if (profile.completedCourses.includes(courseId)) {
    profile.completedCourses = profile.completedCourses.filter((item) => item !== courseId);
  } else {
    profile.completedCourses = [...profile.completedCourses, courseId];
  }
  saveState();
  renderApp();
}

function toggleGlossary(glossaryId) {
  const profile = getProfileData();
  if (profile.starredGlossary.includes(glossaryId)) {
    profile.starredGlossary = profile.starredGlossary.filter((item) => item !== glossaryId);
  } else {
    profile.starredGlossary = [...profile.starredGlossary, glossaryId];
  }
  saveState();
  renderApp();
}

function submitQcm() {
  const questions = getQcmQuestions();
  const form = document.getElementById("qcm-form");
  if (!form) {
    return;
  }

  const answers = {};
  let score = 0;

  for (const question of questions) {
    const selected = form.querySelector(`input[name="qcm-${question.id}"]:checked`);
    const selectedChoiceId = selected?.value || null;
    const isCorrect = selectedChoiceId === question.correctChoiceId;
    if (isCorrect) {
      score += 1;
    }
    answers[question.id] = {
      selectedChoiceId,
      isCorrect,
    };
  }

  const timestamp = Date.now();
  const profile = getProfileData();
  profile.qcmLastReport = {
    timestamp,
    category: state.qcmCategory,
    score,
    total: questions.length,
    answers,
  };
  profile.qcmHistory = [
    ...profile.qcmHistory,
    {
      timestamp,
      category: state.qcmCategory,
      score,
      total: questions.length,
    },
  ];

  const mergedMistakes = [
    ...profile.qcmMistakes,
    ...questions
      .filter((question) => !answers[question.id].isCorrect)
      .map((question) => ({
        questionId: question.id,
        selectedChoiceId: answers[question.id].selectedChoiceId,
        timestamp,
      })),
  ];

  const latestByQuestion = new Map();
  mergedMistakes
    .sort((a, b) => a.timestamp - b.timestamp)
    .forEach((mistake) => latestByQuestion.set(mistake.questionId, mistake));
  profile.qcmMistakes = [...latestByQuestion.values()].sort((a, b) => b.timestamp - a.timestamp);

  saveState();
  renderApp();
}

function resetQcmReport() {
  const profile = getProfileData();
  profile.qcmLastReport = null;
  saveState();
  renderApp();
}

function recordResult(status) {
  const profile = getProfileData();
  const note = profile.noteDrafts[state.selectedExerciseId]?.trim() || "";
  profile.results = [
    ...profile.results,
    {
      exerciseId: state.selectedExerciseId,
      status,
      note,
      durationMs: ui.timer.elapsedMs,
      timestamp: Date.now(),
    },
  ];
  saveState();
  renderApp();
}

function startTimer() {
  if (ui.timer.running) {
    return;
  }
  ui.timer.running = true;
  ui.timer.startedAt = Date.now() - ui.timer.elapsedMs;
  ui.timer.intervalId = window.setInterval(syncTimerDisplay, 1000);
  syncTimerDisplay();
}

function stopTimer() {
  if (!ui.timer.running) {
    return;
  }
  ui.timer.running = false;
  ui.timer.elapsedMs = Date.now() - ui.timer.startedAt;
  window.clearInterval(ui.timer.intervalId);
  ui.timer.intervalId = null;
  syncTimerDisplay();
}

function resetTimer() {
  stopTimer();
  ui.timer.elapsedMs = 0;
}

function syncTimerDisplay() {
  if (ui.timer.running) {
    ui.timer.elapsedMs = Date.now() - ui.timer.startedAt;
  }
  const node = document.getElementById("session-timer");
  if (node) {
    node.textContent = formatDuration(ui.timer.elapsedMs);
  }
}
