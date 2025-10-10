import React from 'react';
import SectionHeader from '../SectionHeader';

import { GlobeDemo } from '../ui/GlobeAnim';

import ServiceAnimation from '../ui/ServiceAnimation';

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
    <section className="lg:p-12  overflow-clip relative p-6 md:p-0 ">
      <SectionHeader
        title="Our Services"
        className={`z-50 pt-12  text-lg ${className}`}
      />
      <div className="relative md:grid md:grid-cols-2 -mt-30  ">
        <div className=" relative flex flex-col gap-20 md:mt-40 mt-10 z-50 md:pl-6 lg:pl-0">
          <div className="h-20"></div>
          {services.map(service => (
            <ServiceAnimation key={service.title} service={service} />
          ))}
          <div className="md:h-60"></div>
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
