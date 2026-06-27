import { GitBranch, Globe, Leaf, Server, Sparkles } from "lucide-react";
import { SectionHeader, Stagger, StaggerItem } from "./Reveal";

const ITEMS = [
  { icon: Leaf, title: "Next.js", note: "App router, SSR & RSC patterns" },
  { icon: Sparkles, title: "TypeScript", note: "Type-safe modern React" },
  { icon: Server, title: "Spring Boot", note: "Java backend services" },
  { icon: Globe, title: "REST APIs", note: "Design, auth, versioning" },
  { icon: GitBranch, title: "Git Best Practices", note: "Branching & code review" },
];

export function CurrentlyLearning() {
  return (
    <section id="learning" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="In Progress"
          title="CURRENTLY LEARNING"
          subtitle="Always leveling up. A snapshot of what I'm actively exploring right now."
        />
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it) => (
            <StaggerItem key={it.title}>
              <div className="group h-full rounded-3xl glass border border-border p-6 hover:border-accent/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border-strong group-hover:rotate-6 transition-transform">
                    <it.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {it.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{it.note}</p>
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
