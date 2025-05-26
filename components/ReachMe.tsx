import { contacts } from "@/constants";
import ContactsCard from "./ContactsCard";
import { TitleText } from ".";

const ReachMe = () => {
  return (
    <section className="w-full flex flex-col mx-auto 2xl:max-w-[1400px] ">
      <TitleText
        title={
          <>
            Or{" "}
            <span className=" font-semibold sm:text-[70px] text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Reach Me{" "}
            </span>
            Now On{" "}
          </>
        }
        textStyles="text-center font-normal "
      />
      <div className="w-[80%] gap-5 grid md:grid-cols-3 grid-rows-1 mx-auto sm:my-16 my-8">
        {contacts.map((contact) => (
          <ContactsCard key={contact.id} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ReachMe;
