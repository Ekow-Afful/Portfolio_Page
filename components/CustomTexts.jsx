"use client";

import { motion } from "framer-motion";
import textVariant, { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-[#c7c7c7] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-6 font-bold lg:text-[52px] md:text-[40px] sm:text-[36px] text-[30px]  text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
