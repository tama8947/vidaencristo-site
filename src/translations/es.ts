import type { Translations } from "./en";

const es: Translations = {
  nav: {
    home: "Inicio",
    prayers: "Oraciones",
    rosary: "Rosario",
    mercy: "Obras de Misericordia",
    gallery: "Galería",
    sanJose: "San José",
    catechism: "Catecismo",
  },
  hero: {
    tagline: "Vida en Cristo",
    subtitle: "La Vida en Cristo",
    description:
      "Un lugar de oración, fe y devoción. Encuentra paz en la presencia del Señor.",
    ctaPrayers: "Explorar Oraciones",
    ctaRosary: "Rezar el Rosario",
    verse:
      '"Yo soy el camino, la verdad y la vida." — Juan 14:6',
  },
  prayers: {
    title: "Oraciones Sagradas",
    subtitle:
      "Acércate a Dios a través de estas oraciones eternas de la Iglesia",
    ourFather: {
      title: "El Padre Nuestro",
      subtitle: "Oración del Señor",
      text: `Padre nuestro, que estás en el cielo,
santificado sea tu nombre;
venga a nosotros tu reino;
hágase tu voluntad en la tierra como en el cielo.
Danos hoy nuestro pan de cada día;
perdona nuestras ofensas,
como también nosotros perdonamos
a los que nos ofenden;
no nos dejes caer en tentación,
y líbranos del mal.
Amén.`,
    },
    hailMary: {
      title: "Ave María",
      subtitle: "Dios te salve, María",
      text: `Dios te salve, María,
llena eres de gracia,
el Señor es contigo.
Bendita tú eres entre todas las mujeres,
y bendito es el fruto de tu vientre, Jesús.
Santa María, Madre de Dios,
ruega por nosotros, pecadores,
ahora y en la hora de nuestra muerte.
Amén.`,
    },
    gloryBe: {
      title: "Gloria al Padre",
      subtitle: "Doxología",
      text: `Gloria al Padre,
y al Hijo,
y al Espíritu Santo.
Como era en el principio,
ahora y siempre,
por los siglos de los siglos.
Amén.`,
    },
    apostlesCreed: {
      title: "Credo de los Apóstoles",
      subtitle: "El Credo",
      text: `Creo en Dios, Padre todopoderoso,
Creador del cielo y de la tierra.
Creo en Jesucristo,
su único Hijo, nuestro Señor,
que fue concebido por obra y gracia del Espíritu Santo,
nació de santa María Virgen,
padeció bajo el poder de Poncio Pilato,
fue crucificado, muerto y sepultado,
descendió a los infiernos,
al tercer día resucitó de entre los muertos,
subió a los cielos
y está sentado a la derecha de Dios, Padre todopoderoso.
Desde allí ha de venir a juzgar a vivos y muertos.
Creo en el Espíritu Santo,
la santa Iglesia católica,
la comunión de los santos,
el perdón de los pecados,
la resurrección de la carne
y la vida eterna.
Amén.`,
    },
    holySpirit: {
      title: "Oración al Espíritu Santo",
      subtitle: "Veni Sancte Spiritus",
      text: `Ven, Espíritu Santo,
llena los corazones de tus fieles
y enciende en ellos el fuego de tu amor.
Envía tu Espíritu y serán creados,
y renovarás la faz de la tierra.
¡Oh Dios, que has iluminado
los corazones de tus fieles
con la luz del Espíritu Santo!,
concédenos que, por ese mismo Espíritu,
tengamos siempre recto sentir
y gocemos de su consuelo.
Por Jesucristo Nuestro Señor.
Amén.`,
    },
    magnificat: {
      title: "El Magnificat",
      subtitle: "Cántico de María — Lucas 1:46-55",
      text: `Proclama mi alma la grandeza del Señor,
se alegra mi espíritu en Dios, mi Salvador;
porque ha mirado la humillación de su esclava.
Desde ahora me felicitarán todas las generaciones,
porque el Poderoso ha hecho obras grandes por mí:
su nombre es Santo,
y su misericordia llega a sus fieles
de generación en generación.
Él hace proezas con su brazo:
dispersa a los soberbios de corazón,
derriba del trono a los poderosos
y enaltece a los humildes,
a los hambrientos los colma de bienes
y a los ricos los despide vacíos.
Auxilia a Israel, su siervo,
acordándose de la misericordia
—como lo había prometido a nuestros padres—
en favor de Abrahán y su descendencia por siempre.
Amén.`,
    },
  },
  rosary: {
    title: "El Santo Rosario",
    subtitle:
      "Medita en los misterios de la vida de Cristo a través de esta oración antigua",
    intro:
      "El Rosario es una poderosa oración que nos une a María y nos lleva a Cristo. Cada conjunto de misterios nos invita a contemplar momentos clave en la vida de Jesús.",
    mysteries: {
      joyful: {
        name: "Misterios Gozosos",
        day: "Lunes y Sábado",
        color: "from-pink-900 to-rose-800",
        items: [
          {
            name: "La Anunciación",
            meditation: "Contemplamos el momento en que el ángel Gabriel anuncia a María que será la Madre del Salvador. Meditemos en su humilde «sí» a la voluntad de Dios.",
            verse: '"Alégrate, llena de gracia, el Señor está contigo." — Lucas 1:28',
          },
          {
            name: "La Visitación",
            meditation: "María, llevando a Jesús en su seno, visita a su prima Isabel. La presencia de Jesús llena de gozo y del Espíritu Santo el hogar de Zacarías.",
            verse: '"¿Cómo es posible que la madre de mi Señor venga a visitarme?" — Lucas 1:43',
          },
          {
            name: "El Nacimiento de Jesús",
            meditation: "Contemplamos al Hijo de Dios haciéndose pequeño, nacido en un pesebre. Él es la luz del mundo que viene a iluminar nuestras tinieblas.",
            verse: '"Hoy les ha nacido en la ciudad de David un Salvador, que es Cristo el Señor." — Lucas 2:11',
          },
          {
            name: "La Presentación en el Templo",
            meditation: "María y José ofrecen a Jesús al Padre en el templo. Simeón reconoce al Salvador prometido y profetiza su misión universal.",
            verse: '"Este niño está puesto para caída y resurgimiento de muchos en Israel." — Lucas 2:34',
          },
          {
            name: "El Niño Perdido y Hallado en el Templo",
            meditation: "Durante tres días, María y José buscan a Jesús con angustia. Lo encuentran en la casa de su Padre, cumpliendo ya su misión divina.",
            verse: '"¿No sabíais que yo debía estar en la casa de mi Padre?" — Lucas 2:49',
          },
        ],
      },
      sorrowful: {
        name: "Misterios Dolorosos",
        day: "Martes y Viernes",
        color: "from-red-950 to-red-900",
        items: [
          {
            name: "La Agonía en el Huerto",
            meditation: "Jesús suda sangre en Getsemaní, cargando el peso de todos nuestros pecados. Su amor por el Padre y por nosotros lo sostiene en la hora más oscura.",
            verse: '"Padre, si quieres, aparta de mí este cáliz; pero no se haga mi voluntad, sino la tuya." — Lucas 22:42',
          },
          {
            name: "La Flagelación",
            meditation: "El cuerpo de Jesús es desgarrado por los azotes. Con cada golpe carga nuestras enfermedades y sana las heridas del pecado.",
            verse: '"Él fue herido por nuestras transgresiones, molido por nuestras iniquidades." — Isaías 53:5',
          },
          {
            name: "La Coronación de Espinas",
            meditation: "Los soldados coronan a Jesús con espinas, burlándose de su realeza. Él soporta la humillación con mansedumbre e infinito amor.",
            verse: '"Le pusieron una corona de espinas y una caña en su mano derecha." — Mateo 27:29',
          },
          {
            name: "Jesús con la Cruz a Cuestas",
            meditation: "Jesús carga la cruz por las calles de Jerusalén, cayendo varias veces. Su amor por nosotros es más fuerte que cualquier dolor.",
            verse: '"Cargando su propia cruz, salió hacia el lugar llamado del Cráneo." — Juan 19:17',
          },
          {
            name: "La Crucifixión",
            meditation: "En la cruz, Jesús entrega su vida por amor a nosotros. Con sus últimas palabras nos confía a María y perdona a todos los pecadores.",
            verse: '"Padre, perdónalos, porque no saben lo que hacen." — Lucas 23:34',
          },
        ],
      },
      glorious: {
        name: "Misterios Gloriosos",
        day: "Miércoles y Domingo",
        color: "from-amber-900 to-yellow-800",
        items: [
          {
            name: "La Resurrección",
            meditation: "Al amanecer del tercer día, Cristo resucita victorioso sobre la muerte. Éste es el fundamento de nuestra fe y la fuente de nuestra esperanza.",
            verse: '"¿Por qué buscáis entre los muertos al que vive? No está aquí; ha resucitado." — Lucas 24:5-6',
          },
          {
            name: "La Ascensión",
            meditation: "Jesús asciende a los cielos ante sus discípulos, prometiendo enviar al Espíritu Santo y prepararnos un lugar junto al Padre.",
            verse: '"Este mismo Jesús que ha sido llevado al cielo vendrá de la misma manera." — Hechos 1:11',
          },
          {
            name: "La Venida del Espíritu Santo",
            meditation: "El Espíritu Santo desciende sobre María y los Apóstoles en Pentecostés. La Iglesia nace llena de fuego y de gracia divina.",
            verse: '"Se llenaron todos del Espíritu Santo y comenzaron a hablar en otras lenguas." — Hechos 2:4',
          },
          {
            name: "La Asunción de la Virgen",
            meditation: "Al término de su vida terrena, María es llevada al cielo en cuerpo y alma. Ella nos precede en la gloria que todos esperamos alcanzar.",
            verse: '"Una gran señal apareció en el cielo: una mujer vestida del sol." — Apocalipsis 12:1',
          },
          {
            name: "La Coronación de la Virgen",
            meditation: "María es coronada Reina del cielo y de la tierra. Intercede por nosotros constantemente ante su Hijo Jesucristo.",
            verse: '"A tu derecha está la reina, adornada con oro de Ofir." — Salmo 45:10',
          },
        ],
      },
      luminous: {
        name: "Misterios Luminosos",
        day: "Jueves",
        color: "from-blue-900 to-sky-800",
        items: [
          {
            name: "El Bautismo de Jesús",
            meditation: "Jesús es bautizado en el Jordán y el Padre proclama su identidad divina. Nuestro bautismo nos incorpora a la familia de Dios.",
            verse: '"Este es mi Hijo amado, en quien me complazco." — Mateo 3:17',
          },
          {
            name: "Las Bodas de Caná",
            meditation: "A intercesión de María, Jesús realiza su primer milagro transformando el agua en vino. María nos lleva siempre a su Hijo.",
            verse: '"Haced lo que él os diga." — Juan 2:5',
          },
          {
            name: "La Proclamación del Reino de Dios",
            meditation: "Jesús anuncia el Reino y llama a la conversión. Su mensaje de amor y misericordia transforma los corazones que se abren a Él.",
            verse: '"El tiempo se ha cumplido, el Reino de Dios está cerca; convertíos y creed en el Evangelio." — Marcos 1:15',
          },
          {
            name: "La Transfiguración",
            meditation: "En el Tabor, Jesús revela su gloria divina a Pedro, Santiago y Juan. Esta visión nos da fuerza para afrontar las pruebas de la vida.",
            verse: '"Este es mi Hijo amado, en quien me complazco; escuchadle." — Mateo 17:5',
          },
          {
            name: "La Institución de la Eucaristía",
            meditation: "En la Última Cena, Jesús nos da su Cuerpo y su Sangre como alimento para el camino. La Eucaristía es el corazón de la Iglesia.",
            verse: '"Tomad, comed; esto es mi cuerpo." — Mateo 26:26',
          },
        ],
      },
    },
    howToPray: "Cómo Rezar el Rosario",
    steps: [
      "Comenzar con el Credo en el crucifijo",
      "Rezar el Padre Nuestro en la cuenta grande",
      "Rezar 3 Ave Marías por la fe, esperanza y caridad",
      "Rezar el Gloria y anunciar el Primer Misterio",
      "Rezar el Padre Nuestro en la cuenta grande",
      "Rezar 10 Ave Marías meditando en el misterio",
      "Rezar el Gloria y la oración de Fátima",
      "Continuar con los misterios restantes",
      "Terminar con la Salve Regina",
    ],
  },
  mercy: {
    title: "Obras de Misericordia",
    subtitle:
      "Cristo nos llama a servirle en el prójimo a través de estas obras de amor",
    corporal: {
      title: "Obras Corporales",
      subtitle: "Cuidado del cuerpo",
      items: [
        { title: "Dar de comer al hambriento", icon: "🍞" },
        { title: "Dar de beber al sediento", icon: "💧" },
        { title: "Vestir al desnudo", icon: "👕" },
        { title: "Dar posada al peregrino", icon: "🏠" },
        { title: "Visitar a los enfermos", icon: "❤️‍🩹" },
        { title: "Visitar a los presos", icon: "🕊️" },
        { title: "Enterrar a los muertos", icon: "✝️" },
      ],
    },
    spiritual: {
      title: "Obras Espirituales",
      subtitle: "Cuidado del alma",
      items: [
        { title: "Enseñar al que no sabe", icon: "💡" },
        { title: "Dar buen consejo al que lo necesita", icon: "📖" },
        { title: "Corregir al que se equivoca", icon: "🙏" },
        { title: "Consolar al triste", icon: "🌟" },
        { title: "Perdonar las injurias", icon: "🤝" },
        { title: "Sufrir con paciencia los defectos del prójimo", icon: "☮️" },
        { title: "Rogar a Dios por vivos y difuntos", icon: "🕯️" },
      ],
    },
    verse:
      '"Lo que hicisteis a uno de estos mis hermanos más pequeños, a mí me lo hicisteis." — Mateo 25:40',
  },
  gallery: {
    title: "Imágenes Sagradas",
    subtitle: "Imágenes que inspiran devoción y contemplación",
  },
  footer: {
    tagline: "Difunde el amor de Cristo",
    rights: "Todos los derechos reservados",
    madeWith: "Hecho con",
    andFaith: "y fe",
  },
  sanJose: {
    hero: {
      subtitle: "Padre Adoptivo de Jesús · Esposo de la Virgen María",
      quote: "«Custodio de la Sagrada Familia, Patrono de la Iglesia Universal, modelo de fe, silencio y trabajo»",
    },
    tabs: {
      prayers: "Oraciones",
      rosario: "Rosario",
      novena: "Novena",
    },
    prayers: {
      title: "Oraciones a San José",
      subtitle: "Encomendáos al poderoso patrocinio de San José",
      items: [
        {
          title: "Oración a San José",
          subtitle: "Patrono de la Iglesia Universal",
          text: `Oh San José, esposo de la Virgen María
y padre adoptivo de Jesús,
acude en mi auxilio con tu poderosa intercesión.
Tú que fuiste custodio fiel de la Sagrada Familia,
sé también mi protector en las dificultades de la vida.

Guía mis pasos por el camino del amor y la justicia,
y alcánzame la gracia de vivir siempre
en la voluntad de Dios.

Amén.`,
        },
        {
          title: "Consagración a San José",
          subtitle: "Padre y Protector",
          text: `Glorioso San José,
patrono de la Iglesia Universal,
me consagro hoy a ti
y me pongo bajo tu protección.

Como Jesús estuvo bajo tu cuidado amoroso,
así me encomiendo a tus manos con confianza filial.
Sé mi guía, mi sostén
y mi intercesor ante el Señor.

Que tu vida de silencio y trabajo,
de fe y de obediencia total a Dios,
sea el modelo de mi vida cristiana.

Amén.`,
        },
        {
          title: "Oración por la Familia",
          subtitle: "A San José, Esposo y Padre",
          text: `San José, guardián de la Sagrada Familia,
protege nuestras familias en estos tiempos difíciles.
Que el amor que unió a la Sagrada Familia
reine también en nuestros hogares.

Alcánzanos de tu Hijo Jesús
la gracia de amarnos los unos a los otros,
de perdonarnos, de servirnos
y de caminar juntos hacia el cielo.

Amén.`,
        },
        {
          title: "Oración del Trabajador",
          subtitle: "San José, Patrono de los Trabajadores",
          text: `San José Obrero,
tú que santificaste el trabajo con tus manos,
bendice el trabajo de todos los hombres y mujeres.

Que ningún trabajador carezca de pan,
que ninguna familia sufra injusticia,
y que el fruto del trabajo humano
sea siempre motivo de dignidad y alegría.

Intercede por los que buscan empleo,
por los que trabajan en condiciones difíciles,
y por todos los que cuidan a sus familias.

Amén.`,
        },
      ],
    },
    rosario: {
      title: "Rosario a San José",
      subtitle: "Siete Dolores y Siete Gozos",
      intro: `El Rosario de San José medita en los Siete Dolores y los Siete Gozos de este gran santo.
Se reza con siete grupos de 7 Avemarías, meditando en cada misterio de la vida de San José.
Cada decena va precedida de un Padrenuestro y finaliza con una Gloria.`,
      dolorLabel: "Dolor",
      gozoLabel: "Gozo",
      closingNote: "Concluye con la Salve y la siguiente jaculatoria:",
      closingPrayer: "«San José, ruega por nosotros.»",
      mysteries: [
        {
          title: "Primer Misterio",
          dolor: "La duda de San José sobre el origen del embarazo de María",
          gozo: "El ángel revela a San José que Jesús es el Hijo de Dios",
          verse: '"José, hijo de David, no temas recibir a María tu esposa, porque lo que en ella se ha engendrado es obra del Espíritu Santo." — Mateo 1:20',
        },
        {
          title: "Segundo Misterio",
          dolor: "La pobreza del pesebre de Belén",
          gozo: "El nacimiento de Jesús, el Salvador del mundo",
          verse: '"Y dio a luz a su hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre." — Lucas 2:7',
        },
        {
          title: "Tercer Misterio",
          dolor: "La profecía de Simeón sobre el dolor de María",
          gozo: "Las profecías sobre Jesús como luz de las naciones",
          verse: '"Este niño está puesto para caída y resurgimiento de muchos." — Lucas 2:34',
        },
        {
          title: "Cuarto Misterio",
          dolor: "La huida a Egipto para escapar de Herodes",
          gozo: "La protección divina sobre la Sagrada Familia en Egipto",
          verse: '"Levántate, toma al niño y a su madre, y huye a Egipto." — Mateo 2:13',
        },
        {
          title: "Quinto Misterio",
          dolor: "La amargura del destierro en tierra extranjera",
          gozo: "El regreso a la tierra prometida tras la muerte de Herodes",
          verse: '"Levántate, toma al niño y a su madre, y regresa a la tierra de Israel." — Mateo 2:20',
        },
        {
          title: "Sexto Misterio",
          dolor: "El extravío del Niño Jesús en Jerusalén",
          gozo: "El hallazgo de Jesús en el Templo entre los doctores",
          verse: '"Y lo encontraron en el Templo, sentado en medio de los maestros." — Lucas 2:46',
        },
        {
          title: "Séptimo Misterio",
          dolor: "La enfermedad y muerte de San José",
          gozo: "San José muere asistido por Jesús y María, alcanzando la gloria eterna",
          verse: '"Precioso a los ojos del Señor es la muerte de sus fieles." — Salmo 116:15',
        },
      ],
    },
    novena: {
      title: "Novena a San José",
      subtitle: "Nueve días de oración y meditación",
      meditationLabel: "Meditación",
      prayerLabel: "Oración del día",
      finalPrayerTitle: "Oración Final de la Novena",
      finalPrayer: "«Oh San José, cuya protección es tan grande, tan fuerte, tan pronta ante el trono de Dios, a ti confío todos mis intereses y deseos. Oh San José, asísteme con tu poderosa intercesión y obtén de tu Divino Hijo todas las gracias espirituales y temporales que necesito. Amén.»",
      days: [
        {
          title: "Día 1 — La Vocación de San José",
          meditation: "San José, escogido por Dios desde la eternidad para ser el esposo de María y padre adoptivo de Jesús. Medita en la grandeza de tu vocación y pide a Dios que descubras la tuya.",
          prayer: `Oh San José, tú fuiste llamado por Dios para una misión única en la historia de la salvación.
Ayúdame a conocer y amar mi propia vocación,
a responder con el mismo «sí» generoso que tú diste
cuando el ángel te reveló el misterio.

Que yo también diga con fe: «Hágase tu voluntad».

Amén.`,
        },
        {
          title: "Día 2 — La Fe de San José",
          meditation: "San José creyó sin ver, confió sin entender. Su fe en Dios fue probada y purificada. Pide la gracia de una fe fuerte que no vacile ante las dificultades.",
          prayer: `San José, hombre de profunda fe,
tú creyiste la palabra del ángel
y actuaste sin dudar.
Dame una fe firme y confiada
que me sostenga en mis momentos de oscuridad.

Cuando no entienda el camino de Dios en mi vida,
ayúdame a creer y a avanzar con confianza.

Amén.`,
        },
        {
          title: "Día 3 — La Pureza de San José",
          meditation: "San José, el «hombre justo», vivió con perfecta pureza de corazón. Su amor por María fue sagrado y fiel. Pide la gracia de la pureza en pensamientos, palabras y obras.",
          prayer: `San José castísimo,
modelo de pureza y rectitud,
intercede por mí para que mi corazón sea limpio
y mis acciones reflejen el amor de Dios.

Protege mi alma y la de mi familia
de todo lo que aleje de Dios.

Amén.`,
        },
        {
          title: "Día 4 — El Trabajo de San José",
          meditation: "San José santificó el trabajo con sus manos. Carpintero de Nazaret, enseñó a Jesús el valor del trabajo honrado. Pide la gracia de trabajar con amor y dignidad.",
          prayer: `San José Obrero,
santifica mi trabajo diario
y el de todas las personas que trabajan con honradez.
Que yo encuentre en el trabajo
no solo sustento para el cuerpo
sino también para el alma.

Intercede por los que no tienen trabajo
y por los que sufren explotación.

Amén.`,
        },
        {
          title: "Día 5 — El Silencio de San José",
          meditation: "En los Evangelios, San José nunca habla. Su vida fue un testimonio de acción silenciosa al servicio de Dios. Pide la gracia del silencio interior para escuchar a Dios.",
          prayer: `San José del silencio sagrado,
enséñame a escuchar antes de hablar,
a orar antes de actuar,
a confiar antes de querer entender.

En el ruido de este mundo,
ayúdame a encontrar el silencio interior
donde Dios me habla al corazón.

Amén.`,
        },
        {
          title: "Día 6 — La Obediencia de San José",
          meditation: "San José obedeció a Dios cada vez que el ángel le habló: al recibir a María, al huir a Egipto, al regresar a Israel. Su obediencia salvó la vida del Salvador. Pide la gracia de la obediencia a Dios.",
          prayer: `San José obediente,
tú te levantaste siempre que Dios te llamó,
sin preguntar, sin dudar, sin demora.
Dame la gracia de obedecer a Dios
en cada circunstancia de mi vida,
especialmente cuando no entiendo sus caminos.

Que mi voluntad se doble siempre
ante la voluntad divina.

Amén.`,
        },
        {
          title: "Día 7 — La Ternura de San José",
          meditation: "San José amó a Jesús con ternura de padre verdadero. Lo protegió, lo alimentó, lo enseñó a trabajar. Su amor fue concreto y fiel. Pide la gracia del amor familiar.",
          prayer: `San José padre amoroso,
tú que cuidaste a Jesús con manos fuertes y corazón tierno,
intercede por los padres y las madres del mundo.

Que los hogares sean escuelas de amor,
que los niños crezcan seguros y amados,
y que las familias sean el primer reflejo
del amor de Dios en el mundo.

Amén.`,
        },
        {
          title: "Día 8 — San José, Protector de la Iglesia",
          meditation: "El Papa Pío IX proclamó a San José Patrono de la Iglesia Universal. Él protegió al Cuerpo de Cristo en Nazaret; ahora protege al Cuerpo de Cristo que es la Iglesia. Pide la gracia de amar y servir a la Iglesia.",
          prayer: `San José, guardián de la Santa Iglesia,
bajo tu protección está el Cuerpo Místico de Cristo.
Intercede por el Papa, los obispos, sacerdotes
y todos los fieles.

Protege a la Iglesia de los ataques del mal,
renueva su santidad
y ayúdala a ser siempre signo del amor de Dios para el mundo.

Amén.`,
        },
        {
          title: "Día 9 — San José, Patrono de la Buena Muerte",
          meditation: "San José murió en los brazos de Jesús y María. Por eso se le invoca como patrono de la buena muerte. Pide la gracia de morir en la gracia de Dios, asistido por el amor de María y de la Iglesia.",
          prayer: `San José, patrono de la buena muerte,
tú que cerraste tus ojos al mundo
en los brazos de Jesús y María,
alcánzame la gracia de perseverar en la fe
hasta el final de mi vida.

Que cuando llegue mi hora,
me encuentres en gracia,
y seas tú quien me acompañe
a la presencia de Dios.

Amén.`,
        },
      ],
    },
  },
  catechism: {
    title: "Catecismo de la Iglesia Católica",
    subtitle: "Los cuatro pilares de la fe",
    intro:
      "El Catecismo de la Iglesia Católica (CIC), publicado en 1992 por el Papa Juan Pablo II, es el compendio oficial de la doctrina de la Iglesia. Se organiza en cuatro grandes pilares que abarcan la totalidad de la vida cristiana.",
    sourceLabel: "CIC",
    closingQuote: `«Escucha, Israel: El Señor nuestro Dios es el único Señor. Amarás al Señor tu Dios con todo tu corazón, con toda tu alma, con toda tu mente y con todas tus fuerzas.»`,
    closingQuoteRef: "— Marcos 12:29-30 · CIC 2196",
    pillars: [
      {
        id: "credo",
        icon: "✝️",
        color: "amber",
        title: "La Profesión de la Fe",
        subtitle: "Lo que creemos",
        intro:
          "El primer pilar expone el Credo Apostólico — los grandes símbolos de la fe que resumen el misterio de Dios: Padre, Hijo y Espíritu Santo, y su obra de creación y salvación.",
        items: [
          {
            number: "CIC 26",
            title: "La Capacidad Humana de Dios",
            text: `«La vida del hombre con Dios comienza en el momento en que este se da cuenta de que ha sido hecho a imagen de Dios, orientado hacia la plenitud de vida con Él. Dios no cesa de atraer al hombre hacia sí, y sólo en Dios encontrará el hombre la verdad y la felicidad que no cesa de buscar.»`,
          },
          {
            number: "CIC 234",
            title: "El Misterio de la Santísima Trinidad",
            text: `«El misterio de la Santísima Trinidad es el misterio central de la fe y de la vida cristiana. Es el misterio de Dios en sí mismo. Es, pues, la fuente de todos los otros misterios de la fe; es la luz que los ilumina.»`,
          },
          {
            number: "CIC 456",
            title: "¿Por Qué el Verbo Se Hizo Carne?",
            text: `«Con el Credo de Nicea respondemos confesando: "Por nosotros los hombres y por nuestra salvación bajó del cielo, y por obra del Espíritu Santo se encarnó de María la Virgen y se hizo hombre." El Verbo se hizo carne para nosotros a fin de salvarnos reconciliándonos con Dios.»`,
          },
          {
            number: "CIC 748",
            title: "Cristo — Luz de las Naciones",
            text: `«Cristo es la luz de todos los pueblos. Este sacrosanto Concilio, reunido en el Espíritu Santo, desea ardientemente iluminar a todos los hombres con la luz de Cristo, que resplandece sobre el rostro de la Iglesia, anunciando el Evangelio a toda criatura.»`,
          },
          {
            number: "CIC 988",
            title: "La Resurrección de la Carne",
            text: `«El Credo cristiano — profesión de nuestra fe en Dios Padre, Hijo y Espíritu Santo, y en su acción creadora, salvadora y santificadora — culmina en la proclamación de la resurrección de los muertos al fin de los tiempos y en la vida eterna.»`,
          },
        ],
      },
      {
        id: "sacramentos",
        icon: "🕊️",
        color: "blue",
        title: "Los Sacramentos",
        subtitle: "Cómo celebramos la fe",
        intro:
          "Los siete sacramentos son los signos eficaces de la gracia instituidos por Cristo y confiados a la Iglesia. Por medio de ellos nos es dispensada la vida divina. Abarcan todas las etapas y todos los momentos importantes de la vida cristiana.",
        items: [
          {
            number: "CIC 1113",
            title: "Los Sacramentos de Cristo",
            text: `«Toda la vida litúrgica de la Iglesia gira en torno al sacrificio eucarístico y a los sacramentos. En la Iglesia hay siete sacramentos: el Bautismo, la Confirmación o Crismación, la Eucaristía, la Penitencia, la Unción de los enfermos, el Orden y el Matrimonio.»`,
          },
          {
            number: "CIC 1213",
            title: "El Bautismo — Puerta de la Vida",
            text: `«El santo Bautismo es el fundamento de toda la vida cristiana, el pórtico de la vida en el espíritu y la puerta que abre el acceso a los otros sacramentos. Por el Bautismo somos liberados del pecado y regenerados como hijos de Dios, llegamos a ser miembros de Cristo y somos incorporados a la Iglesia.»`,
          },
          {
            number: "CIC 1322",
            title: "La Eucaristía — Fuente y Cumbre",
            text: `«La sagrada Eucaristía culmina la iniciación cristiana. Los que han sido elevados a la dignidad del sacerdocio real por el Bautismo y configurados más profundamente a Cristo por la Confirmación, participan por medio de la Eucaristía con toda la comunidad en el sacrificio del Señor.»`,
          },
          {
            number: "CIC 1440",
            title: "Penitencia y Reconciliación",
            text: `«El pecado es ante todo una ofensa a Dios, una ruptura de la comunión con Él. Al mismo tiempo atenta contra la comunión con la Iglesia. Por eso la conversión implica a la vez el perdón de Dios y la reconciliación con la Iglesia, que son expresados y realizados litúrgicamente por el sacramento de la Penitencia y de la Reconciliación.»`,
          },
          {
            number: "CIC 1601",
            title: "El Matrimonio en el Plan de Dios",
            text: `«La alianza matrimonial, por la que el varón y la mujer constituyen entre sí un consorcio de toda la vida, ordenado por su misma índole natural al bien de los cónyuges y a la generación y educación de la prole, fue elevada por Cristo Nuestro Señor a la dignidad de sacramento.»`,
          },
        ],
      },
      {
        id: "vida",
        icon: "🌿",
        color: "green",
        title: "La Vida en Cristo",
        subtitle: "Cómo vivimos la fe",
        intro:
          "El tercer pilar presenta la vocación última del hombre: la bienaventuranza. Traza el camino de esa vocación a través de los Diez Mandamientos, las Bienaventuranzas y las virtudes que conducen a una vida digna del Evangelio.",
        items: [
          {
            number: "CIC 1716",
            title: "Las Bienaventuranzas",
            text: `«Las Bienaventuranzas están en el centro de la predicación de Jesús. Retoman las promesas hechas al pueblo elegido desde Abraham. Las Bienaventuranzas las perfeccionan ordenándolas no ya a la sola posesión de un territorio, sino al reino de los cielos.»`,
          },
          {
            number: "CIC 1803",
            title: "Las Virtudes Humanas",
            text: `«La virtud es una disposición habitual y firme a hacer el bien. Permite a la persona no sólo realizar actos buenos, sino dar lo mejor de sí misma. La persona virtuosa tiende hacia el bien con todas sus fuerzas sensitivas y espirituales; persigue el bien y lo elige en acciones concretas.»`,
          },
          {
            number: "CIC 1858",
            title: "Los Diez Mandamientos",
            text: `«Los diez mandamientos enuncian lo que implica el amor a Dios y el amor al prójimo. Los tres primeros se refieren más directamente al amor de Dios, y los otros siete al amor al prójimo. Como la caridad comprende los dos mandamientos a los que el Señor vinculó 'toda la Ley y los Profetas', así el Decálogo forma una unidad orgánica.»`,
          },
          {
            number: "CIC 2052",
            title: "«Maestro, ¿qué bien debo hacer?»",
            text: `«Ve, vende lo que tienes, dáselo a los pobres y tendrás un tesoro en el cielo; luego ven y sígueme.' Este pasaje pone de relieve que el camino de la perfección pasa por la cruz. Hay un vínculo indisoluble entre el seguimiento de Jesús y los Mandamientos.»`,
          },
          {
            number: "CIC 2196",
            title: "La Doctrina Social de la Iglesia",
            text: `«En respuesta a la pregunta sobre el primero de los mandamientos, Jesús dice: "El primero es: Escucha, Israel: el Señor, nuestro Dios, es el único Señor; amarás al Señor tu Dios con todo tu corazón, con toda tu alma, con toda tu mente y con todas tus fuerzas. El segundo es: amarás a tu prójimo como a ti mismo."»`,
          },
        ],
      },
      {
        id: "oracion",
        icon: "🙏",
        color: "purple",
        title: "La Oración Cristiana",
        subtitle: "Cómo hablamos con Dios",
        intro:
          "El cuarto pilar revela el sentido y la importancia de la oración en la vida del cristiano. Presenta el Padrenuestro como modelo y cumbre de toda oración cristiana, comentando cada una de sus peticiones.",
        items: [
          {
            number: "CIC 2558",
            title: "¿Qué es la Oración?",
            text: `«"Grande es el misterio de la fe." La Iglesia lo profesa en el Símbolo de los Apóstoles y lo celebra en la liturgia sacramental, a fin de que la vida de los fieles se conforme con Cristo en el Espíritu Santo para la gloria de Dios Padre. Este misterio exige que los fieles lo crean, lo celebren y vivan de él en una relación viva y personal con el Dios vivo y verdadero. Esta relación es la oración.»`,
          },
          {
            number: "CIC 2607",
            title: "Jesús Nos Enseña a Orar",
            text: `«Cuando Jesús ora, ya nos enseña cómo orar. Su oración al Padre es el camino teológico de nuestra oración a Dios. Pero los Evangelios contienen también una enseñanza explícita de Jesús sobre la oración. Como un sabio maestro nos toma donde estamos y nos conduce progresivamente hacia el Padre.»`,
          },
          {
            number: "CIC 2759",
            title: "El Padrenuestro",
            text: `«Jesús "estaba orando en cierto lugar, y cuando terminó, uno de sus discípulos le dijo: Señor, enséñanos a orar." En respuesta a esta petición el Señor confía a sus discípulos y a su Iglesia la oración cristiana fundamental. San Lucas presenta un texto breve de cinco peticiones; San Mateo una versión más desarrollada de siete peticiones.»`,
          },
          {
            number: "CIC 2761",
            title: "Resumen de Todo el Evangelio",
            text: `«El Padre Nuestro es verdaderamente "el resumen de todo el Evangelio". "Cuando el Señor nos entregó esta fórmula de oración, añadió: Pedid y recibiréis, y dado que cada uno tiene necesidades particulares, esa misma oración fue enseñada primero para uso común como fundamento de los deseos ulteriores."»`,
          },
          {
            number: "CIC 2644",
            title: "Las Formas de Oración",
            text: `«El Espíritu Santo que enseña a la Iglesia y le recuerda todo lo que Jesús dijo, la educa también en la vida de oración suscitando expresiones que renuevan las formas básicas de la oración: bendición y adoración, petición, intercesión, acción de gracias y alabanza.»`,
          },
        ],
      },
    ],
  },
};

export default es;
