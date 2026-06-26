import {
  Code2, Database, Brain, Wrench, Users, Terminal,
} from "lucide-react";
import { SectionHeader, Stagger, StaggerItem } from "./Reveal";

const CATEGORIES = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
  {
    icon: Terminal,
    title: "Programming",
    items: ["Python"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["SQL"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["Pandas", "Scikit-Learn", "Data Preprocessing"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Quick Learner",
      "Attention to Detail",
      "Communication",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Tech Stack"
          title="TOOLS OF THE CRAFT"
          subtitle="Technologies I use to build modern applications."
        />

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="group relative h-full rounded-3xl glass border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(400px circle at 50% 0%, rgba(56,189,248,0.12), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border-strong mb-5 group-hover:rotate-6 transition-transform">
                    <cat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-4">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-full bg-white/[0.03] border border-border text-muted-foreground hover:text-white hover:border-border-strong transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
