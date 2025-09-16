import Image from 'next/image';
import React from 'react';
import ProfilePic from '@/public/profile-pic.jpg';
import InputField from '../InputField';

const ContactUs = () => {
  return (
    <section className="z-10 relative rounded-t-[3rem] bg-[#d6dce1] flex flex-col justify-center items-center text-black p-8">
      {/* navigation */}
      <div className="mt-10 flex gap-2 bg-gradient-to-r from-[#000428] to-[#004e92] p-1 rounded-full">
        <button className="bg-white px-4 py-2 rounded-full text-md font-semibold tracking-tight cursor-pointer">
          Send a Message
        </button>
        <button className="text-white px-4 py-2 text-md font-semibold tracking-tight cursor-pointer ">
          Book a Call
        </button>
      </div>
      {/* message */}
      <div className=" bg-gradient-to-r from-[#000428] to-[#004e92] max-w-7xl grid grid-cols-5  text-white mt-5 p-8 rounded-2xl">
        <div className="col-span-2">
          <h2 className="text-5xl font-semibold tracking-tight leading-14">
            Have a project idea in mind? <br /> Let&apos;s get started
          </h2>
          <div className="mt-20 flex gap-2 items-start">
            <div className="flex flex-col  items-center p-2">
              <div className="size-24 rounded-full">
                <Image
                  src={ProfilePic}
                  alt="Profile pic"
                  className="rounded-full "
                />
              </div>
              <p className="mt-4 text-2xl font-medium">Sami</p>
              <p className="text-center text-sm italic text-nowrap opacity-75">
                Founder & CEO of <br /> Codenix
              </p>
            </div>
            <q className="mt-3 text-lg font-medium italic">
              From strategy to execution, we design transformative solutions for
              brands ready to make an impact.
            </q>
          </div>
        </div>
        {/* form */}
        <div className=" px-8 py-2 col-span-3 flex justify-end  ">
          <form
            action=""
            className="bg-white text-black w-2xl max-w-2xl rounded-xs px-8 py-4 grid grid-cols-2 gap-5 h-max">
            <InputField
              input="text"
              label="Full Name"
              placeholder="John Doe"
              required
            />
            <InputField
              input="email"
              label="Email"
              placeholder="john@example.com"
              required
            />
            <InputField
              input="text"
              label="Company name"
              placeholder="Google LLC"
              required={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
