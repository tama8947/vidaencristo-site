import type { Translations } from "./en";

const la: Translations = {
  nav: {
    home: "Initium",
    prayers: "Orationes",
    rosary: "Rosarium",
    mercy: "Opera Misericordiae",
    gallery: "Imagines",
    sanJose: "Sanctus Ioseph",
    catechism: "Catechismus",
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
  sanJose: {
    hero: {
      subtitle: "Pater Adoptivus Iesu · Sponsus Virginis Mariae",
      quote: "«Custos Sanctae Familiae, Patronus Ecclesiae Universalis, exemplum fidei, silentii et laboris»",
    },
    tabs: {
      prayers: "Orationes",
      rosario: "Rosarium",
      novena: "Novem Dies",
    },
    prayers: {
      title: "Orationes ad Sanctum Ioseph",
      subtitle: "Vos patrocinio potenti Sancti Ioseph commendatis",
      items: [
        {
          title: "Oratio ad Sanctum Ioseph",
          subtitle: "Patronum Ecclesiae Universalis",
          text: `O Sancte Ioseph, sponse Virginis Mariae
et pater adoptivus Iesu,
adi in auxilium meum potenti intercessione tua.
Tu qui fuisti custos fidelis Sanctae Familiae,
esto etiam protector meus in difficultatibus vitae.

Dirige gressus meos per viam amoris et iustitiae,
et impetra mihi gratiam vivendi semper
in voluntate Dei.

Amen.`,
        },
        {
          title: "Consecratio ad Sanctum Ioseph",
          subtitle: "Pater et Protector",
          text: `Gloriose Sancte Ioseph,
patrone Ecclesiae Universalis,
me tibi hodie consecro
meque sub tua protectione colloco.

Sicut Iesus sub amorosa cura tua fuit,
ita me manibus tuis confidenter filiorum more committo.
Sis dux meus, sustentaculum meum
et intercessor meus apud Dominum.

Vita tua silentii et laboris,
fidei et obedientiae totalis Deo,
exemplum vitae meae christianae sit.

Amen.`,
        },
        {
          title: "Oratio pro Familia",
          subtitle: "Ad Sanctum Ioseph, Sponsum et Patrem",
          text: `Sancte Ioseph, custos Sanctae Familiae,
protege familias nostras his temporibus difficilibus.
Amor qui Sanctam Familiam iunxit
in domibus nostris etiam regnet.

Impetra nobis a Filio tuo Iesu
gratiam nos invicem amandi,
ignoscendi, serviendi
et iter ad caelum simul faciendi.

Amen.`,
        },
        {
          title: "Oratio Operarii",
          subtitle: "Sancte Ioseph, Patrone Operariorum",
          text: `Sancte Ioseph Opifex,
qui laborem manibus tuis sanctificasti,
benedic labori omnium virorum et mulierum.

Nullus operarius pane careat,
nulla familia iniuriam patiatur,
et fructus laboris humani
semper dignitatis et gaudii causa sit.

Intercede pro iis qui laborem quaerunt,
pro iis qui in difficulibus condicionibus laborant,
et pro omnibus qui familiae suae curant.

Amen.`,
        },
      ],
    },
    rosario: {
      title: "Rosarium Sancti Ioseph",
      subtitle: "Septem Dolores et Septem Gaudia",
      intro: `Rosarium Sancti Ioseph in Septem Doloribus et Septem Gaudiis huius magni sancti meditatur.
Oratur cum septem coetibus 7 Ave Mariarum, in unoquoque mysterio vitae Sancti Ioseph meditando.
Singulae decades Pater Noster praeceduntur et Gloria Patri concluduntur.`,
      dolorLabel: "Dolor",
      gozoLabel: "Gaudium",
      closingNote: "Concludere cum Salve Regina et hac iaculatoria:",
      closingPrayer: "«Sancte Ioseph, ora pro nobis.»",
      mysteries: [
        {
          title: "Primum Mysterium",
          dolor: "Dubium Sancti Ioseph de origine graviditatis Mariae",
          gozo: "Angelus Sancto Ioseph revelat Iesum Filium Dei esse",
          verse: '"Ioseph, fili David, noli timere accipere Mariam coniugem tuam; quod enim in ea natum est de Spiritu Sancto est." — Matthaeum 1:20',
        },
        {
          title: "Secundum Mysterium",
          dolor: "Paupertas praesepi Bethlehemitici",
          gozo: "Nativitas Iesu, Salvatoris mundi",
          verse: '"Et peperit filium suum primogenitum et pannis eum involvit et reclinavit eum in praesepio." — Lucam 2:7',
        },
        {
          title: "Tertium Mysterium",
          dolor: "Prophetia Simeonis de dolore Mariae",
          gozo: "Prophetiae de Iesu ut luce gentium",
          verse: '"Positus est hic in ruinam et resurrectionem multorum in Israhel." — Lucam 2:34',
        },
        {
          title: "Quartum Mysterium",
          dolor: "Fuga in Aegyptum ad effugiendum Herodem",
          gozo: "Divina protectio super Sanctam Familiam in Aegypto",
          verse: '"Surge et accipe puerum et matrem eius et fuge in Aegyptum." — Matthaeum 2:13',
        },
        {
          title: "Quintum Mysterium",
          dolor: "Amaritudo exsilii in terra aliena",
          gozo: "Reditus in terram promissam post mortem Herodis",
          verse: '"Surge et accipe puerum et matrem eius et vade in terram Israhel." — Matthaeum 2:20',
        },
        {
          title: "Sextum Mysterium",
          dolor: "Amissio Pueri Iesu Hierosolymis",
          gozo: "Inventio Iesu in Templo inter doctores",
          verse: '"Invenerunt illum in templo sedentem in medio doctorum." — Lucam 2:46',
        },
        {
          title: "Septimum Mysterium",
          dolor: "Aegrotatio et mors Sancti Ioseph",
          gozo: "Sanctus Ioseph moritur adiutus a Iesu et Maria, gloriam aeternam adipiscens",
          verse: '"Pretiosa in conspectu Domini mors sanctorum eius." — Psalmum 116:15',
        },
      ],
    },
    novena: {
      title: "Novem Dies ad Sanctum Ioseph",
      subtitle: "Novem dies orationis et meditationis",
      meditationLabel: "Meditatio",
      prayerLabel: "Oratio diei",
      finalPrayerTitle: "Oratio Finalis",
      finalPrayer: "«O Sancte Ioseph, cuius patrocinium tam magnum, tam forte, tam promptum est ante thronum Dei, tibi omnia mea negotia et desideria committo. O Sancte Ioseph, adsis mihi potenti intercessione tua et a Filio tuo Divino impetra omnes gratias spirituales et temporales quibus indigeo. Amen.»",
      days: [
        {
          title: "Dies I — Vocatio Sancti Ioseph",
          meditation: "Sanctus Ioseph, ab aeterno a Deo electus ut sponsus Mariae et pater adoptivus Iesu esset. Meditare in magnitudine vocationis suae et pete a Deo ut tuam ipse invenias.",
          prayer: `O Sancte Ioseph, a Deo vocatus fuisti ad missionem unicam in historia salutis.
Adiuva me meam propriam vocationem cognoscere et amare,
respondere eodem generoso «fiat» quod tu dedisti
cum angelus mysterium tibi revelavit.

Ut et ego cum fide dicam: «Fiat voluntas tua».

Amen.`,
        },
        {
          title: "Dies II — Fides Sancti Ioseph",
          meditation: "Sanctus Ioseph credidit non videns, confidit non intellegens. Fides eius in Deum probata et purificata est. Pete gratiam fidei fortis quae non vacillet ante difficultates.",
          prayer: `Sancte Ioseph, vir profundae fidei,
credidisti verbo angeli
et sine haesitatione egisti.
Da mihi fidem firmam et confidentem
quae me sustineat in momentis obscuritatis.

Quando viam Dei in vita mea non intelligo,
adiuva me credere et confidenter progredi.

Amen.`,
        },
        {
          title: "Dies III — Castitas Sancti Ioseph",
          meditation: "Sanctus Ioseph, «vir iustus», perfecta cordis castitate vixit. Amor eius erga Mariam sacer et fidelis fuit. Pete gratiam castitatis in cogitationibus, verbis et operibus.",
          prayer: `Castissime Sancte Ioseph,
exemplum castitatis et rectitudinis,
intercede pro me ut cor meum purum sit
et actiones meae amorem Dei reflectant.

Protege animam meam et familiae meae
ab omnibus quae a Deo avertunt.

Amen.`,
        },
        {
          title: "Dies IV — Labor Sancti Ioseph",
          meditation: "Sanctus Ioseph laborem manibus suis sanctificavit. Faber lignarius Nazarethanus, Iesum valorem laboris honesti docuit. Pete gratiam laborandi cum amore et dignitate.",
          prayer: `Sancte Ioseph Opifex,
laborem meum cotidianum sanctifica
omniumque qui honeste laborant.
Ut in labore inveniam
non solum sustentaculum corporis
sed etiam animae.

Intercede pro iis qui laborem non habent
et pro iis qui explorationi obnoxii sunt.

Amen.`,
        },
        {
          title: "Dies V — Silentium Sancti Ioseph",
          meditation: "In Evangeliis, Sanctus Ioseph numquam loquitur. Vita eius testimonium actionis silentis in servitio Dei fuit. Pete gratiam silentii interioris ad Deum audiendum.",
          prayer: `Sancte Ioseph silentii sacri,
doce me audire antequam loquar,
orare antequam agam,
confidere antequam intellegere velim.

In strepitu huius mundi,
adiuva me invenire silentium interius
ubi Deus cordi meo loquitur.

Amen.`,
        },
        {
          title: "Dies VI — Oboedientia Sancti Ioseph",
          meditation: "Sanctus Ioseph Deo oboedivit quotienscumque angelus ei locutus est: Mariam accipiendo, in Aegyptum fugiendo, in Israhel redeundo. Oboedientia eius vitam Salvatoris servavit. Pete gratiam oboedientiae Deo.",
          prayer: `Oboediens Sancte Ioseph,
surrexisti quotienscumque Deus te vocavit,
sine quaestione, sine haesitatione, sine mora.
Da mihi gratiam Deo oboediendi
in omni circumstantia vitae meae,
maxime quando vias eius non intellego.

Voluntas mea semper ante voluntatem divinam
inclinetur.

Amen.`,
        },
        {
          title: "Dies VII — Mansuetudo Sancti Ioseph",
          meditation: "Sanctus Ioseph Iesum amore veri patris amavit. Protexit, nutrivit, laborare docuit. Amor eius concretus et fidelis fuit. Pete gratiam amoris familiaris.",
          prayer: `Sancte Ioseph pater amans,
qui Iesum manibus fortibus et corde tenero curavisti,
intercede pro patribus et matribus mundi.

Domus nostrae scholae amoris sint,
pueri securi et amati crescant,
et familiae primum speculum
amoris Dei in mundo sint.

Amen.`,
        },
        {
          title: "Dies VIII — Sanctus Ioseph Protector Ecclesiae",
          meditation: "Pius IX Papa Sanctum Ioseph Patronum Ecclesiae Universalis proclamavit. Corpus Christi Nazareti protexit; nunc Corpus Christi quod est Ecclesia protegit. Pete gratiam Ecclesiam amandi et serviendi.",
          prayer: `Sancte Ioseph, custos Sanctae Ecclesiae,
Corpus Mysticum Christi sub tua protectione est.
Intercede pro Papa, episcopis, sacerdotibus
omnibusque fidelibus.

Protege Ecclesiam ab impugnationibus mali,
sanctitatem eius renova
et adiuva eam ut semper signum amoris Dei pro mundo sit.

Amen.`,
        },
        {
          title: "Dies IX — Sanctus Ioseph Patronus Bonae Mortis",
          meditation: "Sanctus Ioseph in ulnis Iesu et Mariae mortuus est. Ideo ut patronus bonae mortis invocatur. Pete gratiam moriendi in gratia Dei, amore Mariae et Ecclesiae adiutus.",
          prayer: `Sancte Ioseph, patrone bonae mortis,
qui oculos tuos mundo clausisti
in ulnis Iesu et Mariae,
impetra mihi gratiam in fide perseverandi
usque ad finem vitae meae.

Quando hora mea venerit,
in gratia me invenias,
et tu sis qui me comiteris
in praesentiam Dei.

Amen.`,
        },
      ],
    },
  },
  catechism: {
    title: "Catechismus Ecclesiae Catholicae",
    subtitle: "Quattuor columnae fidei",
    intro:
      "Catechismus Ecclesiae Catholicae (CEC), anno 1992 a Ioanne Paulo II editus, est compendium officiale doctrinae Ecclesiae. Dividitur in quattuor columnas magnas quae totam vitam christianam complectuntur.",
    sourceLabel: "CEC",
    closingQuote: `«Audi, Israel: Dominus Deus noster, Dominus unus est; et diliges Dominum Deum tuum ex toto corde tuo et ex tota anima tua et ex tota mente tua et ex tota virtute tua.»`,
    closingQuoteRef: "— Marcum 12:29-30 · CEC 2196",
    pillars: [
      {
        id: "symbolum",
        icon: "✝️",
        color: "amber",
        title: "Professio Fidei",
        subtitle: "Quod credimus",
        intro:
          "Prima columna Symbolum Apostolorum exponit — magna symbola fidei quae mysterium Dei Patris, Filii et Spiritus Sancti summarie continent.",
        items: [
          {
            number: "CEC 26",
            title: "Capacitas Hominis ad Deum",
            text: `«Vita hominis cum Deo incipit eo momento quo homo se ad imaginem Dei factum esse intelligit, ordinatum ad plenitudinem vitae cum Eo. Deus hominem ad Se attrahere non desinit, et solum in Deo homo veritatem et felicitatem inveniet quam sine intermissione quaerit.»`,
          },
          {
            number: "CEC 234",
            title: "Mysterium Sanctissimae Trinitatis",
            text: `«Mysterium Sanctissimae Trinitatis est mysterium centrale fidei et vitae christianae. Est mysterium Dei in Seipso. Est igitur fons omnium aliorum mysteriorum fidei, lux quae ea illuminat.»`,
          },
          {
            number: "CEC 456",
            title: "Cur Verbum Caro Factum Est?",
            text: `«In Symbolo Nicaeno respondemus confitentes: "Propter nos homines et propter nostram salutem descendit de caelis; et incarnatus est de Spiritu Sancto ex Maria Virgine et homo factus est." Verbum caro factum est propter nos ut nos salvaret nos Deo reconcilians.»`,
          },
          {
            number: "CEC 988",
            title: "Resurrectio Carnis",
            text: `«Symbolum christianum — professio fidei nostrae in Deum Patrem, Filium et Spiritum Sanctum — culminat in proclamatione resurrectionis mortuorum in fine temporum et vitae aeternae.»`,
          },
          {
            number: "CEC 748",
            title: "Christus — Lux Gentium",
            text: `«Christus est lux gentium. Hoc Sacrosanctum Concilium, in Spiritu Sancto congregatum, omnes homines luce Christi illuminare ardenter desiderat, quae in facie Ecclesiae splendet, Evangelium omni creaturae praedicando.»`,
          },
        ],
      },
      {
        id: "sacramenta",
        icon: "🕊️",
        color: "blue",
        title: "Sacramenta",
        subtitle: "Quomodo fidem celebramus",
        intro:
          "Septem sacramenta sunt signa efficacia gratiae a Christo instituta et Ecclesiae concredita. Per ea nobis vita divina dispensatur. Omnes periodos et omnia momenta vitae christianae complectuntur.",
        items: [
          {
            number: "CEC 1113",
            title: "Sacramenta Christi",
            text: `«Tota vita liturgica Ecclesiae circa sacrificium eucharisticum et sacramenta versatur. In Ecclesia sunt septem sacramenta: Baptismus, Confirmatio seu Chrismatio, Eucharistia, Paenitentia, Unctio infirmorum, Ordo et Matrimonium.»`,
          },
          {
            number: "CEC 1213",
            title: "Baptismus — Porta Vitae",
            text: `«Baptismus sanctus est fundamentum totius vitae christianae, porticus vitae in Spiritu et porta quae accessum ad alia sacramenta aperit. Per Baptismum a peccato liberamur et quasi filii Dei regeneramur, membra Christi efficimur, Ecclesiae incorporamur.»`,
          },
          {
            number: "CEC 1322",
            title: "Eucharistia — Fons et Culmen",
            text: `«Eucharistia sacra initiationem christianam perficit. Qui ad dignitatem sacerdotii regalis per Baptismum elevati et per Confirmationem Christo profundius configurati sunt, per Eucharistiam cum tota communitate in ipso sacrificio Domini participant.»`,
          },
          {
            number: "CEC 1440",
            title: "Paenitentia et Reconciliatio",
            text: `«Peccatum est primario offensa in Deum, ruptura communionis cum Eo. Simul nocet communioni cum Ecclesia. Quapropter conversio implicat et Dei veniam et reconciliationem cum Ecclesia, quae liturgice exprimuntur et perficiuntur per sacramentum Paenitentiae et Reconciliationis.»`,
          },
          {
            number: "CEC 1601",
            title: "Matrimonium in Consilio Dei",
            text: `«Foedus matrimoniale, quo vir et mulier inter se consortium totius vitae constituunt, indole sua naturali ad bonum coniugum atque ad prolis procreationem et educationem ordinatum, a Christo Domino ad sacramenti dignitatem inter baptizatos evectum est.»`,
          },
        ],
      },
      {
        id: "vita",
        icon: "🌿",
        color: "green",
        title: "Vita in Christo",
        subtitle: "Quomodo fidem vivimus",
        intro:
          "Tertia columna praesentat ultimam vocationem hominis: beatitudinem. Iter huius vocationis per Decem Praecepta, Beatitudines et virtutes tractat.",
        items: [
          {
            number: "CEC 1716",
            title: "Beatitudines",
            text: `«Beatitudines sunt in corde praedicationis Iesu. Reprehendunt et implent promissiones populo electo ab Abraham factas. Beatitudines eas implent ordinando eas non iam ad solam possessionem territorii, sed ad Regnum caelorum.»`,
          },
          {
            number: "CEC 1803",
            title: "Virtutes Humanae",
            text: `«Virtus est dispositio habitualis et firma ad bonum faciendum. Permittit personae non solum actus bonos peragere, sed optimum sui praebere. Persona virtuosa ad bonum tendit omnibus viribus suis sensualibus et spiritualibus.»`,
          },
          {
            number: "CEC 1858",
            title: "Decem Praecepta",
            text: `«Decem Praecepta enuntiant quid amor Dei et amor proximi implicant. Prima tria ad amorem Dei pertinent, et septem alia ad amorem proximi. Sicut caritas duo praecepta comprehendit quibus Dominus "totam Legem et prophetas" annexuit, ita Decalogus unitatem organicam format.»`,
          },
          {
            number: "CEC 2052",
            title: "«Magister, quid boni faciam?»",
            text: `«"Vade, vende quae habes, et da pauperibus, et habebis thesaurum in caelo; et veni, sequere me." Hoc loco apparet iter perfectionis per crucem transire. Inseparabile vinculum est inter Iesum sequi et Praecepta.»`,
          },
          {
            number: "CEC 2196",
            title: "Doctrina Socialis Ecclesiae",
            text: `«Interrogatus de primo mandatorum, Iesus respondit: "Primum est: Audi, Israel: Dominus Deus noster, Dominus unus est; et diliges Dominum Deum tuum ex toto corde tuo et ex tota anima tua et ex tota mente tua et ex tota virtute tua. Secundum est illud: Diliges proximum tuum tamquam teipsum."»`,
          },
        ],
      },
      {
        id: "oratio",
        icon: "🙏",
        color: "purple",
        title: "Oratio Christiana",
        subtitle: "Quomodo cum Deo loquimur",
        intro:
          "Quarta columna sensum et momentum orationis in vita christiana revelat. Orationem Dominicam ut exemplum et culmen omnis orationis christianae praesentat.",
        items: [
          {
            number: "CEC 2558",
            title: "Quid est Oratio?",
            text: `«"Magnum est mysterium fidei!" Ecclesia id profitetur in Symbolo Apostolorum et celebrat in liturgia sacramentali, ut vita fidelium conformetur Christo in Spiritu Sancto ad gloriam Dei Patris. Hoc mysterium exigit ut fideles id credant, celebrent et ex eo vivant in relatione viva et personali cum Deo vivo et vero. Haec relatio est oratio.»`,
          },
          {
            number: "CEC 2607",
            title: "Iesus Nos Orationem Docet",
            text: `«Cum Iesus orat, iam nos docet quomodo oremus. Oratio Eius ad Patrem est iter theologicum orationis nostrae ad Deum. Sed Evangelia continent etiam expressam doctrinam Iesu de oratione. Ut sapiens Magister, nos accipit ubi sumus et nos progressive ad Patrem ducit.»`,
          },
          {
            number: "CEC 2759",
            title: "Oratio Dominica",
            text: `«Iesus "erat in loco quodam orans; ut cessavit, dixit unus ex discipulis eius ad eum: Domine, doce nos orare." Ad hanc petitionem Dominus discipulis suis et Ecclesiae suae orationem christianam fundamentalem tradit. Sanctus Lucas brevem textum quinque petitionum praebet; sanctus Matthaeus versionem magis evolutam septem petitionum.»`,
          },
          {
            number: "CEC 2761",
            title: "Summa Totius Evangelii",
            text: `«Oratio Dominica est revera "summa totius Evangelii". "Cum Dominus hanc formam orationis tradidisset, alibi dixit: Petite et accipietis; et cum unusquisque suas proprias haberet necessitates, haec communis et ordinaria oratio primo docta est quasi fundamentum desideriorum ulteriorum."»`,
          },
          {
            number: "CEC 2644",
            title: "Formae Orationis",
            text: `«Spiritus Sanctus qui Ecclesiam docet et ei commemorat omnia quae Iesus dixit, eam etiam in vita orationis educat, suscitando expressiones quae formas essentiales orationis renovant: benedictionem et adorationem, petitionem, intercessionem, gratiarum actionem et laudem.»`,
          },
        ],
      },
    ],
  },
};

export default la;
