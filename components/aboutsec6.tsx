"use client";
import React from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aboutsec6")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aboutsec6";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const floatAnim = (
  duration = 4,
  yDist = 6,
  rotateDist = 2
): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDist, 0],
    rotate: [-rotateDist, rotateDist, -rotateDist],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const TopRightArrowSVG = () => (
  <svg className="w-16 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M85 38 Q 40 48, 15 18" />
    <path d="M15 18 L 32 18 M 15 18 L 22 34" strokeWidth="3.5" strokeLinejoin="round" />
  </svg>
);

const BottomLeftArrowSVG = () => (
  <svg className="w-16 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M15 42 Q 60 48, 85 12" />
    <path d="M68 15 L 85 12 L 81 30" strokeWidth="3.5" strokeLinejoin="round" />
  </svg>
);

export default function AboutSec6() {
  const router = useRouter();

  return (
    <section id="aboutsec6" className="relative w-full min-h-[80vh] bg-[#0b1329] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 py-16 lg:py-20 flex flex-col items-center justify-center select-none scroll-mt-16">
      {/* paper texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -top-16 -left-16 w-64 h-64 bg-[#1d63fe]/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-20 -right-10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* watermark */}
      <div className="pointer-events-none select-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[15vw] lg:text-[10rem] leading-none font-['Oswald',sans-serif] font-black uppercase text-white/[0.04] tracking-tighter">
        IRSHAD
      </div>

      {/* Cursive intro */}
      <div className="relative z-10 flex items-start gap-4 mb-8">
        <svg className="w-14 h-10 text-amber-300 -rotate-[10deg]" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M15,55 Q55,68 85,20" />
          <path d="M70,25 L85,20 L78,38" />
        </svg>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-['Caveat',cursive] text-3xl sm:text-4xl font-bold text-amber-300 rotate-[-2deg]"
        >
          Want to build something <span className="text-[#1d63fe]">great</span>?
        </motion.p>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-[11vw] lg:text-[6.5rem] leading-[0.9] font-black text-center tracking-tighter uppercase font-['Oswald',sans-serif]"
      >
        Let&apos;s Work <br />
        <span className="text-amber-300">Together</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 mt-6 max-w-xl text-center text-slate-300 font-medium leading-relaxed"
      >
        Have an idea, a project or just a question? I&apos;m one message away — let&apos;s talk
        about how I can help you ship something amazing.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => router.push("/contact")}
        className="relative z-10 group mt-8 inline-flex items-center gap-2 bg-[#1d63fe] hover:bg-amber-300 text-white hover:text-[#0b1329] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-white shadow-[5px_5px_0px_0px_rgba(251,191,36,1)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0.5"
      >
        Get In Touch
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* corner doodles */}
      <motion.div {...floatAnim(4.5, 5, 2)} className="absolute top-12 left-6 sm:left-12 z-20 hidden md:block font-['Caveat',cursive] text-3xl font-extrabold rotate-[-10deg] pointer-events-none">
        <p>Build</p>
        <p className="pl-4 underline decoration-amber-300">Together</p>
      </motion.div>

      <motion.div {...floatAnim(5.2, 6, -2)} className="absolute top-14 right-6 sm:right-12 z-20 hidden md:block font-['Caveat',cursive] text-3xl font-extrabold rotate-[8deg] pointer-events-none text-right">
        <p>Let&apos;s</p>
        <p className="pr-4 underline decoration-[#1d63fe]">Create</p>
        <div className="mt-1 flex justify-end">
          <TopRightArrowSVG />
        </div>
      </motion.div>

      <motion.div {...floatAnim(4.8, 5, -1.5)} className="absolute bottom-16 left-6 sm:left-12 z-20 hidden md:block font-['Caveat',cursive] text-3xl font-extrabold rotate-[-6deg] pointer-events-none">
        <div className="mb-1">
          <BottomLeftArrowSVG />
        </div>
        <p className="underline decoration-amber-300">One idea away</p>
      </motion.div>

      <motion.div {...floatAnim(5.5, 6, 2)} className="absolute bottom-16 right-6 sm:right-12 z-20 hidden md:block font-['Caveat',cursive] text-3xl font-extrabold rotate-[10deg] pointer-events-none text-right">
        <p>Always up for</p>
        <p className="pr-4 underline decoration-[#1d63fe]">a chat</p>
      </motion.div>
    </section>
  );
}