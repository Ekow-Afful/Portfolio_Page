import Link from "next/link";
import { useState } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const ContactsCard = ({ id, imgUrl, name, link, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={
        hovered
          ? "w-full  p-3 rounded-[30px] bg-[rgba(255,_255,_255,_0.08)]  scale-100 transition-all duration-300 group"
          : "w-full p-3 rounded-[30px] bg-[rgba(255,_255,_255,_0.08)] scale-95 transition-all duration-300"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchMove={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {hovered}
      <Link href={link} target="blank_">
        <div
          className="w-full flex flex-col items-center justify-center gap-2 text-center "
          id={id}
        >
          <h4>{name}</h4>
          <div className="text-2xl group-hover:rotate-45 transition-all duration-300 group-hover:translate-x-[20px]">
            {imgUrl}
          </div>
          <p>{text}</p>
          <div className=" mt-3 flex gap-4 items-center">
            <p>send a message </p>
            <div className=" group-hover:translate-x-[20px] transition-all duration-300 ">
              <LiaArrowRightSolid />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ContactsCard;
