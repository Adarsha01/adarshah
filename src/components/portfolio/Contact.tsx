import { motion } from "framer-motion";
import {
  CheckCircle2, Download, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal, SectionHeader } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    else if (form.name.length > 100) e.name = "Too long";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Add a subject";
    if (!form.message.trim()) e.message = "Write a short message";
    else if (form.message.length > 2000) e.message = "Too long";
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    const body = `Hi Adarsha,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(form.name)}`;
    window.location.href = `mailto:adarshah01@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  }

  const inputCls =
    "w-full rounded-2xl glass border border-border bg-transparent px-5 py-3.5 text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:shadow-glow transition-all";

  return (
    <section id="contact" className="section-pad px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Contact"
          title="LET'S BUILD SOMETHING AMAZING"
          subtitle="I'm actively looking for Software Engineer, Frontend Developer and React Developer opportunities. Whether you have a project, internship or full-time opportunity, I'd love to connect."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Left - Contact card */}
          <Reveal>
            <div className="relative h-full rounded-3xl glass-strong border border-border-strong p-8 overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-50"
                style={{
                  background: "radial-gradient(circle, rgba(37,99,235,0.5), transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to Work
                </div>
                <h3 className="mt-6 font-display font-bold text-2xl text-white">
                  Get in touch
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  Available worldwide · Based in Tumkur, India
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    { Icon: Mail, label: "Email", value: "adarshah01@gmail.com", href: "mailto:adarshah01@gmail.com" },
                    { Icon: Phone, label: "Phone", value: "+91 7019552699", href: "tel:+917019552699" },
                    { Icon: MapPin, label: "Location", value: "Tumkur, Karnataka, India" },
                    { Icon: Github, label: "GitHub", value: "github.com/Adarsha01", href: "https://github.com/Adarsha01" },
                    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/adarsha-h", href: "https://www.linkedin.com/in/adarsha-h-20317a263/" },
                  ].map(({ Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href ?? "#"}
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-start gap-4 rounded-2xl p-3 -mx-3 hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border-strong group-hover:border-accent transition-colors">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                            {label}
                          </p>
                          <p className="text-sm text-white truncate">{value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right - Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-strong border border-border-strong p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    maxLength={255}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  maxLength={200}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputCls}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div className="mt-4">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={form.message}
                  maxLength={2000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell me about your project, role, or idea…"
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-4 font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Opened your email client
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.1} className="mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong border border-border-strong p-12 sm:p-20 text-center">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(56,189,248,0.35), transparent 60%)",
              }}
            />
            <div className="relative">
              <Sparkles className="w-6 h-6 mx-auto text-accent" />
              <h3 className="mt-4 font-display font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-gradient">
                Interested in working together?
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's create something meaningful.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="/Adarsha_H_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="https://github.com/Adarsha01"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass border border-border-strong px-6 py-3 font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsha-h-20317a263/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass border border-border-strong px-6 py-3 font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
