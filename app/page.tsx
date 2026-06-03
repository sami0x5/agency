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
      <Projects pillTitle="Our Work" />
      <Faqs classNameSection="sticky " classNameMt="h-6" />
      {/* next section faqs */}
      <ContactUs className="rounded-t-[3rem]" classNameMt="md:mt-5 lg:mt-20" />
    </>
  );
}
