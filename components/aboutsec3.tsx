"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aboutsec3")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aboutsec3";
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

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-14 h-5 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const skillGroups = [
  {
    name: "FRONTEND",
    tag: "the pretty side",
    color: "#1d63fe",
    skills: ["HTML / CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    name: "BACKEND",
    tag: "the engine room",
    color: "#10b981",
    skills: ["Node.js / Express", "REST APIs", "MongoDB", "MySQL", "Auth & Security"],
  },
  {
    name: "DESIGN & TOOLS",
    tag: "the creative kit",
    color: "#a855f7",
    skills: ["Figma", "Video Editing", "Git / GitHub", "AI Content", "Motion / 3D"],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "ex" },
  { name: "JavaScript", icon: "JS" },
  { name: "Git/GitHub", icon: "🐙" },
];

export default function AboutSec3() {
  return (
    <section id="aboutsec3" className="relative w-full bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* soft swirl behind */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-200/70 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT: SKILL BARS */}
        <div className="lg:col-span-7">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
                SKILLS & TOOLS
              </h2>
            </div>
            <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M4 6 C60 10, 160 10, 236 4" />
            </svg>
          </motion.div>

          <p className="mt-4 text-[#2d3a5c] text-base sm:text-lg font-medium max-w-xl">
            The tools I use every day to design, build and ship great products.
          </p>

          {/* skill group cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillGroups.map((g, idx) => (
              <motion.div
                key={g.name}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative bg-white border-2 border-slate-900 rounded-2xl p-4 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]"
                style={{ rotate: idx === 0 ? -1.5 : idx === 2 ? 1.5 : 0.5 }}
              >
                <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg] w-12" />

                {/* colored header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: g.color }} />
                  <h3 className="text-sm font-black italic tracking-wide font-['Oswald',sans-serif] uppercase text-[#0d1b3e]">
                    {g.name}
                  </h3>
                </div>
                <p className="font-['Caveat',cursive] text-lg font-bold leading-tight" style={{ color: g.color }}>
                  {g.tag}
                </p>
                <div className="mt-1 h-1 w-14 rounded" style={{ backgroundColor: g.color }} />

                <ul className="mt-3 space-y-2">
                  {g.skills.map((s, sIdx) => (
                    <motion.li
                      key={s}
                      custom={idx * 10 + sIdx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none" style={{ color: g.color }}>
                        <path d="M4 10 L9 15 L16 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm font-bold text-slate-700">{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: TECH STACK GRID */}
        <div className="lg:col-span-5 relative">
          {/* Sticky-note heading */}
          <motion.div
            {...floatAnim(5.5, 6)}
            className="relative bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rotate-[1.5deg] mb-8"
          >
            <TapeStrip className="absolute -top-3 -left-3 rotate-[-24deg]" />
            <p className="font-['Caveat',cursive] text-2xl text-[#0d1b3e] font-bold">
              My go-to tech stack
            </p>
            <div className="mt-1 h-1.5 w-24 bg-amber-400 rounded" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((t, idx) => (
              <motion.div
                key={t.name}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#0b1329] rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(29,99,254,0.5)] border border-slate-800">
                  <span className="text-2xl text-sky-400">{t.icon}</span>
                </div>
                <span className="mt-2 text-xs font-bold text-slate-700 text-center">{t.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Cursive doodle */}
          <motion.div {...floatAnim(4.5, 6)} className="mt-10 font-['Caveat',cursive] text-2xl font-bold text-[#1d63fe] rotate-[-6deg] text-right pointer-events-none">
            always learning ✨
          </motion.div>
        </div>
      </div>
    </section>
  );
}