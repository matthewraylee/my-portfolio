"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({
    home: null,
    about: null,
    projects: null,
    skills: null,
    resume: null,
    contact: null,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    Object.entries(sectionsRef.current).forEach(([section, ref]) => {
      if (!ref) return;

      const offsetTop = ref.offsetTop;
      const height = ref.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = sectionsRef.current[section];
    if (element) {
      // Special case for home section - always scroll to top
      if (section === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  // Create a ref callback function that returns void
  const setRef = (section: string) => (el: HTMLDivElement | null) => {
    sectionsRef.current[section] = el;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <MobileNavigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="container mx-auto px-4 pt-24 pb-20">
        <Hero ref={setRef("home")} scrollToSection={scrollToSection} />
        <About ref={setRef("about")} />
        <Projects ref={setRef("projects")} />
        <Skills ref={setRef("skills")} />
        <Resume ref={setRef("resume")} />
        <Contact ref={setRef("contact")} />
      </main>

      <Footer />
    </div>
  );
}
