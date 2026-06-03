import ContactUs from '@/components/homePage/ContactUs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | Codenix',
  description: `Get in touch to discuss your AI agent setup or workflow automation project. We will figure out the right approach for your business.`,
};

const page = () => {
  return (
    <main>
      <ContactUs classNameMt="mt-20" />
    </main>
  );
};

export default page;
