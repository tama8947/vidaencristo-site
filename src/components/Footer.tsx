"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #040011 0%, #020009 100%)",
        borderTop: "1px solid rgba(120,80,255,0.15)",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px]"
        style={{
          background: "radial-gradient(ellipse, rgba(60,30,120,0.15), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span
              className="text-4xl"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,215,0,0.5))" }}
            >
              ✝️
            </span>
            <span
              className="text-2xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffd700, #fff8e1, #ffb300)",
              }}
            >
              Vida en Cristo
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-blue-300/50 italic"
          >
            {t.footer.tagline}
          </motion.p>

          {/* Divider */}
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-blue-300/40"
          >
            © {year} Vida en Cristo · {t.footer.rights}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-blue-400/30"
          >
            {t.footer.madeWith} ❤️ {t.footer.andFaith}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
