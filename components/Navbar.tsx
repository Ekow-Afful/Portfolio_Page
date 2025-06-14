"use client";

import { motion } from "motion/react";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`relative z-20 w-[90%] mx-auto 2xl:max-w-[1700px] sm:py-4 py-3 mt-[2px] sm:mt-2 px-4 xs:jb rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 `}
  >
    {/* <div className="absolute -left-80 w-[50%] inset-0 gradient-01" /> */}
    {/* <div className="absolute -z-20 -top-40 left-[35%]">
      <Image
        src="/moon-1.png"
        width={800}
        height={800}
        alt="moon"
        className="object-contain w-[400px] h-[400px]"
      />
    </div> */}

    <div
      className={` text-white mx-auto flex justify-between items-center gap-8 `}
    >
      <Link href="/">
        <h2 className="font-bold lg:text-[24px] text-[18px]">Michael.dev</h2>
      </Link>

      <div className="flex lg:gap-10 gap-4 items-center lg:text-[17px]">
        <Link href="#skills">
          <h2 className="hidden lg:flex">Skills</h2>
        </Link>
        <Link href="#whatweoffer">
          <h2 className="hidden lg:flex">Services</h2>
        </Link>
        <Link href="#projects">
          <h2 className="hidden lg:flex">Projects</h2>
        </Link>
        <Link href="https://github.com/Ekow-Afful/" target="blank_">
          <div className="text-xl  cursor-pointer  hover:scale-105">
            <AiFillGithub />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/michael-afful-16614128b?trk=contact-info"
          target="blank_"
        >
          <div className="text-xl  cursor-pointer  hover:scale-105">
            <BiLogoLinkedin />
          </div>
        </Link>
        <Link href="#contact">
          <button className="text-[10px] lg:text-[17px] flex items-center justify-center rounded-full bg-[rgba(20,9,9,0.55)] hover:scale-105 hover:bg-[#00000057] transition-all duration-300 px-4 py-2">
            Let's connect
          </button>
        </Link>
      </div>
    </div>
    <div></div>
  </motion.nav>
);

export default Navbar;
