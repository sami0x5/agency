import SectionHeader from '@/components/SectionHeader';
import React from 'react';
import { Check } from 'lucide-react';
import dotBg from '@/public/dot-bg.jpg';
import Link from 'next/link';

import PriceComparison from '@/components/PriceComparison';
import { Metadata } from 'next';
import * as motion from 'motion/react-client';

const pricingTiers: {
  serviceName: string;

  price: number;
  included: string[];
  addOns: string[];
}[] = [
  {
    serviceName: 'Business Website',
    price: 3000,
    included: [
      '5 Custom Pages',
      'Fully responsive, fast, SEO-optimized',
      'Premium modern UI/UX design',
      'Unlimited Edits & Updates (within project scope)',
      'Analytics Dashboard: View visitors, page views, and user behavior',
      'Hosting ($25/mo)',
      'Maintenance ($50/mo)',
      '24/7 Support',
    ],
    addOns: [
      '+ Extra Page: $250 per page',
      '+ Blog: $350 per blog',
      '+ Advanced custom features priced separately',
    ],
  },
  {
    serviceName: 'Business Website',
    price: 250,
    included: [
      '5 Custom Pages',
      'Fully responsive, fast, SEO-optimized',
      'Premium modern UI/UX design',
      'Unlimited Edits & Updates (within project scope)',
      'Analytics Dashboard: View visitors, page views, and user behavior',
      'Hosting (free)',
      'Maintenance (free)',
      '24/7 Support',
    ],
    addOns: [
      '+ Extra Page: $250 per page',
      '+ Blog: $350 per blog',
      '+ Advanced custom features priced separately',
    ],
  },
  {
    serviceName: 'E-commerce Website',
    price: 8000,
    included: [
      'Custom E-Commerce Website',
      'Fully responsive, fast, SEO-optimized',
      'Premium modern UI/UX design',
      'CMS/Admin Dashboard: Easily manage products, pages, orders, and content',
      'Secure checkout & payment gateway integration (Stripe, PayPal, etc.)',
      'Unlimited Edits & Updates (within project scope)',
      'Analytics Dashboard: View visitors, page views, and user behavior',
      'Hosting ($50/mo)',
      'Maintenance ($200/mo)',
      '24/7 Support',
    ],
    addOns: ['+ Advanced custom features priced separately'],
  },
];

export const metadata: Metadata = {
  title: 'Pricing & Packages | Codenix',
  description: `Discover Codenix's starting prices for websites, MVPs, e-commerce, and SEO services. Custom projects may vary — get a quote tailored to your business.`,
};

const page = () => {
  return (
    <main>
      <section className="pt-14 lg:pt-20   px-6 pb-6 lg:px-12 lg:pb-12  relative overflow-clip ">
        <SectionHeader title="Pricing" className="text-lg mt-6 lg:mt-0" />
        <h1
          className="p-2 text-5xl text-center  tracking-tight  font-semibold  bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent mt-5"
          role="heading"
          aria-level={1}>
          Select Your Package
        </h1>
        <p className="text-xl  opacity-70 text-center p-3 ">
          <span className=" relative">
            Flexible pricing to match your business needs — upfront or monthly
            plans available.
          </span>
        </p>
        {/* pricing card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-12 gap-8 mt-16">
          {pricingTiers.map((tier, index) => (
            <div
              className={`relative bg-gradient-to-r from-[#051614] to-[#0a312d] rounded-xl p-4 ${
                index == 0
                  ? 'order-2 md:order-1'
                  : index == 1
                  ? 'order-1 md:order-2'
                  : 'order-3 md:order-3 md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-start'
              }`}
              key={index}>
              {/* bg styling start */}
              <div
                className="absolute  inset-0 rounded-xl opacity-5 z-[1] "
                style={{
                  background: `url(${dotBg.src})`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '90%',
                }}></div>
              <div className="absolute inset-0   rounded-xl bg-black/25 z-[2]  "></div>
              {index == 1 ? (
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-indigo-600 to-fuchsia-500 -z-10 -m-1"></motion.div>
              ) : (
                <div className="absolute inset-0 rounded-xl bg-white/50 -z-10 -m-1"></div>
              )}
              {/* bg styling end */}
              <div className="relative z-20">
                {index == 1 && (
                  <p className="text-right">
                    <span className="bg-black text-blue-400 py-1 px-2 rounded-full border-1 border-white/60 text-[12px] font-semibold  ">
                      <motion.span
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 5,
                          ease: 'linear',
                          repeat: Infinity,
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                        className="bg-gradient-to-r from-emerald-400 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                        {' '}
                        Best Value
                      </motion.span>
                    </span>
                  </p>
                )}
                <h2 className="text-[1.6rem] text-left mt-3 ">
                  {tier.serviceName}{' '}
                </h2>
                <p
                  className={`text-sm mt-4 text-white/70 ${
                    index !== 2 && 'hidden'
                  }`}>
                  Starting at
                </p>
                <h2 className={`text-5xl text-center ${index !== 2 && 'mt-4'}`}>
                  ${tier.price}
                  <span className="text-3xl">{index == 1 && '/mo'} </span>
                </h2>
                <Link
                  href="/contact"
                  className="flex justify-center items-center w-full bg-yellow-300 h-12 text-black rounded-full font-semibold mt-7 hover:bg-yellow-200 cursor-pointer transition">
                  Book a Call
                </Link>
                <hr className="mt-8 opacity-40" />
                {/* included */}
                <p className="mt-5">Included:</p>
                <ul className="mt-2 flex flex-col gap-2 text-sm ml-2 ">
                  {tier.included.map(feature => (
                    <li key={feature} className="flex gap-1 items-center  ">
                      <span>
                        <Check color="#0dff00" size={18} />
                      </span>
                      <span className="opacity-75">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* add-ons */}
                <p className="mt-2">Add-Ons:</p>
                <ul className="mt-1 flex flex-col gap-2 text-sm ml-2 ">
                  {tier.addOns.map(feature => (
                    <li key={feature} className="flex gap-1 items-center  ">
                      <span className="opacity-75">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* contract */}
                <p
                  className={`${
                    index == 1 ? '' : 'hidden'
                  } mt-5 text-sm italic `}>
                  <span className="text-red-500">*</span>
                  <span className="opacity-90">
                    12-month minimum contract, then month-to-month after that.
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* price comparison */}
        <PriceComparison />
      </section>
    </main>
  );
};

export default page;
