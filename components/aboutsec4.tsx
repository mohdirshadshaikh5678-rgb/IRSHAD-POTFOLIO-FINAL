"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aboutsec4")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aboutsec4";
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

const education = [
  {
    type: "Graduation",
    title: "Bachelor of Science",
    place: "University, Maharashtra",
    period: "2021 - 2024",
    desc: "Pursued a science degree while building my design & development career in parallel.",
    icon: GraduationCap,
    color: "#1d63fe",
  },
  {
    type: "Certification",
    title: "Web Development",
    place: "Online Bootcamps & Self-Learning",
    period: "2023 - Present",
    desc: "Completed structured courses in HTML, CSS, JavaScript, React and Node.js.",
    icon: Award,
    color: "#c81e1e",
  },
  {
    type: "Certification",
    title: "Design & AI Tools",
    place: "Freelance Practice",
    period: "2021 - Present",
    desc: "Self-taught graphic design, video editing and AI content creation through real client work.",
    icon: BadgeCheck,
    color: "#f59e0b",
  },
];

export default function AboutSec4() {
  return (
    <section id="aboutsec4" className="relative w-full bg-[#f4f4f3] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* paper grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
            <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
              Education & Certificates
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-medium">
            Learning never stops — here&apos;s my academic & professional background.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((e, idx) => (
            <motion.div
              key={e.title}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6 flex flex-col"
            >
              <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] w-12 h-5" />

              <span
                className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white`}
                style={{ backgroundColor: e.color }}
              >
                {e.icon ? <e.icon className="w-3.5 h-3.5" /> : null}
                {e.type}
              </span>

              <h3 className="mt-4 text-xl font-black text-[#0b1329] uppercase font-['Oswald',sans-serif] tracking-wide leading-tight">
                {e.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1.5">{e.place}</p>
              <p className="text-sm font-black text-[#1d63fe] mt-2">{e.period}</p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">{e.desc}</p>

              <div className="absolute -bottom-2 -right-2 w-6 h-10 rounded-xs -z-10" style={{ backgroundColor: e.color }} />
            </motion.div>
          ))}
        </div>

        {/* doodle strip */}
        <motion.div {...floatAnim(5, 5)} className="mt-12 flex items-center justify-center gap-3 font-['Caveat',cursive] text-2xl font-bold text-[#0b1329] rotate-[-3deg]">
          <span>✏️</span>
          <span>keep learning, keep building</span>
          <span>📚</span>
        </motion.div>
      </div>
    </section>
  );
}