"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectDialog from "@/components/projects/project-dialog";
import { projects } from "@/app/data";

const Projects = forwardRef<HTMLDivElement>((_props, ref) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = showAllProjects ? projects : projects.slice(0, 3);

  const openProjectDialog = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeProjectDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="h-full flex flex-col overflow-hidden border border-border/40 hover:border-primary/20 transition-all cursor-pointer"
                onClick={() => openProjectDialog(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.date && (
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {project.date}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectDialog(project);
                    }}
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          {!showAllProjects && projects.length > 3 ? (
            <Button size="lg" onClick={() => setShowAllProjects(true)}>
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAllProjects(false)}
            >
              Show Featured Projects
            </Button>
          )}
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          isOpen={isDialogOpen}
          onClose={closeProjectDialog}
        />
      )}
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
