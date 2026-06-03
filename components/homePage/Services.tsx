'use client';
import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader';

import { GlobeDemo } from '../ui/GlobeAnim';

import ServiceAnimation from '../ui/ServiceAnimation';

const services = [
  {
    title: 'AI Agent Installation',
    description:
      'Get OpenClaw or Hermes Agent running on your system, properly. We handle the full setup, configuration, and testing. You just tell us what you need it to do.',
  },
  {
    title: 'Workflow Automation',
    description:
      'We look at how your business operates and automate the parts that eat your time. Customer follow-ups, lead handling, data processing, internal tasks. It all runs around the clock so nothing slips and you can focus on what actually matters. We build the workflows so you don\'t have to.',
  },
  {
    title: 'Agent Training and Custom Config',
    description:
      'Every business runs differently. We connect your agent to your existing tools, feed it your processes, and tune it until it works the way your business actually works, not some generic out-of-the-box version.',
  },
];

const Services = ({ className }: { className?: string }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <section className="lg:p-12  overflow-clip relative p-6 md:p-0 ">
      <SectionHeader
        title="What We Do"
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
        {!isMobile && (
          <div className="hidden md:block">
            <GlobeDemo />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
