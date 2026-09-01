"use client";

import Link from "next/link";
import React from "react";
import { heroContent, heroNavItems } from "@/constants";

const HeroNav = ({
  light,
  setLight,
}: {
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex flex-col gap-6 work-sans absolute top-0 pt-6 justify-center items-center w-full bg-transparent text-[0.6rem] sm:text-[0.9rem] z-40 overflow-hidden">
    <div className="flex w-[94%] items-center justify-between">
      <Link
        href={heroContent.logoLink}
        className="text-[0.6rem] sm:text-[0.9rem] "
      >
        <p className="font-bold">{heroContent.logo}</p>
      </Link>

      <div className="flex justify-center items-center gap-4">
        <div className="lg:flex gap-4 hidden">
          {heroNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`${
                light ? "after:bg-neutral-800" : "after:bg-white"
              } hero-two-nav-hover`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
          onClick={() => setLight(!light)}
          className={`relative sm:w-12 sm:h-6 w-12 h-6 rounded-full transition-colors duration-500 cursor-pointer ${
            light ? "bg-[#868585]" : "bg-[#595656]"
          }`}
        >
          <div
            className={`absolute top-1 left-1 sm:w-4 sm:h-4 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
              light ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  </div>
);

export default HeroNav;
