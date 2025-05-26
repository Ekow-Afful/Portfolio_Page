"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { ExploreCard, TitleText, TypingText } from "@/components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { services } from "@/constants";

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
        <TitleText
          title={
            <>
              What{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                I Offer
              </span>
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {services.map((service, index) => (
            <ExploreCard
              key={service.id}
              {...service}
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
