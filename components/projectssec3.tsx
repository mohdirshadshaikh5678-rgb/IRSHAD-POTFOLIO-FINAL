"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { ArrowUpRight, Folder, Film, Palette, Code2, Sparkles, Megaphone } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-projectssec3")) {
  const link = document.createElement("link");
  link.id = "google-fonts-projectssec3";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
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

const projects = [
  {
    icon: Code2,
    title: "Portfolio Website",
    tag: "Web Dev",
    desc: "A premium, animated portfolio with CMS-ready structure and 100/100 Lighthouse score.",
    color: "#1d63fe",
    bg: "#e0ebff",
  },
  {
    icon: Folder,
    title: "Job Portal App",
    tag: "Full-Stack",
    desc: "MERN app with resume uploads, job filters, authentication and an admin dashboard.",
    color: "#16a34a",
    bg: "#e0fbea",
  },
  {
    icon: Film,
    title: "Brand Promo Reel",
    tag: "Video Editing",
    desc: "30-second cinematic promo cut for a startup launch — colour graded & captioned.",
    color: "#c81e1e",
    bg: "#ffe4e4",
  },
  {
    icon: Palette,
    title: "Coffee Brand Identity",
    tag: "Design",
    desc: "Logo, packaging and social templates for a local coffee roaster.",
    color: "#f59e0b",
    bg: "#fff4dd",
  },
  {
    icon: Sparkles,
    title: "AI Content Campaign",
    tag: "AI Content",
    desc: "AI-generated product visuals, voiceover and video ad set for a fashion brand.",
    color: "#a855f7",
    bg: "#f3ebff",
  },
  {
    icon: Megaphone,
    title: "Restaurant Website",
    tag: "Web Dev",
    desc: "Menu showcase, reservations and Google Maps integration for a restaurant chain.",
    color: "#0ea5e9",
    bg: "#e0f6ff",
  },
];

export default function ProjectsSec3() {
  return (
    <section id="projectssec3" className="relative w-full bg-[#f4f4f3] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* paper grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -top-20 -right-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
            <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
              More Projects
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-medium">
            Websites, apps, designs and video content — a snapshot of my recent work.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6 flex flex-col group"
            >
              <TapeStrip className="absolute -top-3 -left-3 rotate-[-24deg]" />

              {/* mock thumbnail */}
              <div
                className="w-full h-36 rounded-xl border-2 border-slate-900 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: p.bg, color: p.color }}
              >
                <p.icon className="w-14 h-14" />
                <span className="absolute top-2 right-3 text-xs font-black uppercase tracking-widest bg-white border-2 border-slate-900 px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
                {/* doodle corner */}
                <span className="absolute bottom-2 left-3 font-['Caveat',cursive] text-lg font-bold rotate-[-6deg]">
                  {idx + 1}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black uppercase tracking-wide text-[#0b1329] font-['Oswald',sans-serif] leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium flex-1">{p.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0b1329] group-hover:text-[#1d63fe] transition-colors">
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              <span className="absolute -bottom-2 -right-2 w-6 h-10 rounded-xs -z-10" style={{ backgroundColor: p.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}