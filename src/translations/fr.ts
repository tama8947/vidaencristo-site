import type { Translations } from "./en";

const fr: Translations = {
  nav: {
    home: "Accueil",
    prayers: "Prières",
    rosary: "Rosaire",
    mercy: "Œuvres de Miséricorde",
    gallery: "Galerie",
  },
  hero: {
    tagline: "Vida en Cristo",
    subtitle: "La Vie en Christ",
    description:
      "Un lieu de prière, de foi et de dévotion. Trouvez la paix dans la présence du Seigneur.",
    ctaPrayers: "Explorer les Prières",
    ctaRosary: "Prier le Rosaire",
    verse: '"Je suis le chemin, la vérité et la vie." — Jean 14:6',
  },
  prayers: {
    title: "Prières Sacrées",
    subtitle:
      "Approchez-vous de Dieu à travers ces prières intemporelles de l'Église",
    ourFather: {
      title: "Notre Père",
      subtitle: "La Prière du Seigneur",
      text: `Notre Père, qui es aux cieux,
que ton nom soit sanctifié,
que ton règne vienne,
que ta volonté soit faite
sur la terre comme au ciel.
Donne-nous aujourd'hui notre pain de ce jour.
Pardonne-nous nos offenses,
comme nous pardonnons aussi
à ceux qui nous ont offensés.
Et ne nous soumets pas à la tentation,
mais délivre-nous du Mal.
Amen.`,
    },
    hailMary: {
      title: "Je vous salue Marie",
      subtitle: "Ave Maria",
      text: `Je vous salue, Marie,
pleine de grâce ;
le Seigneur est avec vous.
Vous êtes bénie entre toutes les femmes,
et Jésus, le fruit de vos entrailles, est béni.
Sainte Marie, Mère de Dieu,
priez pour nous, pauvres pécheurs,
maintenant et à l'heure de notre mort.
Amen.`,
    },
    gloryBe: {
      title: "Gloire au Père",
      subtitle: "Doxologie",
      text: `Gloire au Père,
au Fils
et au Saint-Esprit.
Comme il était au commencement,
maintenant et toujours,
dans les siècles des siècles.
Amen.`,
    },
    apostlesCreed: {
      title: "Symbole des Apôtres",
      subtitle: "Le Credo",
      text: `Je crois en Dieu,
le Père tout-puissant,
Créateur du ciel et de la terre.
Et en Jésus Christ,
son Fils unique, notre Seigneur,
qui a été conçu du Saint-Esprit,
est né de la Vierge Marie,
a souffert sous Ponce Pilate,
a été crucifié, est mort et a été enseveli,
est descendu aux enfers,
le troisième jour est ressuscité des morts,
est monté aux cieux,
est assis à la droite de Dieu le Père tout-puissant,
d'où il viendra juger les vivants et les morts.
Je crois en l'Esprit Saint,
à la sainte Église catholique,
à la communion des saints,
à la rémission des péchés,
à la résurrection de la chair,
à la vie éternelle.
Amen.`,
    },
  },
  rosary: {
    title: "Le Saint Rosaire",
    subtitle:
      "Méditez sur les mystères de la vie du Christ à travers cette prière ancienne",
    intro:
      "Le Rosaire est une puissante prière qui nous unit à Marie et nous conduit au Christ. Chaque ensemble de mystères nous invite à contempler des moments clés de la vie de Jésus.",
    mysteries: {
      joyful: {
        name: "Mystères Joyeux",
        day: "Lundi et Samedi",
        color: "from-pink-900 to-rose-800",
        items: [
          "L'Annonciation",
          "La Visitation",
          "La Nativité",
          "La Présentation au Temple",
          "Le Recouvrement au Temple",
        ],
      },
      sorrowful: {
        name: "Mystères Douloureux",
        day: "Mardi et Vendredi",
        color: "from-red-950 to-red-900",
        items: [
          "L'Agonie au Jardin des Oliviers",
          "La Flagellation",
          "Le Couronnement d'Épines",
          "Le Portement de la Croix",
          "La Crucifixion",
        ],
      },
      glorious: {
        name: "Mystères Glorieux",
        day: "Mercredi et Dimanche",
        color: "from-amber-900 to-yellow-800",
        items: [
          "La Résurrection",
          "L'Ascension",
          "La Pentecôte",
          "L'Assomption de Marie",
          "Le Couronnement de Marie",
        ],
      },
      luminous: {
        name: "Mystères Lumineux",
        day: "Jeudi",
        color: "from-blue-900 to-sky-800",
        items: [
          "Le Baptême de Jésus",
          "Les Noces de Cana",
          "L'Annonce du Royaume de Dieu",
          "La Transfiguration",
          "L'Institution de l'Eucharistie",
        ],
      },
    },
    howToPray: "Comment Prier le Rosaire",
    steps: [
      "Commencer par le Symbole des Apôtres sur le crucifix",
      "Prier le Notre Père sur le grand grain",
      "Prier 3 Je vous salue Marie pour la foi, l'espérance et la charité",
      "Prier le Gloire au Père, puis annoncer le Premier Mystère",
      "Prier le Notre Père sur le grand grain",
      "Prier 10 Je vous salue Marie en méditant sur le mystère",
      "Prier le Gloire au Père et la prière de Fatima",
      "Continuer avec les mystères restants",
      "Terminer par le Salve Regina",
    ],
  },
  mercy: {
    title: "Œuvres de Miséricorde",
    subtitle:
      "Le Christ nous appelle à Le servir dans notre prochain à travers ces œuvres d'amour",
    corporal: {
      title: "Œuvres Corporelles",
      subtitle: "Prendre soin du corps",
      items: [
        { title: "Nourrir les affamés", icon: "🍞" },
        { title: "Désaltérer les assoiffés", icon: "💧" },
        { title: "Vêtir les démunis", icon: "👕" },
        { title: "Héberger les sans-abri", icon: "🏠" },
        { title: "Visiter les malades", icon: "❤️‍🩹" },
        { title: "Visiter les prisonniers", icon: "🕊️" },
        { title: "Ensevelir les morts", icon: "✝️" },
      ],
    },
    spiritual: {
      title: "Œuvres Spirituelles",
      subtitle: "Prendre soin de l'âme",
      items: [
        { title: "Conseiller ceux qui doutent", icon: "💡" },
        { title: "Instruire les ignorants", icon: "📖" },
        { title: "Avertir les pécheurs", icon: "🙏" },
        { title: "Consoler les affligés", icon: "🌟" },
        { title: "Pardonner les offenses", icon: "🤝" },
        { title: "Porter les fautes avec patience", icon: "☮️" },
        { title: "Prier pour les vivants et les morts", icon: "🕯️" },
      ],
    },
    verse:
      '"Car j\'avais faim, et vous m\'avez donné à manger." — Matthieu 25:35',
  },
  gallery: {
    title: "Images Sacrées",
    subtitle: "Des images qui inspirent la dévotion et la contemplation",
  },
  footer: {
    tagline: "Répandez l'amour du Christ",
    rights: "Tous droits réservés",
    madeWith: "Fait avec",
    andFaith: "et foi",
  },
};

export default fr;
