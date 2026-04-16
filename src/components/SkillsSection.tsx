import { motion } from "framer-motion";

const categories = [
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "REST APIs"],
    icon: "⚡",
  },
  {
    title: "AI / LLM",
    skills: ["LangChain", "LangGraph", "Google ADK", "Gemini LLM"],
    icon: "🧠",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "InfluxDB"],
    icon: "🗄️",
  },
  {
    title: "Systems",
    skills: ["Kafka", "GitHub"],
    icon: "⚙️",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold md:text-4xl"
        >
          Skills & <span className="gradient-text">Technologies</span>
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
