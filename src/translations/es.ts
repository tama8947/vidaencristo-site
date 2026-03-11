import type { Translations } from "./en";

const es: Translations = {
  nav: {
    home: "Inicio",
    prayers: "Oraciones",
    rosary: "Rosario",
    mercy: "Obras de Misericordia",
    gallery: "Galería",
    sanJose: "San José",
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
};

export default es;
