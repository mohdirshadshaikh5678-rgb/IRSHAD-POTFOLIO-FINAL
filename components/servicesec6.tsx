"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-servicesec6")) {
  const link = document.createElement("link");
  link.id = "google-fonts-servicesec6";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const plans = [
  {
    name: "Starter",
    price: "₹15k+",
    desc: "Perfect for simple portfolio & landing pages.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "1 revision round"],
    accent: "#ffffff",
    text: "#0c1838",
    popular: false,
  },
  {
    name: "Business",
    price: "₹40k+",
    desc: "For growing brands that need the full package.",
    features: ["Up to 12 pages / CMS", "Custom UI/UX design", "SEO + performance tuning", "Admin dashboard", "3 revision rounds", "30 days support"],
    accent: "#f19d00",
    text: "#0c1838",
    popular: true,
  },
  {
    name: "Full-Stack",
    price: "Custom",
    desc: "Complex apps, e-commerce & custom builds.",
    features: ["Web app / e-commerce", "Backend & database", "Auth & payments", "Deployment & hosting", "Priority support", "Long-term maintenance"],
    accent: "#b21212",
    text: "#ffffff",
    popular: false,
  },
];

export default function ServicesSec6() {
  const router = useRouter();

  return (
    <section id="servicesec6" className="relative w-full min-h-screen bg-[#c81e1e] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 py-16 lg:py-20 scroll-mt-16 select-none">
      {/* chalk texture bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(150,0,0,0.8) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><path d="M0 0L120 120M120 0L0 120M30 0L0 30M90 120L120 90" stroke="%23ffffff" stroke-width="1" opacity="0.3"/></svg>')`,
        }}
      />

      {/* decorative strokes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-6 left-8 font-serif text-8xl font-black rotate-[-15deg]">{"//"}</div>
        <div className="absolute bottom-16 right-12 font-serif text-9xl font-black rotate-[20deg]">{"///"}</div>
        <div className="absolute top-1/4 right-6 text-5xl rotate-12">✦</div>
        <div className="absolute bottom-1/3 left-6 text-6xl -rotate-45">✦</div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div custom={0} variants={cardItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black italic tracking-wide font-['Oswald',sans-serif] uppercase leading-tight">
            Simple, Fair <br />
            <span className="text-amber-300">Pricing</span>
          </h2>
          <p className="mt-4 font-['Caveat',cursive] text-2xl font-bold rotate-[-2deg] text-white/90">
            transparent rates, honest work
          </p>
        </motion.div>

        {/* plans */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch"
        >
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              variants={cardItemVariants}
              whileHover={{ scale: 1.03, rotate: idx === 1 ? 0 : idx === 0 ? -2 : 2, zIndex: 40 }}
              className={`relative rounded-[32px] p-6 sm:p-7 border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                p.popular ? "transform lg:-translate-y-4 bg-[#f19d00] text-[#0c1838] min-h-[560px]" : "bg-white text-[#0c1838] min-h-[540px]"
              }`}
              style={p.popular ? {} : { backgroundColor: p.accent, color: p.text }}
            >
              {p.popular && (
                <div className="absolute -top-3 right-8 w-24 h-8 bg-amber-200/90 rotate-12 border border-black/10 shadow-sm pointer-events-none z-20" />
              )}

              <div className="absolute inset-2 border border-white/20 rounded-[26px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono font-black text-2xl tracking-wider">&lt;/&gt;</span>
                  {p.popular && (
                    <span className="text-xs font-black uppercase tracking-widest bg-[#c81e1e] text-white px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black uppercase tracking-wider font-['Oswald',sans-serif]">{p.name}</h3>
                <p className="text-5xl font-black mt-2 font-['Oswald',sans-serif]">{p.price}</p>
                <p className="mt-2 text-sm font-semibold opacity-80">{p.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: p.popular ? "#0c1838" : "#ffffff", color: p.popular ? "#f19d00" : p.accent === "#b21212" ? "#b21212" : "#0c1838" }}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => router.push("/contact")}
                className="relative z-10 mt-6 w-full bg-slate-900 hover:bg-[#1d63fe] text-white font-black text-sm py-3.5 px-6 rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Get Started
                <ArrowRight className="w-4 h-4 stroke-[3.5]" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom doodles */}
        <motion.div {...floatAnim(4.5, 5)} className="mt-14 font-['Caveat',cursive] text-white text-3xl font-extrabold rotate-[-6deg] pointer-events-none">
          <p>Not sure what you need? Let&apos;s figure it out together.</p>
        </motion.div>
      </div>
    </section>
  );
}