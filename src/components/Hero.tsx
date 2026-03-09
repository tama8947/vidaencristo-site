"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedParticles from "./AnimatedParticles";

export default function Hero() {
  const { t } = useLanguage();
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!lightRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      lightRef.current.style.background = `radial-gradient(800px circle at ${x}% ${y}%, rgba(120,80,255,0.12), transparent 50%)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToPrayers = () =>
    document.getElementById("prayers")?.scrollIntoView({ behavior: "smooth" });
  const scrollToRosary = () =>
    document.getElementById("rosary")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #040011 0%, #0a0228 20%, #0d0a3a 40%, #0f1660 60%, #0a0228 80%, #040011 100%)",
      }}
    >
      <AnimatedParticles />

      {/* Mouse-tracking light */}
      <div ref={lightRef} className="pointer-events-none absolute inset-0 z-[1]" />

      {/* Radial glow center */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(100,60,220,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Light rays */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 origin-top opacity-10"
            style={{
              width: "2px",
              height: "120%",
              background:
                "linear-gradient(to bottom, rgba(255,215,0,0.8), transparent)",
              transform: `rotate(${-30 + i * 12}deg) translateX(-50%)`,
              animation: `rayPulse ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Cross icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div
              className="text-7xl"
              style={{ filter: "drop-shadow(0 0 30px rgba(255,215,0,0.6))" }}
            >
              ✝
            </div>
            <div className="absolute inset-0 blur-xl text-7xl text-amber-400/30">
              ✝
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-2 text-6xl font-bold tracking-tight md:text-8xl"
          style={{
            background:
              "linear-gradient(135deg, #ffd700 0%, #fff8e1 40%, #ffb300 70%, #ffd700 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 40px rgba(255,200,0,0.4))",
          }}
        >
          {t.hero.tagline}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-2xl font-light tracking-widest text-purple-200/80 uppercase md:text-3xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-10 mx-auto max-w-xl text-lg text-blue-200/70 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Bible verse */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12 mx-auto max-w-lg rounded-2xl border border-amber-400/20 bg-white/5 px-6 py-4 backdrop-blur-sm italic text-amber-200/80"
          style={{ boxShadow: "0 0 40px rgba(255,180,0,0.1)" }}
        >
          {t.hero.verse}
        </motion.blockquote>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToPrayers}
            className="group relative overflow-hidden rounded-full px-8 py-3 text-base font-semibold text-white transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed, #4f46e5)",
              boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            }}
          >
            <span className="relative z-10">{t.hero.ctaPrayers}</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </button>
          <button
            onClick={scrollToRosary}
            className="group relative overflow-hidden rounded-full border border-amber-400/40 px-8 py-3 text-base font-semibold text-amber-300 transition-all duration-300 hover:bg-amber-400/10 hover:border-amber-300"
          >
            <span className="relative z-10">{t.hero.ctaRosary}</span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-blue-300/50">
            <div
              className="h-8 w-5 rounded-full border border-blue-300/30 flex justify-center pt-1"
              style={{ animation: "bounce 2s ease-in-out infinite" }}
            >
              <div className="h-1.5 w-1 rounded-full bg-amber-400/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
