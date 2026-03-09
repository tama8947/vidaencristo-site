import type { Translations } from "./en";

const es: Translations = {
  nav: {
    home: "Inicio",
    prayers: "Oraciones",
    rosary: "Rosario",
    mercy: "Obras de Misericordia",
    gallery: "Galería",
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
          "La Anunciación",
          "La Visitación",
          "El Nacimiento de Jesús",
          "La Presentación en el Templo",
          "El Niño Perdido y Hallado en el Templo",
        ],
      },
      sorrowful: {
        name: "Misterios Dolorosos",
        day: "Martes y Viernes",
        color: "from-red-950 to-red-900",
        items: [
          "La Agonía en el Huerto",
          "La Flagelación",
          "La Coronación de Espinas",
          "Jesús con la Cruz a cuestas",
          "La Crucifixión",
        ],
      },
      glorious: {
        name: "Misterios Gloriosos",
        day: "Miércoles y Domingo",
        color: "from-amber-900 to-yellow-800",
        items: [
          "La Resurrección",
          "La Ascensión",
          "La Venida del Espíritu Santo",
          "La Asunción de la Virgen",
          "La Coronación de la Virgen",
        ],
      },
      luminous: {
        name: "Misterios Luminosos",
        day: "Jueves",
        color: "from-blue-900 to-sky-800",
        items: [
          "El Bautismo de Jesús",
          "Las Bodas de Caná",
          "La Proclamación del Reino de Dios",
          "La Transfiguración",
          "La Institución de la Eucaristía",
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
