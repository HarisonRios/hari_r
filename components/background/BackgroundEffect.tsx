'use client';

import { useEffect, useRef } from "react";
import "../../styles/globals.scss";

export default function BackgroundEffect() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (gradientRef.current) {
        gradientRef.current.style.background = `
          radial-gradient(circle at ${x}px ${y}px, rgba(128, 0, 255, 0.4), transparent 150px)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background-wrapper">
      <div className="background-base" />
      <div className="background-gradient" ref={gradientRef} />
    </div>
  );
}
