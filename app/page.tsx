import ContactUs from '@/components/homePage/ContactUs';
import Faqs from '@/components/homePage/Faqs';
import Hero from '@/components/homePage/Hero';
import LogoTicker from '@/components/homePage/LogoTicker';
import Projects from '@/components/homePage/Projects';
import Services from '@/components/homePage/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Services />
      <Projects pillTitle="Our Latest Work" />
      {/* next section faqs */}
      <Faqs classNameSection="sticky " classNameMt="h-6" />
      <ContactUs className="rounded-t-[3rem]" />
    </>
  );
}
