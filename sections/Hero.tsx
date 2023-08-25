"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components";

const Hero = () => (
  <section className=" relative z-30 w-full h-[100vh] flex text-white bg-[url('/main.svg')]">
    <div className="absolute w-full">
      <Navbar />
    </div>
    <div className="absolute w-full -z-20 -top-[160px] left-[40%] mx-auto justify-center items-center">
      <Image
        src="/moon-2.png"
        width={800}
        height={800}
        alt="moon"
        className="object-contain w-[250px] h-[250px]"
      />
    </div>

    <div className="bg-black h-screen z-40 absolute left-[10%] top-[30%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[90%] top-[30%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[50%] top-[60%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[40%] top-[40%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[90%] top-[80%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[80%] top-[20%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[30%] top-[10%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <div className="bg-black h-screen z-40 absolute left-[10%] top-[80%] items-center justify-center">
      <div className="stars-container">
        <div className="stars">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-[90%] mx-auto text-white relative lg:top-[320px] top-[300px] z-30"
    >
      <div className=" w-[70%] flex gap-8 justify-center items-center md:items-start md:mx-0 mx-auto text-center md:text-left flex-col ">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-center md:text-left text-[40px] font-bold"
        >
          Front-End{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Web <br /> Developer
          </span>{" "}
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1
            className={`lg:text-[25px] text-[20px] font-normal text-secondary-white `}
          >
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
        <div className="absolute 2xl:bottom-[120px] 2xl:left-[850px] xl:bottom-[120px] xl:left-[770px] lg:bottom-[50px] lg:left-[600px] xl:w-[80%] w-[90%] h-[400px] md:flex hidden ">
          <Link href="#about ">
            <Image
              src="/header-3.svg"
              alt="hero image"
              width={1000}
              height={200}
              className=" object-contain hover:-translate-x-1 hover:-translate-y-1 "
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
