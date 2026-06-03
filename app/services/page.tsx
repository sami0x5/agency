import Services from '@/components/homePage/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services | Codenix',
  description:
    'From AI agent installation to full business workflow automation, Codenix handles the setup so your business can run smarter. See what we offer.',
};

const page = () => {
  return (
    <main>
      <Services className="mt-25 lg:mt-0" />
    </main>
  );
};

export default page;
