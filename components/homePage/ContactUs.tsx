'use client';

import React, { useState } from 'react';

import 'react-phone-number-input/style.css';
import ContactForm from '../ContactForm';
import MyApp from '../MeetingForm';
import { motion } from 'motion/react';

const ContactUs = ({
  className,
  classNameMt,
}: {
  className?: string;
  classNameMt: string;
}) => {
  const [isMessage, setIsMessage] = useState(true);
  return (
    <section
      className={`z-10 relative  bg-[#d6dce1] flex flex-col justify-center items-center text-black pt-8 sm:px-8 sm:pb-20 overflow-clip ${className} `}>
      {/* navigation */}
      <div
        className={` flex gap-2 bg-gradient-to-r from-[#000428] to-[#004e92] p-1 rounded-full ${classNameMt}`}>
        <button
          onClick={() => {
            setIsMessage(true);
          }}
          className={`relative px-4 py-2 rounded-full text-md font-semibold tracking-tight cursor-pointer transition duration-300 ${
            isMessage ? ' text-black' : 'text-white'
          }`}>
          {isMessage && (
            <motion.div
              layoutId="activeButtonBg"
              className="absolute inset-0 bg-white rounded-full"></motion.div>
          )}
          <span className="relative">Send a Message</span>
        </button>
        <button
          onClick={() => {
            setIsMessage(false);
          }}
          className={`relative px-4 py-2 rounded-full text-md font-semibold tracking-tight cursor-pointer transition duration-300 ${
            !isMessage ? ' text-black' : 'text-white'
          } `}>
          {!isMessage && (
            <motion.div
              layoutId="activeButtonBg"
              className="absolute inset-0 bg-white rounded-full"></motion.div>
          )}
          <span className="relative">Book a Call</span>
        </button>
      </div>
      {/* contact */}
      {isMessage ? (
        <ContactForm />
      ) : (
        <div className="w-full h-full mt-5 bg-[#171717]  sm:bg-transparent ">
          <MyApp />
        </div>
      )}
    </section>
  );
};

export default ContactUs;
