"use client";

import { forwardRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import GradientMeshBackground from "../background/GradientMeshBackground";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ scrollToSection }, ref) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);
    const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
    const [activeRole, setActiveRole] = useState("data");

    const roles = {
      data: {
        title: "Data Analyst",
        description:
          "I transform complex data into actionable insights that drive strategic business decisions.",
        skills: [
          "Data Visualization",
          "Statistical Analysis",
          "SQL",
          "Python",
          "Tableau",
        ],
        color: "bg-primary/10 text-primary",
      },
      bi: {
        title: "Business Intelligence Engineer",
        description:
          "I build scalable BI solutions that bridge the gap between data and business strategy.",
        skills: [
          "ETL Pipeline",
          "Data Modeling",
          "Power BI",
          "Data Warehouse",
          "KPI Dashboards",
        ],
        color: "bg-primary/10 text-primary",
      },
      dev: {
        title: "Software Developer",
        description:
          "I develop robust applications with a focus on data-driven features and analytics integration.",
        skills: ["Full Stack", "React", "Node.js", "TypeScript", "API Design"],
        color: "bg-primary/10 text-primary",
      },
    };

    return (
      <section
        ref={ref}
        className="min-h-[calc(100vh-6rem)] flex flex-col justify-center relative overflow-hidden"
      >
        {/* Figure out implementing gradient mesh background */}
        <GradientMeshBackground activeRole={activeRole} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ opacity, scale }}
          className="max-w-3xl space-y-6 z-10"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Hi, I&apos;m <span className="text-primary">Matthew Lee</span>
            </h1>
            <div className="h-12 md:h-14">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  2000,
                  "Business Intelligence Engineer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(roles).map(([key, role]) => (
              <Badge
                key={key}
                variant={activeRole === key ? "default" : "outline"}
                className={`text-sm cursor-pointer transition-colors ${
                  activeRole === key ? "" : "hover:bg-accent"
                }`}
                onClick={() => setActiveRole(key)}
              >
                {role.title}
              </Badge>
            ))}
          </div>

          <p className="text-lg md:text-xl text-muted-foreground">
            {roles[activeRole as keyof typeof roles].description}
          </p>

          <div className="flex flex-wrap gap-2">
            {roles[activeRole as keyof typeof roles].skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
