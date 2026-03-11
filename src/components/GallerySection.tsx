"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Placeholder items — images removed, visual style and animations preserved
const PLACEHOLDERS = [
  { icon: "✝️", label: "Sagrado Corazón", aspectRatio: "4/3" },
  { icon: "🕊️", label: "Luz de la Fe", aspectRatio: "1/1" },
  { icon: "🌹", label: "La Cruz", aspectRatio: "1/1" },
  { icon: "🕯️", label: "Luz Eterna", aspectRatio: "4/3" },
  { icon: "📖", label: "Palabra de Dios", aspectRatio: "1/1" },
  { icon: "⭐", label: "Ventanas Sagradas", aspectRatio: "1/1" },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #080320 0%, #060218 50%, #040011 100%)",
      }}
    >
      {/* Decorative */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(80,40,180,0.08) 0%, transparent 70%)",
        }}
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            ✦ ✦ ✦
          </p>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #93c5fd, #e0e7ff, #93c5fd)",
            }}
          >
            {t.gallery.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-blue-200/60">
            {t.gallery.subtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          </div>
        </motion.div>

        {/* Placeholder grid — images removed, visual style preserved */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {PLACEHOLDERS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-purple-700/20 cursor-default flex items-center justify-center"
              style={{
                boxShadow: "0 4px 30px rgba(60,30,120,0.2)",
                aspectRatio: item.aspectRatio,
                background:
                  "linear-gradient(135deg, rgba(60,30,120,0.25) 0%, rgba(10,2,40,0.6) 100%)",
              }}
            >
              {/* Animated background glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(100,60,200,0.3), transparent)",
                }}
              />

              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-500" />

              {/* Icon */}
              <span
                className="relative z-10 text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ filter: "drop-shadow(0 0 20px rgba(255,200,80,0.5))" }}
              >
                {item.icon}
              </span>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-sm font-semibold text-amber-200">
                  {item.label}
                </p>
              </div>

              {/* Golden border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
