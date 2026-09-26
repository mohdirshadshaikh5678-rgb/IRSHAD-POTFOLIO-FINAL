"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { Monitor, Star, ArrowUpRight } from "lucide-react";
import teknodeImg from '../public/assest/teknodewebimg.png';

if (typeof document !== "undefined" && !document.getElementById("google-fonts-projectssec2")) {
  const link = document.createElement("link");
  link.id = "google-fonts-projectssec2";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.12, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

export default function ProjectsSec2() {
  return (
    <section id="projectssec2" className="relative w-full bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-['Caveat',cursive] text-2xl font-bold text-[#1d63fe] rotate-[-2deg]">featured project</span>
          </div>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase leading-tight">
            Teknode E-Commerce Platform
          </h2>
        </motion.div>

        {/* big showcase card */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="relative mt-10 bg-white border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden"
        >
          {/* browser mockup */}
          <div className="bg-[#0b1329] px-5 py-3 flex items-center gap-2 border-b-2 border-slate-900">
            <span className="w-3 h-3 rounded-full bg-[#c81e1e]" />
            <span className="w-3 h-3 rounded-full bg-amber-300" />
            <span className="w-3 h-3 rounded-full bg-[#16a34a]" />
            <span className="ml-3 flex-1 max-w-xs bg-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-white/70">
              deep.vibgyorventures.co.in
            </span>
            <Monitor className="w-4 h-4 text-amber-300" />
          </div>

          {/* mockup body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* left: product area illustration */}
            <div className="relative rounded-2xl border-2 border-slate-900 bg-[#0b1329] p-2.5">
              <img
                src={teknodeImg.src}
                alt="Teknode e-commerce website screenshot"
                className="w-full rounded-xl object-contain"
              />
              {/* floating cart badge */}
              <motion.div {...floatAnim(4.5, 6)} className="absolute -top-4 -right-3 bg-[#1d63fe] border-2 border-slate-900 rounded-2xl px-4 py-2 text-white text-xs font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rotate-6">
                🛒 12 orders today
              </motion.div>
            </div>

            {/* right: details */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest bg-[#1d63fe] text-white px-3 py-1 rounded-full">
                  E-Commerce
                </span>
                <span className="text-xs font-black uppercase tracking-widest bg-amber-300 text-[#0b1329] px-3 py-1 rounded-full">
                  Live
                </span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-black text-[#0b1329] uppercase font-['Oswald',sans-serif] leading-tight">
                Fully-Loaded Online Store
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                A complete e-commerce solution for Teknode with product catalog, shopping cart,
                secure payments and a fast, mobile-first storefront.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "MongoDB", "Payment Integration", "Tailwind"].map((t) => (
                  <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <a
                  href="https://deep.vibgyorventures.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#0b1329] hover:bg-[#1d63fe] text-white font-black text-xs uppercase tracking-widest px-5 py-3 rounded-full border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(251,191,36,1)] transition-all active:translate-y-0.5"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* bottom tape */}
          <div className="absolute -top-3 left-10 rotate-[-8deg]">
            <svg viewBox="0 0 100 30" className="w-20 h-7 fill-amber-300/90 pointer-events-none" preserveAspectRatio="none">
              <path d="M3,4 L97,2 L94,26 L6,28 Z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}