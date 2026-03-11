import type { Translations } from "./en";

const la: Translations = {
  nav: {
    home: "Initium",
    prayers: "Orationes",
    rosary: "Rosarium",
    mercy: "Opera Misericordiae",
    gallery: "Imagines",
    sanJose: "Sanctus Ioseph",
  },
  hero: {
    tagline: "Vita in Christo",
    subtitle: "Vita in Christo",
    description:
      "Locus orationis, fidei et devotionis. Pacem invenies in praesentia Domini.",
    ctaPrayers: "Orationes Explorare",
    ctaRosary: "Rosarium Orare",
    verse: '"Ego sum via, et veritas, et vita." — Ioannem 14:6',
  },
  prayers: {
    title: "Sacrae Orationes",
    subtitle: "Ad Deum accede per has Ecclesiae orationes aeternales",
    ourFather: {
      title: "Pater Noster",
      subtitle: "Oratio Dominica",
      text: `Pater noster, qui es in caelis,
sanctificetur nomen tuum.
Adveniat regnum tuum.
Fiat voluntas tua,
sicut in caelo et in terra.
Panem nostrum quotidianum da nobis hodie,
et dimitte nobis debita nostra
sicut et nos dimittimus debitoribus nostris.
Et ne nos inducas in tentationem,
sed libera nos a malo.
Amen.`,
    },
    hailMary: {
      title: "Ave Maria",
      subtitle: "Salutatio Angelica",
      text: `Ave Maria, gratia plena,
Dominus tecum.
Benedicta tu in mulieribus,
et benedictus fructus ventris tui, Iesus.
Sancta Maria, Mater Dei,
ora pro nobis peccatoribus,
nunc et in hora mortis nostrae.
Amen.`,
    },
    gloryBe: {
      title: "Gloria Patri",
      subtitle: "Doxologia",
      text: `Gloria Patri,
et Filio,
et Spiritui Sancto.
Sicut erat in principio,
et nunc et semper,
et in saecula saeculorum.
Amen.`,
    },
    apostlesCreed: {
      title: "Symbolum Apostolorum",
      subtitle: "Credo",
      text: `Credo in Deum,
Patrem omnipotentem,
Creatorem caeli et terrae.
Et in Iesum Christum,
Filium eius unicum, Dominum nostrum,
qui conceptus est de Spiritu Sancto,
natus ex Maria Virgine,
passus sub Pontio Pilato,
crucifixus, mortuus et sepultus,
descendit ad infernos,
tertia die resurrexit a mortuis,
ascendit ad caelos,
sedet ad dexteram Dei Patris omnipotentis,
inde venturus est iudicare vivos et mortuos.
Credo in Spiritum Sanctum,
sanctam Ecclesiam catholicam,
sanctorum communionem,
remissionem peccatorum,
carnis resurrectionem,
vitam aeternam.
Amen.`,
    },
    holySpirit: {
      title: "Oratio ad Spiritum Sanctum",
      subtitle: "Veni Sancte Spiritus",
      text: `Veni, Sancte Spiritus,
reple tuorum corda fidelium
et tui amoris in eis ignem accende.
Emitte Spiritum tuum et creabuntur,
et renovabis faciem terrae.
Deus, qui corda fidelium
Sancti Spiritus illustratione docuisti,
da nobis in eodem Spiritu
recta sapere
et de eius semper consolatione gaudere.
Per Christum Dominum nostrum.
Amen.`,
    },
    magnificat: {
      title: "Magnificat",
      subtitle: "Canticum Mariae — Lucam 1:46-55",
      text: `Magnificat anima mea Dominum,
et exsultavit spiritus meus in Deo salvatore meo,
quia respexit humilitatem ancillae suae.
Ecce enim ex hoc beatam me dicent omnes generationes,
quia fecit mihi magna qui potens est,
et sanctum nomen eius,
et misericordia eius in progenies et progenies
timentibus eum.
Fecit potentiam in brachio suo,
dispersit superbos mente cordis sui.
Deposuit potentes de sede
et exaltavit humiles.
Esurientes implevit bonis
et divites dimisit inanes.
Suscepit Israel puerum suum,
recordatus misericordiae,
sicut locutus est ad patres nostros,
Abraham et semini eius in saecula.
Amen.`,
    },
  },
  rosary: {
    title: "Sacrum Rosarium",
    subtitle:
      "Mysteria vitae Christi per hanc antiquam orationem contemplare",
    intro:
      "Rosarium est potens oratio quae nos cum Maria coniungit et ad Christum ducit. Quodlibet mysterium nos invitat ad contemplanda momenta vitae Iesu.",
    mysteries: {
      joyful: {
        name: "Mysteria Gaudiosa",
        day: "Feria II et Sabbato",
        color: "from-pink-900 to-rose-800",
        items: [
          {
            name: "Annuntiatio",
            meditation: "Contemplamur angelum Gabrielem Mariae annuntiantem se Matrem Salvatoris futuram esse. Meditemur in humili eius «fiat» voluntati Dei.",
            verse: '"Ave, gratia plena, Dominus tecum." — Lucam 1:28',
          },
          {
            name: "Visitatio",
            meditation: "Maria, Iesum in utero ferens, Elisabetham cognatam suam visitat. Praesentia Iesu domum Zachariae gaudio et Spiritu Sancto replet.",
            verse: '"Unde hoc mihi ut veniat mater Domini mei ad me?" — Lucam 1:43',
          },
          {
            name: "Nativitas Domini",
            meditation: "Contemplamur Filium Dei parvulum factum, in praesepio natum, lucem mundi tenebras nostras illuminantem.",
            verse: '"Natus est vobis hodie Salvator, qui est Christus Dominus, in civitate David." — Lucam 2:11',
          },
          {
            name: "Praesentatio in Templo",
            meditation: "Maria et Ioseph Iesum Patri in Templo offerunt. Simeon Salvatorem promissum agnoscit et missionem eius universalem prophetat.",
            verse: '"Positus est hic in ruinam et resurrectionem multorum in Israhel." — Lucam 2:34',
          },
          {
            name: "Inventio Iesu in Templo",
            meditation: "Per tres dies Maria et Ioseph Iesum animo sollicito quaerunt. Eum in domo Patris sui inveniunt, iam divinam suam missionem implentes.",
            verse: '"Nesciebatis quia in his quae Patris mei sunt oportet me esse?" — Lucam 2:49',
          },
        ],
      },
      sorrowful: {
        name: "Mysteria Dolorosa",
        day: "Feria III et Feria VI",
        color: "from-red-950 to-red-900",
        items: [
          {
            name: "Agonia in Horto",
            meditation: "Iesus sanguinem sudat in Gethsemani, pondus omnium peccatorum nostrorum portans. Amor eius erga Patrem et nos eum in hora obscurissima sustinet.",
            verse: '"Pater, si vis, transfer calicem istum a me; verumtamen non mea voluntas, sed tua fiat." — Lucam 22:42',
          },
          {
            name: "Flagellatio",
            meditation: "Corpus Iesu flagellis dilaceratur. Singulis ictibus infirmitates nostras portat et vulnera peccati sanat.",
            verse: '"Ipse autem vulneratus est propter iniquitates nostras, attritus est propter scelera nostra." — Esaiam 53:5',
          },
          {
            name: "Coronatio Spinis",
            meditation: "Milites Iesum corona spinea coronant, regalitatem eius irridentes. Humiliationem cum infinita mansuetudine et amore sustinet.",
            verse: '"Et plectentes coronam de spinis imposuerunt capiti eius." — Matthaeum 27:29',
          },
          {
            name: "Baiulatio Crucis",
            meditation: "Iesus crucem per vias Hierosolymorum baiulat, saepius cadens. Amor eius erga nos fortior est quam ullus dolor.",
            verse: '"Baiulans sibi crucem exivit in eum qui dicitur Calvariae locum." — Ioannem 19:17',
          },
          {
            name: "Crucifixio et Mors",
            meditation: "In cruce Iesus vitam suam amore pro nobis tradit. Ultimis verbis nos Mariae commendat et omnibus peccatoribus ignoscit.",
            verse: '"Pater, dimitte illis, non enim sciunt quid faciunt." — Lucam 23:34',
          },
        ],
      },
      glorious: {
        name: "Mysteria Gloriosa",
        day: "Feria IV et Dominica",
        color: "from-amber-900 to-yellow-800",
        items: [
          {
            name: "Resurrectio",
            meditation: "Die tertia aurora Christus victor a morte resurgit. Hoc est fundamentum fidei nostrae et fons spei nostrae.",
            verse: '"Quid quaeritis viventem cum mortuis? Non est hic, sed surrexit." — Lucam 24:5-6',
          },
          {
            name: "Ascensio",
            meditation: "Iesus in caelum coram discipulis suis ascendit, promittens se Spiritum Sanctum missurum et locum nobis praeparaturum.",
            verse: '"Hic Iesus qui assumptus est a vobis in caelum sic veniet quemadmodum vidistis eum euntem in caelum." — Actus 1:11',
          },
          {
            name: "Adventus Spiritus Sancti",
            meditation: "Spiritus Sanctus in die Pentecostes super Mariam et Apostolos descendit. Ecclesia nascitur igne et gratia divina plena.",
            verse: '"Et repleti sunt omnes Spiritu Sancto et coeperunt loqui aliis linguis." — Actus 2:4',
          },
          {
            name: "Assumptio Mariae",
            meditation: "In fine vitae suae terrenae Maria in caelum corpore et anima assumitur. Ipsa nos in gloria quam omnes speramus praecessit.",
            verse: '"Signum magnum apparuit in caelo: mulier amicta sole." — Apocalypsin 12:1',
          },
          {
            name: "Coronatio Mariae",
            meditation: "Maria Regina caeli et terrae coronatur. Assidue pro nobis apud Filium suum Iesum Christum intercedit.",
            verse: '"Adstitit regina a dextris tuis in vestitu deaurato." — Psalmum 45:10',
          },
        ],
      },
      luminous: {
        name: "Mysteria Luminosa",
        day: "Feria V",
        color: "from-blue-900 to-sky-800",
        items: [
          {
            name: "Baptismus Iesu",
            meditation: "Iesus in Iordane baptizatur et Pater identitatem eius divinam proclamat. Baptismus noster nos in familiam Dei incorporat.",
            verse: '"Hic est Filius meus dilectus, in quo mihi bene complacuit." — Matthaeum 3:17',
          },
          {
            name: "Nuptiae in Cana",
            meditation: "Intercessione Mariae Iesus primum miraculum suum facit, aquam in vinum convertens. Maria nos semper ad Filium suum ducit.",
            verse: '"Quodcumque dixerit vobis, facite." — Ioannem 2:5',
          },
          {
            name: "Proclamatio Regni Dei",
            meditation: "Iesus Regnum annuntiat et ad conversionem vocat. Nuntius eius amoris et misericordiae corda transformat.",
            verse: '"Impletum est tempus et adpropinquavit regnum Dei; paenitemini et credite evangelio." — Marcum 1:15',
          },
          {
            name: "Transfiguratio",
            meditation: "In Thabor Iesus gloriam suam divinam Petro, Iacobo et Ioanni revelat. Haec visio vires nobis dat ad omnes tentationes superandas.",
            verse: '"Hic est Filius meus dilectus, in quo mihi bene complacuit; ipsum audite." — Matthaeum 17:5',
          },
          {
            name: "Institutio Eucharistiae",
            meditation: "In Ultima Cena Iesus nobis Corpus et Sanguinem suum ut cibum viaticum dat. Eucharistia cor Ecclesiae est.",
            verse: '"Accipite et manducate: hoc est corpus meum." — Matthaeum 26:26',
          },
        ],
      },
    },
    howToPray: "Quomodo Rosarium Orare",
    steps: [
      "Incipe Symbolum Apostolorum in crucifix",
      "Ora Pater Noster in grano maiori",
      "Ora 3 Ave Maria pro fide, spe et caritate",
      "Ora Gloria Patri et annuntia Primum Mysterium",
      "Ora Pater Noster in grano maiori",
      "Ora 10 Ave Maria de mysterio meditans",
      "Ora Gloria Patri et Orationem Fatimae",
      "Pergat cum mysteriis reliquis",
      "Conclude cum Salve Regina",
    ],
  },
  mercy: {
    title: "Opera Misericordiae",
    subtitle:
      "Christus nos vocat ei in proximo servire per haec opera amoris",
    corporal: {
      title: "Opera Corporalia",
      subtitle: "Corporis cura",
      items: [
        { title: "Esurientem cibo recreare", icon: "🍞" },
        { title: "Sitientem potione reficere", icon: "💧" },
        { title: "Nudum vestire", icon: "👕" },
        { title: "Peregrinum in domum recipere", icon: "🏠" },
        { title: "Infirmos visitare", icon: "❤️‍🩹" },
        { title: "Captos et carcere detentos redimere", icon: "🕊️" },
        { title: "Mortuos sepelire", icon: "✝️" },
      ],
    },
    spiritual: {
      title: "Opera Spiritualia",
      subtitle: "Animae cura",
      items: [
        { title: "Ignorantes docere", icon: "💡" },
        { title: "Dubitantibus consilium dare", icon: "📖" },
        { title: "Peccantes corripere", icon: "🙏" },
        { title: "Moestos consolari", icon: "🌟" },
        { title: "Iniurias remittere", icon: "🤝" },
        { title: "Proximi defectus patienter ferre", icon: "☮️" },
        { title: "Pro vivis et defunctis Deum orare", icon: "🕯️" },
      ],
    },
    verse:
      '"Quod uni ex his minimis fratribus meis fecistis, mihi fecistis." — Matthaeum 25:40',
  },
  gallery: {
    title: "Sacrae Imagines",
    subtitle: "Imagines quae devotionem et contemplationem inspirant",
  },
  footer: {
    tagline: "Amorem Christi diffunde",
    rights: "Omnia iura reservantur",
    madeWith: "Factum cum",
    andFaith: "et fide",
  },
};

export default la;
