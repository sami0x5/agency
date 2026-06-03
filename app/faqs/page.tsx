import Faqs from '@/components/homePage/Faqs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Codenix',
  description:
    'Got questions about AI agent setup, workflow automation, or how Codenix works? Find answers to the most common questions here.',
};

const page = () => {
  return (
    <>
      <Faqs classNameMt="h-12" classNameSection="" />
    </>
  );
};

export default page;
