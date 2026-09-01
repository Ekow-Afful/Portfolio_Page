import Link from "next/link";
import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { heroContent, heroEmail, heroSocials } from "@/constants";

const HeroFooter = () => (
  <div className="work-sans shrink-0 z-40 pb-4 pt-2 flex justify-center items-center w-full overflow-hidden">
    <div className="flex lg:flex-row flex-col gap-2 items-center justify-between w-[94%] text-[14px] sm:text-lg">
      <div className="flex gap-4">
        {heroSocials.map((social) => (
          <Link
            key={social.id}
            href={social.link}
            target="_blank"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <p>{social.name}</p>
          </Link>
        ))}
      </div>

      <Link
        href={heroEmail.link}
        className="hover:opacity-70 transition-opacity duration-300"
      >
        <p>{heroEmail.name}</p>
      </Link>

      <Link
        href={heroContent.resume}
        target="_blank"
        download
        className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-300"
      >
        <p>Download Resume</p>
        <AiFillFilePdf style={{ color: "#ff0000" }} />
      </Link>
    </div>
  </div>
);

export default HeroFooter;
