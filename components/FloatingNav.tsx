"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { floatingNavItems, heroContent } from "@/constants";

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    // Show the glass nav only once the hero has fully scrolled out of view,
    // so it never fights with HeroNav for the same space.
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="liquid-glass-nav flex items-center gap-3 sm:gap-8 rounded-full pl-2 pr-3 sm:pr-5 py-1.5 sm:py-2 text-white">
        <Link
          href={heroContent.logoLink}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/25 shrink-0">
            <Image
              src={heroContent.images.subject}
              alt={heroContent.logo}
              fill
              sizes="36px"
              className="object-cover object-top scale-125"
            />
          </span>
          <span className="font-bold text-[15px] sm:text-base whitespace-nowrap">
            {heroContent.logo}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-sm text-white/80">
          <Link
            href={heroContent.resume}
            target="_blank"
            download
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Download CV
          </Link>
          {floatingNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
