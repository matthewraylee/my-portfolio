"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const sections = ["home", "about", "projects", "skills", "resume", "contact"];
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // For debugging
  useEffect(() => {
    if (mounted) {
      console.log("Current theme:", theme);
      console.log("Resolved theme:", resolvedTheme);
    }
  }, [mounted, theme, resolvedTheme]);

  // Use a more direct approach to determine which logo to show
  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/MattLogo_White.png"
      : "/MattLogo_Black.png";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
          {mounted ? (
            <Image
              src={logoSrc}
              alt="Mr. Lee"
              width={80}
              height={80}
              className="h-12 w-auto"
              priority
            />
          ) : (
            // Placeholder during server rendering
            <div className="h-12 w-24" />
          )}
        </div>
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
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1cpyXkWEZ8g4GTcwsFVxbh38H9toAj88Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
