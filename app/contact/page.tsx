import ContactUs from '@/components/homePage/ContactUs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | Codenix',
  description: `Send a message or schedule a call with Codenix to discuss your website, MVP, or SEO project. We're here to help your business grow online.`,
};

const page = () => {
  return (
    <main>
      <ContactUs classNameMt="mt-20" />
    </main>
  );
};

export default page;
