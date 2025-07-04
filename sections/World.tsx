"use client";

import { motion } from "motion/react";

import { TitleText, TypingText } from "@/components";
import { fadeIn } from "../utils/motion";

import Image from "next/image";

const World = () => (
  <section className="paddings relative flex justify-center items-center z-10">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full mx-auto flex flex-col 2xl:max-w-[1700px]"
    >
      <TypingText textStyles="text-center" title="| Developer for Everyone" />
      <TitleText
        textStyles="text-center md:px-[12%]"
        title={
          <>
            Unlocking Solutions Worldwide: Wherever you are, I've got the
            perfect solution to your needs.
          </>
        }
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative my-[68px] flex w-full lg:h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          height={300}
          width={300}
          loading="eager"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-[18%] right-[8%]  md:bottom-20  md:right-20  lg:bottom-[23%] lg:right-[10%] 2xl:bottom-[23%] 2xl:right-[18%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <Image
            src="/people-01.png"
            alt="people"
            width={300}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="absolute top-[18%] left-[8%]  md:top-20  md:left-20  lg:top-[23%] lg:left-[10%] 2xl:top-[23%] 2xl:left-[18%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <Image
            src="/people-03.png"
            alt="people"
            width={300}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="absolute top-[30%] left-[40%]  md:top-[40%]  md:left-[40%]  lg:top-[40%] lg:left-[40%] 2xl:top-[40%] 2xl:left-[47%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <Image
            src="/people-02.png"
            alt="people"
            width={400}
            height={400}
            className="w-[100%] h-[100%]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
