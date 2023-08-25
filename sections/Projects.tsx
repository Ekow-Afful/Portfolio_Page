"use client";

import { motion } from "framer-motion";

import { InsightCard, TitleText, TypingText } from "@/components";
import { insights } from "@/constants";

const Projects = () => (
  <section className="paddings relative z-10" id="projects">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:w-[75%] lg:w-[90%] mx-auto flex flex-col"
    >
      <TypingText title="| Projects" textStyles="text-center" />
      <TitleText
        title={
          <>
            Some of{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the Worlds{" "}
            </span>
            We’ve Built
          </>
        }
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px] ">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
