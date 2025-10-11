import Faqs from '@/components/homePage/Faqs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Codenix',
  description: `Find answers to common questions about Codenix's web development, MVPs, e-commerce, and SEO services. Get the clarity you need to start your project.`,
};

const page = () => {
  return (
    <>
      <Faqs classNameMt="h-12" classNameSection="" />
    </>
  );
};

export default page;
