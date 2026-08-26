"use client";

import { useEffect } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  useEffect(() => {
    // Park it off-screen so no stray ring shows before the first mouse move
    gsap.set(".flair", { xPercent: -50, yPercent: -50, x: -200, y: -200 });

    // Configure quickTo functions for x and y with easing and duration
    const xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="flair" />;
};

export default MouseFollower;
