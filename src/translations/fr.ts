import type { Translations } from "./en";

const fr: Translations = {
  nav: {
    home: "Accueil",
    prayers: "Prières",
    rosary: "Rosaire",
    mercy: "Œuvres de Miséricorde",
    gallery: "Galerie",
    sanJose: "Saint Joseph",
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
    holySpirit: {
      title: "Prière au Saint-Esprit",
      subtitle: "Veni Sancte Spiritus",
      text: `Venez, Esprit Saint,
remplissez les cœurs de vos fidèles
et allumez en eux le feu de votre amour.
Envoyez votre Esprit et ils seront créés,
et vous renouvellerez la face de la terre.
Ô Dieu, qui avez instruit les cœurs de vos fidèles
par la lumière du Saint-Esprit,
accordez-nous par ce même Esprit
d'avoir le goût de ce qui est bien
et de jouir toujours de sa consolation.
Par Jésus-Christ Notre Seigneur.
Amen.`,
    },
    magnificat: {
      title: "Le Magnificat",
      subtitle: "Cantique de Marie — Luc 1:46-55",
      text: `Mon âme exalte le Seigneur,
exulte mon esprit en Dieu, mon Sauveur !
Il s'est penché sur son humble servante ;
désormais tous les âges me diront bienheureuse.
Le Tout-Puissant fit pour moi des merveilles ;
saint est son nom !
Sa miséricorde s'étend d'âge en âge
sur ceux qui le craignent.
Déployant la force de son bras,
il disperse les superbes.
Il renverse les puissants de leurs trônes,
il élève les humbles.
Il comble de biens les affamés,
renvoie les riches les mains vides.
Il relève Israël son serviteur,
il se souvient de son amour,
de la promesse faite à nos pères,
en faveur d'Abraham et de sa race à jamais.
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
          {
            name: "L'Annonciation",
            meditation: "Nous contemplons le moment où l'ange Gabriel annonce à Marie qu'elle sera la Mère du Sauveur. Méditons sur son humble «oui» à la volonté de Dieu.",
            verse: '"Je vous salue, comblée de grâce, le Seigneur est avec vous." — Luc 1:28',
          },
          {
            name: "La Visitation",
            meditation: "Marie, portant Jésus en son sein, rend visite à sa cousine Élisabeth. La présence de Jésus remplit de joie et du Saint-Esprit la maison de Zacharie.",
            verse: '"Comment ai-je ce bonheur que la mère de mon Seigneur vienne jusqu\'à moi ?" — Luc 1:43',
          },
          {
            name: "La Nativité",
            meditation: "Nous contemplons le Fils de Dieu qui se fait petit, né dans une crèche, lumière du monde venue éclairer nos ténèbres.",
            verse: '"Il vous est né aujourd\'hui un Sauveur qui est le Christ Seigneur, dans la ville de David." — Luc 2:11',
          },
          {
            name: "La Présentation au Temple",
            meditation: "Marie et Joseph offrent Jésus au Père au temple. Siméon reconnaît le Sauveur promis et prophétise sa mission universelle.",
            verse: '"Cet enfant est destiné à la chute et au relèvement de beaucoup en Israël." — Luc 2:34',
          },
          {
            name: "Le Recouvrement au Temple",
            meditation: "Pendant trois jours, Marie et Joseph cherchent Jésus avec angoisse. Ils le trouvent dans la maison de son Père, accomplissant déjà sa mission divine.",
            verse: '"Ne saviez-vous pas que je dois être dans la maison de mon Père ?" — Luc 2:49',
          },
        ],
      },
      sorrowful: {
        name: "Mystères Douloureux",
        day: "Mardi et Vendredi",
        color: "from-red-950 to-red-900",
        items: [
          {
            name: "L'Agonie au Jardin des Oliviers",
            meditation: "Jésus transpire du sang à Gethsémani, portant le poids de tous nos péchés. Son amour pour le Père et pour nous le soutient dans l'heure la plus sombre.",
            verse: '"Père, si tu le veux, éloigne de moi cette coupe ; toutefois, que ce ne soit pas ma volonté, mais la tienne qui se fasse." — Luc 22:42',
          },
          {
            name: "La Flagellation",
            meditation: "Le corps de Jésus est déchiré par les fouets. À chaque coup, il porte nos infirmités et guérit les blessures du péché.",
            verse: '"Il était blessé pour nos péchés, brisé pour nos iniquités." — Isaïe 53:5',
          },
          {
            name: "Le Couronnement d'Épines",
            meditation: "Les soldats couronnent Jésus d'épines en se moquant de sa royauté. Il endure l'humiliation avec une douceur et un amour infinis.",
            verse: '"Ils lui posèrent sur la tête une couronne d\'épines." — Matthieu 27:29',
          },
          {
            name: "Le Portement de la Croix",
            meditation: "Jésus porte sa croix à travers les rues de Jérusalem, tombant plusieurs fois. Son amour pour nous est plus fort que toute douleur.",
            verse: '"Portant lui-même sa croix, il sortit en direction du lieu appelé Crâne." — Jean 19:17',
          },
          {
            name: "La Crucifixion",
            meditation: "Sur la croix, Jésus donne sa vie par amour pour nous. Par ses dernières paroles, il nous confie à Marie et pardonne tous les pécheurs.",
            verse: '"Père, pardonne-leur, car ils ne savent pas ce qu\'ils font." — Luc 23:34',
          },
        ],
      },
      glorious: {
        name: "Mystères Glorieux",
        day: "Mercredi et Dimanche",
        color: "from-amber-900 to-yellow-800",
        items: [
          {
            name: "La Résurrection",
            meditation: "À l'aube du troisième jour, le Christ ressuscite victorieux de la mort. C'est le fondement de notre foi et la source de notre espérance.",
            verse: '"Pourquoi cherchez-vous parmi les morts celui qui est vivant ? Il n\'est pas ici, il est ressuscité." — Luc 24:5-6',
          },
          {
            name: "L'Ascension",
            meditation: "Jésus monte au ciel devant ses disciples, promettant d'envoyer le Saint-Esprit et de nous préparer une place auprès du Père.",
            verse: '"Ce Jésus qui a été enlevé au ciel d\'au milieu de vous viendra de la même manière." — Actes 1:11',
          },
          {
            name: "La Pentecôte",
            meditation: "Le Saint-Esprit descend sur Marie et les Apôtres à la Pentecôte. L'Église naît, remplie de feu et de grâce divine.",
            verse: '"Ils furent tous remplis du Saint-Esprit et se mirent à parler en d\'autres langues." — Actes 2:4',
          },
          {
            name: "L'Assomption de Marie",
            meditation: "Au terme de sa vie terrestre, Marie est élevée au ciel en corps et en âme. Elle nous précède dans la gloire que nous espérons tous partager.",
            verse: '"Un grand signe parut dans le ciel : une femme revêtue du soleil." — Apocalypse 12:1',
          },
          {
            name: "Le Couronnement de Marie",
            meditation: "Marie est couronnée Reine du ciel et de la terre. Elle intercède continuellement pour nous auprès de son Fils Jésus-Christ.",
            verse: '"À ta droite se tient la reine, parée d\'or d\'Ophir." — Psaume 45:10',
          },
        ],
      },
      luminous: {
        name: "Mystères Lumineux",
        day: "Jeudi",
        color: "from-blue-900 to-sky-800",
        items: [
          {
            name: "Le Baptême de Jésus",
            meditation: "Jésus est baptisé dans le Jourdain et le Père proclame son identité divine. Notre baptême nous incorpore dans la famille de Dieu.",
            verse: '"Celui-ci est mon Fils bien-aimé, en qui j\'ai mis toute mon affection." — Matthieu 3:17',
          },
          {
            name: "Les Noces de Cana",
            meditation: "À l'intercession de Marie, Jésus accomplit son premier miracle en changeant l'eau en vin. Marie nous conduit toujours vers son Fils.",
            verse: '"Faites tout ce qu\'il vous dira." — Jean 2:5',
          },
          {
            name: "L'Annonce du Royaume de Dieu",
            meditation: "Jésus annonce le Royaume et appelle à la conversion. Son message d'amour et de miséricorde transforme les cœurs qui s'ouvrent à lui.",
            verse: '"Le temps est accompli et le Royaume de Dieu est tout proche. Repentez-vous et croyez à la Bonne Nouvelle." — Marc 1:15',
          },
          {
            name: "La Transfiguration",
            meditation: "Sur le Thabor, Jésus révèle sa gloire divine à Pierre, Jacques et Jean. Cette vision nous donne la force d'affronter toutes les épreuves.",
            verse: '"Celui-ci est mon Fils bien-aimé, en qui j\'ai mis toute mon affection ; écoutez-le." — Matthieu 17:5',
          },
          {
            name: "L'Institution de l'Eucharistie",
            meditation: "À la Cène, Jésus nous donne son Corps et son Sang comme nourriture pour le chemin. L'Eucharistie est le cœur de l'Église.",
            verse: '"Prenez et mangez, ceci est mon corps." — Matthieu 26:26',
          },
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
