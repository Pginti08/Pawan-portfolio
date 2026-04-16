import { motion } from "framer-motion";

const experiences = [
  {
    company: "Vrozart Tech",
    period: "2025 – Present",
    role: "Agentic AI Engineer",
    items: [
      "Built conversational AI systems",
      "Developed multi-agent pipelines",
      "Integrated LLM workflows",
    ],
  },
  {
    company: "Vyzion Innovation",
    period: "2024 – 2025",
    role: "Full Stack Python Developer",
    items: [
      "Built Django backend systems",
      "Designed APIs",
      "Worked on automation systems",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold md:text-4xl"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative mt-12 ml-4 border-l border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary glow-purple" />

              <p className="text-xs font-medium uppercase tracking-wider text-primary">{exp.period}</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-foreground">{exp.company}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{exp.role}</p>

              <ul className="mt-3 space-y-1.5">
                {exp.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-surface-foreground">
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-6 glass-card rounded-xl p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">MCA</h3>
            <p className="mt-1 text-sm text-muted-foreground">Uttaranchal University</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
