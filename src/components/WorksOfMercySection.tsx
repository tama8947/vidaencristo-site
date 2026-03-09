"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function MercyCard({
  item,
  index,
  color,
}: {
  item: { title: string; icon: string };
  index: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 cursor-default ${color}`}
    >
      <span
        className="text-2xl transition-transform duration-300 group-hover:scale-125"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,200,100,0.4))" }}
      >
        {item.icon}
      </span>
      <span className="text-sm font-medium text-blue-100/85">{item.title}</span>
    </motion.div>
  );
}

export default function WorksOfMercySection() {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const verseRef = useRef<HTMLDivElement>(null);
  const verseInView = useInView(verseRef, { once: true });

  return (
    <section
      id="mercy"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0228 0%, #0d0535 50%, #080320 100%)",
      }}
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #ffd700, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            🕊️ 🕊️ 🕊️
          </p>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #ffd700, #fff8e1, #ffd700)",
            }}
          >
            {t.mercy.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-blue-200/60">
            {t.mercy.subtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Two columns: Corporal & Spiritual */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Corporal */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-amber-300 mb-1">
                {t.mercy.corporal.title}
              </h3>
              <p className="text-sm text-blue-300/60 italic">
                {t.mercy.corporal.subtitle}
              </p>
            </motion.div>
            <div className="space-y-3">
              {t.mercy.corporal.items.map((item, i) => (
                <MercyCard
                  key={i}
                  item={item}
                  index={i}
                  color="border-amber-700/30 bg-amber-900/10 hover:border-amber-500/50 hover:bg-amber-900/20"
                />
              ))}
            </div>
          </div>

          {/* Spiritual */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-1">
                {t.mercy.spiritual.title}
              </h3>
              <p className="text-sm text-blue-300/60 italic">
                {t.mercy.spiritual.subtitle}
              </p>
            </motion.div>
            <div className="space-y-3">
              {t.mercy.spiritual.items.map((item, i) => (
                <MercyCard
                  key={i}
                  item={item}
                  index={i}
                  color="border-purple-700/30 bg-purple-900/10 hover:border-purple-500/50 hover:bg-purple-900/20"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bible verse */}
        <motion.div
          ref={verseRef}
          initial={{ opacity: 0, y: 20 }}
          animate={verseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mx-auto max-w-2xl"
        >
          <blockquote
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/20 to-yellow-900/10 px-8 py-6 text-center italic text-amber-200/80 text-lg leading-relaxed"
            style={{ boxShadow: "0 0 40px rgba(255,200,0,0.06)" }}
          >
            {t.mercy.verse}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
