"use client";

import { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ scrollToSection }, ref) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);
    const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

    return (
      <section
        ref={ref}
        className="min-h-[calc(100vh-6rem)] flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ opacity, scale }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Data Analyst | Business Intelligence Engineer | Software Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            I transform complex data into actionable insights and build tools
            that drive business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
