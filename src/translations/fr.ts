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
  sanJose: {
    hero: {
      subtitle: "Père Adoptif de Jésus · Époux de la Vierge Marie",
      quote: "« Gardien de la Sainte Famille, Patron de l\\'Église Universelle, modèle de foi, de silence et de travail »",
    },
    tabs: {
      prayers: "Prières",
      rosario: "Rosaire",
      novena: "Neuvaine",
    },
    prayers: {
      title: "Prières à Saint Joseph",
      subtitle: "Confiez-vous au puissant patronage de Saint Joseph",
      items: [
        {
          title: "Prière à Saint Joseph",
          subtitle: "Patron de l\\'Église Universelle",
          text: `Ô Saint Joseph, époux de la Vierge Marie
et père adoptif de Jésus,
venez à mon secours par votre puissante intercession.
Vous qui fûtes le fidèle gardien de la Sainte Famille,
soyez aussi mon protecteur dans les difficultés de la vie.

Guidez mes pas sur le chemin de l'amour et de la justice,
et obtenez-moi la grâce de vivre toujours
dans la volonté de Dieu.

Amen.`,
        },
        {
          title: "Consécration à Saint Joseph",
          subtitle: "Père et Protecteur",
          text: `Glorieux Saint Joseph,
patron de l'Église Universelle,
je me consacre à vous aujourd'hui
et je me place sous votre protection.

Comme Jésus fut sous votre soin aimant,
ainsi je me remets entre vos mains avec confiance filiale.
Soyez mon guide, mon soutien
et mon intercesseur auprès du Seigneur.

Que votre vie de silence et de travail,
de foi et d'obéissance totale à Dieu,
soit le modèle de ma vie chrétienne.

Amen.`,
        },
        {
          title: "Prière pour la Famille",
          subtitle: "À Saint Joseph, Époux et Père",
          text: `Saint Joseph, gardien de la Sainte Famille,
protégez nos familles en ces temps difficiles.
Que l'amour qui unissait la Sainte Famille
règne aussi dans nos foyers.

Obtenez-nous de votre Fils Jésus
la grâce de nous aimer les uns les autres,
de nous pardonner, de nous servir
et de marcher ensemble vers le ciel.

Amen.`,
        },
        {
          title: "Prière du Travailleur",
          subtitle: "Saint Joseph, Patron des Travailleurs",
          text: `Saint Joseph l'Artisan,
vous qui avez sanctifié le travail de vos mains,
bénissez le travail de tous les hommes et de toutes les femmes.

Qu'aucun travailleur ne manque de pain,
qu'aucune famille ne souffre d'injustice,
et que le fruit du travail humain
soit toujours une source de dignité et de joie.

Intercédez pour ceux qui cherchent un emploi,
pour ceux qui travaillent dans des conditions difficiles,
et pour tous ceux qui prennent soin de leur famille.

Amen.`,
        },
      ],
    },
    rosario: {
      title: "Rosaire de Saint Joseph",
      subtitle: "Sept Douleurs et Sept Joies",
      intro: `Le Rosaire de Saint Joseph médite sur les Sept Douleurs et les Sept Joies de ce grand saint.
Il se récite avec sept groupes de 7 Je vous salue Marie, en méditant sur chaque mystère de la vie de Saint Joseph.
Chaque dizaine est précédée d'un Notre Père et se termine par un Gloire au Père.`,
      dolorLabel: "Douleur",
      gozoLabel: "Joie",
      closingNote: "Conclure avec le Salve Regina et l\\'invocation suivante :",
      closingPrayer: "« Saint Joseph, priez pour nous. »",
      mysteries: [
        {
          title: "Premier Mystère",
          dolor: "Le doute de Saint Joseph sur l\\'origine de la grossesse de Marie",
          gozo: "L'ange révèle à Saint Joseph que Jésus est le Fils de Dieu",
          verse: '"Joseph, fils de David, ne crains pas de prendre Marie pour épouse, car ce qui a été engendré en elle vient de l\\'Esprit Saint." — Matthieu 1:20',
        },
        {
          title: "Deuxième Mystère",
          dolor: "La pauvreté de la crèche de Bethléem",
          gozo: "La naissance de Jésus, le Sauveur du monde",
          verse: '"Elle mit au monde son fils premier-né, l\\'emmaillota et le coucha dans une mangeoire." — Luc 2:7',
        },
        {
          title: "Troisième Mystère",
          dolor: "La prophétie de Siméon sur la douleur de Marie",
          gozo: "Les prophéties sur Jésus comme lumière des nations",
          verse: '"Cet enfant est destiné à provoquer la chute et le relèvement de beaucoup." — Luc 2:34',
        },
        {
          title: "Quatrième Mystère",
          dolor: "La fuite en Égypte pour échapper à Hérode",
          gozo: "La protection divine sur la Sainte Famille en Égypte",
          verse: '"Lève-toi, prends l\\'enfant et sa mère, et fuis en Égypte." — Matthieu 2:13',
        },
        {
          title: "Cinquième Mystère",
          dolor: "L'amertume de l\\'exil en terre étrangère",
          gozo: "Le retour à la terre promise après la mort d\\'Hérode",
          verse: '"Lève-toi, prends l\\'enfant et sa mère et retourne en terre d\\'Israël." — Matthieu 2:20',
        },
        {
          title: "Sixième Mystère",
          dolor: "La perte de l\\'Enfant Jésus à Jérusalem",
          gozo: "La trouvaille de Jésus dans le Temple parmi les docteurs",
          verse: '"Ils le trouvèrent dans le Temple, assis au milieu des docteurs de la Loi." — Luc 2:46',
        },
        {
          title: "Septième Mystère",
          dolor: "La maladie et la mort de Saint Joseph",
          gozo: "Saint Joseph meurt assisté de Jésus et de Marie, atteignant la gloire éternelle",
          verse: '"Elle est précieuse aux yeux du Seigneur, la mort de ses fidèles." — Psaume 116:15',
        },
      ],
    },
    novena: {
      title: "Neuvaine à Saint Joseph",
      subtitle: "Neuf jours de prière et de méditation",
      meditationLabel: "Méditation",
      prayerLabel: "Prière du jour",
      finalPrayerTitle: "Prière Finale de la Neuvaine",
      finalPrayer: "« Ô Saint Joseph, dont la protection est si grande, si forte, si prompte devant le trône de Dieu, je vous confie tous mes intérêts et désirs. Ô Saint Joseph, assistez-moi par votre puissante intercession et obtenez de votre Divin Fils toutes les grâces spirituelles et temporelles dont j\\'ai besoin. Amen. »",
      days: [
        {
          title: "Jour 1 — La Vocation de Saint Joseph",
          meditation: "Saint Joseph, choisi par Dieu de toute éternité pour être l'époux de Marie et le père adoptif de Jésus. Méditez sur la grandeur de sa vocation et demandez à Dieu de vous aider à découvrir la vôtre.",
          prayer: `Ô Saint Joseph, vous avez été appelé par Dieu pour une mission unique dans l'histoire du salut.
Aidez-moi à connaître et à aimer ma propre vocation,
à répondre avec le même «oui» généreux que vous avez donné
lorsque l'ange vous a révélé le mystère.

Que je puisse aussi dire avec foi : « Que ta volonté soit faite. »

Amen.`,
        },
        {
          title: "Jour 2 — La Foi de Saint Joseph",
          meditation: "Saint Joseph a cru sans voir, a fait confiance sans comprendre. Sa foi en Dieu a été mise à l'épreuve et purifiée. Demandez la grâce d'une foi forte qui ne vacille pas devant les difficultés.",
          prayer: `Saint Joseph, homme de foi profonde,
vous avez cru la parole de l'ange
et avez agi sans hésiter.
Donnez-moi une foi ferme et confiante
qui me soutienne dans mes moments d'obscurité.

Quand je ne comprends pas le chemin de Dieu dans ma vie,
aidez-moi à croire et à avancer avec confiance.

Amen.`,
        },
        {
          title: "Jour 3 — La Pureté de Saint Joseph",
          meditation: "Saint Joseph, l'«homme juste», a vécu avec une parfaite pureté de cœur. Son amour pour Marie était sacré et fidèle. Demandez la grâce de la pureté en pensées, paroles et actions.",
          prayer: `Saint Joseph très chaste,
modèle de pureté et de droiture,
intercédez pour moi afin que mon cœur soit pur
et que mes actions reflètent l'amour de Dieu.

Protégez mon âme et celle de ma famille
de tout ce qui éloigne de Dieu.

Amen.`,
        },
        {
          title: "Jour 4 — Le Travail de Saint Joseph",
          meditation: "Saint Joseph a sanctifié le travail de ses mains. Charpentier de Nazareth, il a appris à Jésus la valeur du travail honnête. Demandez la grâce de travailler avec amour et dignité.",
          prayer: `Saint Joseph l'Artisan,
sanctifiez mon travail quotidien
et celui de toutes les personnes qui travaillent honnêtement.
Que je trouve dans le travail
non seulement la subsistance du corps
mais aussi de l'âme.

Intercédez pour ceux qui n'ont pas de travail
et pour ceux qui souffrent d'exploitation.

Amen.`,
        },
        {
          title: "Jour 5 — Le Silence de Saint Joseph",
          meditation: "Dans les Évangiles, Saint Joseph ne parle jamais. Sa vie fut un témoignage d'action silencieuse au service de Dieu. Demandez la grâce du silence intérieur pour écouter Dieu.",
          prayer: `Saint Joseph du silence sacré,
apprenez-moi à écouter avant de parler,
à prier avant d'agir,
à faire confiance avant de vouloir comprendre.

Dans le bruit de ce monde,
aidez-moi à trouver le silence intérieur
où Dieu parle à mon cœur.

Amen.`,
        },
        {
          title: "Jour 6 — L'Obéissance de Saint Joseph",
          meditation: "Saint Joseph a obéi à Dieu chaque fois que l'ange lui a parlé : en accueillant Marie, en fuyant en Égypte, en retournant en Israël. Son obéissance a sauvé la vie du Sauveur. Demandez la grâce de l'obéissance à Dieu.",
          prayer: `Saint Joseph obéissant,
vous vous êtes levé chaque fois que Dieu vous a appelé,
sans questionner, sans hésiter, sans tarder.
Donnez-moi la grâce d'obéir à Dieu
en toute circonstance de ma vie,
surtout quand je ne comprends pas ses voies.

Que ma volonté se plie toujours
devant la volonté divine.

Amen.`,
        },
        {
          title: "Jour 7 — La Tendresse de Saint Joseph",
          meditation: "Saint Joseph a aimé Jésus avec la tendresse d'un vrai père. Il l'a protégé, nourri, appris à travailler. Son amour était concret et fidèle. Demandez la grâce de l'amour familial.",
          prayer: `Saint Joseph, père aimant,
vous qui avez pris soin de Jésus avec des mains fortes et un cœur tendre,
intercédez pour les pères et les mères du monde.

Que nos foyers soient des écoles d'amour,
que les enfants grandissent en sécurité et aimés,
et que les familles soient le premier reflet
de l'amour de Dieu dans le monde.

Amen.`,
        },
        {
          title: "Jour 8 — Saint Joseph, Protecteur de l'Église",
          meditation: "Le Pape Pie IX a proclamé Saint Joseph Patron de l'Église Universelle. Il a protégé le Corps du Christ à Nazareth ; maintenant il protège le Corps du Christ qui est l'Église. Demandez la grâce d'aimer et de servir l'Église.",
          prayer: `Saint Joseph, gardien de la Sainte Église,
le Corps Mystique du Christ est sous votre protection.
Intercédez pour le Pape, les évêques, les prêtres
et tous les fidèles.

Protégez l'Église des attaques du mal,
renouvelez sa sainteté
et aidez-la à être toujours un signe de l'amour de Dieu pour le monde.

Amen.`,
        },
        {
          title: "Jour 9 — Saint Joseph, Patron de la Bonne Mort",
          meditation: "Saint Joseph est mort dans les bras de Jésus et de Marie. C'est pourquoi il est invoqué comme patron de la bonne mort. Demandez la grâce de mourir dans la grâce de Dieu, assisté de l'amour de Marie et de l'Église.",
          prayer: `Saint Joseph, patron de la bonne mort,
vous qui avez fermé les yeux au monde
dans les bras de Jésus et de Marie,
obtenez-moi la grâce de persévérer dans la foi
jusqu'à la fin de ma vie.

Quand mon heure viendra,
que vous me trouviez en état de grâce,
et que ce soit vous qui m'accompagniez
dans la présence de Dieu.

Amen.`,
        },
      ],
    },
  },
};

export default fr;
