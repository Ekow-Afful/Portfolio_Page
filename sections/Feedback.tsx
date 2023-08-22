"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import Image from "next/image";

const Feedback = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="2xl:w-[75%] lg:w-[90%] w- mx-auto flex lg:flex-row flex-col gap-6"
    >
      <motion.div
        variants={fadeIn("right", "tween, 0.2, 1")}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
      >
        <motion.div
          variants={slideIn("left", "spring", 0.4, 2.0)}
          className="flex-center absolute top-[50%] left-[-40px] w-[60px] h-[60px] rounded-[32px] border-[1px] text-center"
        >
          <div className="text-2xl font-normal">&larr;</div>
        </motion.div>

        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] ">
            Beatrice Afful
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] leading-[16px] sm:leading-[22px]  ">
            Founder | BeaFit
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] leading-[39px] sm:leading-[45px] ">
          “Service was lovely and right on time. I asked for a simple website to
          display a few of the things I do and you delivered ”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex-center "
      >
        <Image
          src="/beafit.png"
          alt="feedback image"
          width={1400}
          height={400}
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] "
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[27%] -top-[10%] "
        >
          <Image
            src="/stamp0.1.png"
            alt="stamp"
            width={1000}
            height={1000}
            className="w-[400px] h-[400px] object-contain "
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "spring", 0.4, 2.0)}
          className="flex-center absolute top-[50%] right-[-40px] w-[60px] h-[60px] rounded-[32px] border-[1px] text-center"
        >
          <div className="text-2xl font-normal">&rarr;</div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
