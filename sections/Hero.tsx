"use client";

import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components";
import Stars from "@/components/Stars";
import { AiFillFilePdf } from "react-icons/ai";

const Hero = () => (
  <section className=" relative z-10 w-full h-[95vh] sm:h-[90vh] md:h-[100vh] xs:h-120 flex text-white ">
    <div className="absolute w-full">
      <Navbar />
    </div>

    <div className="absolute w-[200px] h-[300px] bg-[#7aebfb] blur-[250px] left-[42%] top-[0] -z-30" />

    <div className="absolute w-full -z-20 -top-[115px] left-[40%] mx-auto justify-center items-center">
      <Image
        src="/moon-2.png"
        width={800}
        height={800}
        priority
        alt="moon"
        className="object-contain w-[250px] h-[250px]"
      />
    </div>

    <Stars />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="sm:w-[90%] md:mt-[220px] mt-[120px] mx-auto text-white relative flex items-center justify-center gap-10 z-30"
    >
      <div className=" lg:w-[50%] flex gap-8 justify-center items-center mx-auto lg:items-start lg:mx-0 text-center lg:text-left flex-col pl-[30px] pt-[40px]">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-center lg:text-left text-[47px] font-bold"
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
            className={`lg:text-[24px] md:text-[22px] text-[20px] font-normal text-slate-400 `}
          >
            Hi I’m Michael, a passionate react <br /> Front-end Dev as well as a
            UI/UX <br /> Designer
          </h1>
        </motion.div>
        <motion.div variants={textVariant(1.3)} className="flex gap-4">
          <motion.h1 className="flex flex-row justify-center items-center text-slate-400">
            Tech Stack
          </motion.h1>
          <div className="flex-center gap-4">
            |
            <Image
              src="/techstack.svg"
              alt="tech stack"
              width={200}
              height={300}
              priority
              className="object-contain w-[80%] h-[80%] "
            />
          </div>
        </motion.div>
        <motion.div
          variants={textVariant(1.6)}
          className="hidden lg:flex justify-start gap-1 w-fit p-[10px] text-[18px] bg-[#ffffff14] "
        >
          <Link href="/resume-new.pdf" target="_blank" download>
            Download Resume
          </Link>
          <div className="">
            <AiFillFilePdf style={{ color: "#ff0000", marginTop: "0.3rem" }} />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "spring", 0.1, 2.0)}
        className="relative lg:w-[50%] "
      >
        <div className="w-[100%] items-center justify-end ml-[120px] lg:flex hidden ">
          <Link href="#about ">
            <Image
              src="/header-3.svg"
              alt="hero image"
              width={800}
              height={200}
              priority
              className="w-[80%] h-[80%] object-contain hover:-translate-x-1 hover:-translate-y-1 "
            />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={textVariant(1.6)}
        className=" flex lg:hidden absolute bottom-10 justify-center gap-1 w-fit p-[10px] text-[16px] mx-auto bg-[rgba(255,_255,_255,_0.08)] hover:scale-105 hover:bg-[#00000057]  rounded-full"
      >
        <Link href="/resume-new.pdf" target="_blank" download>
          Download Resume
        </Link>
        <div className="">
          <AiFillFilePdf style={{ color: "#ff0000", marginTop: "0.2rem" }} />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
