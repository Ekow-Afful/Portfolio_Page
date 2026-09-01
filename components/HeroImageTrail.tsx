"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const trailImages = [
  "/projects/beafit.avif",
  "/projects/art.avif",
  "/projects/crispy.avif",
  "/projects/royal.avif",
  "/projects/trust-power.avif",
  "/projects/trust_design.avif",
  "/projects/heroestolife_1.avif",
  "/projects/portfolio.avif",
  "/projects/game.avif",
  "/projects/facol.avif",
  "/projects/wear.avif",
  "/projects/royal_web.avif",
];

interface ImageDisplay {
  id: number;
  index: number;
  position: { x: number; y: number };
}

const HeroImageTrail = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) => {
  const [imageDisplays, setImageDisplays] = useState<ImageDisplay[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const nextId = useRef(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const movementThreshold = 160;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const deltaX = x - lastPosition.current.x;
      const deltaY = y - lastPosition.current.y;

      if (Math.abs(deltaX) + Math.abs(deltaY) > movementThreshold) {
        const newImage: ImageDisplay = {
          id: nextId.current++,
          index: imageIndex.current,
          position: { x, y },
        };

        setImageDisplays((prev) => [...prev, newImage]);

        setTimeout(() => {
          setImageDisplays((prev) => prev.filter((img) => img.id !== newImage.id));
        }, 700);

        imageIndex.current = (imageIndex.current + 1) % trailImages.length;
        lastPosition.current = { x, y };
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      <AnimatePresence>
        {imageDisplays.map(({ id, index, position }) => (
          <motion.div
            key={id}
            className="absolute 2xl:w-[16%] 2xl:h-[20%] lg:w-[22%] lg:h-[18%] md:w-[22%] md:h-[13%] w-[26%] h-[10%]"
            initial={{ x: position.x, y: position.y, opacity: 0, scale: 0.2 }}
            animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
            exit={{ x: position.x, y: position.y, opacity: 0, scale: 0.2 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <Image
              src={trailImages[index]}
              alt="project preview"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeroImageTrail;
