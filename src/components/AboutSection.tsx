import { motion } from "framer-motion";

const highlights = [
  "Python backend systems",
  "LLM frameworks (LangChain, LangGraph)",
  "Google ADK & Gemini",
  "Distributed systems (Kafka, Redis, MongoDB)",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I specialize in building agentic AI systems that combine LLM intelligence with backend engineering.
            </p>
            <p>
              From conversational AI platforms to multi-agent pipelines, I focus on designing systems that are scalable, reliable, and production-ready.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">I work with</p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="glass-card rounded-lg px-4 py-2 text-sm text-surface-foreground"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-muted-foreground">
            My goal is to bridge backend engineering with intelligent automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
