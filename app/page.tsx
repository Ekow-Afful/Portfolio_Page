"use client";

import { Footer } from "@/components";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import About2 from "@/sections/About2";
import Contact from "@/sections/Contact";
import WhatWeOffer from "@/sections/WhatWeOffer";
import Feedback from "@/sections/Feedback";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import World from "@/sections/World";
import Image from "next/image";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="  h-[100vh] text-white flex-col overflow-x-hidden bg-[#030014]">
      <div className="bg-[url('/banner-bg.png')] snap-start">
        <Navbar />
        <Hero />
      </div>

      <div className="snap-start relative z-0 ">
        <About />

        <div className="snap-start relative z-0 ">
          <div className="gradient-03 z-0" />
          <About2 />
        </div>
      </div>
      <div className="relative">
        <Skills />
        <div className="gradient-04 z-0" />
        <WhatWeOffer />
      </div>
      <World />
      <div className="relative ">
        <Projects />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <div className="relative">
        {/* <div className="gradient-04 z-0" /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
