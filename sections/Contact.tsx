"use client";

import React, { useState } from "react";

import { motion } from "motion/react";
import {
  fadeIn,
  footerVariants,
  slideIn,
  staggerContainer,
} from "../utils/motion";
import Image from "next/image";

const Contact = () => {
  const [hide, setHide] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mrbljpgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="pt-10 relative flex justify-center  items-center z-10 bg-gradient  w-full"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:w-[90%] lg:w-[90%] mx-auto flex flex-col px-4 2xl:max-w-[1400px]"
      >
        <form onSubmit={handleSubmit}>
          <div className={hide ? "flex gap-0 sm:gap-12" : "flex gap-12"}>
            <motion.div
              className={`${
                hide ? "w-0 sm:w-1/2" : " w-1/2"
              } flex-center flex-row`}
            >
              <Image
                src="/contact-img.svg"
                alt="contact image"
                width={1000}
                height={1000}
                className={`${
                  hide ? "hidden w-0 sm:w-full sm:flex" : "w-full "
                } h-full object-contain`}
              />
            </motion.div>

            <motion.div
              className={`${
                hide ? "w-full sm:w-1/2" : "w-1/2"
              }  flex flex-col `}
              onClick={() => setHide(true)}
            >
              <motion.div variants={slideIn("right", "spring", 0.3, 1.8)}>
                <h3 className="text-[30px] md:text-[52px] font-bold pb-4 md:pb-8">
                  Get in Touch
                </h3>
              </motion.div>

              <motion.div className="w-full flex flex-row gap-4">
                <motion.div variants={slideIn("right", "spring", 0.4, 1.8)}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-[100%] sm:w-full mb-[1rem] p-[10px_10px] md:p-[10px_10px] md:pr-20 text-[1.1rem] md:text-[1.2rem] text-white bg-transparent border-[1px] font-normal rounded-xl"
                    placeholder="First Name"
                    required
                  />
                </motion.div>
                <motion.div variants={slideIn("right", "spring", 0.4, 2.0)}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-[100%] sm:w-full mb-[1rem] p-[10px_10px] md:p-[10px_10px] md:pr-20 text-[1.1rem] md:text-[1.2rem] text-white bg-transparent border-[1px] font-normal rounded-xl "
                    placeholder="Last Name"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div className="flex flex-row gap-4">
                <motion.div variants={slideIn("right", "spring", 0.4, 2.2)}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-[100%] sm:w-full mb-[1rem] p-[10px_10px] md:p-[10px_10px] md:pr-20 text-[1.1rem] md:text-[1.2rem] text-white bg-transparent border-[1px] font-normal rounded-xl"
                    placeholder="Email"
                    required
                  />
                </motion.div>
                <motion.div variants={slideIn("right", "spring", 0.4, 2.4)}>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-[100%] sm:w-full mb-[1rem] p-[10px_10px] md:p-[10px_10px] md:pr-20 text-[1.1rem] md:text-[1.2rem] text-white bg-transparent border-[1px] font-normal rounded-xl"
                    placeholder="Phone No."
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={slideIn("right", "spring", 0.4, 2.8)}>
                <textarea
                  rows={6}
                  placeholder="Message (optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-[100%] sm:w-full mb-[1rem] p-[10px_10px] md:p-[10px_10px] text-[1.1rem] md:text-[1.2rem] text-white bg-transparent border-[1px] font-normal rounded-xl"
                />
              </motion.div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className="w-full mx-auto sm:p-16 py-8 md:px-6  relative"
          >
            <div className="flex items-center justify-between flex-wrap gap-5 ">
              <h4 className=" font-bold md:text-[40px] sm:text-[20px] text-[17px] ">
                Let's Start Something
              </h4>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center h-fit sm:py-4 s:px-6 py-2 px-4 bg-[#25618b] rounded-[32px] gap-[12px] ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-95"
                } transition-all duration-200`}
              >
                <Image
                  src="/headset.svg"
                  alt="headset"
                  width={400}
                  height={400}
                  className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] object-contain "
                />
                <span className="font-normal sm:text-[16px] text-[14px] ">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </span>
              </button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
