"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-primary">Matthew</span> Ray Lee
            </h2>
            <p className="text-sm text-muted-foreground">
              Data Analyst | Business Intelligence Engineer | Software Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <a
                href="https://www.linkedin.com/in/matthewraylee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <a
                href="https://github.com/matthewraylee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
              <a
                href="mailto:matthewraylee.work@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Matthew Ray Lee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
