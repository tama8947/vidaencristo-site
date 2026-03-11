"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedParticles from "./AnimatedParticles";

// ─── San José Content (multilingual-ready; primary Spanish) ───────────────────

const PRAYERS = [
  {
    icon: "🌟",
    color: "from-amber-900/60 to-yellow-900/40 border-amber-500/30",
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
    icon: "⚜️",
    color: "from-indigo-900/60 to-blue-900/40 border-indigo-500/30",
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
    icon: "🕊️",
    color: "from-teal-900/60 to-emerald-900/40 border-teal-500/30",
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
    icon: "⚒️",
    color: "from-purple-900/60 to-violet-900/40 border-purple-500/30",
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
];

// ─── Rosario a San José (7 Dolores y 7 Gozos) ───────────────────────────────

const ROSARIO_SAN_JOSE = {
  intro: `El Rosario de San José medita en los Siete Dolores y los Siete Gozos de este gran santo.
Se reza con siete grupos de 7 Avemarías, meditando en cada misterio de la vida de San José.
Cada decena va precedida de un Padrenuestro y finaliza con una Gloria.`,
  mysteries: [
    {
      num: 1,
      title: "Primer Misterio",
      dolor: "La duda de San José sobre el origen del embarazo de María",
      gozo: "El ángel revela a San José que Jesús es el Hijo de Dios",
      verse: '"José, hijo de David, no temas recibir a María tu esposa, porque lo que en ella se ha engendrado es obra del Espíritu Santo." — Mateo 1:20',
    },
    {
      num: 2,
      title: "Segundo Misterio",
      dolor: "La pobreza del pesebre de Belén",
      gozo: "El nacimiento de Jesús, el Salvador del mundo",
      verse: '"Y dio a luz a su hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre." — Lucas 2:7',
    },
    {
      num: 3,
      title: "Tercer Misterio",
      dolor: "La profecía de Simeón sobre el dolor de María",
      gozo: "Las profecías sobre Jesús como luz de las naciones",
      verse: '"Este niño está puesto para caída y resurgimiento de muchos." — Lucas 2:34',
    },
    {
      num: 4,
      title: "Cuarto Misterio",
      dolor: "La huida a Egipto para escapar de Herodes",
      gozo: "La protección divina sobre la Sagrada Familia en Egipto",
      verse: '"Levántate, toma al niño y a su madre, y huye a Egipto." — Mateo 2:13',
    },
    {
      num: 5,
      title: "Quinto Misterio",
      dolor: "La amargura del destierro en tierra extranjera",
      gozo: "El regreso a la tierra prometida tras la muerte de Herodes",
      verse: '"Levántate, toma al niño y a su madre, y regresa a la tierra de Israel." — Mateo 2:20',
    },
    {
      num: 6,
      title: "Sexto Misterio",
      dolor: "El extravío del Niño Jesús en Jerusalén",
      gozo: "El hallazgo de Jesús en el Templo entre los doctores",
      verse: '"Y lo encontraron en el Templo, sentado en medio de los maestros." — Lucas 2:46',
    },
    {
      num: 7,
      title: "Séptimo Misterio",
      dolor: "La enfermedad y muerte de San José",
      gozo: "San José muere asistido por Jesús y María, alcanzando la gloria eterna",
      verse: '"Precioso a los ojos del Señor es la muerte de sus fieles." — Salmo 116:15',
    },
  ],
};

// ─── Novena a San José (9 días) ───────────────────────────────────────────────

const NOVENA = [
  {
    day: 1,
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
    day: 2,
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
    day: 3,
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
    day: 4,
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
    day: 5,
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
    day: 6,
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
    day: 7,
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
    day: 8,
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
    day: 9,
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
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SanJosePage() {
  const [activeTab, setActiveTab] = useState<"prayers" | "rosario" | "novena">("prayers");
  const [expandedNovenaDay, setExpandedNovenaDay] = useState<number | null>(null);
  const [expandedMystery, setExpandedMystery] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #040011 0%, #070120 50%, #040011 100%)" }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        <AnimatedParticles />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180,120,20,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: "backOut" }}
            className="mb-4 flex justify-center"
          >
            <span
              className="text-7xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(255,200,0,0.5))" }}
            >
              ⚜️
            </span>
          </motion.div>
          <h1
            className="mb-4 text-5xl font-bold md:text-6xl text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #ffd700 0%, #fff8e1 40%, #ffb300 100%)",
              filter: "drop-shadow(0 0 30px rgba(255,200,0,0.3))",
            }}
          >
            San José
          </h1>
          <p className="text-xl text-amber-200/70 mb-2">
            Padre Adoptivo de Jesús · Esposo de la Virgen María
          </p>
          <p className="text-base text-blue-300/50 italic max-w-xl mx-auto">
            «Custodio de la Sagrada Familia, Patrono de la Iglesia Universal,
            modelo de fe, silencio y trabajo»
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-[#040011]/90 backdrop-blur-md border-b border-amber-400/10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex gap-1 py-3 justify-center">
            {[
              { key: "prayers", label: "Oraciones", icon: "🙏" },
              { key: "rosario", label: "Rosario", icon: "📿" },
              { key: "novena", label: "Novena", icon: "🕯️" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-amber-700 to-yellow-700 text-white shadow-lg"
                    : "border border-amber-700/30 text-amber-300/70 hover:bg-amber-900/20"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {/* ── Oraciones ────────────────────────────────────────────── */}
          {activeTab === "prayers" && (
            <motion.div
              key="prayers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-center text-3xl font-bold text-amber-200 mb-2">
                Oraciones a San José
              </h2>
              <p className="text-center text-blue-300/50 italic mb-10">
                Encomendáos al poderoso patrocinio de San José
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {PRAYERS.map((prayer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm ${prayer.color}`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: "inset 0 0 60px rgba(255,180,0,0.06)" }}
                    />
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="text-3xl"
                        style={{ filter: "drop-shadow(0 0 8px rgba(255,200,0,0.5))" }}
                      >
                        {prayer.icon}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{prayer.title}</h3>
                        <p className="text-sm text-amber-300/70 italic">{prayer.subtitle}</p>
                      </div>
                    </div>
                    <pre
                      className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-100/80"
                      style={{ fontFamily: "inherit" }}
                    >
                      {prayer.text}
                    </pre>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Rosario ──────────────────────────────────────────────── */}
          {activeTab === "rosario" && (
            <motion.div
              key="rosario"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-center text-3xl font-bold text-amber-200 mb-2">
                Rosario a San José
              </h2>
              <p className="text-center text-blue-300/50 italic mb-4">
                Siete Dolores y Siete Gozos
              </p>

              {/* Intro */}
              <div className="mb-8 rounded-2xl border border-amber-500/20 bg-amber-900/10 p-6">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-200/80 italic" style={{ fontFamily: "inherit" }}>
                  {ROSARIO_SAN_JOSE.intro}
                </pre>
              </div>

              {/* Mysteries */}
              <div className="space-y-3">
                {ROSARIO_SAN_JOSE.mysteries.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <button
                      onClick={() => setExpandedMystery(expandedMystery === i ? null : i)}
                      className="w-full rounded-2xl border border-amber-700/30 bg-amber-900/10 px-6 py-4 flex items-center justify-between text-left hover:bg-amber-900/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-700/40 text-sm font-bold text-amber-300">
                          {m.num}
                        </span>
                        <span className="text-amber-200 font-semibold">{m.title}</span>
                      </div>
                      <span
                        className="text-amber-400 transition-transform duration-300 text-sm"
                        style={{ transform: expandedMystery === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedMystery === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-b-2xl border-x border-b border-amber-700/30 bg-amber-950/20 px-6 py-5 space-y-3">
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-widest text-red-400/70">Dolor</span>
                              <p className="text-sm text-blue-100/80 mt-1">{m.dolor}</p>
                            </div>
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400/70">Gozo</span>
                              <p className="text-sm text-blue-100/80 mt-1">{m.gozo}</p>
                            </div>
                            <p className="text-xs text-amber-300/70 italic border-t border-amber-700/20 pt-3">
                              {m.verse}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Closing note */}
              <div className="mt-8 rounded-2xl border border-purple-700/20 bg-purple-900/10 p-5 text-center">
                <p className="text-sm text-blue-200/70 italic">
                  Concluye con la Salve y la siguiente jaculatoria:
                </p>
                <p className="mt-2 text-amber-300/80 font-semibold">
                  «San José, ruega por nosotros.»
                </p>
              </div>
            </motion.div>
          )}

          {/* ── Novena ───────────────────────────────────────────────── */}
          {activeTab === "novena" && (
            <motion.div
              key="novena"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-center text-3xl font-bold text-amber-200 mb-2">
                Novena a San José
              </h2>
              <p className="text-center text-blue-300/50 italic mb-10">
                Nueve días de oración y meditación
              </p>

              <div className="space-y-3">
                {NOVENA.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => setExpandedNovenaDay(expandedNovenaDay === day.day ? null : day.day)}
                      className="w-full rounded-2xl border border-purple-700/40 bg-purple-900/20 px-6 py-4 flex items-center justify-between text-left hover:bg-purple-900/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-700/40 text-sm font-bold text-purple-300">
                          {day.day}
                        </span>
                        <span className="text-amber-200 font-semibold text-sm md:text-base">
                          {day.title}
                        </span>
                      </div>
                      <span
                        className="text-amber-400 transition-transform duration-300 text-sm shrink-0 ml-2"
                        style={{ transform: expandedNovenaDay === day.day ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedNovenaDay === day.day && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-b-2xl border-x border-b border-purple-700/40 bg-purple-950/20 px-6 py-6 space-y-4">
                            <div className="rounded-xl border border-blue-500/10 bg-blue-900/10 p-4">
                              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400/60 mb-2">
                                Meditación
                              </p>
                              <p className="text-sm text-blue-200/75 leading-relaxed italic">
                                {day.meditation}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/60 mb-2">
                                Oración del día
                              </p>
                              <pre
                                className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-100/80"
                                style={{ fontFamily: "inherit" }}
                              >
                                {day.prayer}
                              </pre>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-900/10 p-6 text-center">
                <p className="text-amber-300/80 font-semibold mb-2">
                  Oración Final de la Novena
                </p>
                <p className="text-sm text-blue-200/70 italic leading-relaxed">
                  «Oh San José, cuya protección es tan grande, tan fuerte, tan pronta ante el trono de Dios, a ti confío todos mis intereses y deseos. Oh San José, asísteme con tu poderosa intercesión y obtén de tu Divino Hijo todas las gracias espirituales y temporales que necesito. Amén.»
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
