import Services from '@/components/homePage/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Website Design and Development Services | Codenix',
  description:
    'A full-service agency offering web design, development, and SEO tailored to your business.',
};

const page = () => {
  return (
    <main>
      <Services className="mt-25 lg:mt-0" />
    </main>
  );
};

export default page;
