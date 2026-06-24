import AboutContent from '@/components/aboutPage/AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Codenix',
  description:
    'Meet Sami, the founder of Codenix. He sets up and automates self-hosted AI agents for businesses, so real work runs in the background while you stay in control of your data.',
};

const page = () => {
  return (
    <main>
      <AboutContent />
    </main>
  );
};

export default page;
