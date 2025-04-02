"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  X,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Define interfaces for project data structure
interface GalleryItem {
  type: "image" | "video";
  url?: string;
  caption?: string;
  videoId?: string; // YouTube video ID
  thumbnail?: string; // Optional thumbnail for videos
}

// Update the Project interface to include date fields
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
  gallery?: GalleryItem[];
  technologies?: Technology[];
  features?: string[];
  date?: string;
  dateRange?: string;
}

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

interface Technology {
  name: string;
  description: string;
}

// Changed from named export to default export
function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Add this state and function to the component
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenItem, setFullscreenItem] = useState<GalleryItem | null>(
    null
  );

  const openFullscreen = (item: GalleryItem) => {
    setFullscreenItem(item);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenItem(null);
  };

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

  const nextItem = () => {
    if (!hasGallery) return;
    setCurrentItemIndex((prev) =>
      prev === project.gallery!.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    if (!hasGallery) return;
    setCurrentItemIndex((prev) =>
      prev === 0 ? project.gallery!.length - 1 : prev - 1
    );
  };

  if (!mounted || !isOpen || !project) return null;

  // Default gallery item if gallery is empty
  const currentItem = hasGallery
    ? project.gallery[currentItemIndex]
    : {
        type: "image" as const,
        url: project.image || "/placeholder.svg",
        caption: "No caption available",
      };

  // Function to render the current gallery item based on its type
  const renderGalleryItem = (item: GalleryItem) => {
    if (item.type === "video" && item.videoId) {
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=0&rel=0`}
            title={item.caption || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      );
    } else {
      // Default to image
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <img
            src={item.url || "/placeholder.svg"}
            alt={item.caption || "Gallery image"}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      );
    }
  };

  // Function to render gallery thumbnails
  const renderGalleryThumbnail = (item: GalleryItem, index: number) => {
    if (item.type === "video") {
      // For videos, use the provided thumbnail or generate from YouTube
      const thumbnailUrl =
        item.thumbnail ||
        (item.videoId
          ? `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`
          : "/placeholder.svg");

      return (
        <div className="relative">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={item.caption || `Video ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
      );
    } else {
      // For images, just show the image
      return (
        <img
          src={item.url || "/placeholder.svg"}
          alt={item.caption || `Image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      );
    }
  };

  return (
    <>
      {createPortal(
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
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  {(project.dateRange || project.date) && (
                    <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {project.dateRange || project.date}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="mt-6">
                <TabsList
                  className={cn("grid w-full", {
                    "grid-cols-1":
                      !hasGallery &&
                      !(
                        (project.technologies &&
                          project.technologies.length > 0) ||
                        (project.features && project.features.length > 0)
                      ),
                    "grid-cols-2":
                      (hasGallery &&
                        !(
                          (project.technologies &&
                            project.technologies.length > 0) ||
                          (project.features && project.features.length > 0)
                        )) ||
                      (!hasGallery &&
                        ((project.technologies &&
                          project.technologies.length > 0) ||
                          (project.features && project.features.length > 0))),
                    "grid-cols-3":
                      hasGallery &&
                      ((project.technologies &&
                        project.technologies.length > 0) ||
                        (project.features && project.features.length > 0)),
                  })}
                >
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  {hasGallery && (
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  )}
                  {(project.technologies && project.technologies.length > 0) ||
                  (project.features && project.features.length > 0) ? (
                    <TabsTrigger value="techFeatures">
                      Technical Details
                    </TabsTrigger>
                  ) : null}
                </TabsList>

                {/* Tab content */}
                <div className="mt-4">
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
                        {renderGalleryItem(currentItem)}

                        {currentItem.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 text-center">
                            <p className="text-gray-900 dark:text-white">
                              {currentItem.caption}
                            </p>
                          </div>
                        )}

                        {project.gallery.length > 1 && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-900/90 backdrop-blur-sm"
                              onClick={prevItem}
                            >
                              <ChevronLeft className="h-6 w-6" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-900/90 backdrop-blur-sm"
                              onClick={nextItem}
                            >
                              <ChevronRight className="h-6 w-6" />
                            </Button>
                          </>
                        )}

                        {/* Add fullscreen button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-900/90 backdrop-blur-sm"
                          onClick={() => openFullscreen(currentItem)}
                        >
                          <Maximize2 className="h-4 w-4" />
                          <span className="sr-only">View fullscreen</span>
                        </Button>
                      </div>

                      {project.gallery.length > 1 && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-4">
                          {project.gallery.map(
                            (item: GalleryItem, index: number) => (
                              <div
                                key={index}
                                className={cn(
                                  "h-20 overflow-hidden rounded-md cursor-pointer border-2 bg-gray-100 dark:bg-gray-800",
                                  currentItemIndex === index
                                    ? "border-primary"
                                    : "border-transparent"
                                )}
                                onClick={() => setCurrentItemIndex(index)}
                              >
                                {renderGalleryThumbnail(item, index)}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </TabsContent>
                  )}

                  {((project.technologies && project.technologies.length > 0) ||
                    (project.features && project.features.length > 0)) && (
                    <TabsContent
                      value="techFeatures"
                      className="mt-4 space-y-6"
                    >
                      {/* Features section */}
                      {project.features && project.features.length > 0 && (
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Key Features
                          </h3>
                          <ul className="space-y-3">
                            {project.features.map(
                              (feature: string, index: number) => (
                                <li key={index} className="flex items-start">
                                  <div className="mr-3 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary" />
                                  <span className="text-gray-600 dark:text-gray-300">
                                    {feature}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Technologies section */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                              Technologies Used
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
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
                          </div>
                        )}

                      {/* Project-specific details */}
                      {(project.problem || project.outcome) && (
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                          <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                            Implementation Details
                          </h3>
                          <div className="space-y-4">
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
                      )}
                    </TabsContent>
                  )}
                </div>
              </Tabs>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Fullscreen modal */}
      {isFullscreen &&
        fullscreenItem &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={closeFullscreen}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close fullscreen</span>
            </Button>

            <div
              className="max-h-screen max-w-screen overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {fullscreenItem.type === "video" && fullscreenItem.videoId ? (
                <div
                  className="relative w-full"
                  style={{ maxWidth: "90vw", height: "90vh" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${fullscreenItem.videoId}?autoplay=1&rel=0`}
                    title={fullscreenItem.caption || "YouTube video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <img
                  src={fullscreenItem.url || "/placeholder.svg"}
                  alt={fullscreenItem.caption || "Gallery image"}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                />
              )}

              {fullscreenItem.caption && (
                <div className="text-white text-center mt-2 p-2">
                  {fullscreenItem.caption}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

// Add default export
export default ProjectDialog;
