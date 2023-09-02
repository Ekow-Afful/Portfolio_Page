"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import Image from "next/image";
import Link from "next/link";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onMouseEnter={() => handleClick(id)}
    onTouchMove={() => handleClick(id)}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
      width={1500}
      height={1000}
      loading="eager"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white text-center rounded-[24px] md:w-[140%] w-full p-2 absolute z-0 lg:bottom-[124px] lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <Link href="#projects">
          <div className="flex-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] hover:scale-90">
            <Image
              src="/headset.svg"
              alt="headset"
              width={50}
              height={50}
              className="w-1/2 h-1/2 object-contain  "
            />
          </div>
        </Link>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">
          View Projects
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
