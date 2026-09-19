"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Globe,
  Rocket,
  ShieldCheck,
  Headphones,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-servicesec5")) {
  const link = document.createElement("link");
  link.id = "google-fonts-servicesec5";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const guarantees = [
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless on every screen size.", color: "#1d63fe", bg: "#e0ebff" },
  { icon: Globe, title: "SEO Friendly", desc: "Built to be found on Google.", color: "#16a34a", bg: "#e0fbea" },
  { icon: Rocket, title: "Fast Loading", desc: "Optimized for speed & Core Web Vitals.", color: "#c81e1e", bg: "#ffe4e4" },
  { icon: ShieldCheck, title: "Secure Code", desc: "Authentication, validation & safe practices.", color: "#8b5cf6", bg: "#f1ebff" },
  { icon: Headphones, title: "Ongoing Support", desc: "I stay after launch too.", color: "#f59e0b", bg: "#fff4dd" },
  { icon: BadgeCheck, title: "Clean Handover", desc: "Documented, maintainable code.", color: "#0ea5e9", bg: "#e0f6ff" },
];

export default function ServicesSec5() {
  return (
    <section id="servicesec5" className="relative w-full bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-200/70 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
            <h2 className="text-3xl sm:text-4xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
              WHY YOU&apos;LL LOVE WORKING WITH ME
            </h2>
          </div>
          <svg className="w-56 h-3 text-[#1d63fe] mt-1 mx-auto" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((g, idx) => (
            <motion.div
              key={g.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] p-5 flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-xl border-2 border-slate-900 flex items-center justify-center shrink-0" style={{ backgroundColor: g.bg, color: g.color }}>
                <g.icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wide text-[#0d1b3e] flex items-center gap-1.5">
                  {g.title}
                  <span className="text-sky-500">
                    <HeartHandshake className="w-4 h-4 text-amber-400 fill-amber-300" />
                  </span>
                </h3>
                <p className="mt-0.5 text-xs text-slate-600 font-medium">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* monitor doodle strip */}
        <motion.div {...floatAnim(5, 5)} className="mt-10 flex items-center justify-center gap-3 text-[#2d3a5c]">
          <Monitor className="w-6 h-6 text-[#1d63fe]" />
          <span className="font-['Caveat',cursive] text-2xl font-bold rotate-[-3deg]">
            quality over quantity, always
          </span>
          <Monitor className="w-6 h-6 text-[#1d63fe] rotate-180" />
        </motion.div>
      </div>
    </section>
  );
}