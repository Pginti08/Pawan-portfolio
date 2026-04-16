import { motion } from "framer-motion";
import fashionImg from "@/assets/project-fashion-ai.jpg";
import catalogueImg from "@/assets/project-catalogue-agent.jpg";
import marketingImg from "@/assets/project-marketing-ai.jpg";
import towingImg from "@/assets/project-towing.jpg";
import plateImg from "@/assets/project-plate-recognition.jpg";

const projects = [
  {
    title: "AI Conversational Fashion App",
    description:
      "Built a conversational AI system for garment generation and customization using multi-agent workflows.",
    features: ["Chat-based design generation", "Personalization with memory", "Trend-based recommendations"],
    tech: ["Python", "MongoDB", "Redis", "Google ADK", "Gemini"],
    image: fashionImg,
  },
  {
    title: "Multi-Agent Catalogue Generator",
    description:
      "Designed a 4-agent pipeline that converts moodboards into structured fashion catalogues for Lal10.",
    features: ["Multi-agent orchestration", "Rule + LLM hybrid logic", "Consistent structured output"],
    tech: ["Python", "LangChain", "Agent Systems"],
    image: catalogueImg,
  },
  {
    title: "Marketing AI Platform (Vibelets)",
    description:
      "Built AI agents to optimize marketing campaigns using real-time analytics.",
    features: ["Campaign optimization", "Real-time data processing", "AI-driven insights"],
    tech: ["Kafka", "InfluxDB", "Python"],
    image: marketingImg,
  },
  {
    title: "Towing & Parking Backend System",
    description:
      "Developed scalable backend for towing operations with real-time tracking.",
    features: ["Role-based access", "Tracking system", "REST APIs"],
    tech: ["Django", "PostgreSQL"],
    image: towingImg,
  },
  {
    title: "Vehicle Number Plate Recognition AI",
    description:
      "Built an AI system to extract vehicle numbers from images and automate data entry.",
    features: ["Image processing", "Data validation", "Backend integration"],
    tech: ["Python", "AI Models"],
    image: plateImg,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold md:text-4xl"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="mt-12 space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="glass-card glass-card-hover group overflow-hidden rounded-2xl transition-all duration-500"
            >
              <div className={`flex flex-col gap-0 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="relative h-56 shrink-0 overflow-hidden lg:h-auto lg:w-[45%]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground lg:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-surface-foreground">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
