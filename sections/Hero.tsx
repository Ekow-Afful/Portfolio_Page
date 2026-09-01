"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import MouseFollower from "@/components/MouseFollower";
import HeroFooter from "@/components/HeroFooter";
import HeroNav from "@/components/HeroNav";
import HeroImageTrail from "@/components/HeroImageTrail";
import { heroContent } from "@/constants";

const Hero = () => {
  // Dark is the default so the hero sits flush with the rest of the page.
  const [light, setLight] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`${
        light ? "bg-white text-black" : "bg-[#272626] text-white"
      } work-sans relative flex flex-col items-center w-full h-[100dvh] overflow-hidden cursor-crosshair transition-all duration-700`}
    >
      <HeroNav light={light} setLight={setLight} />
      <HeroImageTrail containerRef={heroRef} />

      <div
        className={`${
          light ? "bg-[#377bac75]" : "bg-[#ba7fe269]"
        } absolute top-0 left-0 w-[200px] h-[120px] rounded-full blur-2xl transition-all duration-700`}
      />

      <div className="w-[80%] sm:w-[70%] flex-1 min-h-0 flex flex-col justify-center items-center gap-6 pt-24 pb-2">
        <div className="shrink-0 flex flex-col justify-center items-center gap-5 w-full">
          <p className="text-[1.5rem] sm:text-[2rem] leading-[1.15] text-center">
            {heroContent.headline}
          </p>

          {/* <div className="flex items-center justify-center gap-3 opacity-80">
            <p className="text-[14px] sm:text-base">
              {heroContent.techStackLabel}
            </p>
            <span>|</span>
            <Image
              src={heroContent.techStackImg}
              alt="tech stack"
              width={284}
              height={90}
              priority
              className={`${
                light ? "drop-shadow-[0_0_1.5px_rgba(0,0,0,0.55)]" : ""
              } object-contain w-[170px] sm:w-[210px] h-auto`}
            />
          </div> */}
        </div>

        <CardContainer
          containerClassName="w-full flex-1 min-h-0"
          className="w-full h-full"
        >
          <CardBody className="relative flex items-center justify-center w-[90%] h-[90%]">
            <Image
              src={heroContent.images.backdrop}
              alt={heroContent.images.backdropAlt}
              width={450}
              height={200}
              priority
              className={`${
                light ? "sepia-0" : "hue-rotate-[45deg] brightness-[0.8]"
              } rounded-xl border h-[85%] w-auto max-w-full object-cover transition-all duration-700`}
            />
            <CardItem
              translateZ="100"
              className="absolute w-full h-full flex items-center justify-center"
            >
              <Image
                src={heroContent.images.subject}
                alt={heroContent.images.subjectAlt}
                width={900}
                height={1253}
                priority
                className={`${
                  light ? "hue-rotate-0" : "grayscale"
                } h-[90%] w-auto max-w-full object-contain scale-105 transition-all duration-700`}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <MouseFollower />
      <HeroFooter />
    </section>
  );
};

export default Hero;
