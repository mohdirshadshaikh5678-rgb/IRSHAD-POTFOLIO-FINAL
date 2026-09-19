"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Palette,
  Clapperboard,
  Music,
  Gamepad2,
  Camera,
  BookOpen,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aboutsec5")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aboutsec5";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.08, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-14 h-5 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const hobbies = [
  { icon: Palette, label: "Drawing & Design", color: "#1d63fe", bg: "#e0ebff" },
  { icon: Clapperboard, label: "Video Editing", color: "#c81e1e", bg: "#ffe4e4" },
  { icon: Music, label: "Listening to Music", color: "#a855f7", bg: "#f3ebff" },
  { icon: Gamepad2, label: "Gaming", color: "#16a34a", bg: "#dffbea" },
  { icon: Camera, label: "Photography", color: "#f59e0b", bg: "#fff4dd" },
  { icon: BookOpen, label: "Reading Tech Blogs", color: "#0ea5e9", bg: "#e0f6ff" },
];

const values = [
  {
    title: "Clean Code",
    desc: "I believe maintainable, readable code beats hacky shortcuts — every single time.",
    icon: Lightbulb,
    color: "#f59e0b",
  },
  {
    title: "User-First",
    desc: "Beautiful is good, but usable is better. I design for people, not just screens.",
    icon: HeartHandshake,
    color: "#c81e1e",
  },
  {
    title: "Honest Work",
    desc: "Clear communication, realistic timelines and delivery I actually stand behind.",
    icon: BookOpen,
    color: "#1d63fe",
  },
];

export default function AboutSec5() {
  return (
    <section id="aboutsec5" className="relative w-full bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
            <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
              Hobbies & Values
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-medium">
            A peek into what keeps me inspired — and the principles that guide my work.
          </p>
        </motion.div>

        {/* Hobbies grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
          {hobbies.map((h, idx) => (
            <motion.div
              key={h.label}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col items-start gap-3"
            >
              <TapeStrip className="absolute -top-3 -right-3 rotate-[18deg] w-12 h-5" />
              <span className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-slate-900" style={{ backgroundColor: h.bg, color: h.color }}>
                <h.icon className="w-6 h-6" />
              </span>
              <p className="text-base font-black uppercase tracking-wide text-[#0b1329]">{h.label}</p>
              <span className="w-10 h-1.5 rounded-full" style={{ backgroundColor: h.color }} />
            </motion.div>
          ))}
        </div>

        {/* Values row */}
        <motion.div custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 font-['Caveat',cursive] text-2xl font-bold text-[#1d63fe] rotate-[-2deg]">
            <span>✦</span> what I stand for <span>✦</span>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-[#0b1329] text-white rounded-2xl p-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(251,191,36,1)]"
            >
              <v.icon className="w-8 h-8" style={{ color: v.color }} />
              <h3 className="mt-3 text-lg font-black uppercase tracking-wide font-['Oswald',sans-serif]">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-medium">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}