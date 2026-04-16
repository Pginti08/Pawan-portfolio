import { motion } from "framer-motion";
import avatarImg from "@/assets/avatar.jpg";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.65 0.25 280) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.25 280) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-[100px]" />
      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding pt-24">
      <GridBackground />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-md" />
            <img
              src={avatarImg}
              alt="Pawan Ginti"
              width={180}
              height={180}
              className="relative h-44 w-44 rounded-full border-2 border-border object-cover lg:h-52 lg:w-52"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-widest text-primary"
          >
            Agentic AI Engineer · Backend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Pawan <span className="gradient-text">Ginti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            I build intelligent AI systems that{" "}
            <span className="text-foreground font-medium">think</span>,{" "}
            <span className="text-foreground font-medium">adapt</span>, and{" "}
            <span className="text-foreground font-medium">scale</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="max-w-2xl text-sm leading-relaxed text-muted-foreground"
          >
            Agentic AI Engineer with strong backend expertise in Python and scalable systems. I design multi-agent architectures, LLM workflows, and production-grade APIs that integrate reasoning, memory, and automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_25px_oklch(0.65_0.25_280/30%)] hover:brightness-110"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:bg-secondary/80"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
