'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ProfilePic from '@/public/profile-pic.jpg';
import InputField from './InputField';
import PhoneInput, { Value } from 'react-phone-number-input';

const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<Value>();

  return (
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
                placeholder="blur"
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
              <option value="placeholder" selected disabled>
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
              <option value="placeholder" selected disabled>
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
