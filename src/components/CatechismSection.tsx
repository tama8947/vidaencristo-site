"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type PillarColor = "amber" | "blue" | "green" | "purple";

const PILLAR_STYLES: Record<
  PillarColor,
  {
    tab: string;
    tabActive: string;
    heading: string;
    badge: string;
    border: string;
    bg: string;
    hover: string;
    glow: string;
    divider: string;
    number: string;
  }
> = {
  amber: {
    tab: "border-amber-700/30 text-amber-200/60 hover:text-amber-200 hover:bg-amber-900/20",
    tabActive: "border-amber-400/60 bg-amber-900/30 text-amber-300",
    heading: "from-amber-300 via-yellow-100 to-amber-300",
    badge: "text-amber-400",
    border: "border-amber-700/30",
    bg: "bg-amber-900/10",
    hover: "hover:border-amber-500/40 hover:bg-amber-900/20",
    glow: "#ffd700",
    divider: "via-amber-400/40",
    number: "text-amber-500/70",
  },
  blue: {
    tab: "border-blue-700/30 text-blue-200/60 hover:text-blue-200 hover:bg-blue-900/20",
    tabActive: "border-blue-400/60 bg-blue-900/30 text-blue-300",
    heading: "from-sky-300 via-blue-100 to-sky-300",
    badge: "text-sky-400",
    border: "border-blue-700/30",
    bg: "bg-blue-900/10",
    hover: "hover:border-blue-500/40 hover:bg-blue-900/20",
    glow: "#38bdf8",
    divider: "via-sky-400/40",
    number: "text-sky-500/70",
  },
  green: {
    tab: "border-emerald-700/30 text-emerald-200/60 hover:text-emerald-200 hover:bg-emerald-900/20",
    tabActive: "border-emerald-400/60 bg-emerald-900/30 text-emerald-300",
    heading: "from-emerald-300 via-green-100 to-emerald-300",
    badge: "text-emerald-400",
    border: "border-emerald-700/30",
    bg: "bg-emerald-900/10",
    hover: "hover:border-emerald-500/40 hover:bg-emerald-900/20",
    glow: "#34d399",
    divider: "via-emerald-400/40",
    number: "text-emerald-500/70",
  },
  purple: {
    tab: "border-purple-700/30 text-purple-200/60 hover:text-purple-200 hover:bg-purple-900/20",
    tabActive: "border-purple-400/60 bg-purple-900/30 text-purple-300",
    heading: "from-violet-300 via-purple-100 to-violet-300",
    badge: "text-violet-400",
    border: "border-purple-700/30",
    bg: "bg-purple-900/10",
    hover: "hover:border-purple-500/40 hover:bg-purple-900/20",
    glow: "#a78bfa",
    divider: "via-violet-400/40",
    number: "text-violet-500/70",
  },
};

function CatechismItem({
  item,
  index,
  isExpanded,
  onToggle,
  styles,
}: {
  item: { number: string; title: string; text: string };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  styles: (typeof PILLAR_STYLES)[PillarColor];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`rounded-xl border transition-all duration-300 overflow-hidden ${styles.border} ${styles.bg} ${styles.hover}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`shrink-0 text-xs font-mono font-semibold tracking-wide ${styles.number}`}
          >
            {item.number}
          </span>
          <span className="text-sm font-semibold text-blue-100/85 group-hover:text-white transition-colors duration-200 truncate">
            {item.title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 text-sm ${styles.badge} opacity-70`}
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`px-5 pb-5 pt-1 border-t ${styles.border} text-sm leading-relaxed text-blue-200/70 italic`}
            >
              {item.text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CatechismSection() {
  const { t } = useLanguage();
  const [activePillar, setActivePillar] = useState(0);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true });

  const pillar = t.catechism.pillars[activePillar];
  const color = (pillar.color as PillarColor) ?? "amber";
  const styles = PILLAR_STYLES[color];

  const handlePillarChange = (idx: number) => {
    setActivePillar(idx);
    setExpandedItem(null);
  };

  const handleToggle = (idx: number) => {
    setExpandedItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="catechism"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #060118 0%, #0a0228 40%, #07011a 100%)",
      }}
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #ffd700, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />

      {/* Decorative cross pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400/80">
            📖 ✝️ 📖
          </p>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffd700, #fff8e1, #ffd700)",
            }}
          >
            {t.catechism.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-blue-200/60 mb-2">
            {t.catechism.subtitle}
          </p>
          <div className="mt-5 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          ref={introRef}
          initial={{ opacity: 0, y: 20 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-14 max-w-3xl text-center text-base text-blue-300/50 italic leading-relaxed"
        >
          {t.catechism.intro}
        </motion.p>

        {/* Pillar tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {t.catechism.pillars.map((p, idx) => {
            const c = (p.color as PillarColor) ?? "amber";
            const s = PILLAR_STYLES[c];
            const isActive = activePillar === idx;
            return (
              <motion.button
                key={p.id}
                onClick={() => handlePillarChange(idx)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive ? s.tabActive : s.tab
                }`}
              >
                <span className="text-base">{p.icon}</span>
                <span className="hidden sm:inline">{p.title}</span>
                <span className="sm:hidden">{p.icon}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active pillar content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {/* Pillar header */}
            <div className="mb-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border"
                style={{
                  background: `radial-gradient(circle, ${styles.glow}18, transparent)`,
                  borderColor: `${styles.glow}30`,
                  boxShadow: `0 0 30px ${styles.glow}15`,
                }}
              >
                <span
                  className="text-3xl"
                  style={{ filter: `drop-shadow(0 0 8px ${styles.glow}60)` }}
                >
                  {pillar.icon}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${styles.heading}`}>
                  {pillar.title}
                </span>
              </h3>
              <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${styles.badge}`}>
                {pillar.subtitle}
              </p>
              <p className="text-base text-blue-200/55 italic leading-relaxed max-w-2xl mx-auto">
                {pillar.intro}
              </p>
              <div className={`mt-5 flex justify-center`}>
                <div className={`h-px w-24 bg-gradient-to-r from-transparent ${styles.divider} to-transparent`} />
              </div>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {pillar.items.map((item, idx) => (
                <CatechismItem
                  key={idx}
                  item={item}
                  index={idx}
                  isExpanded={expandedItem === idx}
                  onToggle={() => handleToggle(idx)}
                  styles={styles}
                />
              ))}
            </div>

            {/* Source note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-xs text-blue-300/30 tracking-wider"
            >
              {t.catechism.sourceLabel} · vatican.va
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mx-auto max-w-2xl"
        >
          <blockquote
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/15 to-yellow-900/5 px-8 py-6 text-center italic text-amber-200/70 text-base leading-relaxed"
            style={{ boxShadow: "0 0 40px rgba(255,200,0,0.05)" }}
          >
            {t.catechism.closingQuote}
            <br />
            <span className="mt-2 block text-xs not-italic text-amber-400/50 tracking-widest">
              {t.catechism.closingQuoteRef}
            </span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
