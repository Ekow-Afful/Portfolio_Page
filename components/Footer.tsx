"use client";

import { motion } from "motion/react";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import { socials } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className=" md:w-[90%] mx-auto 2xl:max-w-[1700px] paddings py-8 relative"
    >
      <div className="footer-gradient" />

      <div className=" mx-auto flex flex-col gap-8 ">
        <div className="flex flex-col ">
          <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between flex-wrap gap-4 z-10 ">
            <h4 className="font-extrabold text-[24px] ">Michael.dev</h4>
            <p className="font-normal text-[14px] opacity-50 ">
              Copyright © 2023 . All rights reserved.
            </p>
            <div className="flex gap-4 ">
              {socials.map((social) => (
                <div key={social.name}>
                  <Link href={social.link} target="blank_">
                    <Image
                      src={social.url}
                      alt={social.name}
                      width={400}
                      height={400}
                      className="w-[24px] h-[24px] object-contain cursor-pointer hover:scale-90 "
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
