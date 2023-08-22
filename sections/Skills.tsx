import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      className="w-full px-10 flex items-start justify-center z-10 mt-40 lg:mt-10 "
      id="skills"
    >
      <div className="flex-center bg-[#0C0B0B] rounded-[40px] py-8 relative z-10 lg:w-[55%] md:w-[70%] sm:w-[80%] w-[95%]">
        <div className="flex items-center justify-start flex-col gap-14 w-full ">
          <div className="flex-center">
            <h2 className="text-[30px] font-bold">Skills</h2>
          </div>
          <div className="flex-center xl:gap-[130px] md:gap-[80px] gap-[40px] xl:text-[17px] md:text-[14px] text-[13px] font-medium ">
            <div className="flex-center flex-col gap-4 text-center">
              <Image
                src="/meter1.svg"
                width={100}
                height={30}
                alt="meter"
                className="object-contain w-[60%]"
              />
              <h4 className="">Front-End Dev</h4>
            </div>
            <div className="flex-center flex-col gap-4 text-center">
              <Image
                src="/meter2.svg"
                width={100}
                height={30}
                alt="meter"
                className="object-contain w-[60%]"
              />
              <h4 className="">UI/UX Dev</h4>
            </div>
            <div className="flex-center flex-col gap-4  text-center">
              <Image
                src="/meter3.1.svg"
                width={100}
                height={30}
                alt="meter"
                className="object-contain w-[60%]"
              />
              <h4 className="">Back-End Dev</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
