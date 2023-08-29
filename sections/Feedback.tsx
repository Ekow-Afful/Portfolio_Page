"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import Image from "next/image";
import {
  LiaLongArrowAltRightSolid,
  LiaLongArrowAltLeftSolid,
} from "react-icons/lia";

import { testimonials } from "@/constants";
import { useCallback, useState } from "react";
import { TitleText } from "@/components";

const Feedback = () => {
  const people = testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstTestimony = currentIndex === 0;
    const newTestimony = isFirstTestimony
      ? people.length - 1
      : currentIndex - 1;
    setCurrentIndex(newTestimony);
  };

  const nextSlide = useCallback(() => {
    const isLastTestimony = currentIndex === people.length - 1;
    const newTestimony = isLastTestimony ? 0 : currentIndex + 1;
    setCurrentIndex(newTestimony);
  }, [currentIndex, people]);

  const currentPerson = people[currentIndex];

  return (
    <section className="paddings relative flex flex-col gap-10 z-10 w-full">
      <TitleText
        title={
          <>
            Testimo
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              nials
            </span>
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:w-[75%] lg:w-[90%] w- mx-auto flex lg:flex-row flex-col gap-6"
        key={currentPerson.id}
      >
        <motion.div
          variants={fadeIn("right", "tween, 0.2, 1")}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
        >
          <motion.div
            variants={slideIn("left", "spring", 0.4, 2.0)}
            className="flex-center absolute top-[50%] left-[-40px] w-[60px] h-[60px] rounded-[32px] border-[1px] text-center bg-[rgba(255,_255,_255,_0.08)] hover:scale-95 hover:bg-[#00000057]"
          >
            <div className="text-2xl font-normal">
              <LiaLongArrowAltLeftSolid onClick={prevSlide} size={30} />
            </div>
          </motion.div>

          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] ">
              {currentPerson.name}
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] leading-[16px] sm:leading-[22px]  ">
              {currentPerson.title}
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] leading-[39px] sm:leading-[45px] ">
            {`"${currentPerson.feedback}"`}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex-center "
        >
          <Image
            src={currentPerson.image}
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
            className="flex-center absolute top-[50%] right-[-40px] w-[60px] h-[60px] rounded-[32px] border-[1px] text-center bg-[rgba(255,_255,_255,_0.08)] hover:scale-95 hover:bg-[#00000057]"
          >
            <div className="text-2xl font-normal ">
              <LiaLongArrowAltRightSolid onClick={nextSlide} size={30} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
