"use client";

import { motion } from "framer-motion";

import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { planetVariants, fadeIn } from "../utils/motion";
import Image from "next/image";

const About2 = () => (
  <section className="mt-0 w-[90%] relative z-10" id="about2">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className=" w-screen flex flex-col gap-20 items-center justify-center"
    >
      <motion.div className="flex-center flex-col-reverse sm:flex-row w-full">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.80] sm:w-[50%] flex justify-center flex-col mx-auto"
        >
          <div className="xl:w-[90%] 2xl:w-[80%] sm:w-full w-[90%] mx-auto mb-[40px] ">
            <TypingText textStyles="" title="| Our Goal" />
            <TitleText
              textStyles=""
              title={<>Transforming Visions into Reality</>}
            />
            <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
              {startingFeatures.map((feature, index) => (
                <StartSteps
                  key={feature}
                  number={`${index < 10 ? "" : ""} ${index + 1}`}
                  text={feature}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className="sm:w-[50%] flex-center "
        >
          <div className="mt-[100px]">
            <Image
              src="/whats-new.png"
              alt="planet image"
              width={800}
              height={800}
              priority
              className="w-[70%] h-[70%] sm:w-[100%] sm:h-[100%] lg:w-[80%] lg:h-[80%] object-contain mx-auto "
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default About2;
