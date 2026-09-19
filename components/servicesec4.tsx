"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-servicesec4")) {
  const link = document.createElement("link");
  link.id = "google-fonts-servicesec4";
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
    rotate: [0, 1, -1, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    desc: "We talk about your goals, audience and requirements. I dig into what makes your project unique.",
    color: "#1d63fe",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    desc: "Wireframes and polished visual design that matches your brand — before a single line of code.",
    color: "#f59e0b",
  },
  {
    icon: Code2,
    num: "03",
    title: "Develop",
    desc: "Clean, tested code. Responsive UI, secure backend, and everything wired together seamlessly.",
    color: "#16a34a",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch & Support",
    desc: "Deployment, monitoring and ongoing improvements so your product keeps getting better.",
    color: "#c81e1e",
  },
];

export default function ServicesSec4() {
  return (
    <section id="servicesec4" className="relative w-full bg-[#f4f4f3] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      {/* paper grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -top-20 -left-20 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
            <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
              How I Work
            </h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg font-medium">
            A clear, collaborative process that keeps you in the loop at every stage.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] p-6"
            >
              {/* number badge */}
              <span className="absolute -top-4 -right-3 w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-['Oswald',sans-serif] font-black text-lg shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]" style={{ backgroundColor: s.color }}>
                {s.num}
              </span>

              <span className="w-12 h-12 rounded-xl border-2 border-slate-900 flex items-center justify-center" style={{ backgroundColor: `${s.color}22`, color: s.color }}>
                <s.icon className="w-6 h-6" />
              </span>

              <h3 className="mt-4 text-xl font-black uppercase tracking-wide text-[#0b1329] font-['Oswald',sans-serif]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">{s.desc}</p>

              <span className="absolute -bottom-2 -left-2 w-6 h-10 rounded-xs -z-10" style={{ backgroundColor: s.color }} />
            </motion.div>
          ))}
        </div>

        {/* connecting dashed arrow */}
        <motion.div {...floatAnim(5, 5)} className="mt-10 hidden lg:flex items-center justify-center gap-3 font-['Caveat',cursive] text-2xl font-bold text-[#0b1329] rotate-[-2deg]">
          <span>✓</span>
          <span className="border-b-2 border-dashed border-[#0b1329] w-40" />
          <span>no surprises, just results</span>
          <span className="border-b-2 border-dashed border-[#0b1329] w-40" />
          <span>✓</span>
        </motion.div>
      </div>
    </section>
  );
}