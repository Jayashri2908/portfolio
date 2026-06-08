"use client";

import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import ExperienceTimeline from "@/components/experience-timeline";
import Services from "@/components/services";
import Now from "@/components/now";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main className="container grain">
        <Hero />
        <About />
        <Projects />
        <ExperienceTimeline />
        <Services />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
