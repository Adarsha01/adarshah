import { Award, GraduationCap, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader, Stagger, StaggerItem } from "./Reveal";

const EDUCATION = [
  {
    icon: GraduationCap,
    title: "Master of Computer Applications (MCA)",
    org: "Postgraduate Degree",
    period: "Recent Graduate",
    note: "Advanced study in computer applications, software engineering and applied AI.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    org: "Undergraduate Degree",
    period: "Completed",
    note: "Foundations in programming, databases, and modern web development.",
  },
  {
    icon: ScrollText,
    title: "Frontend Development Certification",
    org: "Professional Certification",
    period: "Certified",
    note: "Hands-on training in HTML, CSS, JavaScript, React, and responsive design.",
  },
];

const CERTS = [
  {
    title: "React Developer Track",
    issuer: "Frontend Certification",
    date: "2024",
    credential: "AH-REACT-24",
  },
  {
    title: "Python for Data Science",
    issuer: "Machine Learning Track",
    date: "2024",
    credential: "AH-PY-DS-24",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Web Development",
    date: "2023",
    credential: "AH-JS-23",
  },
];

export function Education() {
  return (
    <section id="education" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Education"
          title="ACADEMIC FOUNDATION"
        />

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-6 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-primary to-transparent"
          />
          <ul className="space-y-6">
            {EDUCATION.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 grid place-items-center h-12 w-12 rounded-2xl glass-strong border border-border-strong">
                  <e.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="rounded-2xl glass border border-border p-6 hover:border-accent/40 hover:shadow-glow transition-all">
                  <p className="text-xs uppercase tracking-widest text-accent">{e.period}</p>
                  <h3 className="mt-1 font-display font-semibold text-xl text-white">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.org}</p>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">{e.note}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <SectionHeader eyebrow="Certifications" title="CONTINUOUS LEARNING" />
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map((c) => (
              <StaggerItem key={c.title}>
                <div className="group h-full rounded-3xl glass border border-border p-6 hover:border-accent/40 hover:shadow-glow transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="grid place-items-center h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border-strong">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs text-muted-foreground">{c.date}</span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-white">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      ID · {c.credential}
                    </span>
                    <button
                      type="button"
                      className="text-xs font-medium text-accent hover:text-white transition-colors"
                    >
                      Verify →
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
