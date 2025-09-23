import React from 'react';
import SectionHeader from '../SectionHeader';

import { GlobeDemo } from '../ui/GlobeAnim';

const services = [
  {
    title: 'Business Websites',
    description:
      'Give your business a professional online presence. We create responsive, modern websites that showcase your brand and turn visitors into customers.',
  },
  {
    title: 'E-commerce Websites',
    description:
      'Launch your online store with a fast, secure, and user-friendly shopping experience. From product pages to payment gateways, we build stores that help you sell with ease.',
  },
  {
    title: 'SEO',
    description:
      'Get found online. We set up SEO-friendly structures, optimize content, and provide you with an SEO guide to grow your visibility and attract the right audience.',
  },
  {
    title: 'MVP Development',
    description:
      'Validate your startup idea quickly. We build scalable, functional MVPs that help you test, gather feedback, and launch faster with lower risk.',
  },
];

const Services = ({ className }: { className?: string }) => {
  return (
    <section className="mt-12 lg:p-12  overflow-clip relative p-6 md:p-0 ">
      <SectionHeader
        title="Our Services"
        className={`z-50 text-lg ${className}`}
      />
      <div className="relative md:grid md:grid-cols-2 -mt-30  ">
        <div className=" relative flex flex-col gap-20 md:mt-40 mt-10 z-50 md:pl-6 lg:pl-0">
          <div className="h-20"></div>
          {services.map(service => (
            <div
              key={service.title}
              className=" flex flex-col justify-center items-center ">
              <div className="sticky lg:top-60 md:top-110 top-80 ">
                <h2 className="text-5xl font-semibold text-center md:text-left ">
                  <span className="bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent">
                    {service.title}
                  </span>{' '}
                </h2>
                <p className="mt-6 text-2xl text-white/70 text-center md:text-left">
                  {service.description}
                </p>
              </div>
              <div className="h-120 "></div>
            </div>
          ))}
          <div className="h-60"></div>
        </div>
        {/* world */}
        <div className="hidden md:block">
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
};

export default Services;
