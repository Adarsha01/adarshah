import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > prev && latest > 200) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`flex items-center gap-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-card px-3 py-2"
              : "glass px-3 py-2"
          }`}
          style={{
            backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(16px) saturate(140%)",
          }}
        >
          <a
            href="#home"
            className="flex items-center gap-2 pl-2 pr-4"
            aria-label="Home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-bold text-sm text-white shadow-glow">
              AH
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === item.href.slice(1)
                      ? "text-white"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {active === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2 pl-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5 transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>
          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-white/5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm glass-strong border-l border-border-strong p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-bold text-white">
                  AH
                </span>
                <button
                  className="grid place-items-center h-10 w-10 rounded-full hover:bg-white/5"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-4 rounded-2xl text-2xl font-display font-semibold hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 font-medium"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 font-semibold text-white shadow-glow"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
