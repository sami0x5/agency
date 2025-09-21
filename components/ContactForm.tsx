'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ProfilePic from '@/public/profile-pic.jpg';
import InputField from './InputField';
import PhoneInput, { Value } from 'react-phone-number-input';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<Value>();

  return (
    <div className=" bg-gradient-to-r from-[#000428] to-[#004e92] max-w-7xl lg:grid lg:grid-cols-5  text-white mt-5 p-8 md:rounded-2xl">
      <div className="lg:col-span-2">
        <h2 className=" text-4xl lg:text-5xl font-semibold tracking-tight leading-14 text-center lg:text-left">
          Have a project idea in mind? <br /> Let&apos;s get started
        </h2>
        <div className="hidden mt-5 lg:mt-20 md:flex gap-2 items-start">
          <div className="flex flex-col  items-center p-2 ">
            <div className="size-16 lg:size-24 rounded-full">
              <Image
                src={ProfilePic}
                alt="Profile pic"
                className="rounded-full "
                placeholder="blur"
              />
            </div>
            <p className="mt-2 lg:mt-4 text-xl lg:text-2xl font-medium">Sami</p>
            <p className="text-center text-xs lg:text-sm italic text-nowrap opacity-75">
              Founder & CEO of <br /> Codenix
            </p>
          </div>
          {/* i was here */}
          <q className="mt-5 lg:mt-3 text-lg font-medium italic">
            From strategy to execution, we design & develop transformative
            solutions for brands ready to make an impact.
          </q>
        </div>
      </div>
      {/* form */}
      <div className=" lg:px-8 lg:py-2 lg:col-span-3 lg:flex lg:justify-end mt-6 lg:mt-0   ">
        <form
          action=""
          className="bg-white text-black w-full lg:w-2xl  rounded-xs px-8 py-4 md:grid md:grid-cols-2 md:gap-5 h-max flex flex-col gap-4">
          {/* name */}
          <InputField
            input="text"
            label="Full Name"
            autoComplete="name"
            placeholder="John Doe"
            required
          />
          {/* email */}
          <InputField
            autoComplete="email"
            input="email"
            label="Email"
            placeholder="john@example.com"
            required
          />
          {/* phone number input */}
          <InputField
            autoComplete="tel"
            label="Phone number"
            required
            customInput>
            <PhoneInput
              placeholder="+1 234 567 8900"
              international
              value={phoneNumber}
              defaultCountry="US"
              onChange={setPhoneNumber}
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1 focus-within:border-black"
            />
          </InputField>
          {/* company */}
          <InputField
            input="text"
            autoComplete="organization"
            label="Company name"
            placeholder="Google LLC"
            required={false}
          />
          {/* select service */}
          <InputField
            required
            label="Service required"
            autoComplete=""
            customInput>
            <select
              name="services"
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1">
              <option value="placeholder" disabled>
                Select a Service
              </option>
              <option value="business">Business Website</option>
              <option value="e-commerce">E-commerce Website</option>
              <option value="seo">SEO</option>
              <option value="mvp">MVP Development</option>
              <option value="redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>
          </InputField>
          {/* project budget */}
          <InputField
            required
            label="Project budget"
            autoComplete=""
            customInput>
            <select
              name="budget"
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1">
              <option value="placeholder" disabled>
                Select your budget
              </option>
              <option value="3k">$3,000 - $5,000</option>
              <option value="5k">$5,000 - $10,000</option>
              <option value="10k">$10,000 - $20,000</option>
              <option value="20k">$20,000+</option>
              <option value="not-sure">Not sure / Need consultation</option>
            </select>
          </InputField>
          {/* Project details */}
          <InputField
            autoComplete=""
            label="Project details"
            className="col-span-full"
            required={false}
            customInput>
            <textarea
              rows={4}
              placeholder="Describe your project, goals, and requirements…"
              name="textarea"
              className="border-2 border-black/30 rounded-md p-2 mt-1 "></textarea>
          </InputField>
          <button
            type="submit"
            className="h-12 col-span-full bg-black/90 cursor-pointer text-white py-3 rounded-full flex items-center justify-center gap-1 md:gap-2 text-lg ">
            Send{' '}
            <span>
              <Send />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
