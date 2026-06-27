import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "./Reveal";
import aiProctor from "@/assets/project-ai-proctor.jpg";
import quizentra from "@/assets/project-quizentra.jpg";
import property from "@/assets/project-property.jpg";
import results from "@/assets/project-results.jpg";
import movies from "@/assets/project-movies.jpg";
import weather from "@/assets/project-weather.jpg";
import tourism from "@/assets/project-tourism.jpg";

type Project = {
  title: string;
  tags: string[];
  description: string;
  problem?: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
};

const GH = "https://github.com/Adarsha01";

const FEATURED: Project[] = [
  {
    title: "AI Proctor",
    tags: ["AI", "Computer Vision", "Education"],
    description:
      "An AI-powered online examination monitoring system designed to improve exam integrity through automated behavior detection using computer vision.",
    problem:
      "Online exams lack reliable supervision, making cheating easy and unfair to honest students.",
    features: [
      "Detect suspicious activity",
      "Monitor candidate behavior",
      "Generate automated alerts",
      "Improve examination integrity",
    ],
    tech: ["Python", "HTML", "CSS", "SQL"],
    image: aiProctor,
    github: `${GH}/AI-Proctor`,
  },
  {
    title: "Quizentra",
    tags: ["React", "Education", "AI"],
    description:
      "An AI-assisted learning platform where students access quizzes, improve knowledge, and track progress through an engaging, responsive interface.",
    problem:
      "Students need an engaging way to self-assess and track learning progress beyond static materials.",
    features: [
      "Quiz Management",
      "Score Tracking",
      "Gamification",
      "Responsive Design",
      "Modern Dashboard",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    image: quizentra,
    github: `${GH}/Quizentra`,
  },
  {
    title: "Property Price Prediction",
    tags: ["Machine Learning", "Python", "Analytics"],
    description:
      "Machine learning application that predicts property prices using historical housing data with preprocessing, feature engineering, and model optimization.",
    problem:
      "Buyers and sellers struggle to estimate fair market value without data-driven insights.",
    features: [
      "Prediction Model",
      "Data Cleaning",
      "Visualization",
      "Model Optimization",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    image: property,
    github: `${GH}/Property-Price-Prediction`,
  },
  {
    title: "Student Result Checker",
    tags: ["React", "Education"],
    description:
      "Responsive web application for displaying and managing student examination results with fast search and a clean user experience.",
    problem:
      "Manual result distribution is slow and frustrating for students checking outcomes.",
    features: ["Result Search", "Responsive UI", "Fast Retrieval", "Simple Dashboard"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    image: results,
    github: `${GH}/Student-Result-Checker`,
  },
];

const OTHERS: Project[] = [
  {
    title: "Movie Listing App",
    tags: ["React", "API"],
    description: "Built with React and the OMDb API for fast movie discovery.",
    features: ["Movie Search", "Dynamic Cards", "Loading Animation", "Responsive Design"],
    tech: ["React", "OMDb API"],
    image: movies,
    github: `${GH}/Movie-Listing-App`,
  },
  {
    title: "Weather Forecast App",
    tags: ["React", "API"],
    description: "Built with React and OpenWeather API for live conditions worldwide.",
    features: ["Live Weather", "City Search", "Responsive Interface", "Error Handling"],
    tech: ["React", "OpenWeather"],
    image: weather,
    github: `${GH}/Weather-Forecast-App`,
  },
  {
    title: "Tourism Management System",
    tags: ["Python", "Full-Stack"],
    description: "Tour booking platform with database-backed management and a clean UI.",
    features: ["Tour Booking", "Database Management", "User-Friendly Interface"],
    tech: ["Python", "HTML", "CSS", "SQL"],
    image: tourism,
    github: `${GH}/Tourism-Management-System`,
  },
];

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
        <div
          className="absolute -inset-6 rounded-[2.5rem] opacity-40 group-hover:opacity-70 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.45), transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="relative overflow-hidden rounded-3xl glass-strong p-2 shadow-card">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
            <motion.img
              src={project.image}
              alt={project.title}
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs uppercase tracking-widest px-3 py-1 rounded-full glass border border-border-strong text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display font-bold text-3xl sm:text-4xl text-gradient leading-tight">
          {project.title}
        </h3>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>
        {project.problem && (
          <div className="mt-5 rounded-2xl border border-border bg-white/[0.02] p-4">
            <p className="text-[11px] uppercase tracking-widest text-accent">
              Problem solved
            </p>
            <p className="mt-1.5 text-sm text-white/80 leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}
        <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass border border-border-strong px-5 py-2.5 text-sm font-medium hover:bg-white/5 hover:-translate-y-0.5 transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-3xl glass border border-border overflow-hidden hover:border-accent/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-border-strong text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display font-semibold text-xl text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-9 w-9 rounded-full glass border border-border-strong hover:bg-white/5 transition-all"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Featured Work"
          title="PROJECTS THAT TELL A STORY"
          subtitle="A selection of products, experiments, and tools I've built — from AI systems to polished React interfaces."
        />

        <div className="space-y-32">
          {FEATURED.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-32 mb-12">
          <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white">
            Other Projects
          </h3>
          <p className="mt-2 text-muted-foreground">Smaller experiments and learning builds.</p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHERS.map((p) => (
            <StaggerItem key={p.title}>
              <SmallCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
