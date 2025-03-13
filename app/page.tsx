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
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <MobileNavigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="container mx-auto px-4 pt-24 pb-20">
        <Hero
          ref={(el) => (sectionsRef.current.home = el)}
          scrollToSection={scrollToSection}
        />
        <About ref={(el) => (sectionsRef.current.about = el)} />
        <Projects ref={(el) => (sectionsRef.current.projects = el)} />
        <Skills ref={(el) => (sectionsRef.current.skills = el)} />
        <Resume ref={(el) => (sectionsRef.current.resume = el)} />
        <Contact ref={(el) => (sectionsRef.current.contact = el)} />
      </main>

      <Footer />
    </div>
  );
}
