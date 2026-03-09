"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    alt: "Sacred Heart of Jesus",
    caption: "Sacred Heart of Jesus",
  },
  {
    src: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80",
    alt: "Church interior with light",
    caption: "Light of Faith",
  },
  {
    src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
    alt: "Cross at sunset",
    caption: "The Cross",
  },
  {
    src: "https://images.unsplash.com/photo-1548625149-720754816194?w=600&q=80",
    alt: "Candles in church",
    caption: "Eternal Light",
  },
  {
    src: "https://images.unsplash.com/photo-1475137979732-b349acb6b7e3?w=600&q=80",
    alt: "Open Bible",
    caption: "Word of God",
  },
  {
    src: "https://images.unsplash.com/photo-1551292831-023188e78222?w=600&q=80",
    alt: "Stained glass window",
    caption: "Sacred Windows",
  },
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

        {/* Image grid */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-purple-700/20 cursor-default"
              style={{
                boxShadow: "0 4px 30px rgba(60,30,120,0.2)",
                aspectRatio: i === 0 ? "4/3" : i === 3 ? "4/3" : "1/1",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040011]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-sm font-semibold text-amber-200 text-shadow">
                  {img.caption}
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
