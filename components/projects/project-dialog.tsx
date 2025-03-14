"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Define interfaces for project data structure
interface GalleryImage {
  url: string;
  caption: string;
}

interface Technology {
  name: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  fullDescription?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  gallery?: GalleryImage[];
  technologies?: Technology[];
  features?: string[];
}

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({
  project,
  isOpen,
  onClose,
}: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Ensure gallery exists and has items
  const hasGallery =
    project?.gallery &&
    Array.isArray(project.gallery) &&
    project.gallery.length > 0;

  useEffect(() => {
    setMounted(true);

    // Prevent body scrolling when dialog is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if the click target is the backdrop element itself (the outermost div)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (!hasGallery) return;
    setCurrentImageIndex((prev) =>
      prev === project.gallery!.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!hasGallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery!.length - 1 : prev - 1
    );
  };

  if (!mounted || !isOpen || !project) return null;

  // Default image if gallery is empty
  const currentImage = hasGallery
    ? project.gallery[currentImageIndex]
    : {
        url: project.image || "/placeholder.svg",
        caption: "No caption available",
      };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl rounded-lg bg-white dark:bg-gray-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - positioned absolutely within the dialog */}
        <button
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-6 overflow-y-auto max-h-[85vh]">
          {/* Header */}
          <div className="mb-6 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="mt-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {hasGallery && <TabsTrigger value="gallery">Gallery</TabsTrigger>}
              {project.technologies && project.technologies.length > 0 && (
                <TabsTrigger value="tech">Technologies</TabsTrigger>
              )}
              {project.features && project.features.length > 0 && (
                <TabsTrigger value="features">Features</TabsTrigger>
              )}
            </TabsList>

            {/* Consistent min-height for all tab content */}
            <div className="min-h-[500px]">
              <TabsContent value="overview" className="mt-4 space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  {project.fullDescription && (
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {project.fullDescription}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.problem && (
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Problem
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Solution
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {project.solution}
                        </p>
                      </div>
                    )}
                    {project.outcome && (
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Outcome
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {project.outcome}
                        </p>
                      </div>
                    )}
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {project.link && (
                  <div className="pt-4">
                    <Button asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </div>
                )}
              </TabsContent>

              {hasGallery && (
                <TabsContent value="gallery" className="mt-4">
                  <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src={currentImage.url || "/placeholder.svg"}
                      alt={currentImage.caption || project.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 text-center">
                      <p className="text-gray-900 dark:text-white">
                        {currentImage.caption || ""}
                      </p>
                    </div>

                    {project.gallery.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-900/90 backdrop-blur-sm"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-900/90 backdrop-blur-sm"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                  </div>

                  {project.gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {project.gallery.map(
                        (image: GalleryImage, index: number) => (
                          <div
                            key={index}
                            className={cn(
                              "h-20 overflow-hidden rounded-md cursor-pointer border-2 bg-gray-100 dark:bg-gray-800",
                              currentImageIndex === index
                                ? "border-primary"
                                : "border-transparent"
                            )}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <img
                              src={image.url || "/placeholder.svg"}
                              alt={image.caption || `Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}
                </TabsContent>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <TabsContent value="tech" className="mt-4">
                  <div className="space-y-4">
                    {project.technologies.map(
                      (tech: Technology, index: number) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        >
                          <h3 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">
                            {tech.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {tech.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>
              )}

              {project.features && project.features.length > 0 && (
                <TabsContent value="features" className="mt-4">
                  {/* Features content */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {project.features.map(
                        (feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-3 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary" />
                            <span className="text-gray-600 dark:text-gray-300 text-lg">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Project-specific details instead of generic content */}
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 mt-4">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                      Implementation Details
                    </h3>
                    <div className="space-y-4">
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div>
                            <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies
                                .slice(0, 3)
                                .map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-3 py-1"
                                  >
                                    {tech.name}
                                  </Badge>
                                ))}
                              {project.technologies.length > 3 && (
                                <Badge variant="outline" className="px-3 py-1">
                                  +{project.technologies.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}

                      {project.problem && (
                        <div>
                          <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Problem Solved:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {project.problem}
                          </p>
                        </div>
                      )}

                      {project.outcome && (
                        <div>
                          <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Results Achieved:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {project.outcome}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              )}
            </div>
          </Tabs>
        </div>
      </div>
    </div>,
    document.body
  );
}
