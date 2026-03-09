"use client";

import { useState, useEffect } from "react";
import { useLanguage, type Locale } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

const NAV_IDS = ["prayers", "rosary", "mercy", "gallery"] as const;

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "prayers", label: t.nav.prayers },
    { id: "rosary", label: t.nav.rosary },
    { id: "mercy", label: t.nav.mercy },
    { id: "gallery", label: t.nav.gallery },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0520]/90 backdrop-blur-md shadow-lg shadow-purple-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl">✝️</span>
            <span className="font-bold text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-100 group-hover:from-amber-200 group-hover:to-white transition-all duration-300">
              Vida en Cristo
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-blue-100/80 hover:text-amber-300 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 rounded-full border border-amber-400/30 px-3 py-1 text-sm text-amber-300 hover:bg-amber-400/10 transition-all duration-200"
              >
                🌐 {LOCALE_LABELS[locale]}
                <span className="text-xs">▾</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-10 rounded-xl border border-purple-700/40 bg-[#0d0630]/95 backdrop-blur-sm shadow-xl overflow-hidden"
                  >
                    {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLocale(l);
                          setLangOpen(false);
                        }}
                        className={`block w-full px-5 py-2 text-left text-sm transition-colors duration-150 ${
                          locale === l
                            ? "bg-amber-400/20 text-amber-300"
                            : "text-blue-100 hover:bg-purple-800/40"
                        }`}
                      >
                        {l === "en" ? "🇬🇧 English" : l === "es" ? "🇪🇸 Español" : "🇫🇷 Français"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-300 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0520]/95 backdrop-blur-md border-t border-purple-800/30"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-base text-blue-100/80 hover:text-amber-300 py-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 pt-2 border-t border-purple-800/30">
                {(Object.keys(LOCALE_LABELS) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setMenuOpen(false);
                    }}
                    className={`rounded-full px-3 py-1 text-sm border transition-colors ${
                      locale === l
                        ? "bg-amber-400/20 border-amber-400/50 text-amber-300"
                        : "border-purple-700/40 text-blue-200 hover:bg-purple-800/30"
                    }`}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
