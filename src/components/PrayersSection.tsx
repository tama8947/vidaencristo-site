"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const PRAYER_ICONS: Record<string, string> = {
  ourFather: "🙏",
  hailMary: "🌹",
  gloryBe: "✨",
  apostlesCreed: "📜",
};

const PRAYER_COLORS: Record<string, string> = {
  ourFather:
    "from-indigo-900/60 to-blue-900/40 border-indigo-500/30 hover:border-indigo-400/60",
  hailMary:
    "from-rose-900/60 to-pink-900/40 border-rose-500/30 hover:border-rose-400/60",
  gloryBe:
    "from-amber-900/60 to-yellow-900/40 border-amber-500/30 hover:border-amber-400/60",
  apostlesCreed:
    "from-purple-900/60 to-violet-900/40 border-purple-500/30 hover:border-purple-400/60",
};

type PrayerKey = "ourFather" | "hailMary" | "gloryBe" | "apostlesCreed";

function PrayerCard({
  prayerKey,
  prayer,
  index,
}: {
  prayerKey: PrayerKey;
  prayer: { title: string; subtitle: string; text: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 cursor-default ${PRAYER_COLORS[prayerKey]}`}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 60px rgba(180,150,255,0.08)" }}
      />

      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl" style={{ filter: "drop-shadow(0 0 8px rgba(255,200,0,0.5))" }}>
          {PRAYER_ICONS[prayerKey]}
        </span>
        <div>
          <h3 className="text-lg font-bold text-white">{prayer.title}</h3>
          <p className="text-sm text-blue-300/70 italic">{prayer.subtitle}</p>
        </div>
      </div>

      <pre
        className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-100/80"
        style={{ fontFamily: "inherit" }}
      >
        {prayer.text}
      </pre>
    </motion.div>
  );
}

export default function PrayersSection() {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  const prayers: { key: PrayerKey; data: { title: string; subtitle: string; text: string } }[] = [
    { key: "ourFather", data: t.prayers.ourFather },
    { key: "hailMary", data: t.prayers.hailMary },
    { key: "gloryBe", data: t.prayers.gloryBe },
    { key: "apostlesCreed", data: t.prayers.apostlesCreed },
  ];

  return (
    <section
      id="prayers"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #040011 0%, #070120 30%, #0a0228 70%, #080320 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, #7c3aed, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            ✦ ✦ ✦
          </p>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffd700, #fff8e1, #ffb300)",
            }}
          >
            {t.prayers.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-blue-200/60">
            {t.prayers.subtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Prayer cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {prayers.map(({ key, data }, i) => (
            <PrayerCard key={key} prayerKey={key} prayer={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
