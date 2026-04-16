import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pawan Ginti — Agentic AI Engineer & Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Pawan Ginti — Agentic AI Engineer specializing in multi-agent systems, LLM workflows, and scalable Python backends.",
      },
      { property: "og:title", content: "Pawan Ginti — Agentic AI Engineer" },
      {
        property: "og:description",
        content: "I build intelligent AI systems that think, adapt, and scale.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
