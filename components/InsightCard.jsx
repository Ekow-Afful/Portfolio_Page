"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const InsightCard = ({ imgUrl, title, subtitle, index, link }) => (
  <Link href={link} target="_blank">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className=" flex flex-center mx-auto md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt="project"
        width={400}
        height={400}
        className="md:w-[400px] w-full h-[250px] rounded-[32px] object-cover "
      />
      <div className="w-full flex gap-10 justify-evenly items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]  ">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white ">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white ">
            {subtitle}
          </p>
        </div>

        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-[rgba(255,_255,_255,_0.08)] hover:scale-95 hover:bg-[#00000057] transition-all duration-300  ">
          <Image
            src="arrow.svg"
            alt="arrow"
            width={100}
            height={100}
            className="w-[40%] h-[40%] object-contain "
          />
        </div>
      </div>
    </motion.div>
  </Link>
);

export default InsightCard;
