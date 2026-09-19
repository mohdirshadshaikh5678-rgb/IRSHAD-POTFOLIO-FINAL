"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-projectssec4")) {
  const link = document.createElement("link");
  link.id = "google-fonts-projectssec4";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.12, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

export default function ProjectsSec4() {
  const router = useRouter();

  return (
    <section id="projectssec4" className="relative w-full min-h-[70vh] bg-[#0b1329] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-16 lg:py-20 flex items-center justify-center scroll-mt-16 select-none">
      {/* texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -top-16 -left-16 w-72 h-72 bg-[#1d63fe]/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-20 -right-10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full text-center">
        <motion.div {...floatAnim(5, 6)} className="inline-flex items-center gap-2 mb-4 font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-amber-300 rotate-[-2deg]">
          <Rocket className="w-6 h-6 text-[#1d63fe]" />
          got an idea for the next big thing?
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[11vw] lg:text-[5.5rem] leading-[0.92] font-black tracking-tighter uppercase font-['Oswald',sans-serif]"
        >
          Let&apos;s Build <br />
          <span className="text-amber-300">Your Project</span>
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 max-w-xl mx-auto text-slate-300 font-medium leading-relaxed"
        >
          I&apos;m currently taking on new projects. Tell me what you need and I&apos;ll turn it
          into something people love to use.
        </motion.p>

        <motion.button
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/contact")}
          className="group mt-8 inline-flex items-center gap-2 bg-[#1d63fe] hover:bg-amber-300 text-white hover:text-[#0b1329] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-white shadow-[5px_5px_0px_0px_rgba(251,191,36,1)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0.5"
        >
          Start a New Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}