'use client';

import React, { useState } from 'react';

import 'react-phone-number-input/style.css';
import ContactForm from '../ContactForm';
import MyApp from '../MeetingForm';

const ContactUs = () => {
  const [isMessage, setIsMessage] = useState(true);
  return (
    <section className="z-10 relative rounded-t-[3rem] bg-[#d6dce1] flex flex-col justify-center items-center text-black p-8">
      {/* navigation */}
      <div className="mt-20 flex gap-2 bg-gradient-to-r from-[#000428] to-[#004e92] p-1 rounded-full">
        <button
          onClick={() => {
            setIsMessage(true);
          }}
          className={`px-4 py-2 rounded-full text-md font-semibold tracking-tight cursor-pointer ${
            isMessage ? 'bg-white text-black' : 'text-white'
          }`}>
          Send a Message
        </button>
        <button
          onClick={() => {
            setIsMessage(false);
          }}
          className={`px-4 py-2 rounded-full text-md font-semibold tracking-tight cursor-pointer ${
            !isMessage ? 'bg-white text-black' : 'text-white'
          } `}>
          Book a Call
        </button>
      </div>
      {/* contact */}
      {isMessage ? (
        <ContactForm />
      ) : (
        <div className="w-full h-full mt-5 ">
          <MyApp />
        </div>
      )}
      <div className="h-36"></div>
    </section>
  );
};

export default ContactUs;
