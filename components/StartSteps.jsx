const StartSteps = ({ number, text }) => (
  <div className="flex-center flex-row">
    <div className="flex-center lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] rounded-[24px] bg-[#323f5d] ">
      <p className="font-bold text-[17px] text-white ">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] ">
      {text}
    </p>
  </div>
);

export default StartSteps;
