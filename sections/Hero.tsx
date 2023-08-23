"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section className=" relative z-30 w-full h-[100vh] flex text-white ">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-[90%] mx-auto text-white relative lg:top-[300px] top-[400px] z-30"
    >
      <div className=" w-[70%] flex gap-8 justify-center items-start flex-col ">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-left lg:text-[40px] text-[20px] font-bold"
        >
          Front-End Web <br /> Developer
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`lg:text-[25px] text-[16px] font-thin `}>
            Hi I’m Michael, a passionate react <br /> Front-end Dev as well as a
            UI/UX <br /> Designer
          </h1>
        </motion.div>
        <motion.div variants={textVariant(1.3)} className="flex gap-4">
          <motion.h1 className="flex flex-row justify-center items-center">
            Tech Stack
          </motion.h1>
          <div className="flex-center gap-4">
            |
            <Image
              src="/techstack.svg"
              alt="tech stack"
              width={300}
              height={300}
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "spring", 0.1, 2.0)}
        className="relative w-[50%] md:mt-[20px] -mt-[12px]"
      >
        <div className="absolute bottom-[60px] left-[800px]  w-full h-[400px] ">
          <Link href="#about ">
            <Image
              src="/header-img.svg"
              alt="hero image"
              width={800}
              height={200}
              className="object-contain hover:-translate-x-1 hover:-translate-y-1 "
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
