'use client';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cardBg from '@/public/card-bg.jpg';
import ArrowButton from '../ui/ArrowButton';

const faqs: {
  question: string;
  answer: string;
}[] = [
  {
    question: 'How much should I expect to pay for a website?',
    answer:
      "The cost to build a website can vary greatly depending on the complexity, number of pages, required features, and the overall design experience. Traditional agencies may charge anywhere from $10,000 to $50,000 for a basic site, with complex platforms going above $200,000. Unlike traditional agencies, we aim to provide the same level of quality and in many ways, even higher quality at a more accessible rate — typically $3,000 to $15,000 for a standard website, with higher pricing for feature-rich builds. Think of it as an investment in your business's long-term growth and success.",
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'The time it takes to build a website depends on its complexity, the scope of work, and how fast you give feedback during the project. Simple websites can often be completed in 2-4 weeks, while more complex platforms with advanced features or integrations may take 2-3 months or longer.',
  },
  {
    question: 'What results can I expect after launching my website?',
    answer:
      'Outcomes depend on factors like your industry, target audience, marketing efforts, the services you offer, and overall business goals. However, in most cases, businesses notice stronger online presence, higher visibility, more customer trust, and more conversions.',
  },
  {
    question: 'Do you offer website redesign services?',
    answer:
      "Yes — we provide complete website redesign services. If your current site feels outdated, underperforms, or doesn't reflect your brand, we can upgrade it with a modern design, improved usability, and updated features to better connect with your customers.",
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Absolutely! All websites we build are fully responsive, which means they look and work great on mobile phones, tablets, and desktops.',
  },
  {
    question: 'Do you provide support after the website launches?',
    answer:
      'Yes, we provide post-launch support to ensure your website runs smoothly and any issues are resolved quickly.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <section className="mt-6 p-6  lg:p-12  overflow-clip  sticky -top-80 ">
      <h2
        id="faqs"
        className="text-5xl text-center  tracking-tight  font-semibold  bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="lg:mt-20 lg:grid grid-cols-5 flex flex-col">
        {/* pricing ads */}
        <div className=" col-span-2 flex lg:justify-left lg:items-start items-center mb-10 lg:mb-0 px-4 ">
          <div
            className="px-8 py-8 lg:w-md w-full rounded-sm mt-32 
            relative
            "
            style={{
              background: `url(${cardBg.src})`,
              backgroundPosition: '100%',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className="absolute inset-0 bg-black/20 "></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">
                Where can I find your pricing plans?
              </h3>
              <ArrowButton>View Pricing</ArrowButton>
            </div>
          </div>
        </div>
        {/* faq section */}
        <div className="col-span-3 ">
          <ul className="flex flex-col">
            {faqs.map((faq, index) => (
              <li key={uuid()} className=" p-4">
                <div
                  onClick={() => {
                    if (activeIndex === index) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className="cursor-pointer select-none flex items-center gap-4 justify-between pe-4 hover:opacity-75 ">
                  <h3 className="text-2xl opacity-95 font-medium ">
                    {faq.question}{' '}
                  </h3>
                  <div
                    className={`size-10 rounded-full  flex justify-center items-center  flex-none ${
                      activeIndex === index ? 'bg-white/95' : 'bg-white/15 '
                    }`}>
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      className={`${activeIndex === index && 'rotate-180'}`}
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 8.74228e-08L5 12.17L1.41 8.59L0 10L5.29289 15.2929C5.68342 15.6834 6.31658 15.6834 6.70711 15.2929L12 10L10.59 8.59L7 12.17L7 0L5 8.74228e-08Z"
                        className={`${
                          activeIndex === index ? 'fill-black' : 'fill-white/95'
                        }`}></path>
                    </svg>
                  </div>
                </div>
                <br />
                {activeIndex === index && (
                  <p className="mb-5 text-xl opacity-80 font-sans  ">
                    {faq.answer}{' '}
                  </p>
                )}
                {faqs.length === index + 1 ? '' : <hr className="opacity-25" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-[400px]"></div>
    </section>
  );
};

export default Faqs;
