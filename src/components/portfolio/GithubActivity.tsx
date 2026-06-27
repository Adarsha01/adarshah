import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const USERNAME = "Adarsha01";

export function GithubActivity() {
  return (
    <section id="github" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Open Source"
          title="GITHUB ACTIVITY"
          subtitle="A look at my contributions and the code I ship in the open."
        />

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong border border-border-strong p-6 sm:p-10">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.5), transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-accent">
                  @{USERNAME}
                </p>
                <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-white">
                  Building & shipping in the open
                </h3>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Explore my repositories — React apps, AI experiments and machine
                  learning projects. More projects are always landing on GitHub.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://github.com/${USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-all"
                  >
                    <Github className="w-4 h-4" /> Visit Profile
                  </a>
                  <a
                    href={`https://github.com/${USERNAME}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass border border-border-strong px-5 py-2.5 text-sm font-medium hover:bg-white/5 hover:-translate-y-0.5 transition-all"
                  >
                    More projects on GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="shrink-0 group"
              >
                <div className="rounded-2xl overflow-hidden border border-border-strong bg-background/40 p-3">
                  <img
                    src={`https://ghchart.rshah.org/2563eb/${USERNAME}`}
                    alt={`${USERNAME} GitHub contribution graph`}
                    loading="lazy"
                    className="block w-full max-w-[520px] opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
