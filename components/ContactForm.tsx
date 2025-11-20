'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ProfilePic from '@/public/profile-pic.jpg';
import InputField from './InputField';
import PhoneInput, { Value } from 'react-phone-number-input';
import { Send } from 'lucide-react';
import { contactForm } from '@/lib/actions';

import { contactValidation } from '@/lib/utils';
import WaveLoader from './ui/WaveLoader';
import { AnimatePresence } from 'motion/react';
import PopUp from './ui/PopUp';

export type ErrorType = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  service: string | undefined;
  budget: string | undefined;
  company?: string | undefined;
  details?: string | undefined;
};

const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<Value>();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    details: string;
  }>({
    name: '',
    email: '',
    company: '',
    service: 'placeholder',
    budget: 'placeholder',
    details: '',
  });
  const [errors, setErrors] = useState<ErrorType>({
    name: '',
    email: '',
    company: '',
    service: '',
    phone: '',
    budget: '',
    details: '',
  });
  const [onChangeErrorChecking, setOnChangeErrorChecking] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState<
    undefined | boolean
  >(undefined);

  // useEffect
  useEffect(() => {
    if (onChangeErrorChecking) {
      const formInputData = { ...formData, phone: phoneNumber };
      const result = contactValidation.safeParse(formInputData);
      if (!result.success) {
        const { name, email, phone, service, budget } =
          result.error.flatten().fieldErrors;
        // set error message
        setErrors(prev => {
          return {
            ...prev,
            name: name && name[0],
            email: email && email[0],
            phone: phone && phone[0],
            service: service && service[0],
            budget: budget && budget[0],
          };
        });
      } else {
        setErrors(() => {
          return {
            name: '',
            email: '',
            company: '',
            service: '',
            phone: '',
            budget: '',
            details: '',
          };
        });
      }
    }
  }, [formData, phoneNumber, onChangeErrorChecking]);

  useEffect(() => {
    setTimeout(() => {
      setIsSubmittedSuccessfully(undefined);
    }, 5000);
  }, [isSubmittedSuccessfully]);

  // onChange
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formInputData = { ...formData, phone: phoneNumber };
    const result = contactValidation.safeParse(formInputData);
    if (!result.success) {
      const { name, email, phone, service, budget } =
        result.error.flatten().fieldErrors;
      // set error message
      setErrors(prev => {
        return {
          ...prev,
          name: name && name[0],
          email: email && email[0],
          phone: phone && phone[0],
          service: service && service[0],
          budget: budget && budget[0],
        };
      });
      setOnChangeErrorChecking(true);
    } else {
      setErrors(() => {
        return {
          name: '',
          email: '',
          company: '',
          service: '',
          phone: '',
          budget: '',
          details: '',
        };
      });
      // now i'm gonna work here
      setIsLoading(true);
      contactForm(result.data).then(val => {
        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'placeholder',
          budget: 'placeholder',
          details: '',
        });
        setPhoneNumber(undefined);
        if (val.errors) {
          setOnChangeErrorChecking(true);
          setErrors(val.errors);
        } else {
          setOnChangeErrorChecking(false);
        }
        setIsLoading(false);
        setIsSubmittedSuccessfully(val.success);
      });
    }
  };

  return (
    <div className=" bg-gradient-to-r from-[#000428] to-[#004e92] max-w-7xl lg:grid lg:grid-cols-5  text-white mt-5 pt-8 sm:p-8 sm:rounded-2xl">
      <div className="lg:col-span-2">
        <h2 className=" text-4xl lg:text-5xl font-semibold tracking-tight leading-14 text-center lg:text-left p-4 sm:p-0">
          Have a project idea in mind? <br /> Let&apos;s get started
        </h2>
        {/* Founder quote */}
        <div className="hidden  lg:mt-20 lg:flex gap-2 items-start">
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
              Founder of <br /> <b>Codenix</b>
            </p>
          </div>

          <q className="mt-5 lg:mt-3 text-lg font-medium italic">
            From strategy to execution, we design & develop transformative
            solutions for brands ready to make an impact.
          </q>
        </div>
      </div>
      {/* form */}
      <div className=" lg:px-8 lg:py-2 lg:col-span-3 lg:flex lg:justify-end mt-6 lg:mt-0   ">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black w-full lg:w-2xl  rounded-xs px-8 py-8 lg:py-6 md:grid md:grid-cols-2 md:gap-5 h-max flex flex-col gap-4">
          {/* name */}
          <InputField
            handleChange={handleChange}
            name="name"
            input="text"
            value={formData.name}
            error={errors.name}
            label="Full Name"
            autoComplete="name"
            placeholder="John Doe"
            required
          />
          {/* email */}
          <InputField
            error={errors.email}
            value={formData.email}
            handleChange={handleChange}
            name="email"
            autoComplete="email"
            input="email"
            label="Email"
            placeholder="john@example.com"
            required
          />
          {/* phone number input */}
          <InputField
            error={errors.phone}
            value=""
            handleChange={handleChange}
            name="phone"
            autoComplete="tel"
            label="Phone number"
            required
            customInput>
            <PhoneInput
              name="phone"
              placeholder="+1 234 567 8900"
              international
              required
              value={phoneNumber}
              defaultCountry="US"
              onChange={setPhoneNumber}
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1 focus-within:border-black"
            />
          </InputField>
          {/* company */}
          <InputField
            error={errors.company}
            value={formData.company}
            handleChange={handleChange}
            name="company"
            input="text"
            autoComplete="organization"
            label="Company name"
            placeholder="Google LLC"
            required={false}
          />
          {/* service required */}
          <InputField
            error={errors.service}
            value={formData.service}
            handleChange={handleChange}
            name="service"
            required
            label="Service required"
            autoComplete=""
            customInput>
            <select
              name="service"
              value={formData.service}
              onChange={e => handleChange(e)}
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1">
              <option value="placeholder" disabled>
                Select a Service
              </option>
              <option value="business">Business Website</option>
              <option value="e-commerce">E-commerce Website</option>
              <option value="redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>
          </InputField>
          {/* service type */}
          <InputField
            error={errors.budget}
            value={formData.budget}
            handleChange={handleChange}
            name="budget"
            required
            label="Service type"
            autoComplete=""
            customInput>
            <select
              name="budget"
              value={formData.budget}
              onChange={e => handleChange(e)}
              className="border-2 border-black/30 rounded-md h-12 p-2 mt-1">
              <option value="placeholder" disabled>
                Select a service type
              </option>
              <option value="monthly">monthly</option>
              <option value="one-time">onetime</option>
              <option value="not-sure">Not sure / Need consultation</option>
            </select>
          </InputField>
          {/* Project details */}
          <InputField
            error={errors.details}
            value={formData.details}
            handleChange={handleChange}
            name="details"
            autoComplete=""
            label="Project details"
            className="col-span-full"
            required={false}
            customInput>
            <textarea
              rows={4}
              value={formData.details}
              onChange={e => handleChange(e)}
              placeholder="Describe your project, goals, and requirements…"
              name="details"
              className="border-2 border-black/30 rounded-md p-2 mt-1 "></textarea>
          </InputField>
          <button
            type="submit"
            className={`h-12 col-span-full bg-black/90  text-white py-3 rounded-full flex items-center justify-center gap-1 md:gap-2 text-lg ${
              isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={isLoading}>
            {isLoading ? (
              <WaveLoader />
            ) : (
              <span className="flex items-center justify-center gap-1 md:gap-2">
                Send{' '}
                <span>
                  <Send />
                </span>
              </span>
            )}
          </button>
        </form>
      </div>
      {/* popup */}
      <AnimatePresence>
        {isSubmittedSuccessfully === true && (
          <PopUp className="bg-green-600">
            Your message has been sent successfully!
          </PopUp>
        )}
        {isSubmittedSuccessfully === false && (
          <PopUp className="bg-red-500">
            Something went wrong. Please try again.
          </PopUp>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
