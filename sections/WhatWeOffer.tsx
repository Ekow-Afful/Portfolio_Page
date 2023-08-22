"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ExploreCard, TitleText, TypingText } from "@/components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "@/constants";

const WhatWeOffer = () => {
  const [active, setActive] = useState("world-1");
  return (
    <section className="paddings mt-[60px]" id="whatweoffer">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText title={<>What we offer</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
