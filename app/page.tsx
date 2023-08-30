"use client";

import About from "@/sections/About";
import About2 from "@/sections/About2";
import Contact from "@/sections/Contact";
import WhatWeOffer from "@/sections/WhatWeOffer";
import Feedback from "@/sections/Feedback";
import Skills from "@/sections/Skills";
import World from "@/sections/World";
import Projects from "@/sections/Projects";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className=" text-white flex-col overflow-x-clip ">
      <Hero />
      <div className="relative z-0 ">
        <About />
        <div className=" relative z-0 ">
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
