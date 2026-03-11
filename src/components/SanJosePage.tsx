"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedParticles from "./AnimatedParticles";
import { useLanguage } from "@/context/LanguageContext";

// Icon and color are presentational — they stay here, not in translations
const PRAYER_META = [
  { icon: "🌟", color: "from-amber-900/60 to-yellow-900/40 border-amber-500/30" },
  { icon: "⚜️", color: "from-indigo-900/60 to-blue-900/40 border-indigo-500/30" },
  { icon: "🕊️", color: "from-teal-900/60 to-emerald-900/40 border-teal-500/30" },
  { icon: "⚒️", color: "from-purple-900/60 to-violet-900/40 border-purple-500/30" },
];

export default function SanJosePage() {
  const { t } = useLanguage();
  const sj = t.sanJose;

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
            {t.nav.sanJose}
          </h1>
          <p className="text-xl text-amber-200/70 mb-2">{sj.hero.subtitle}</p>
          <p className="text-base text-blue-300/50 italic max-w-xl mx-auto">{sj.hero.quote}</p>
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
              { key: "prayers", label: sj.tabs.prayers, icon: "🙏" },
              { key: "rosario", label: sj.tabs.rosario, icon: "📿" },
              { key: "novena", label: sj.tabs.novena, icon: "🕯️" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as typeof activeTab);
                  setExpandedMystery(null);
                  setExpandedNovenaDay(null);
                }}
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
                {sj.prayers.title}
              </h2>
              <p className="text-center text-blue-300/50 italic mb-10">
                {sj.prayers.subtitle}
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {sj.prayers.items.map((prayer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm ${PRAYER_META[i % PRAYER_META.length].color}`}
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
                        {PRAYER_META[i % PRAYER_META.length].icon}
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
                {sj.rosario.title}
              </h2>
              <p className="text-center text-blue-300/50 italic mb-4">
                {sj.rosario.subtitle}
              </p>

              {/* Intro */}
              <div className="mb-8 rounded-2xl border border-amber-500/20 bg-amber-900/10 p-6">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-200/80 italic" style={{ fontFamily: "inherit" }}>
                  {sj.rosario.intro}
                </pre>
              </div>

              {/* Mysteries */}
              <div className="space-y-3">
                {sj.rosario.mysteries.map((m, i) => (
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
                          {i + 1}
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
                              <span className="text-xs font-semibold uppercase tracking-widest text-red-400/70">
                                {sj.rosario.dolorLabel}
                              </span>
                              <p className="text-sm text-blue-100/80 mt-1">{m.dolor}</p>
                            </div>
                            <div>
                              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400/70">
                                {sj.rosario.gozoLabel}
                              </span>
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
                <p className="text-sm text-blue-200/70 italic">{sj.rosario.closingNote}</p>
                <p className="mt-2 text-amber-300/80 font-semibold">{sj.rosario.closingPrayer}</p>
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
                {sj.novena.title}
              </h2>
              <p className="text-center text-blue-300/50 italic mb-10">
                {sj.novena.subtitle}
              </p>

              <div className="space-y-3">
                {sj.novena.days.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() =>
                        setExpandedNovenaDay(expandedNovenaDay === i ? null : i)
                      }
                      className="w-full rounded-2xl border border-purple-700/40 bg-purple-900/20 px-6 py-4 flex items-center justify-between text-left hover:bg-purple-900/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-700/40 text-sm font-bold text-purple-300">
                          {i + 1}
                        </span>
                        <span className="text-amber-200 font-semibold text-sm md:text-base">
                          {day.title}
                        </span>
                      </div>
                      <span
                        className="text-amber-400 transition-transform duration-300 text-sm shrink-0 ml-2"
                        style={{
                          transform:
                            expandedNovenaDay === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedNovenaDay === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-b-2xl border-x border-b border-purple-700/40 bg-purple-950/20 px-6 py-6 space-y-4">
                            <div className="rounded-xl border border-blue-500/10 bg-blue-900/10 p-4">
                              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400/60 mb-2">
                                {sj.novena.meditationLabel}
                              </p>
                              <p className="text-sm text-blue-200/75 leading-relaxed italic">
                                {day.meditation}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/60 mb-2">
                                {sj.novena.prayerLabel}
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
                  {sj.novena.finalPrayerTitle}
                </p>
                <p className="text-sm text-blue-200/70 italic leading-relaxed">
                  {sj.novena.finalPrayer}
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
