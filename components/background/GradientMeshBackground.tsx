"use client";

import { useEffect, useRef, useState } from "react";

interface GradientMeshBackgroundProps {
  activeRole: string;
}

const GradientMeshBackground = ({
  activeRole,
}: GradientMeshBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [colors, setColors] = useState({
    primary: "#3b82f6", // Blue for data
    secondary: "#8b5cf6", // Purple
    tertiary: "#10b981", // Green
  });

  useEffect(() => {
    // Change colors based on active role
    switch (activeRole) {
      case "data":
        setColors({
          primary: "#3b82f6", // Blue
          secondary: "#60a5fa",
          tertiary: "#93c5fd",
        });
        break;
      case "bi":
        setColors({
          primary: "#8b5cf6", // Purple
          secondary: "#a78bfa",
          tertiary: "#c4b5fd",
        });
        break;
      case "dev":
        setColors({
          primary: "#10b981", // Green
          secondary: "#34d399",
          tertiary: "#6ee7b7",
        });
        break;
      default:
        setColors({
          primary: "#3b82f6",
          secondary: "#60a5fa",
          tertiary: "#93c5fd",
        });
    }
  }, [activeRole]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    // Create gradient mesh
    const gradientMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple radial gradients
      const createGradient = (
        x: number,
        y: number,
        radius: number,
        color: string
      ) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color + "40"); // 25% opacity
        gradient.addColorStop(1, color + "00"); // 0% opacity
        return gradient;
      };

      // Time-based animation
      const time = Date.now() * 0.001;

      // Draw first gradient
      ctx.fillStyle = createGradient(
        canvas.width * (0.3 + 0.1 * Math.sin(time * 0.3)),
        canvas.height * (0.3 + 0.1 * Math.cos(time * 0.2)),
        canvas.width * 0.5,
        colors.primary
      );
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw second gradient
      ctx.fillStyle = createGradient(
        canvas.width * (0.7 + 0.1 * Math.cos(time * 0.4)),
        canvas.height * (0.7 + 0.1 * Math.sin(time * 0.3)),
        canvas.width * 0.5,
        colors.secondary
      );
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw third gradient
      ctx.fillStyle = createGradient(
        canvas.width * (0.5 + 0.1 * Math.sin(time * 0.5)),
        canvas.height * (0.2 + 0.1 * Math.cos(time * 0.4)),
        canvas.width * 0.4,
        colors.tertiary
      );
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(gradientMesh);
    };

    gradientMesh();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [colors]);

  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.15), transparent 80%)",
      }}
    >
      {/* Temporary visible element to debug */}
      <div className="absolute inset-0 bg-blue-500/10" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
};

export default GradientMeshBackground;
