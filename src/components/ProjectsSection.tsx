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
      "Built a production-grade conversational AI system for garment generation and customization using a multi-agent architecture. The system processes user intent, maintains context, and generates personalized fashion outputs in real time.",
    features: [
      "Multi-agent pipeline for intent detection, design generation, and response synthesis",
      "Context-aware conversations using Redis + MongoDB memory",
      "Real-time garment recommendation and trend-based suggestions",
      "Session-based chat history management",
      "Fallback + retry handling for LLM responses",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Google ADK",
      "Gemini LLM",
      "MongoDB",
      "Redis",
      "PostgreSQL",
    ],
    image: fashionImg,
  },

  {
    title: "Multi-Agent Catalogue Generator (Lal10)",
    description:
      "Designed a structured multi-agent pipeline to convert raw moodboards into production-ready fashion catalogues. The system ensures consistency, structured outputs, and scalable generation using hybrid rule-based and LLM logic.",
    features: [
      "4-agent architecture (analysis, attribute extraction, generation, validation)",
      "Rule-based + LLM hybrid system for consistent outputs",
      "Automated transformation of unstructured images into structured catalogue data",
      "Prompt engineering and pipeline orchestration using agent flows",
      "Error correction and validation layer for output consistency",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Google ADK",
      "Gemini LLM",
      "PostgreSQL",
      "Redis",
    ],
    image: catalogueImg,
  },

  {
    title: "Marketing AI Platform (Vibelets)",
    description:
      "Developed an AI-driven marketing optimization platform that processes real-time campaign data and generates actionable insights using intelligent agents and analytics pipelines.",
    features: [
      "AI agents for campaign performance optimization",
      "Real-time analytics pipeline using Kafka and InfluxDB",
      "High-throughput data ingestion and processing",
      "Trend detection and automated insight generation",
      "Scalable backend for handling large data streams",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Kafka",
      "InfluxDB",
      "Redis",
      "PostgreSQL",
    ],
    image: marketingImg,
  },

  {
    title: "Towing & Parking Backend System",
    description:
      "Built a scalable backend system for managing towing and parking operations, including real-time tracking, role-based access, and operational workflows.",
    features: [
      "REST API architecture for mobile and admin systems",
      "Role-based authentication and authorization",
      "Real-time vehicle tracking and status updates",
      "Notification system for events and updates",
      "Optimized database design for operational workflows",
    ],
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],
    image: towingImg,
  },

  {
    title: "Vehicle Number Plate Recognition AI",
    description:
      "Developed an AI-powered system to extract vehicle numbers from images and automate data entry workflows with high accuracy and backend integration.",
    features: [
      "Image processing pipeline for number plate detection and extraction",
      "LLM-assisted validation and formatting of extracted data",
      "Automated backend integration for data storage and workflows",
      "Error handling and confidence scoring for predictions",
      "API-based architecture for integration with external systems",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini LLM",
      "PostgreSQL",
      "Redis",
      "OpenCV",
    ],
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