import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Background } from "@/components/portfolio/Background";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adarsha H | Software Engineer | React Developer" },
      {
        name: "description",
        content:
          "Portfolio of Adarsha H, a Software Engineer and React Developer building modern web applications, AI-powered solutions, and responsive user experiences.",
      },
      { property: "og:title", content: "Adarsha H | Software Engineer | React Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Adarsha H — React, JavaScript, AI projects and modern frontend engineering.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Adarsha H | Software Engineer" },
      {
        name: "twitter:description",
        content: "Modern web applications, AI-powered solutions, and polished UX.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Adarsha H",
          jobTitle: "Software Engineer",
          email: "mailto:adarshah01@gmail.com",
          telephone: "+91 7019552699",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tumkur",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/Adarsha01",
            "https://www.linkedin.com/in/adarsha-h-20317a263/",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
