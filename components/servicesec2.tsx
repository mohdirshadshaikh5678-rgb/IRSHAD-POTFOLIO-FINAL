"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { LayoutDashboard, Server, Globe, ShoppingCart, Palette, Wrench, ArrowRight } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-servicesec2")) {
  const link = document.createElement("link");
  link.id = "google-fonts-servicesec2";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-14 h-5 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const services = [
  {
    icon: LayoutDashboard,
    title: "Frontend Development",
    desc: "Fast, responsive, pixel-perfect interfaces with React & Next.js.",
    color: "#1d63fe",
    bg: "#e0ebff",
  },
  {
    icon: Server,
    title: "Backend / APIs",
    desc: "Secure REST APIs, authentication and database design that scale.",
    color: "#16a34a",
    bg: "#e0fbea",
  },
  {
    icon: Globe,
    title: "Full-Stack Apps",
    desc: "Complete MERN applications from database to deployment.",
    color: "#8b5cf6",
    bg: "#f1ebff",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Online stores with payments, product management & great UX.",
    color: "#c81e1e",
    bg: "#ffe4e4",
  },
  {
    icon: Palette,
    title: "UI / UX & Graphics",
    desc: "Brand visuals, mockups and design systems that communicate.",
    color: "#f59e0b",
    bg: "#fff4dd",
  },
  {
    icon: Wrench,
    title: "Maintenance & More",
    desc: "Bug fixes, performance tuning and ongoing feature work.",
    color: "#0ea5e9",
    bg: "#e0f6ff",
  },
];

export default function ServicesSec2() {
  return (
    <section id="servicesec2" className="relative w-full bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto">
        <motion.div custom={0} variants={cardItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
            <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
              Web Services
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-medium">
            Everything you need to take a website from idea to a fast, reliable, finished product.
          </p>
        </motion.div>

        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={cardItemVariants}
              custom={idx}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6 flex flex-col group"
            >
              <TapeStrip className="absolute -top-3 -right-3 rotate-[18deg] w-12 h-5" />

              <span
                className="w-14 h-14 rounded-xl border-2 border-slate-900 flex items-center justify-center"
                style={{ backgroundColor: s.bg, color: s.color }}
              >
                <s.icon className="w-7 h-7" />
              </span>

              <h3 className="mt-4 text-xl font-black uppercase tracking-wide text-[#0b1329] font-['Oswald',sans-serif] leading-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium flex-1">{s.desc}</p>

              <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest" style={{ color: s.color }}>
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              <span className="absolute -bottom-2 -left-2 w-6 h-10 rounded-xs -z-10" style={{ backgroundColor: s.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}