import { useEffect, useRef } from "react";
import {
  calculateMouseEffect,
  createParticles,
} from "../components/utils/mouse-effect";

export function useMouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    createParticles(container, 50);

    const handleMouseMove = (e: MouseEvent) => {
      const { deltaX, deltaY } = calculateMouseEffect(e, container);

      content.style.transform = `
        perspective(1000px)
        rotateX(${deltaY * 10}deg)
        rotateY(${deltaX * 10}deg)
        translateZ(50px)
      `;

      const particles = container.querySelectorAll(".particle");
      particles.forEach((particle) => {
        const speed = particle.classList.contains("fast") ? 2 : 1;
        (particle as HTMLElement).style.transform = `translate(${
          deltaX * 30 * speed
        }px, ${deltaY * 30 * speed}px)`;
      });
    };

    const handleMouseLeave = () => {
      content.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
      `;

      const particles = container.querySelectorAll(".particle");
      particles.forEach((particle) => {
        (particle as HTMLElement).style.transform = "translate(0px, 0px)";
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { containerRef, contentRef };
}
