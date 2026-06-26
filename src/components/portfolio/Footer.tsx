import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const NAV = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="mx-auto max-w-[1280px] rounded-[2rem] glass border border-border p-8 sm:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display font-bold text-white shadow-glow">
              AH
            </span>
            <div>
              <p className="font-display font-semibold text-white">Adarsha H</p>
              <p className="text-sm text-muted-foreground">
                Designed & Developed by Adarsha H
              </p>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {NAV.map((n) => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Adarsha01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-10 w-10 rounded-full glass border border-border-strong hover:bg-white/5 transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsha-h-20317a263/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-10 w-10 rounded-full glass border border-border-strong hover:bg-white/5 transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:adarshah01@gmail.com"
              aria-label="Email"
              className="grid place-items-center h-10 w-10 rounded-full glass border border-border-strong hover:bg-white/5 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <ArrowUp className="w-4 h-4" /> Top
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Adarsha H. All rights reserved.</p>
          <p>Built with React, TanStack Start & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
