"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { PenTool, Clapperboard, Sparkles, Music, Layout, Megaphone } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-servicesec3")) {
  const link = document.createElement("link");
  link.id = "google-fonts-servicesec3";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:ital,wght@1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 6): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const TitleUnderline = () => (
  <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M4 6 C60 10, 160 10, 236 4" />
  </svg>
);

const expertise = [
  { icon: PenTool, label: "Graphic Design & Visual Communication" },
  { icon: Clapperboard, label: "Video Editing & Cinematic Content" },
  { icon: Layout, label: "Motion Graphics & Branding" },
  { icon: Megaphone, label: "Social Media & Digital Content" },
  { icon: Sparkles, label: "AI Image, Video & Audio Generation" },
  { icon: Music, label: "AI Music & Audio Workflow" },
];

export default function ServicesSec3() {
  return (
    <section id="servicesec3" className="relative w-full bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* watercolor swirl */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] lg:w-[700px] h-[550px] lg:h-[700px] bg-gradient-to-l from-sky-200/80 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
                CREATIVE EXPERTISE
              </h2>
            </div>
            <TitleUnderline />
          </motion.div>

          <p className="mt-4 text-[#2d3a5c] text-base sm:text-[1.05rem] leading-relaxed font-medium max-w-2xl">
            Creating engaging websites, promotional videos and social media content for brands,
            businesses, educational institutions and digital marketing campaigns.
          </p>

          <ul className="mt-6 space-y-3 pl-1">
            {expertise.map((e, idx) => (
              <motion.li
                key={e.label}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold"
              >
                <span className="w-9 h-9 rounded-lg bg-white border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center shrink-0">
                  <e.icon className="w-4 h-4 text-[#1d63fe]" />
                </span>
                <span>{e.label}</span>
              </motion.li>
            ))}
          </ul>

          {/* doodle */}
          <motion.div {...floatAnim(5, 4)} className="mt-9 flex items-start gap-3 pointer-events-none">
            <svg className="w-12 h-16 text-[#1d63fe]" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 70 C 5 45, 15 20, 48 10" />
              <path d="M36 8 L48 10 L44 24" />
            </svg>
            <div className="font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[-6deg]">
              <p>Design</p>
              <p className="pl-2">Edit</p>
              <p className="pl-4 underline decoration-[#1d63fe]">Create</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: character + floating doodles */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px]">
          {/* floating cursive */}
          <motion.div {...floatAnim(5.5, 5)} className="absolute top-0 right-0 sm:right-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[6deg] pointer-events-none text-right">
            <p>Create&apos;</p>
            <p className="pr-3">Edit&apos;</p>
            <p className="pr-6 underline decoration-[#1d63fe]">Grow</p>
          </motion.div>

          {/* browser doodle */}
          <motion.div {...floatAnim(6, 6)} className="absolute top-1/2 -left-2 -translate-y-1/2 z-20 pointer-events-none">
            <svg className="w-20 h-16 text-[#0d1b3e]" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="10" width="74" height="52" rx="6" fill="white" strokeWidth="2.5" />
              <line x1="8" y1="22" x2="82" y2="22" strokeWidth="2" />
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
              <circle cx="22" cy="16" r="1.5" fill="currentColor" />
              <circle cx="28" cy="16" r="1.5" fill="currentColor" />
              <path d="M30 40 L22 47 L30 54" strokeWidth="2.5" />
              <path d="M38 56 L46 38" strokeWidth="2.5" />
              <path d="M54 40 L62 47 L54 54" strokeWidth="2.5" />
            </svg>
          </motion.div>

          {/* big sticky note card */}
          <motion.div
            {...floatAnim(5, 5)}
            className="relative bg-white border-2 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rotate-[2deg] max-w-sm w-full"
          >
            <svg viewBox="0 0 100 30" className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] w-12 h-5 fill-amber-300/85 pointer-events-none" preserveAspectRatio="none">
              <path d="M3,4 L97,2 L94,26 L6,28 Z" />
            </svg>
            <span className="font-['Caveat',cursive] text-[#1d63fe] text-2xl font-bold rotate-[-3deg] inline-block">
              visual content that converts
            </span>
            <div className="mt-2 space-y-1.5">
              {["Posters & Brands", "Reels & Promos", "Thumbnails", "AI Art & Voice"].map((t) => (
                <p key={t} className="text-[#0d1b3e] font-black text-base tracking-wide uppercase font-['Oswald',sans-serif]">
                  {t}
                </p>
              ))}
            </div>
          </motion.div>

          {/* bottom doodle */}
          <motion.div {...floatAnim(4.8, 5)} className="absolute -bottom-4 left-2 sm:left-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[-8deg] pointer-events-none">
            <p>Ideas</p>
            <p className="pl-2">Into</p>
            <p className="pl-4 underline decoration-[#1d63fe]">Reality</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}