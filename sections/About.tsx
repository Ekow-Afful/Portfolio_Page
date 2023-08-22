"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-[90%] relative z-10" id="about">
      <div className="absolute w-[200px] h-[438px] bg-[#7aebfb] blur-[190px] left-[94%] top-[0vh] z-0" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="h-screen w-screen flex flex-col gap-20 items-center justify-center"
      >
        <motion.div className="flex-center flex-col sm:flex-row w-full">
          <motion.div
            variants={planetVariants("left")}
            className="sm:w-[50%] flex-center "
          >
            <div className="mt-[100px]">
              <Image
                src="/get-started.png"
                alt="planet image"
                width={800}
                height={800}
                className="w-[70%] h-[70%] sm:w-[100%] sm:h-[100%] lg:w-[80%] lg:h-[80%] object-contain mx-auto "
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="flex-[0.80] sm:w-[50%] flex justify-center flex-col mx-auto"
          >
            <div className="xl:w-[90%] 2xl:w-[80%] sm:w-full w-[86%] mx-auto mb-40 ">
              <TypingText textStyles="" title="| No boundaries" />
              <TitleText
                textStyles=""
                title={<>Providing solutions to anyone across the Globe</>}
              />
              <div className="flex items-center gap-4 mt-8">
                <Link href="#contact">
                  <h4 className="text-[18px] font-medium text-[#c7c7c7]">
                    Let’s Connect
                  </h4>
                </Link>
                <Link href="#contact">
                  <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,_255,_255,_0.08)] hover:scale-95 hover:bg-[#00000057] transition-all duration-300">
                    <Image
                      src="arrow.svg"
                      alt="arrow"
                      width={100}
                      height={100}
                      className="w-[40%] h-[40%] object-contain "
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="absolute w-[18px] h-[20px] object-contain bottom-10"
        >
          <Link href="#whatweoffer ">
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              width={15}
              height={15}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
