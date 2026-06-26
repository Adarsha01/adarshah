import { motion } from "framer-motion";
import { BookOpen, Brain, Code2, Cpu, GraduationCap, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const TIMELINE = [
  { icon: BookOpen, label: "Teaching", note: "Communication, leadership, patience" },
  { icon: Code2, label: "Discovered Programming", note: "First taste of building software" },
  { icon: Sparkles, label: "Frontend Development", note: "HTML, CSS, JavaScript, React" },
  { icon: Brain, label: "Machine Learning", note: "Python, Pandas, Scikit-Learn" },
  { icon: Cpu, label: "AI Projects", note: "Computer vision, ML pipelines" },
  { icon: GraduationCap, label: "Software Engineer", note: "Building for the real world" },
];

export function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="About"
          title="FROM CLASSROOM TO CODE"
        />

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          <Reveal className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My journey into technology began with a strong passion for learning and
              teaching. While working in education, I developed communication,
              leadership, patience, and problem-solving skills that continue to shape
              the way I approach software development.
            </p>
            <p>
              Driven by curiosity for technology, I transitioned into Computer
              Applications and focused on frontend development, React, JavaScript,
              AI-based applications, and problem solving.
            </p>
            <p>
              Today, I enjoy building modern web applications that solve real-world
              problems while continuously improving my technical expertise.
            </p>
            <p className="text-white">
              I am actively looking for opportunities where I can contribute, learn,
              and grow as a Software Engineer.
            </p>
          </Reveal>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-primary to-transparent"
            />
            <ul className="space-y-6">
              {TIMELINE.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="relative grid place-items-center h-10 w-10 shrink-0 rounded-full glass-strong border border-border-strong group-hover:border-accent transition-colors">
                    <item.icon className="w-4 h-4 text-accent" />
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: "0 0 24px rgba(56,189,248,0.5)" }}
                    />
                  </div>
                  <div className="pt-1.5 min-w-0">
                    <p className="font-display font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
