'use client';
import React, { useEffect, useRef, useState } from 'react';
import cardBg from '@/public/card-bg.jpg';
import ArrowButton from '../ui/ArrowButton';
import { AnimatePresence, motion } from 'motion/react';

const faqs: {
  question: string;
  answer: string;
}[] = [
  {
    question: 'How much does it cost to set up an AI agent?',
    answer:
      'The cost depends on what you need. A basic OpenClaw or Hermes setup for small business use is straightforward, while complex multi-agent workflows with custom integrations take more work. Unlike hiring a dev team or paying for enterprise AI software, we keep it accessible. Reach out and we will give you a straight number based on what you are looking to do.',
  },
  {
    question: 'How long does the setup take?',
    answer:
      'A standard agent installation is usually done within a day or two. If you need custom workflow automation on top of that, it depends on how many processes we are wiring up, but most business automation setups are completed within 1 to 2 weeks. We will give you a clear timeline before we start.',
  },
  {
    question: 'What can an AI agent actually do for my business?',
    answer:
      'Almost everything. Agents like OpenClaw and Hermes can handle scheduling, answer messages across WhatsApp, Telegram, and Slack, process data, run automated follow-ups, browse the web, and execute tasks on your machine, all without you touching it. The real value is everything it handles in the background while you are focused on other things.',
  },
  {
    question: 'Do I need to be technical to use this?',
    answer:
      'Not at all. That is the whole point of what we do. We handle the technical side, installation, configuration, connecting everything together. Once it is running, using your agent is as simple as sending a message on WhatsApp or Telegram. We also walk you through how to work with it so you are comfortable from day one.',
  },
  {
    question: 'Which agent is right for me, OpenClaw or Hermes?',
    answer:
      'It depends on your scale. OpenClaw is built for large-scale projects, multi-agent setups, and complex automations that need to run across many systems at once. Hermes is great out-of-the-box, self-improving, and works best for small to medium scale projects and as a personal AI assistant that gets smarter the longer it runs. We will recommend the right one after understanding your setup.',
  },
  {
    question: 'Do you provide support after everything is set up?',
    answer:
      'Yes. Once your agent is live, we don\'t just hand it over and disappear. We provide ongoing support to make sure everything keeps running the way it should. And if you want to expand what your agent does down the line, we can help with that too.',
  },
];

const Faqs = ({
  classNameSection,
  classNameMt,
}: {
  classNameSection: string;
  classNameMt: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const [top, setTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      setTop(window.innerHeight - element.getBoundingClientRect().height);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={` p-6  lg:p-12  overflow-clip ${classNameSection}`}
      style={{ top: top }}>
      <div className={classNameMt}></div>
      <h2
        id="faqs"
        className="text-5xl text-center  tracking-tight  font-semibold  bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="lg:mt-20 lg:grid grid-cols-5 flex flex-col">
        {/* pricing ads */}
        <div className=" col-span-2 flex lg:justify-left lg:items-start items-center mb-10 lg:mb-0 px-4 ">
          <motion.div
            initial={{ filter: 'blur(10px)' }}
            whileInView={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.6, type: 'tween', ease: 'linear' }}
            viewport={{ once: true }}
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
                Not sure where to start?
              </h3>
              <p className="mt-3 text-white/75 text-lg">
                Tell us what your business does and what is taking up your time.
                We will figure out the rest.
              </p>
              <ArrowButton>Talk to Us</ArrowButton>
            </div>
          </motion.div>
        </div>
        {/* faq section */}
        <div className="col-span-3 ">
          <ul className="flex flex-col">
            {faqs.map((faq, index) => (
              <li key={index} className="  px-4 pb-4 overflow-hidden">
                {index === 0 ? '' : <hr className="opacity-25" />}
                <div
                  onClick={() => {
                    if (activeIndex === index) {
                      setActiveIndex(null);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className="mt-4 cursor-pointer select-none flex items-center gap-4 justify-between pe-4 hover:opacity-75 transition ">
                  <h3 className="text-2xl opacity-95 font-medium ">
                    {faq.question}{' '}
                  </h3>
                  <div
                    className={`size-10 rounded-full  flex justify-center items-center  flex-none transition-all duration-500 ${
                      activeIndex === index ? 'bg-white/95' : 'bg-white/15 '
                    }`}>
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      className={`transition-all duration-500 ${
                        activeIndex === index && 'rotate-180'
                      }`}
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 8.74228e-08L5 12.17L1.41 8.59L0 10L5.29289 15.2929C5.68342 15.6834 6.31658 15.6834 6.70711 15.2929L12 10L10.59 8.59L7 12.17L7 0L5 8.74228e-08Z"
                        className={`transition duration-500 ${
                          activeIndex === index ? 'fill-black' : 'fill-white/95'
                        }`}></path>
                    </svg>
                  </div>
                </div>
                <br />
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}>
                      <p className=" text-xl opacity-80 font-sans">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.div className="h-[80px]"></motion.div>
    </section>
  );
};

export default Faqs;
