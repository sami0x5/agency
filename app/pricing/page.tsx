import SectionHeader from '@/components/SectionHeader';
import React from 'react';
import { CircleAlert, Check } from 'lucide-react';
import dotBg from '@/public/dot-bg.jpg';
import Link from 'next/link';
import SeoPlan from '@/components/ui/SeoPlan';

const pricingTiers: {
  serviceName: string;
  timeLimit: string;
  price: number;
  features: { feature: string }[];
}[] = [
  {
    serviceName: 'Business Website',
    timeLimit: '2-8 weeks',
    price: 3000,
    features: [
      { feature: 'Responsive design for all devices' },
      { feature: 'Modern UI/UX with clean layouts' },
      { feature: 'Custom animations & interactions' },
      { feature: 'SEO-friendly structure' },
      { feature: 'Fast page loading and performance optimization' },
      { feature: 'Multi-page layouts (Home, About, Services, Contact)' },
      { feature: 'Contact forms & lead capture' },
      { feature: 'Launch support' },
    ],
  },
  {
    serviceName: 'E-commerce Website',
    timeLimit: '1-4 months',
    price: 5000,
    features: [
      { feature: 'Responsive design for all devices' },
      { feature: 'Modern UI/UX with clean layouts' },
      { feature: 'Custom animations & interactions' },
      { feature: 'Product catalog & category management' },
      { feature: 'Product search & advanced filtering' },
      {
        feature:
          'Secure checkout & payment gateway integration (Stripe, PayPal, etc.)',
      },
      { feature: 'Shopping cart functionality' },
      { feature: 'SEO-friendly structure' },
      { feature: 'Customer account & order management' },
      { feature: 'Analytics setup for sales tracking' },
      { feature: 'Launch support' },
    ],
  },
  {
    serviceName: 'MVP Development',
    timeLimit: '1-6 months',
    price: 8000,
    features: [
      { feature: 'Fully responsive design for all devices' },
      { feature: 'Modern UI/UX with clean layouts' },
      { feature: 'Custom animations & interactions' },
      { feature: 'SEO-friendly structure' },
      { feature: 'Custom feature development tailored to your idea' },
      { feature: 'Authentication & user account management' },
      { feature: 'Dashboard & admin panel setup' },
      { feature: 'API integrations with third-party services' },
      { feature: 'Analytics & performance tracking' },
      { feature: 'Integration with payment systems (if applicable)' },
      { feature: 'Launch support & guidance for iterative improvements' },
    ],
  },
];

const page = () => {
  return (
    <main>
      <section className="mt-12 lg:p-12  overflow-clip relative p-6">
        <SectionHeader title="Pricing" className="text-lg mt-6 lg:mt-0" />
        <h1
          className="p-2 text-5xl text-center  tracking-tight  font-semibold  bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent mt-5"
          role="heading"
          aria-level={1}>
          Select Your Package
        </h1>
        <p className="text-xl  opacity-70 text-center p-3 ">
          <span className=" relative">
            <span className="absolute -left-8 top-0 ">
              <CircleAlert color="yellow" />
            </span>
            Prices shown are starting points. Final cost depends on complexity,
            features, and integrations required.
          </span>
        </p>
        {/* pricing card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pricingTiers.map(tier => (
            <div
              className="relative bg-gradient-to-r from-[#051614] to-[#0a312d] rounded-xl p-4"
              key={tier.serviceName}>
              <div
                className="absolute  inset-0 rounded-xl opacity-5 z-[1] "
                style={{
                  background: `url(${dotBg.src})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '90%',
                }}></div>
              <div className="absolute inset-0   rounded-xl bg-black/25 z-[2]  "></div>
              <div className="absolute inset-0 rounded-xl bg-white/50 -z-10 -m-1"></div>
              <div className="relative z-20">
                <p>
                  {' '}
                  <span className="bg-black text-blue-300 py-1 px-2 rounded-full border-1 border-white/60 text-[10px] font-semibold italic">
                    {tier.timeLimit}{' '}
                  </span>{' '}
                </p>
                <h2 className="text-[1.6rem] text-left mt-3 ">
                  {tier.serviceName}{' '}
                </h2>
                <p className="text-sm mt-4 text-white/70">Starting at</p>
                <h2 className="text-5xl text-center">${tier.price} </h2>
                <Link
                  href="/contact"
                  className="flex justify-center items-center w-full bg-yellow-300 h-12 text-black rounded-full font-semibold mt-7 hover:bg-yellow-200 cursor-pointer transition">
                  Book a Call
                </Link>
                <hr className="mt-8 opacity-40" />
                <ul className="mt-5 flex flex-col gap-2 text-sm ">
                  {tier.features.map(feature => (
                    <li
                      key={feature.feature}
                      className="flex gap-1 items-center  ">
                      <span>
                        <Check color="#0dff00" size={18} />
                      </span>
                      <span className="opacity-70">{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <SeoPlan />
        </div>
      </section>
    </main>
  );
};

export default page;
