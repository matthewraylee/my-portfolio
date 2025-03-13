"use client";

interface MobileNavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const MobileNavigation = ({
  activeSection,
  scrollToSection,
}: MobileNavigationProps) => {
  const sections = ["home", "about", "projects", "skills", "resume", "contact"];

  // Icons for mobile navigation
  const icons = {
    home: "🏠",
    about: "👤",
    projects: "💼",
    skills: "🔧",
    resume: "📄",
    contact: "📧",
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <div className="bg-background/80 backdrop-blur-sm rounded-full border shadow-lg px-4 py-2">
        <div className="flex space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`p-2 rounded-full ${
                activeSection === section
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <span className="sr-only">{section}</span>
              {icons[section as keyof typeof icons]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
