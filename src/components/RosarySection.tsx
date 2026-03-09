"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type MysteryKey = "joyful" | "sorrowful" | "glorious" | "luminous";

export default function RosarySection() {
  const { t } = useLanguage();
  const [activeMystery, setActiveMystery] = useState<MysteryKey>("joyful");
  const [showSteps, setShowSteps] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  const mysteryKeys: MysteryKey[] = ["joyful", "sorrowful", "glorious", "luminous"];

  const mysteryIcons: Record<MysteryKey, string> = {
    joyful: "🌸",
    sorrowful: "🕯️",
    glorious: "👑",
    luminous: "☀️",
  };

  return (
    <section
      id="rosary"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #080320 0%, #0c0535 40%, #0a0228 100%)",
      }}
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-20 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1e40af, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
            🌹 🌹 🌹
          </p>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #fda4af, #fff, #fda4af)",
            }}
          >
            {t.rosary.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-blue-200/60 mb-4">
            {t.rosary.subtitle}
          </p>
          <p className="mx-auto max-w-2xl text-base text-blue-300/50 italic mb-8">
            {t.rosary.intro}
          </p>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Mystery Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {mysteryKeys.map((key) => {
            const mystery = t.rosary.mysteries[key];
            return (
              <button
                key={key}
                onClick={() => setActiveMystery(key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeMystery === key
                    ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/40"
                    : "border border-purple-700/40 text-blue-200/70 hover:bg-purple-900/30"
                }`}
              >
                <span>{mysteryIcons[key]}</span>
                <span>{mystery.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Mystery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMystery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            {(() => {
              const mystery = t.rosary.mysteries[activeMystery];
              return (
                <div
                  className={`relative overflow-hidden rounded-3xl border border-purple-700/30 bg-gradient-to-br p-8 md:p-10 ${mystery.color}`}
                  style={{ boxShadow: "0 0 60px rgba(100,60,200,0.15)" }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Mystery info */}
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-4xl">{mysteryIcons[activeMystery]}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{mystery.name}</h3>
                          <p className="text-sm text-blue-300/70">{mystery.day}</p>
                        </div>
                      </div>
                    </div>

                    {/* Mystery items */}
                    <div className="flex-1">
                      <ol className="space-y-3">
                        {mystery.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-amber-300">
                              {i + 1}
                            </span>
                            <span className="text-blue-100/85">{item}</span>
                          </motion.li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Decorative rosary beads */}
                  <div className="mt-8 flex justify-center gap-2 flex-wrap">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
                        style={{
                          animation: `bead ${1.5 + i * 0.15}s ease-in-out infinite`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                    <div className="h-3 w-5 rounded-full bg-amber-400/40 border border-amber-300/40 mx-2" />
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i + 10}
                        className="h-3 w-3 rounded-full bg-white/20 border border-white/30"
                        style={{
                          animation: `bead ${1.5 + i * 0.15}s ease-in-out infinite`,
                          animationDelay: `${(i + 10) * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>

        {/* How to Pray Accordion */}
        <div className="mx-auto max-w-2xl">
          <button
            onClick={() => setShowSteps((v) => !v)}
            className="group w-full rounded-2xl border border-purple-700/40 bg-purple-900/20 px-6 py-4 flex items-center justify-between text-left transition-all duration-300 hover:bg-purple-900/30"
          >
            <span className="text-lg font-semibold text-amber-200">
              {t.rosary.howToPray}
            </span>
            <span
              className="text-amber-400 transition-transform duration-300"
              style={{ transform: showSteps ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ▼
            </span>
          </button>
          <AnimatePresence>
            {showSteps && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="rounded-b-2xl border-x border-b border-purple-700/40 bg-purple-950/20 px-6 py-5">
                  <ol className="space-y-3">
                    {t.rosary.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-3 text-sm text-blue-100/75"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-800/60 text-xs text-rose-200 font-bold">
                          {i + 1}
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
