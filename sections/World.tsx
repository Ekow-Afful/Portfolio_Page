"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components";
import { fadeIn } from "../utils/motion";

import Image from "next/image";

const World = () => (
  <section className="paddings relative z-10">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full mx-auto flex flex-col"
    >
      <TypingText textStyles="text-center" title="| Developer for Everyone" />
      <TitleText
        textStyles="text-center md:px-[12%]"
        title={
          <>
            Unlocking Solutions Worldwide: Wherever you are, we've got the
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
          height={400}
          width={400}
          loading="eager"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-[18%] right-[8%]  md:bottom-20  md:right-20  lg:bottom-[23%] lg:right-[10%] 2xl:bottom-[23%] 2xl:right-[18%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <Image
            src="/people-01.png"
            alt="people"
            width={400}
            height={400}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="absolute top-[18%] left-[8%]  md:top-20  md:left-20  lg:top-[23%] lg:left-[10%] 2xl:top-[23%] 2xl:left-[18%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <Image
            src="/people-03.png"
            alt="people"
            width={400}
            height={400}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="absolute top-[18%] left-[8%]  md:top-20  md:left-20  lg:top-[23%] lg:left-[10%] 2xl:top-[40%] 2xl:left-[47%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
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
