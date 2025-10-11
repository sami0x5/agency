import Projects from '@/components/homePage/Projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Work | Web Design & Development Projects | Codenix',
  description: `Explore the projects we've built at Codenix. Modern, fast, and reliable websites designed to deliver results for your business.`,
};

const page = () => {
  return (
    <main>
      <Projects pillTitle="Our Work" className="mt-6 lg:mt-0" />
    </main>
  );
};

export default page;
