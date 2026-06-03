import Projects from '@/components/homePage/Projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Work | Codenix',
  description:
    'See real AI agent setups and workflow automations we have built for businesses. OpenClaw and Hermes in action.',
};

const page = () => {
  return (
    <main>
      <Projects pillTitle="Our Work" className="mt-6 lg:mt-0" />
    </main>
  );
};

export default page;
