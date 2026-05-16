export const APP_META = {
  title: "Oraux X/ENS",
  subtitle: "Raphael & Henry",
  pitch:
    "Une base de préparation exigeante, pensée pour l'oral : cours, classiques, oraux blancs, mémoire des erreurs et résultats.",
};

export const PROFILES = [
  {
    id: "raphael",
    name: "Raphael",
    tagline: "Accent sur la réduction, l'analyse et les automatismes de tableau.",
    goal: "Transformer les exercices classiques en routines sûres.",
  },
  {
    id: "henry",
    name: "Henry",
    tagline: "Accent sur la profondeur de cours, l'initiative et la gestion des erreurs.",
    goal: "Construire des exposés plus propres et plus rapides.",
  },
];

export const NAV_ITEMS = [
  { id: "dashboard", label: "Tableau de bord" },
  { id: "cours", label: "Zone de cours" },
  { id: "glossaire", label: "Glossaire" },
  { id: "qcm", label: "QCM classiques" },
  { id: "oraux", label: "Oraux blancs" },
  { id: "memoire", label: "Mémoire des erreurs" },
  { id: "resultats", label: "Résultats" },
  { id: "ressources", label: "Ressources" },
];

export const JURY_ALERTS = [
  {
    title: "Ne jamais perdre une hypothèse",
    body:
      "Les rapports 2025 rappellent qu'un simple retour sur une hypothèse oubliée débloque souvent l'exercice. Lis l'énoncé comme un contrat.",
    source: "Rapport oral ULSR 2025, §3.2 et §4.",
  },
  {
    title: "Le hors-programme ne sauve presque jamais",
    body:
      "Les jurys demandent alors une démonstration complète dans les termes du programme. Un bon réflexe vaut mieux qu'un gros marteau mal maîtrisé.",
    source: "Rapports oraux Ulm 2025 et ULSR 2025.",
  },
  {
    title: "Différentiabilité ≠ dérivées partielles",
    body:
      "C'est un point de fragilité explicitement signalé. Il faut savoir donner une définition propre, une matrice différentielle et, si besoin, un contre-exemple.",
    source: "Rapport oral ULSR 2025, remarques spécifiques.",
  },
  {
    title: "L'initiative compte autant que l'avancement",
    body:
      "Traiter un cas particulier, renforcer une hypothèse, dessiner, factoriser proprement : l'oral valorise la direction prise plus que la seule ligne d'arrivée.",
    source: "Rapports ULSR 2025 et Ulm 2025.",
  },
  {
    title: "Les classiques doivent devenir automatiques",
    body:
      "Rang, projecteurs, formules de Newton, suites récurrentes, équivalents, intégrales et variations sont censés sortir sans flottement.",
    source: "Francinou + rapports de jury ENS.",
  },
  {
    title: "Le tableau est un outil stratégique",
    body:
      "Notations, hypothèses, formules de pivot et faux calculs barrés plutôt qu'effacés : le jury regarde aussi l'organisation de la pensée.",
    source: "Rapport oral ULSR 2025, §2.3.",
  },
];

export const COURSE_MODULES = [
  {
    id: "reduction",
    title: "Réduction, matrices et polynômes caractéristiques",
    family: "Algèbre 1-2",
    summary:
      "Le bloc le plus rentable à l'oral : endomorphismes, matrices, déterminants, diagonalisation, trigonalisation, lien entre trace, polynôme caractéristique et structure.",
    juryExpectations: [
      "Passer vite d'une matrice à une application linéaire et inversement.",
      "Justifier une diagonalisation au lieu de l'affirmer.",
      "Savoir changer de point de vue : calcul, rang, sous-espaces stables, polynôme annulateur.",
    ],
    sections: [
      {
        title: "Réflexes à automatiser",
        bullets: [
          "Repérer le bon invariant : trace, déterminant, rang, polynôme caractéristique, noyau, image.",
          "Tester d'abord les cas simples : projecteur, nilpotent, symétrique, matrice compagnon.",
          "Relier l'énoncé à une identité matricielle connue avant de lancer des calculs lourds.",
        ],
      },
      {
        title: "Points qui reviennent souvent",
        bullets: [
          "Formules de Newton et coefficients du polynôme caractéristique.",
          "Conditions de diagonalisation ou trigonalisation.",
          "Projecteurs, idempotents et rangs.",
        ],
      },
    ],
    classicMoves: [
      "Écrire le polynôme caractéristique et comparer deux développements.",
      "Décomposer l'espace en noyaux/images ou en sous-espaces caractéristiques.",
      "Travailler avec des endomorphismes associés plutôt qu'avec les seules entrées.",
    ],
    sourceRefs: [
      "Francinou, Algèbre 1 : chap. 5-7.",
      "Plan Cassini : Algèbre 2, matrices, diagonalisation, trigonalisation, groupe linéaire.",
      "ENS Ulm 2019, planches 3, 4 et 10.",
    ],
    featuredExercises: ["newton-traces", "projecteur-moyenne", "rang-idempotents"],
  },
  {
    id: "groupes-arithmetique",
    title: "Groupes, anneaux, arithmétique",
    family: "Algèbre 1",
    summary:
      "Le terrain des raisonnements nets : actions de groupes, sous-groupes, morphismes, divisibilité, arithmétique modulaire et petits arguments structurels.",
    juryExpectations: [
      "Être précis sur les définitions avant tout calcul.",
      "Savoir exploiter Lagrange, actions, classes, morphismes et quotients.",
      "Ne pas sous-estimer les justifications élémentaires de divisibilité.",
    ],
    sections: [
      {
        title: "Questions signatures",
        bullets: [
          "Un groupe ayant un nombre fini de sous-groupes est-il nécessairement fini ?",
          "Comment utiliser une action de groupe pour compter ou rigidifier ?",
          "Quels morphismes sont possibles entre deux petits groupes connus ?",
        ],
      },
      {
        title: "À surveiller",
        bullets: [
          "Confondre cardinal fini d'un ensemble de sous-groupes et structure du groupe.",
          "Utiliser un théorème puissant là où une action simple suffit.",
          "Négliger l'analyse-synthèse sur les cas d'égalité.",
        ],
      },
    ],
    classicMoves: [
      "Faire agir le groupe avant de calculer.",
      "Passer par les sous-groupes caractéristiques ou distingués.",
      "Réduire à un contre-exemple ou à une suite de cas minimaux.",
    ],
    sourceRefs: [
      "Francinou, Algèbre 1 : théorie des groupes, arithmétique.",
      "ENS Ulm 2019, planches 5 et 6.",
      "Plan Cassini : Algèbre 1, théorie des groupes et arithmétique.",
    ],
    featuredExercises: ["groupes-sous-groupes", "presque-morphisme", "somme-carres"],
  },
  {
    id: "euclidien",
    title: "Espaces euclidiens, projecteurs et auto-adjoints",
    family: "Algèbre 3",
    summary:
      "Là où l'oral attend de la géométrie linéaire propre : produit scalaire, orthogonalité, projecteurs orthogonaux, matrices symétriques, formes quadratiques.",
    juryExpectations: [
      "Utiliser correctement une base orthonormée.",
      "Justifier toute positivité ou auto-adjonction.",
      "Voir rapidement quand un problème devient géométrique.",
    ],
    sections: [
      {
        title: "Incontournables",
        bullets: [
          "Caractérisation d'un projecteur orthogonal.",
          "Produit ou commutation de projecteurs.",
          "Réduction des endomorphismes auto-adjoints et inégalités spectrales.",
        ],
      },
      {
        title: "Bons pivots de raisonnement",
        bullets: [
          "Passer par l'orthogonal d'un noyau ou d'une image.",
          "Réécrire en norme carrée ou en somme de carrés.",
          "Comparer structure géométrique et structure algébrique.",
        ],
      },
    ],
    classicMoves: [
      "Introduire la bonne projection.",
      "Diagonaliser dans une base orthonormée adaptée.",
      "Faire apparaître une identité du type ||u||² = <u,u>.",
    ],
    sourceRefs: [
      "Francinou, Algèbre 3 : chap. 1 et 2.",
      "Plan Cassini : vol. 7, espaces euclidiens et endomorphismes symétriques.",
      "ENS ULSR 2025, remarques sur l'algèbre linéaire de première année.",
    ],
    featuredExercises: ["projecteurs-commutent", "projecteur-moyenne", "newton-traces"],
  },
  {
    id: "analyse-fondations",
    title: "Topologie, suites et séries",
    family: "Analyse 1",
    summary:
      "Le socle d'analyse orale : limites, adhérence, suites réelles et complexes, séries numériques, équivalents et techniques fines de comparaison.",
    juryExpectations: [
      "Connaître les définitions de continuité, adhérence, convergence, équivalent.",
      "Savoir produire un exemple ou un contre-exemple rapidement.",
      "Éviter les raisonnements flous sur les limites et les permutations de termes.",
    ],
    sections: [
      {
        title: "Automatismes utiles",
        bullets: [
          "Passer d'une suite à une sous-suite pour extraire une structure.",
          "Comparer une série à une intégrale ou condenser à la Cauchy.",
          "Écrire un équivalent avant de chercher une somme fermée.",
        ],
      },
      {
        title: "Oral typique",
        bullets: [
          "Montrer qu'un ensemble de discontinuités est petit.",
          "Étudier une suite implicite ou récurrente avec un bon changement de variable.",
          "Obtenir un équivalent propre d'une suite ou d'une somme partielle.",
        ],
      },
    ],
    classicMoves: [
      "Chercher monotonicité + bornes + point fixe.",
      "Transformer une série avant de la comparer.",
      "Isoler une quantité stable : somme, produit, quotient ou erreur.",
    ],
    sourceRefs: [
      "Francinou, Analyse 1 : chap. 1 à 3.",
      "Plan Cassini : Analyse 1, topologie, suites, séries, fonctions réelles.",
      "ENS Ulm 2019, planches 4 et 5.",
    ],
    featuredExercises: ["discontinuite-denombrable", "limite-derivees-bornees", "attente-motif-piece"],
  },
  {
    id: "integration",
    title: "Intégration, équivalents et suites de fonctions",
    family: "Analyse 2",
    summary:
      "Intégrales, Riemann-Lebesgue, sommes de Riemann, Laplace, Gronwall, convergence uniforme : un bloc très différenciant à l'oral.",
    juryExpectations: [
      "Savoir majorer et encadrer avant de calculer.",
      "Utiliser la bonne convergence avec ses hypothèses exactes.",
      "Lire une intégrale comme un objet analytique, pas comme un simple calcul.",
    ],
    sections: [
      {
        title: "Pièges fréquents",
        bullets: [
          "Permutation somme-intégrale sans domination.",
          "Équivalent annoncé sans contrôle du reste.",
          "Confusion entre convergence simple, uniforme et normale.",
        ],
      },
      {
        title: "Outils qui paient",
        bullets: [
          "Intégration par parties et transformations d'Abel.",
          "Méthode de Laplace et localisation de masse.",
          "Lemmes de Gronwall et stabilité qualitative.",
        ],
      },
    ],
    classicMoves: [
      "Découper l'intégrale en zones significatives.",
      "Normaliser avant d'attaquer un équivalent.",
      "Traiter d'abord le cas modèle puis réinjecter les hypothèses fines.",
    ],
    sourceRefs: [
      "Francinou, Analyse 2 : chap. 1 et 2.",
      "Plan Cassini : Analyse 2, intégration, suites et séries de fonctions, séries entières.",
      "Rapport ULSR 2025 : remarques sur intégrales fines et développements limités.",
    ],
    featuredExercises: ["newton-local", "variation-constante", "zeros-derives-positives"],
  },
  {
    id: "diff-eq",
    title: "Calcul différentiel et équations différentielles",
    family: "Analyse 3 / vol. 7",
    summary:
      "Bloc à haute valeur ajoutée pour l'ENS : différentiabilité, gradient, hessienne, optimisation, Newton, équations différentielles linéaires, variation de la constante.",
    juryExpectations: [
      "Distinguer existence de dérivées partielles et différentiabilité.",
      "Écrire une différentielle ou une matrice jacobienne proprement.",
      "Identifier rapidement la bonne structure d'EDO ou l'itération de Newton.",
    ],
    sections: [
      {
        title: "À maîtriser sans hésiter",
        bullets: [
          "Définition de la différentiabilité et développement d'ordre 1.",
          "Optimisation sous contraintes et vérification des hypothèses.",
          "Stabilité locale de Newton près d'une racine simple.",
        ],
      },
      {
        title: "Signal du jury 2025",
        bullets: [
          "Les dérivées partielles seules ne suffisent pas.",
          "La méthode de variation de la constante doit être opérationnelle.",
          "L'analyse multivariable a été une source majeure de perte de temps.",
        ],
      },
    ],
    classicMoves: [
      "Se ramener à une estimation locale contrôlée.",
      "Linéariser au bon endroit et quantifier le reste.",
      "Réécrire une EDO pour faire apparaître un facteur intégrant ou une variation de constante.",
    ],
    sourceRefs: [
      "Plan Cassini : vol. 7, équations différentielles linéaires et calcul différentiel.",
      "ENS ULSR 2025, exercices 6 et 8.",
      "Rapport ULSR 2025, remarques spécifiques sur le calcul différentiel.",
    ],
    featuredExercises: ["newton-local", "variation-constante", "monotone-sur-droites"],
    note:
      "Le volume Analyse 3 n'était pas disponible localement ; ce module est donc construit à partir du plan Cassini de la collection et des rapports ENS 2025.",
  },
  {
    id: "proba",
    title: "Probabilités, combinatoire et attente",
    family: "Classiques d'oral",
    summary:
      "Exercices très parlants à l'oral : chaînes d'états, arrêts, espérances de temps d'attente, combinatoire constructive et lois discrètes.",
    juryExpectations: [
      "Modéliser proprement avant tout calcul.",
      "Tester des petits états et construire une récurrence ou une martingale simple.",
      "Garder le bon sens probabiliste : une probabilité ou une espérance absurde doit te faire reculer immédiatement.",
    ],
    sections: [
      {
        title: "Formats fréquents",
        bullets: [
          "Temps d'attente pour un motif.",
          "Processus à états et équations de transition.",
          "Lien entre combinatoire et probabilité via un comptage intelligent.",
        ],
      },
      {
        title: "Erreurs à ne plus faire",
        bullets: [
          "Perdre l'événement exact que l'on modélise.",
          "Écrire une relation de récurrence sans condition initiale exploitable.",
          "Accepter une espérance négative ou une probabilité hors de [0,1].",
        ],
      },
    ],
    classicMoves: [
      "Définir un bon état de mémoire minimale.",
      "Conditionner sur le premier pas.",
      "Chercher une quantité harmonique ou une espérance de retour.",
    ],
    sourceRefs: [
      "Francinou, Algèbre 1 : combinatoire.",
      "ENS Ulm 2019, planches 1, 8 et 10.",
      "Rapport ULSR 2025 : progrès signalés en probabilité, mais besoin de vérification de cohérence.",
    ],
    featuredExercises: ["piece-double-face", "attente-motif-piece", "suite-tail-heavy"],
  },
];

export const GLOSSARY = [
  {
    id: "diagonalisation",
    term: "Diagonalisation",
    category: "Algèbre linéaire",
    definition:
      "Existence d'une base dans laquelle la matrice de l'endomorphisme est diagonale.",
    oralUse:
      "À invoquer seulement si les hypothèses sont vérifiées : polynôme scindé et somme des dimensions des sous-espaces propres, ou cas auto-adjoint.",
    trap:
      "Confondre matrice triangulaire et diagonalisable, ou oublier le corps de base.",
    refs: ["Francinou Algèbre 2", "Rapport ULSR 2025"],
  },
  {
    id: "trigonalisation",
    term: "Trigonalisation",
    category: "Algèbre linéaire",
    definition:
      "Existence d'une base dans laquelle la matrice est triangulaire supérieure.",
    oralUse:
      "Souvent utile quand on ne contrôle pas totalement les sous-espaces propres mais que le polynôme caractéristique est scindé.",
    trap:
      "Penser qu'une matrice réelle trigonalizable sur C l'est automatiquement sur R.",
    refs: ["Plan Cassini, Algèbre 2", "Exercice Bourdaud 2025"],
  },
  {
    id: "projecteur-orthogonal",
    term: "Projecteur orthogonal",
    category: "Euclidien",
    definition:
      "Projecteur p vérifiant p² = p et Im(p) ⟂ Ker(p).",
    oralUse:
      "Un excellent pivot pour écrire une décomposition E = F ⊕ F⊥ et transformer un problème abstrait en calcul géométrique.",
    trap:
      "Dire 'projecteur donc auto-adjoint' sans préciser l'orthogonalité.",
    refs: ["Francinou Algèbre 3"],
  },
  {
    id: "polynome-caracteristique",
    term: "Polynôme caractéristique",
    category: "Algèbre linéaire",
    definition:
      "Polynôme χu(X) = det(XI − u), porteur des valeurs propres avec multiplicité algébrique.",
    oralUse:
      "Il sert à relier les invariants globaux d'une matrice aux traces, déterminants et coefficients de Newton.",
    trap:
      "Oublier que multiplicité algébrique et multiplicité géométrique sont différentes.",
    refs: ["Francinou Algèbre 1 §5.31", "ENS Ulm 2019 planche 3"],
  },
  {
    id: "differentiabilite",
    term: "Différentiabilité",
    category: "Calcul différentiel",
    definition:
      "Existence d'une application linéaire L telle que f(a+h)=f(a)+L(h)+o(||h||).",
    oralUse:
      "À écrire au tableau dès qu'un exercice en plusieurs variables fait intervenir un développement d'ordre 1.",
    trap:
      "Remplacer la définition par 'les dérivées partielles existent'.",
    refs: ["Rapport ULSR 2025", "Plan Cassini vol. 7"],
  },
  {
    id: "jacobienne",
    term: "Matrice jacobienne",
    category: "Calcul différentiel",
    definition:
      "Matrice de la différentielle d'une application dans les bases canoniques.",
    oralUse:
      "Permet de passer d'une définition abstraite à un calcul concret de linéarisation.",
    trap:
      "Écrire les dérivées partielles sans préciser la structure linéaire représentée.",
    refs: ["Rapport ULSR 2025"],
  },
  {
    id: "lagrange",
    term: "Multiplicateurs de Lagrange",
    category: "Calcul différentiel",
    definition:
      "Condition nécessaire d'optimalité sous contrainte lisse, sous hypothèses de régularité.",
    oralUse:
      "Très utile, mais seulement après avoir vérifié qu'on est bien dans le cadre du théorème.",
    trap:
      "Appliquer la recette sans traiter les hypothèses ou les points frontières.",
    refs: ["Rapport ULSR 2025"],
  },
  {
    id: "equivalent",
    term: "Équivalent",
    category: "Analyse",
    definition:
      "Relation u_n ~ v_n signifiant u_n / v_n → 1.",
    oralUse:
      "Le bon outil pour une somme, une intégrale ou une suite récurrente quand une valeur précise n'est pas accessible.",
    trap:
      "Utiliser un équivalent dans une somme sans justification de sommation.",
    refs: ["Francinou Analyse 1-2"],
  },
  {
    id: "convergence-uniforme",
    term: "Convergence uniforme",
    category: "Suites de fonctions",
    definition:
      "Convergence contrôlée uniformément sur l'ensemble considéré.",
    oralUse:
      "Elle autorise le passage de la continuité et aide à sécuriser les échanges limite/fonction.",
    trap:
      "La déduire d'une convergence simple plus une intuition visuelle.",
    refs: ["Francinou Analyse 2"],
  },
  {
    id: "convergence-normale",
    term: "Convergence normale",
    category: "Suites de fonctions",
    definition:
      "Sommabilité uniforme des majorants : ∑ ||f_n||∞ < ∞.",
    oralUse:
      "Très utile pour sommer, intégrer, dériver des séries de fonctions.",
    trap:
      "La confondre avec la convergence uniforme elle-même.",
    refs: ["Francinou Analyse 2"],
  },
  {
    id: "gronwall",
    term: "Lemme de Gronwall",
    category: "Intégration / EDO",
    definition:
      "Outil de majoration pour une quantité satisfaisant une inégalité intégrale ou différentielle.",
    oralUse:
      "Intervient dans les questions de stabilité, d'unicité et de contrôle quantitatif.",
    trap:
      "Oublier la bonne forme de l'hypothèse ou le signe de la majoration.",
    refs: ["Francinou Analyse 2"],
  },
  {
    id: "riemann-lebesgue",
    term: "Lemme de Riemann-Lebesgue",
    category: "Intégration",
    definition:
      "Les coefficients oscillants d'une fonction intégrable tendent vers 0.",
    oralUse:
      "Pivot classique pour les intégrales oscillantes et la série de Fourier.",
    trap:
      "Le citer hors de son cadre d'intégrabilité.",
    refs: ["Francinou Analyse 2"],
  },
  {
    id: "variation-constante",
    term: "Variation de la constante",
    category: "Équations différentielles",
    definition:
      "Méthode de résolution d'une EDO linéaire en remplaçant la constante d'intégration par une fonction.",
    oralUse:
      "Le jury 2025 l'attend comme une technique opérationnelle, pas comme un souvenir vague.",
    trap:
      "Écrire la formule sans vérifier la structure linéaire de l'équation.",
    refs: ["ENS ULSR 2025", "Plan Cassini vol. 7"],
  },
  {
    id: "suite-recurrente",
    term: "Suite récurrente",
    category: "Analyse",
    definition:
      "Suite définie par une relation reliant u_{n+1} à u_n ou à plusieurs termes précédents.",
    oralUse:
      "On cherche souvent un invariant, un changement de variable ou un encadrement monotone.",
    trap:
      "Lancer des calculs sans chercher d'abord le comportement global.",
    refs: ["Francinou Analyse 1"],
  },
  {
    id: "presque-sur",
    term: "Arrêt presque sûr",
    category: "Probabilités",
    definition:
      "L'événement a probabilité 1, même s'il n'est pas certain au sens logique.",
    oralUse:
      "À distinguer proprement de l'espérance finie ou de la probabilité d'un chemin particulier.",
    trap:
      "Confondre un temps d'arrêt presque sûrement fini avec une borne uniforme sur ce temps.",
    refs: ["ENS Ulm 2019 planche 1"],
  },
  {
    id: "etat",
    term: "État de mémoire minimale",
    category: "Probabilités",
    definition:
      "Choix du plus petit nombre d'informations nécessaires pour faire une récurrence ou un système d'équations.",
    oralUse:
      "Clé dans les temps d'attente pour des motifs sur des lancers ou des mots.",
    trap:
      "Choisir un état trop gros ou, pire, oublier une information nécessaire.",
    refs: ["ENS Ulm 2019 planche 10"],
  },
  {
    id: "orthogonalite",
    term: "Orthogonalité",
    category: "Euclidien",
    definition:
      "Nullité du produit scalaire entre deux vecteurs ou deux sous-espaces.",
    oralUse:
      "Doit déclencher l'idée de projection, d'inégalité de Pythagore ou de base orthonormée.",
    trap:
      "Écrire F⊥ sans préciser l'espace ambiant ou la structure euclidienne.",
    refs: ["Francinou Algèbre 3"],
  },
  {
    id: "somme-riemann",
    term: "Somme de Riemann",
    category: "Intégration",
    definition:
      "Approximation discrète d'une intégrale par des évaluations d'une fonction sur un maillage.",
    oralUse:
      "Très rentable pour relier asymptotique, convexité, intégration et équivalents.",
    trap:
      "Oublier le bon pas ou la bonne normalisation.",
    refs: ["Francinou Analyse 2"],
  },
];

export const QCM_QUESTIONS = [
  {
    id: "qcm-symetrique-orthobase",
    category: "Algèbre linéaire",
    prompt:
      "Quelle affirmation est correcte pour une matrice réelle symétrique ?",
    choices: [
      {
        id: "a",
        text: "Elle est toujours diagonalisable dans une base orthonormée réelle.",
      },
      { id: "b", text: "Elle est toujours nilpotente." },
      { id: "c", text: "Elle n'est diagonalisable que si son déterminant est non nul." },
      { id: "d", text: "Elle est toujours semblable à une matrice triangulaire non diagonale." },
    ],
    correctChoiceId: "a",
    explanation:
      "C'est le théorème spectral réel : une matrice symétrique réelle est diagonalisable dans une base orthonormée, avec des valeurs propres réelles.",
    refs: ["Francinou Algèbre 3", "Zone de cours : Espaces euclidiens."],
  },
  {
    id: "qcm-cayley-hamilton",
    category: "Algèbre linéaire",
    prompt: "Que dit précisément le théorème de Cayley-Hamilton ?",
    choices: [
      { id: "a", text: "Toute matrice est semblable à sa transposée." },
      {
        id: "b",
        text: "Toute matrice annule son polynôme caractéristique.",
      },
      { id: "c", text: "Toute matrice diagonalisable a ses valeurs propres simples." },
      { id: "d", text: "Toute matrice carrée est inversible." },
    ],
    correctChoiceId: "b",
    explanation:
      "Si χA est le polynôme caractéristique de A, alors χA(A)=0. C'est un pivot classique pour produire des relations polynomiales en A.",
    refs: ["Francinou Algèbre 1", "Zone de cours : Réduction."],
  },
  {
    id: "qcm-rang-noyau",
    category: "Algèbre linéaire",
    prompt:
      "Pour un endomorphisme u d'un espace vectoriel E de dimension finie n, quelle relation est vraie ?",
    choices: [
      { id: "a", text: "rg(u) = dim Ker(u)." },
      { id: "b", text: "rg(u) + dim Ker(u) = n." },
      { id: "c", text: "rg(u) = n pour tout u." },
      { id: "d", text: "dim Ker(u) = 0 pour tout u non nul." },
    ],
    correctChoiceId: "b",
    explanation:
      "C'est la formule du rang : dimension du noyau plus dimension de l'image égale dimension de l'espace de départ.",
    refs: ["Francinou Algèbre 1", "Zone de cours : Réduction."],
  },
  {
    id: "qcm-similaire-invariants",
    category: "Algèbre linéaire",
    prompt: "Si deux matrices A et B sont semblables, que peut-on affirmer ?",
    choices: [
      { id: "a", text: "Elles ont toujours les mêmes coefficients diagonaux." },
      {
        id: "b",
        text: "Elles ont le même polynôme caractéristique, donc la même trace et le même déterminant.",
      },
      { id: "c", text: "Elles sont forcément égales." },
      { id: "d", text: "L'une est forcément la transposée de l'autre." },
    ],
    correctChoiceId: "b",
    explanation:
      "La similitude conserve le polynôme caractéristique, donc les invariants qui s'y lisent comme la trace et le déterminant.",
    refs: ["Francinou Algèbre 1", "ENS Ulm 2019, planche 3."],
  },
  {
    id: "qcm-projecteur-orthogonal",
    category: "Algèbre linéaire",
    prompt: "Comment reconnaître un projecteur orthogonal p ?",
    choices: [
      { id: "a", text: "p² = 0 et p = -p*." },
      {
        id: "b",
        text: "p² = p et p est auto-adjoint.",
      },
      { id: "c", text: "p³ = p et tr(p) = 0." },
      { id: "d", text: "p est inversible et orthogonale." },
    ],
    correctChoiceId: "b",
    explanation:
      "En espace euclidien, p est le projecteur orthogonal sur F si et seulement si p²=p et p*=p.",
    refs: ["Francinou Algèbre 3, projecteurs orthogonaux."],
  },
  {
    id: "qcm-normes-equivalentes",
    category: "Algèbre linéaire",
    prompt:
      "Dans un espace vectoriel réel de dimension finie, que sait-on sur les normes ?",
    choices: [
      { id: "a", text: "Elles sont toutes égales." },
      {
        id: "b",
        text: "Elles sont toutes équivalentes.",
      },
      { id: "c", text: "Seules les normes euclidiennes sont équivalentes." },
      { id: "d", text: "Elles ne sont équivalentes que si l'espace est de dimension 2." },
    ],
    correctChoiceId: "b",
    explanation:
      "En dimension finie, toutes les normes définissent la même topologie. C'est un fait de base qu'il faut mobiliser vite à l'oral.",
    refs: ["Cours de base d'algèbre linéaire", "Zone de cours : Espaces euclidiens."],
  },
  {
    id: "qcm-adjoint-image",
    category: "Algèbre linéaire",
    prompt:
      "Pour un endomorphisme u d'un espace euclidien, quelle identité est correcte ?",
    choices: [
      { id: "a", text: "Ker(u*) = Ker(u)." },
      {
        id: "b",
        text: "Ker(u*) = Im(u)⊥.",
      },
      { id: "c", text: "Im(u*) = Im(u)." },
      { id: "d", text: "Ker(u) = Im(u)." },
    ],
    correctChoiceId: "b",
    explanation:
      "C'est une identité fondamentale : le noyau de l'adjoint est l'orthogonal de l'image. Elle permet de nombreux changements de point de vue géométriques.",
    refs: ["Francinou Algèbre 3", "Zone de cours : Espaces euclidiens."],
  },
  {
    id: "qcm-groupe-prime",
    category: "Algèbre générale",
    prompt: "Quelle propriété a tout groupe fini d'ordre premier p ?",
    choices: [
      { id: "a", text: "Il est trivial." },
      {
        id: "b",
        text: "Il est cyclique.",
      },
      { id: "c", text: "Il est isomorphe à Sp." },
      { id: "d", text: "Il n'a aucun sous-groupe non trivial mais n'est pas cyclique." },
    ],
    correctChoiceId: "b",
    explanation:
      "Par le théorème de Lagrange, tout élément non neutre engendre un sous-groupe d'ordre p, donc le groupe tout entier.",
    refs: ["Francinou Algèbre 1, théorie des groupes."],
  },
  {
    id: "qcm-finite-subgroup-cstar",
    category: "Algèbre générale",
    prompt: "Quel énoncé est vrai pour un sous-groupe fini de C* ?",
    choices: [
      { id: "a", text: "Il est toujours d'ordre pair." },
      {
        id: "b",
        text: "Il est cyclique.",
      },
      { id: "c", text: "Il est toujours isomorphe à Z²." },
      { id: "d", text: "Il contient forcément i." },
    ],
    correctChoiceId: "b",
    explanation:
      "Un sous-groupe fini de C* est formé de racines de l'unité, donc il est cyclique. C'est un résultat très classique de structure.",
    refs: ["Francinou Algèbre 1", "Zone de cours : Groupes."],
  },
  {
    id: "qcm-polynome-racines",
    category: "Algèbre générale",
    prompt:
      "Que peut-on dire d'un polynôme non nul de degré n sur un corps, s'il admet n+1 racines distinctes ?",
    choices: [
      { id: "a", text: "C'est possible si le corps est infini." },
      {
        id: "b",
        text: "C'est impossible : il serait alors nécessairement nul.",
      },
      { id: "c", text: "Il est alors scindé à racines simples." },
      { id: "d", text: "Il est divisible par X^(n+1)." },
    ],
    correctChoiceId: "b",
    explanation:
      "Un polynôme non nul de degré n ne peut pas avoir plus de n racines distinctes. C'est un réflexe de base indispensable.",
    refs: ["Francinou Algèbre 1, polynômes."],
  },
  {
    id: "qcm-zmodp",
    category: "Algèbre générale",
    prompt: "Si p est premier, quelle affirmation sur Z/pZ est juste ?",
    choices: [
      { id: "a", text: "Tout élément non nul est nilpotent." },
      {
        id: "b",
        text: "Tout élément non nul y est inversible.",
      },
      { id: "c", text: "L'anneau n'a que deux éléments non nuls." },
      { id: "d", text: "Il n'existe aucun polynôme non constant sur Z/pZ." },
    ],
    correctChoiceId: "b",
    explanation:
      "Z/pZ est un corps si et seulement si p est premier. Il faut savoir l'utiliser immédiatement dans les raisonnements de congruence.",
    refs: ["Francinou Algèbre 1, arithmétique."],
  },
  {
    id: "qcm-suite-monotone-bornee",
    category: "Analyse",
    prompt: "Quel énoncé classique est exact pour une suite réelle monotone bornée ?",
    choices: [
      { id: "a", text: "Elle est stationnaire à partir d'un certain rang." },
      {
        id: "b",
        text: "Elle converge.",
      },
      { id: "c", text: "Elle diverge mais admet des valeurs d'adhérence." },
      { id: "d", text: "Elle est forcément géométrique." },
    ],
    correctChoiceId: "b",
    explanation:
      "C'est l'un des tout premiers réflexes d'analyse : monotonicité plus bornes donne convergence.",
    refs: ["Francinou Analyse 1, suites réelles."],
  },
  {
    id: "qcm-weierstrass-compact",
    category: "Analyse",
    prompt:
      "Si f est continue sur un segment [a,b], quel résultat doit être connu sans hésitation ?",
    choices: [
      { id: "a", text: "f est dérivable sur [a,b]." },
      {
        id: "b",
        text: "f est bornée et atteint son minimum et son maximum.",
      },
      { id: "c", text: "f est affine." },
      { id: "d", text: "f possède une primitive polynomiale." },
    ],
    correctChoiceId: "b",
    explanation:
      "Sur un compact, une fonction continue est bornée et atteint ses bornes. C'est le théorème de Weierstrass.",
    refs: ["Francinou Analyse 1, topologie / fonctions réelles."],
  },
  {
    id: "qcm-derivees-partielles",
    category: "Analyse",
    prompt:
      "Laquelle de ces affirmations est correcte en plusieurs variables ?",
    choices: [
      {
        id: "a",
        text: "L'existence des dérivées partielles en un point implique toujours la différentiabilité en ce point.",
      },
      {
        id: "b",
        text: "La différentiabilité en un point implique la continuité en ce point.",
      },
      { id: "c", text: "La continuité implique toujours la différentiabilité." },
      { id: "d", text: "La dérivabilité partielle impose l'existence d'une hessienne." },
    ],
    correctChoiceId: "b",
    explanation:
      "Le jury 2025 insiste dessus : différentiabilité implique continuité, mais l'existence des dérivées partielles seule ne suffit pas.",
    refs: ["Rapport ULSR 2025", "Zone de cours : Calcul différentiel."],
  },
  {
    id: "qcm-serie-absolue",
    category: "Analyse",
    prompt: "Que garantit la convergence absolue d'une série numérique réelle ou complexe ?",
    choices: [
      { id: "a", text: "La divergence logarithmique." },
      {
        id: "b",
        text: "La convergence de la série elle-même.",
      },
      { id: "c", text: "La positivité des termes à partir d'un certain rang." },
      { id: "d", text: "L'existence d'une somme rationnelle." },
    ],
    correctChoiceId: "b",
    explanation:
      "Convergence absolue implique convergence. Ce fait sert en permanence pour sécuriser permutations et majorations.",
    refs: ["Francinou Analyse 1, séries numériques."],
  },
  {
    id: "qcm-limite-uniforme-continue",
    category: "Analyse",
    prompt:
      "Si une suite de fonctions continues sur [a,b] converge uniformément vers f, que peut-on conclure ?",
    choices: [
      { id: "a", text: "f est forcément dérivable." },
      {
        id: "b",
        text: "f est continue sur [a,b].",
      },
      { id: "c", text: "La convergence est forcément normale." },
      { id: "d", text: "Les fonctions sont constantes à partir d'un certain rang." },
    ],
    correctChoiceId: "b",
    explanation:
      "La continuité passe à la limite sous convergence uniforme. C'est un résultat standard à connaître et à savoir citer avec son hypothèse exacte.",
    refs: ["Francinou Analyse 2, suites et séries de fonctions."],
  },
  {
    id: "qcm-rayon-derivation",
    category: "Analyse",
    prompt:
      "Pour une série entière Σ an z^n de rayon de convergence R, que vaut le rayon de sa série dérivée ?",
    choices: [
      { id: "a", text: "0." },
      {
        id: "b",
        text: "Le même rayon R.",
      },
      { id: "c", text: "Toujours +∞." },
      { id: "d", text: "Toujours R/2." },
    ],
    correctChoiceId: "b",
    explanation:
      "La dérivation terme à terme d'une série entière conserve le rayon de convergence. C'est un classique de manipulation sûre des séries entières.",
    refs: ["Francinou Analyse 2, séries entières."],
  },
  {
    id: "qcm-riemann-lebesgue",
    category: "Analyse",
    prompt: "Que dit le lemme de Riemann-Lebesgue dans sa forme de base ?",
    choices: [
      { id: "a", text: "Toute intégrale converge absolument." },
      {
        id: "b",
        text: "Si f est intégrable sur un segment, alors ses coefficients oscillants tendent vers 0.",
      },
      { id: "c", text: "Toute fonction continue est lipschitzienne." },
      { id: "d", text: "Toute série alternée converge uniformément." },
    ],
    correctChoiceId: "b",
    explanation:
      "C'est l'outil naturel pour montrer qu'une oscillation rapide finit par s'annuler à l'intégration.",
    refs: ["Francinou Analyse 2, intégration."],
  },
  {
    id: "qcm-esperance-lineaire",
    category: "Probabilités",
    prompt:
      "Quelle propriété de l'espérance reste vraie sans hypothèse d'indépendance ?",
    choices: [
      {
        id: "a",
        text: "E(X+Y)=E(X)+E(Y).",
      },
      { id: "b", text: "E(XY)=E(X)E(Y)." },
      { id: "c", text: "Var(X+Y)=Var(X)+Var(Y)." },
      { id: "d", text: "P(X=Y)=P(X)P(Y)." },
    ],
    correctChoiceId: "a",
    explanation:
      "La linéarité de l'espérance est universelle, alors que les formules multiplicatives demandent en général de l'indépendance.",
    refs: ["Probabilités classiques", "Zone de cours : Probabilités."],
  },
  {
    id: "qcm-variance-independance",
    category: "Probabilités",
    prompt:
      "Pour des variables aléatoires indépendantes X et Y de variance finie, quelle formule est correcte ?",
    choices: [
      { id: "a", text: "Var(X+Y)=Var(X)Var(Y)." },
      {
        id: "b",
        text: "Var(X+Y)=Var(X)+Var(Y).",
      },
      { id: "c", text: "Var(X+Y)=Var(X)-Var(Y)." },
      { id: "d", text: "Var(X+Y)=0." },
    ],
    correctChoiceId: "b",
    explanation:
      "L'indépendance annule le terme de covariance, d'où l'additivité des variances pour la somme.",
    refs: ["Probabilités classiques", "Zone de cours : Probabilités."],
  },
];

export const EXERCISES = [
  {
    id: "newton-traces",
    title: "Retrouver les coefficients du polynôme caractéristique via les traces",
    theme: "Algèbre linéaire",
    difficulty: "Classique",
    priority: "Indispensable",
    duration: "35-45 min",
    tags: ["matrices", "trace", "polynôme caractéristique", "formules de Newton"],
    statement:
      "Pour une matrice A de taille n, relier les coefficients du polynôme caractéristique aux traces tr(A), tr(A²), ..., tr(A^k), puis obtenir les formules de Newton dans un cadre matriciel.",
    oralFrame:
      "Le jury attend un aller-retour fluide entre valeurs propres, déterminants et identités polynomiales. Le bon angle consiste souvent à calculer la même quantité de deux manières.",
    expectedMoves: [
      "Écrire χA(X) = ∏(X − λi) et comparer avec le développement en coefficients symétriques.",
      "Utiliser la dérivée ou une somme du type Σ χA(X)/(X−λi).",
      "Reconnaître une relation triangulaire permettant de remonter aux coefficients.",
    ],
    commonErrors: [
      "Confondre multiplicité algébrique et géométrique.",
      "Perdre les signes alternés.",
      "Faire une preuve spectrale sans préciser le corps ni la factorisation.",
    ],
    relatedCourseIds: ["reduction", "euclidien"],
    sourceLabel: "ENS Ulm 2019, planche 3",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Algèbre 1, §5.31 Formules de Newton."],
  },
  {
    id: "discontinuite-denombrable",
    title: "Points de discontinuité dénombrables",
    theme: "Analyse réelle",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-30 min",
    tags: ["continuité", "topologie", "dénombrable"],
    statement:
      "Soit f : R → R telle que pour tout a réel, lim_{x→a} f(x) existe. Montrer que l'ensemble des points de discontinuité de f est dénombrable.",
    oralFrame:
      "C'est un excellent test de recul. Le problème se résout mieux en quantifiant la taille d'un saut qu'en restant au niveau des phrases intuitives.",
    expectedMoves: [
      "Associer à chaque discontinuïté une amplitude strictement positive.",
      "Découper les discontinuités selon une taille minimale 1/n.",
      "Montrer que chaque paquet est fini ou au plus dénombrable sur un intervalle compact rationnel.",
    ],
    commonErrors: [
      "Croire qu'une limite existe forcément avec continuité.",
      "Ne pas exploiter la taille du saut.",
      "Nier 'dénombrable' avec un argument purement verbal.",
    ],
    relatedCourseIds: ["analyse-fondations"],
    sourceLabel: "ENS Ulm 2019, planche 4",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Analyse 1, topologie de R et C."],
  },
  {
    id: "limite-derivees-bornees",
    title: "Limite simple d'une suite à dérivées uniformément bornées",
    theme: "Suites de fonctions",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-25 min",
    tags: ["équicontinuité", "limite simple", "continuité"],
    statement:
      "Soit (fn) une suite de fonctions dérivables sur R telle que ||f'n||∞ ≤ 1 pour tout n, et fn → g simplement. Montrer que g est continue.",
    oralFrame:
      "L'oral vérifie ici que tu sais convertir une hypothèse technique en contrôle uniforme local sans citer hors programme.",
    expectedMoves: [
      "Appliquer l'inégalité des accroissements finis à chaque fn.",
      "Passer à la limite pour obtenir |g(x)−g(y)| ≤ |x−y|.",
      "Conclure que g est même 1-lipschitzienne.",
    ],
    commonErrors: [
      "Chercher de la convergence uniforme là où un simple encadrement suffit.",
      "Invoquer Arzelà-Ascoli hors sujet.",
      "Passer à la limite sans écrire l'encadrement intermédiaire.",
    ],
    relatedCourseIds: ["analyse-fondations", "integration"],
    sourceLabel: "ENS Ulm 2019, planche 5",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Analyse 2, suites et séries de fonctions."],
  },
  {
    id: "zeros-derives-positives",
    title: "Fonction C∞ à dérivées positives : combien de zéros ?",
    theme: "Analyse réelle",
    difficulty: "Ambitieux",
    priority: "Sélectif",
    duration: "30-40 min",
    tags: ["Taylor", "convexité", "séries entières"],
    statement:
      "Soit f : [0,1] → R, C∞, non constante, telle que pour tout n et tout x, f^(n)(x) ≥ 0. Montrer que f ne peut s'annuler qu'au plus une fois. En relance : montrer qu'elle est développable en série entière au voisinage de tout point intérieur.",
    oralFrame:
      "Le jury attend une lecture qualitative avant le calcul : monotonie, convexité, puis propagation des signes des dérivées.",
    expectedMoves: [
      "Observer que f' ≥ 0 donc f est croissante, puis affiner avec f'' ≥ 0.",
      "Analyser ce que plusieurs zéros forceraient sur les dérivées par Rolle.",
      "Relier les restes de Taylor à la positivité des dérivées.",
    ],
    commonErrors: [
      "Se contenter de 'f est croissante' sans traiter le cas de deux zéros.",
      "Citer l'analyticité sans justification.",
      "Oublier d'utiliser la positivité de toutes les dérivées.",
    ],
    relatedCourseIds: ["analyse-fondations", "integration"],
    sourceLabel: "ENS Ulm 2019, planche 6",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Analyse 1, séries numériques / fonctions réelles."],
  },
  {
    id: "projecteur-moyenne",
    title: "L'opérateur H(u) = (up + pu)/2 est-il diagonalisable ?",
    theme: "Algèbre linéaire",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "25-35 min",
    tags: ["projecteur", "endomorphisme", "décomposition"],
    statement:
      "Sur un espace de dimension finie, p est un projecteur. On définit H sur L(E) par H(u) = (u∘p + p∘u)/2. Étudier la diagonalisabilité de H.",
    oralFrame:
      "Très bon exercice de lecture structurelle : il faut adapter la décomposition E = Im(p) ⊕ Ker(p) au niveau de L(E).",
    expectedMoves: [
      "Décomposer tout u en blocs selon Im(p) et Ker(p).",
      "Calculer l'effet de H sur chaque bloc.",
      "Identifier les valeurs propres 0, 1/2 et 1 ainsi que les sous-espaces associés.",
    ],
    commonErrors: [
      "Calculer sur des vecteurs sans choisir de décomposition adaptée.",
      "Vouloir diagonaliser une matrice géante au lieu de raisonner par blocs.",
      "Perdre le sens fonctionnel de la composition.",
    ],
    relatedCourseIds: ["reduction", "euclidien"],
    sourceLabel: "ENS Ulm 2019, planche 10",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Algèbre 3, projecteurs orthogonaux.", "Francinou Algèbre 1, espaces vectoriels."],
  },
  {
    id: "monotone-sur-droites",
    title: "Monotone sur toute droite ⇒ fonction à une dimension cachée",
    theme: "Calcul différentiel",
    difficulty: "Ambitieux",
    priority: "Sélectif",
    duration: "35-45 min",
    tags: ["géométrie", "topologie", "convexité", "droites"],
    statement:
      "Soit f : R^n → R continue, telle que sa restriction à toute droite soit monotone. Montrer qu'il existe une forme linéaire φ et une fonction monotone h telles que f = h ∘ φ.",
    oralFrame:
      "Le bon oral construit une intuition géométrique, puis la rigidifie. L'exercice teste une vraie capacité à formuler des structures avant de prouver.",
    expectedMoves: [
      "Montrer que les ensembles de niveau ont une rigidité affine forte.",
      "Faire émerger une direction privilégiée commune.",
      "Ramener le problème à une structure de quotient par hyperplans.",
    ],
    commonErrors: [
      "Rester bloqué sur une droite particulière sans voir la structure globale.",
      "Confondre monotone et croissante dans la même orientation.",
      "Oublier la continuité pour recoller les morceaux.",
    ],
    relatedCourseIds: ["diff-eq", "analyse-fondations"],
    sourceLabel: "ENS Ulm 2019, planche 12",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Plan Cassini vol. 7, calcul différentiel."],
  },
  {
    id: "piece-double-face",
    title: "Pile jusqu'à deux fois plus que face",
    theme: "Probabilités",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-30 min",
    tags: ["marche aléatoire", "arrêt", "conditionnement"],
    statement:
      "On lance une pièce équilibrée jusqu'à ce que le nombre de piles soit égal au double du nombre de faces. Quelle est la probabilité de ne jamais s'arrêter ?",
    oralFrame:
      "Le cœur n'est pas le calcul brutal : il faut choisir la bonne variable d'état et reconnaître une marche sur Z.",
    expectedMoves: [
      "Transformer la condition en position d'une marche aléatoire.",
      "Chercher la probabilité de toucher 0 à partir d'un état initial positif.",
      "Exploiter un raisonnement de récurrence harmonique ou un résultat de ruine adapté.",
    ],
    commonErrors: [
      "Compter séparément piles et faces sans variable synthétique.",
      "Oublier qu'un arrêt 'jamais' est un événement de probabilité potentiellement non nulle.",
      "Écrire une récurrence sans condition au bord.",
    ],
    relatedCourseIds: ["proba"],
    sourceLabel: "ENS Ulm 2019, planche 1",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou, esprit combinatoire / probabilités discrètes."],
  },
  {
    id: "attente-motif-piece",
    title: "Temps d'attente d'un motif : nombre impair de piles puis face",
    theme: "Probabilités",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-30 min",
    tags: ["temps d'attente", "états", "espérance"],
    statement:
      "Déterminer le nombre moyen de lancers nécessaires pour observer une suite composée d'un nombre impair de piles suivi d'un face.",
    oralFrame:
      "Le jury attend une modélisation minimale et cohérente : quels états faut-il mémoriser pour savoir où l'on en est dans le motif ?",
    expectedMoves: [
      "Construire 2 ou 3 états utiles selon la parité du bloc de piles en cours.",
      "Écrire les équations d'espérance conditionnelle.",
      "Résoudre proprement le petit système obtenu.",
    ],
    commonErrors: [
      "Multiplier les états inutilement.",
      "Oublier de compter le lancer courant dans l'espérance.",
      "Perdre la condition 'impair'.",
    ],
    relatedCourseIds: ["proba"],
    sourceLabel: "ENS Ulm 2019, planche 10",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou, combinatoire / récurrences."],
  },
  {
    id: "groupes-sous-groupes",
    title: "Nombre fini de sous-groupes, groupe fini ?",
    theme: "Groupes & arithmétique",
    difficulty: "Classique",
    priority: "Indispensable",
    duration: "20-25 min",
    tags: ["groupes", "structure", "contre-exemples"],
    statement:
      "Pour un groupe G, a-t-on 'G est fini' si et seulement si 'G possède un nombre fini de sous-groupes' ?",
    oralFrame:
      "Exercice très oral : commencer par explorer, tester des familles connues, puis dégager le bon sens de l'implication.",
    expectedMoves: [
      "Traiter immédiatement le sens direct.",
      "Chercher le sens réciproque par contraposée ou par construction de nombreux sous-groupes.",
      "Tester Z, Q, groupes cycliques, groupes abéliens divisibles.",
    ],
    commonErrors: [
      "Oublier de distinguer les deux implications.",
      "Rester en généralité totale sans exemples structurants.",
      "Croire qu'infini implique automatiquement une infinité de sous-groupes sans preuve.",
    ],
    relatedCourseIds: ["groupes-arithmetique"],
    sourceLabel: "ENS Ulm 2019, planche 6",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Algèbre 1, §2.2."],
  },
  {
    id: "presque-morphisme",
    title: "Fonction presque multiplicative sur un groupe",
    theme: "Groupes & arithmétique",
    difficulty: "Ambitieux",
    priority: "Sélectif",
    duration: "35-45 min",
    tags: ["groupes", "stabilité", "fonctionnelle"],
    statement:
      "Soit f : G → C telle que |f(xy) − f(x)f(y)| ≤ δ pour tous x,y. Montrer qu'alors f est uniformément bornée, ou bien exactement multiplicative.",
    oralFrame:
      "Le bon angle consiste à comprendre ce que produit l'itération : si f est trop grande quelque part, l'erreur relative se tasse et la multiplicativité se force.",
    expectedMoves: [
      "Étudier les puissances ou les itérations de l'inégalité.",
      "Séparer le cas où |f| dépasse un certain seuil.",
      "Transformer l'approximation en rigidité.",
    ],
    commonErrors: [
      "Chercher une borne optimale trop tôt.",
      "Oublier d'exploiter la structure de groupe sur les itérés.",
      "Ne pas traiter le cas f identiquement nulle ou petite partout.",
    ],
    relatedCourseIds: ["groupes-arithmetique"],
    sourceLabel: "ENS Ulm 2019, planche 5",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Algèbre 1, esprit équations fonctionnelles."],
  },
  {
    id: "rang-idempotents",
    title: "Rang et produit d'idempotents",
    theme: "Algèbre linéaire",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "25-35 min",
    tags: ["rang", "idempotents", "Sylvester"],
    statement:
      "Soient A1,...,Ak des matrices vérifiant Aj² = Aj. Montrer que Σ(n − rg(Aj)) ≥ rg(I − A1...Ak).",
    oralFrame:
      "Un classique intelligent : les bons candidats pensent très vite aux noyaux, images et à Sylvester avant d'essayer d'ouvrir les produits.",
    expectedMoves: [
      "Identifier n−rg(Aj) comme dim Ker(Aj).",
      "Suivre l'effet successif des idempotents sur un vecteur.",
      "Faire apparaître une inclusion de noyaux ou utiliser une inégalité de rang.",
    ],
    commonErrors: [
      "Multiplier les matrices à la main.",
      "Oublier la géométrie des idempotents.",
      "Ne pas exprimer les dimensions avec des sous-espaces.",
    ],
    relatedCourseIds: ["reduction"],
    sourceLabel: "ENS Ulm 2019, planche 4",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Francinou Algèbre 1, §6.10 Inégalité de Sylvester."],
  },
  {
    id: "newton-local",
    title: "Convergence locale de Newton près d'une racine simple",
    theme: "Calcul différentiel",
    difficulty: "Classique",
    priority: "Indispensable",
    duration: "20-30 min",
    tags: ["Newton", "EDO", "local"],
    statement:
      "Soit f de classe C² sur R, avec f(x*) = 0 et f'(x*) ≠ 0. Montrer qu'il existe un voisinage de x* tel que l'itération de Newton y converge dès que le point initial est choisi dedans.",
    oralFrame:
      "On ne veut pas une récitation du théorème abstrait : on veut voir la bonne estimation locale, proprement contrôlée.",
    expectedMoves: [
      "Écrire l'itération comme x_{k+1} − x* = Φ(x_k)(x_k − x*).",
      "Utiliser Taylor ou un reste intégral pour montrer que Φ(x) est petit près de x*.",
      "Conclure par contraction locale ou contrôle quadratique.",
    ],
    commonErrors: [
      "Supposer f' bornée loin du point sans justification.",
      "Oublier que f'(x*) ≠ 0 garantit la définition locale de l'itération.",
      "Ne pas isoler l'erreur x_k−x*.",
    ],
    relatedCourseIds: ["diff-eq", "integration"],
    sourceLabel: "ENS ULSR 2025, exercice 6",
    sourceUrl: "https://banques-ecoles.fr/cms/wp-content/uploads/2025/11/Rapport_ORAL_Math_ULSR_2025.pdf",
    bookRefs: ["Plan Cassini vol. 7, calcul différentiel."],
  },
  {
    id: "variation-constante",
    title: "Si f'' + f' + f tend vers 0, pourquoi f tend-elle vers 0 ?",
    theme: "Équations différentielles",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-30 min",
    tags: ["EDO", "variation de la constante", "stabilité"],
    statement:
      "Soit f ∈ C²(R,C) telle que f''(t)+f'(t)+f(t) → 0 quand t→+∞. Montrer que f(t)→0.",
    oralFrame:
      "Le jury 2025 s'en sert comme révélateur : reconnaître la structure de l'équation et utiliser proprement la variation de la constante.",
    expectedMoves: [
      "Étudier d'abord l'équation homogène associée.",
      "Représenter f par une combinaison de solutions homogènes plus un terme forcé contrôlé.",
      "Exploiter le fait que le second membre tend vers 0 pour tuer les oscillations résiduelles.",
    ],
    commonErrors: [
      "Traiter comme une simple équation algébrique en oubliant la dynamique.",
      "Oublier de justifier la décroissance des solutions homogènes.",
      "Ne pas séparer forcing et structure homogène.",
    ],
    relatedCourseIds: ["diff-eq", "integration"],
    sourceLabel: "ENS ULSR 2025, exercice 8",
    sourceUrl: "https://banques-ecoles.fr/cms/wp-content/uploads/2025/11/Rapport_ORAL_Math_ULSR_2025.pdf",
    bookRefs: ["Plan Cassini vol. 7, équations différentielles linéaires."],
  },
  {
    id: "projecteurs-commutent",
    title: "Quand deux projecteurs orthogonaux commutent-ils ?",
    theme: "Euclidien",
    difficulty: "Classique",
    priority: "Fréquent",
    duration: "20-25 min",
    tags: ["projecteurs", "orthogonalité", "auto-adjoint"],
    statement:
      "Trouver une condition simple et exploitable pour que deux projecteurs orthogonaux commutent, puis l'interpréter géométriquement.",
    oralFrame:
      "Exercice d'école X/ENS : peu de calcul, mais de la structure. Le jury regarde la justesse du langage géométrique.",
    expectedMoves: [
      "Traduire la commutation en stabilité mutuelle des images et noyaux.",
      "Passer par une décomposition orthogonale adaptée.",
      "Interpréter le produit pq comme une projection si et seulement si les sous-espaces sont compatibles.",
    ],
    commonErrors: [
      "Oublier que le produit de deux projecteurs n'est pas toujours un projecteur.",
      "Confondre orthogonalité des sous-espaces et commutation.",
      "Rester au niveau matriciel sans lecture géométrique.",
    ],
    relatedCourseIds: ["euclidien"],
    sourceLabel: "Francinou Algèbre 3, projecteurs orthogonaux",
    bookRefs: ["Francinou Algèbre 3, §1.13-1.14."],
  },
  {
    id: "somme-carres",
    title: "Sommes de n carrés et stabilité multiplicative",
    theme: "Groupes & arithmétique",
    difficulty: "Ambitieux",
    priority: "Sélectif",
    duration: "30-40 min",
    tags: ["algèbre", "formes quadratiques", "stabilité"],
    statement:
      "Pour Σ_n(A) = {x1² + ... + xn²}, étudier la stabilité multiplicative de Σ_n et comprendre le rôle des puissances de 2.",
    oralFrame:
      "Très bon exercice pour mesurer la capacité à faire émerger une structure matricielle à partir d'une question arithmétique ou quadratique.",
    expectedMoves: [
      "Commencer avec n=2 et retrouver une identité de composition.",
      "Construire une matrice orthogonalisante ou normée à partir d'une somme de carrés.",
      "Comprendre pourquoi les dimensions 1,2,4,8 sont spéciales.",
    ],
    commonErrors: [
      "Chercher une formule brute pour tout n dès le départ.",
      "Oublier de distinguer anneau, corps et corps de caractéristique différente de 2.",
      "Ne pas isoler le cas puissance de 2.",
    ],
    relatedCourseIds: ["groupes-arithmetique", "euclidien"],
    sourceLabel: "ENS ULSR 2025, exercice 9",
    sourceUrl: "https://banques-ecoles.fr/cms/wp-content/uploads/2025/11/Rapport_ORAL_Math_ULSR_2025.pdf",
    bookRefs: ["Francinou Algèbre 3, formes quadratiques."],
  },
  {
    id: "suite-tail-heavy",
    title: "Maximum d'i.i.d. et normalisation rare",
    theme: "Probabilités",
    difficulty: "Ambitieux",
    priority: "Sélectif",
    duration: "35-45 min",
    tags: ["queues", "maximum", "équivalences"],
    statement:
      "Pour des Xi i.i.d. à valeurs dans N, relier une condition de queue P(X ≥ ax)/P(X ≥ x)→0 à l'existence d'une normalisation bn pour laquelle max(X1,...,Xn)/bn tend vers 1 en probabilité.",
    oralFrame:
      "Ici, l'idée compte davantage que la fermeture complète. Le bon oral identifie rapidement la logique 'queue rare ↔ maximum concentré'.",
    expectedMoves: [
      "Traduire l'événement sur le maximum via indépendance.",
      "Choisir bn comme quantile discret naturel.",
      "Comparer les probabilités P(X ≥ (1±ε)bn).",
    ],
    commonErrors: [
      "Ne pas exploiter l'indépendance sur le maximum.",
      "Choisir bn sans propriété quantitative.",
      "Confondre convergence en probabilité et presque sûre.",
    ],
    relatedCourseIds: ["proba"],
    sourceLabel: "ENS Ulm 2019, planche 8",
    sourceUrl: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
    bookRefs: ["Rapports ENS, exercices à l'intersection proba/analyse."],
  },
];

export const POLYTECHNIQUE_MP_REPORTS_PAGE_URL =
  "https://www.polytechnique.edu/admission-cycle-ingenieur/sujets-et-rapports";

export const POLYTECHNIQUE_MP_REPORT_SECTIONS = [
  {
    id: "x-mp-ecrits",
    label: "Ecrits MP",
    title: "Rapports officiels X - epreuves ecrites MP",
    note:
      "Source officielle Ecole polytechnique. Page consultee le 16 mai 2026 : les sujets ecrits 2026 sont publies, mais les rapports 2026 ne sont pas encore lies sur la page officielle.",
    years: ["2026", "2025", "2024", "2023", "2022"],
    rows: [
      {
        subject: "Maths A",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%20et%20MPI_Maths%20A%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP-MPI%20RAPPORT%20ECRIT%20MATHEMATIQUES%20A%20(XLSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI%20RAPPORT%20ECRIT%20MATHEMATIQUES%20A%20(XLSR).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ECRIT%20MATHS%20A%20(XLSR).pdf",
        },
      },
      {
        subject: "Maths B",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP_Maths%20B%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%2C%20MPI%20RAPPORT%20ECRIT%20DE%20MATHS%20B%20(X).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI%20RAPPORT%20ECRIT%20MATHEMATIQUES%20B%20(X).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ECRIT%20MATHS%20B%20(X).pdf",
        },
      },
      {
        subject: "Physique MP",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP_Physique%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20(XULSR)_0.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20(XULSR)_0.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20(XULSR)_0.pdf",
        },
      },
      {
        subject: "Physique et SI",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP_Physique%20et%20SI%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20ET%20S.I.%20(X).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20ET%20S.I.%20(X).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ECRIT%20PHYSIQUE%20ET%20SCIENCES%20DE%20L'INGENIEUR%20(X).pdf",
        },
      },
      {
        subject: "Informatique A",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%20et%20MPI_Info%20A%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ECRIT%20INFORMATIQUE%20A%20(XULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI%20RAPPORT%20ECRIT%20INFORMATIQUE%20A%20(XULSR)_0.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ECRIT%20INFORMATIQUE%20A%20(XULSR)_0.pdf",
        },
      },
      {
        subject: "Informatique B",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%20et%20PC_info%20B%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ECRIT%20INFORMATIQUE%20B%20(XLSR)_0.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ECRIT%20INFORMATIQUE%20B%202h%20(XLSR)_0.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20RAPPORT%20ECRIT%20INFORMATIQUE%20B%20-2h%20(XLSR)_0.pdf",
        },
      },
      {
        subject: "Francais",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%2C%20MPI%20et%20PC_fran%C3%A7ais%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%2C%20MPI%2C%20PC%20RAPPORT%20ECRIT%20DE%20FRANCAIS%20(XEULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI-PC-PSI%20RAPPORT%20ECRIT%20FRANCAIS.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP-PC-PSI%20RAPPORT%20ECRIT%20FRANCAIS%20(XEULSR).pdf",
        },
      },
      {
        subject: "Anglais",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%2C%20MPI%2C%20PC%20et%20PSI_anglais%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP-MPI-PC%20RAPPORT%20ECRIT%20ANGLAIS%20(XEULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI-PC-PSI%20RAPPORT%20ECRIT%20ANGLAIS%20(XEULSR).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP-PC%20RAPPORT%20ECRIT%20ANGLAIS%20(XEULSR).pdf",
        },
      },
      {
        subject: "Allemand",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%2C%20MPI%2C%20PC%20et%20PSI_allemand%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP-MPI-PC%20RAPPORT%20ECRIT%20ALLEMAND%20(XEULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI-PC%20RAPPORT%20ECRIT%20ALLEMAND%20(XEULSR)_0.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP-PC%20RAPPORT%20ECRIT%20ALLEMAND%20(XEULSR)_0.pdf",
        },
      },
      {
        subject: "Arabe",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%2C%20MPI%2C%20PC%20et%20PSI_arabe%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP-MPI-PC%20RAPPORT%20ECRIT%20ARABE%20(XEULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-MPI-PC%20RAPPORT%20ECRIT%20ARABE%20(XEULSR).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP-PC%20RAPPORT%20ECRIT%20ARABE%20(XEULSR).pdf",
        },
      },
      {
        subject: "Espagnol",
        reports: {
          2026: null,
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Ecrits_MP%2C%20MPI%20et%20PC_espagnol%20OK_0.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP-MPI-PC%20RAPPORT%20ECRIT%20ESPAGNOL%20(XEULSR).pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP-PC%20RAPPORT%20ECRIT%20ESPAGNOL%20(XEULSR).pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP-PC%20RAPPORT%20ECRIT%20ESPAGNOL%20(XEULSR).pdf",
        },
      },
    ],
  },
  {
    id: "x-mp-oraux",
    label: "Oraux MP",
    title: "Rapports officiels X - epreuves orales MP",
    note:
      "Rapports oraux officiels pour la filiere MP. Le lien ADS Physique 2022 est conserve tel qu'il apparait sur la page officielle Polytechnique, meme si le nom du PDF mentionne 'PC'.",
    years: ["2025", "2024", "2023", "2022", "2021"],
    rows: [
      {
        subject: "Maths",
        reports: {
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Oral_MP_Maths%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ORAL%20DE%20MATHEMATIQUES%201%20ET%202.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ORAL%20MATHEMATIQUES%201%20ET%202.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ORAL%20MATHEMATIQUES%201%20ET%202.pdf",
          2021:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2021%20MP%20RAPPORT%20ORAL%20MATHEMATIQUES%201%20ET%202.pdf",
        },
      },
      {
        subject: "Physique",
        reports: {
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Oral_MP_%20Phys%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ORAL%20DE%20PHYSIQUE.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ORAL%20PHYSIQUE.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ORAL%20PHYSIQUE.pdf",
          2021:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2021%20MP%20RAPPORT%20ORAL%20PHYSIQUE.pdf",
        },
      },
      {
        subject: "Chimie",
        reports: {
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Oral_MP_Chimie%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ORAL%20DE%20CHIMIE.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ORAL%20CHIMIE.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ORAL%20DE%20CHIMIE.pdf",
          2021:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2021%20MP%20RAPPORT%20ORAL%20CHIMIE.pdf",
        },
      },
      {
        subject: "ADS Maths",
        reports: {
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Oral_MP_ADS%20Maths%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ADS%20DE%20MATHEMATIQUES_0.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ADS%20MATHEMATIQUES.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20MP%20RAPPORT%20ADS%20MATHEMATIQUES.pdf",
          2021:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2021%20MP%20RAPPORT%20ADS%20MATHEMATIQUES.pdf",
        },
      },
      {
        subject: "ADS Physique",
        reports: {
          2025:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/Oral_MP_ADS%20Phys%20OK.pdf",
          2024:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2024%20MP%20RAPPORT%20ORAL%20ADS%20PHYSIQUE.pdf",
          2023:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2023%20MP%20RAPPORT%20ADS%20PHYSIQUE.pdf",
          2022:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2022%20PC%20RAPPORT%20ADS%20DE%20PHYSIQUE_0.pdf",
          2021:
            "https://www.polytechnique.edu/admission-cycle-ingenieur/sites/admission/files/content/2021%20MP%20RAPPORT%20ADS%20PHYSIQUE.pdf",
        },
      },
    ],
  },
];

export const RESOURCE_LINKS = [
  {
    label: "Rapports et sujets 2025 MP – ENS",
    note: "Point d'entrée officiel vers les rapports d'oral 2025.",
    href: "https://www.ens.psl.eu/rapports-et-sujets-2025-mp",
  },
  {
    label: "Rapport oral Maths Ulm 2025",
    note: "Autonomie, hors-programme, écoute des indications, sélection d'énoncés.",
    href: "https://banques-ecoles.fr/cms/wp-content/uploads/2025/11/Rapport_ORAL_MATH-ULM_2025.pdf",
  },
  {
    label: "Rapport oral Maths ULSR 2025",
    note: "Remarques fines sur le calcul différentiel, l'algèbre linéaire et des exemples d'exercices 2025.",
    href: "https://banques-ecoles.fr/cms/wp-content/uploads/2025/11/Rapport_ORAL_Math_ULSR_2025.pdf",
  },
  {
    label: "Rapport oral Maths ULSR 2022",
    note: "Complément utile pour l'esprit de l'épreuve commune ENS.",
    href: "https://www.ens.psl.eu/sites/default/files/22_mp_rap_omath_ulsr.pdf",
  },
  {
    label: "Sujets posés à l'oral Maths Ulm 2019",
    note: "Très bon corpus d'énoncés représentatifs et de discussions d'oral.",
    href: "https://www.ens.psl.eu/sites/default/files/2019_mathsulm_sujets-1.pdf",
  },
  {
    label: "Plan de la collection Oraux X-ENS (Cassini)",
    note: "Permet d'identifier les thèmes de tous les volumes, y compris Algèbre 2 et Analyse 3.",
    href: "https://store.cassini.fr/img/compagnons/PLAN-FGN.pdf",
  },
  {
    label: "Francinou – Algèbre 1",
    note: "Références exploitées : théorie des groupes, polynômes, espaces vectoriels, matrices.",
  },
  {
    label: "Francinou – Algèbre 2",
    note: "Références de structure via le plan Cassini : déterminants, diagonalisation, trigonalisation, groupe linéaire, matrices et exponentielle.",
  },
  {
    label: "Francinou – Algèbre 3",
    note: "Références exploitées : espaces euclidiens, projecteurs orthogonaux, auto-adjoints, formes quadratiques.",
  },
  {
    label: "Francinou – Analyse 1",
    note: "Références exploitées : topologie, suites réelles et complexes, séries numériques, fonctions d'une variable réelle.",
  },
  {
    label: "Francinou – Analyse 2",
    note: "Références exploitées : intégration, suites et séries de fonctions, séries entières, Gronwall, Laplace.",
  },
  {
    label: "Analyse 3",
    note: "Le volume n'était pas disponible localement ; les modules associés s'appuient sur le plan Cassini et les rapports ENS 2025.",
  },
];
