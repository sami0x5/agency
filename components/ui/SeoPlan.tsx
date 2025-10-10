'use client';
import React, { useState } from 'react';
import dotBg from '@/public/dot-bg.jpg';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import NumberFlow from '@number-flow/react';

const seoFeatures = [
  'Complete technical SEO setup (site speed, indexing, mobile optimization)',
  'On-page SEO implementation (meta tags, headings, URL structure, internal linking)',
  'Keyword research setup & guidance for future content',
  'Configuration of SEO-friendly titles and descriptions, with guidance for future content',
  'Training on off-page SEO strategies for long-term growth',
  'Analytics setup and guidance to track performance',
  'Step-by-step instructions for maintaining SEO after launch',
];

const serviceTypes: { name: string; pricing: number; seoPricing: number }[] = [
  { name: 'Business Website', pricing: 3000, seoPricing: 2000 },
  { name: 'E-commerce Web', pricing: 5000, seoPricing: 3000 },
  { name: 'MVP Development', pricing: 8000, seoPricing: 3000 },
];

const SeoPlan = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="relative bg-gradient-to-r from-[#051614] to-[#0a312d] rounded-xl p-4">
      {/* bg styling start */}
      <div
        className="absolute  inset-0 rounded-xl opacity-5 z-[1] "
        style={{
          background: `url(${dotBg.src})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '90%',
        }}></div>
      <div className="absolute inset-0   rounded-xl bg-black/25 z-[2]  "></div>
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-indigo-600 to-fuchsia-500 -z-10 -m-1"></motion.div>
      {/* bg styling end */}

      <div className="relative z-20">
        <p className="text-right">
          <span className="bg-black text-blue-400 py-1 px-2 rounded-full border-1 border-white/60 text-[12px] font-semibold  ">
            <motion.span
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 5,
                ease: 'linear',
                repeat: Infinity,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
              className="bg-gradient-to-r from-emerald-400 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              {' '}
              Best Value
            </motion.span>
          </span>
        </p>

        <form className="flex flex-col gap-2 text-left mt-5 border ps-3 py-2 rounded-2xl border-white/20  ">
          {serviceTypes.map((service, index) => (
            <div
              key={service.name}
              className="flex gap-1 text-xl justify-start items-center ">
              <input
                type="radio"
                name="service"
                value={index}
                id={service.name}
                className="cursor-pointer size-4 "
                checked={service.name === serviceTypes[selectedService].name}
                onChange={e => {
                  if (selectedService !== parseInt(e.target.value)) {
                    setSelectedService(parseInt(e.target.value));
                  }
                }}
              />
              <label
                htmlFor={service.name}
                className={`cursor-pointer font-medium   transition select-none ${
                  service.name === serviceTypes[selectedService].name
                    ? 'text-amber-300'
                    : ' text-white/95'
                }`}>
                {service.name} + SEO{' '}
              </label>{' '}
            </div>
          ))}
        </form>

        <p className="text-sm mt-6 text-white/70">Starting at</p>
        <h2 className="text-5xl text-center">
          <span>$</span>
          <NumberFlow
            value={
              serviceTypes[selectedService].pricing +
              serviceTypes[selectedService].seoPricing
            }
          />
        </h2>
        <Link
          href="/contact"
          className="flex justify-center items-center w-full bg-yellow-300 h-12 text-black rounded-full font-semibold mt-7 hover:bg-yellow-200 cursor-pointer transition">
          Book a Call
        </Link>
        <hr className="mt-8 opacity-40" />
        <ul className="mt-5 flex flex-col gap-2 text-sm ">
          <li className="flex gap-1 items-center  ">
            <span>
              <Check color="#0dff00" size={18} />
            </span>
            <span>
              Everything included in{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedService}
                  initial={{ filter: 'blur(5px)' }}
                  animate={{ filter: 'blur(0)' }}
                  transition={{ duration: 0.5 }}>
                  {serviceTypes[selectedService].name}
                </motion.span>
              </AnimatePresence>
            </span>
          </li>
          {seoFeatures.map(feature => (
            <li key={feature} className="flex gap-1 items-center  ">
              <span>
                <Check color="#0dff00" size={18} />
              </span>
              <span className="opacity-70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeoPlan;
