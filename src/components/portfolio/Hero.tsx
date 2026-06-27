import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Mouse } from "lucide-react";
import { useEffect, useState } from "react";
import portrait from "@/assets/adarsha-portrait.jpg";
import { CountUp } from "./CountUp";

const ROLES = [
  "Software Engineer",
  "Frontend Developer",
  "React Developer",
  "Problem Solver",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[i];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient-blue">
      {text}
      <span className="inline-block w-[3px] h-[1em] -mb-1 ml-1 bg-accent animate-pulse-glow" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6"
    >
      <div className="mx-auto w-full max-w-[1280px] grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Open to Work · Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(3rem,8vw,4.5rem)]"
          >
            <span className="text-gradient">ADARSHA</span>
            <br />
            <span className="text-gradient">H</span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-2xl sm:text-3xl font-display font-medium h-10"
          >
            <Typer />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            I build modern web applications using React, JavaScript, Python, and
            AI-driven solutions. Passionate about solving real-world problems
            through clean design, scalable code, and continuous learning.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full glass border border-border-strong px-6 py-3 font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <a
              href="https://github.com/Adarsha01"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-12 w-12 rounded-full glass border border-border-strong hover:bg-white/5 transition-all hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsha-h-20317a263/"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-12 w-12 rounded-full glass border border-border-strong hover:bg-white/5 transition-all hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute -inset-10 rounded-[3rem] opacity-70 animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.45), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-strong rounded-[2rem] p-3 shadow-card"
          >
            <div className="relative overflow-hidden rounded-[1.6rem] aspect-square">
              <img
                src={portrait}
                alt="Adarsha H portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-4 py-3 shadow-card hidden sm:block"
          >
            <p className="font-display font-bold text-2xl text-gradient-blue"><CountUp to={7} suffix="+" /></p>
            <p className="text-xs text-muted-foreground">Projects Built</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-card hidden sm:block"
          >
            <p className="font-display font-bold text-base">MCA Graduate</p>
            <p className="text-xs text-muted-foreground">React Developer</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <div className="absolute left-0 right-0 -bottom-2 hidden lg:block">
        <div className="mx-auto max-w-[1280px] grid grid-cols-4 gap-px overflow-hidden rounded-2xl glass border border-border-strong mx-6">
          {[
            { node: <CountUp to={7} suffix="+" />, v: "Projects" },
            { node: "React", v: "Developer" },
            { node: "MCA", v: "Graduate" },
            { node: "Open", v: "To Work" },
          ].map((s) => (
            <div key={s.v} className="px-6 py-5 bg-background/40">
              <p className="font-display font-bold text-xl text-white">{s.node}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        <Mouse className="w-5 h-5" />
        <span className="tracking-widest uppercase">Explore My Work</span>
      </motion.a>
    </section>
  );
}
