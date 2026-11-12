import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceTimeline from "@/components/experience-timeline";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Capabilities from "@/components/capabilities";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Research />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
