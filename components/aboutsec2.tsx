"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { Sparkles, Rocket, Coffee } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aboutsec2")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aboutsec2";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
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

const CursiveUnderline = () => (
  <svg className="w-36 h-4 text-[#1d63fe]" viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M5 12 C40 18, 110 18, 155 8" />
  </svg>
);

const CodeBracketDoodle = () => (
  <svg className="w-14 h-14 text-[#1d63fe]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 35 L12 50 L30 65" />
    <path d="M42 70 L58 30" strokeWidth="4" />
    <path d="M70 35 L88 50 L70 65" />
    <line x1="82" y1="28" x2="88" y2="20" strokeWidth="3" />
    <line x1="90" y1="36" x2="98" y2="34" strokeWidth="3" />
  </svg>
);

export default function AboutSec2() {
  const timeline = [
    {
      year: "2021",
      title: "Started Creative Journey",
      desc: "Began as a freelance graphic designer & video editor, crafting visuals for brands and creators.",
    },
    {
      year: "2023",
      title: "Discovered Web Development",
      desc: "Fell in love with coding — learned HTML, CSS, JavaScript and the art of building for the web.",
    },
    {
      year: "2024",
      title: "MERN Stack Developer",
      desc: "Mastered React, Node.js, Express & MongoDB and shipped real full-stack applications.",
    },
    {
      year: "Now",
      title: "Design + Code Together",
      desc: "Combining design thinking with engineering to build complete, polished digital products.",
    },
  ];

  return (
    <section id="aboutsec2" className="relative w-full bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* Background blur accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Code bracket floating */}
      <motion.div {...floatAnim(6, 6)} className="absolute top-10 right-6 sm:right-12 pointer-events-none z-10 opacity-80">
        <CodeBracketDoodle />
      </motion.div>

      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* LEFT: WHO I AM */}
        <div className="lg:col-span-5 relative">
          {/* Sticky note card */}
          <motion.div
            {...floatAnim(5.5, 6)}
            className="relative bg-white border-2 border-slate-900 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rotate-[-2deg]"
          >
            <TapeStrip className="absolute -top-3 -left-3 rotate-[-28deg]" />
            <TapeStrip className="absolute -top-3 -right-3 rotate-[28deg]" />

            <div className="flex items-center justify-between mb-3">
              <span className="w-12 h-12 rounded-xl bg-[#0b1329] border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(251,191,36,1)] flex items-center justify-center font-mono text-amber-300 font-black text-sm">
                &lt;/&gt;
              </span>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Irshad <span className="text-[#1d63fe]">Shaikh</span>
            </h2>

            <div className="relative inline-flex flex-col items-start mt-1">
              <span className="font-['Caveat',cursive] text-xl text-[#1d63fe] font-bold rotate-[-4deg]">
                Who I Am
              </span>
              <CursiveUnderline />
            </div>

            <div className="mt-4 space-y-2 text-[#2d3a5c] text-sm sm:text-base leading-relaxed font-medium">
              <p>
                I&apos;m a self-taught developer & creative who loves blending <span className="font-black text-[#0b1329]">design</span> and{" "}
                <span className="font-black text-[#0b1329]">code</span> to build products that feel
                great and work even better.
              </p>
              <p>
                From designing brand visuals to architecting full-stack web apps, I enjoy owning the
                whole journey — idea, design, build, launch.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m editing videos, generating AI content, or sketching
                ideas in my notebook.
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Designer", "Developer", "Video Editor", "Problem Solver"].map((c) => (
                <span
                  key={c}
                  className="text-xs font-black uppercase tracking-wide px-3 py-1.5 rounded-full bg-amber-300 text-[#0b1329] border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="absolute -bottom-2 -left-2 w-6 h-10 bg-[#1d63fe] -z-10 rounded-xs" />
          </motion.div>

          {/* Cursive doodle */}
          <motion.div {...floatAnim(4.5, 6)} className="mt-8 flex items-center gap-2 font-['Caveat',cursive] text-2xl font-bold text-[#1d63fe] rotate-[-5deg] pointer-events-none">
            <Coffee className="w-6 h-6" />
            <span>fueled by chai & code</span>
          </motion.div>
        </div>

        {/* RIGHT: TIMELINE */}
        <div className="lg:col-span-7">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
                MY JOURNEY
              </h2>
            </div>
            <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M4 6 C60 10, 160 10, 236 4" />
            </svg>
          </motion.div>

          <p className="mt-4 text-[#2d3a5c] text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
            Every project I&apos;ve taken on has taught me something new. Here&apos;s the story so far —
          </p>

          {/* Timeline cards */}
          <div className="relative mt-8 space-y-6">
            {/* dashed vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 border-l-2 border-dashed border-[#1d63fe]/40 hidden sm:block" />

            {timeline.map((t, idx) => (
              <motion.div
                key={t.year}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex items-start gap-5"
              >
                <div className="relative hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-[#0b1329] border-2 border-[#0b1329] shadow-[3px_3px_0px_0px_rgba(29,99,254,0.5)] items-center justify-center z-10">
                  <Rocket className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex-1 bg-white border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-5 hover:-translate-y-1 transition-transform">
                  <span className="inline-block text-xs font-black uppercase tracking-widest bg-[#1d63fe] text-white px-2.5 py-1 rounded-full">
                    {t.year}
                  </span>
                  <h3 className="mt-2 text-lg font-black text-[#0b1329] uppercase tracking-wide font-['Oswald',sans-serif]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#2d3a5c] leading-relaxed font-medium">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}