"use client";

// import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const sections = ["home", "about", "projects", "skills", "resume", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <span className="text-primary">John</span> Doe
        </h1>
        <nav className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm font-medium transition-colors ${
                activeSection === section
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
