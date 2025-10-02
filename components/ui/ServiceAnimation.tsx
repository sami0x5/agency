'use client';
import React, { useRef, useState } from 'react';

import { useMotionValueEvent, useScroll, useTransform } from 'motion/react';
const ServiceAnimation = ({
  service,
}: {
  service: {
    title: string;
    description: string;
  };
}) => {
  const titleWords = service.title.split(' ');
  const descriptionWords = service.description.split(' ');
  const serviceRef = useRef(null);
  const [currentWord, setCurrentWord] = useState<null | number>(null);
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ['start end', 'end end'],
  });

  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, titleWords.length + descriptionWords.length]
  );

  useMotionValueEvent(wordIndex, 'change', latest => {
    setCurrentWord(latest);
  });
  return (
    <div
      key={service.title}
      className=" flex flex-col justify-center items-center ">
      <div className="sticky lg:top-60 md:top-110 top-80 ">
        <h2 className="text-5xl font-semibold text-center md:text-left ">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent transition duration-700 ${
                currentWord
                  ? currentWord > index
                    ? 'opacity-100'
                    : 'opacity-0 blur-sm'
                  : 'opacity-0 blur-sm'
              }`}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <p className="mt-6 text-2xl text-white/70 text-center md:text-left">
          {descriptionWords.map((word, index) => (
            <span
              key={index}
              className={`transition duration-700 ${
                currentWord
                  ? currentWord > titleWords.length + index
                    ? 'opacity-100'
                    : 'opacity-0 blur-sm'
                  : 'opacity-0 blur-sm'
              }`}>
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
      <div ref={serviceRef} className="h-120 "></div>
    </div>
  );
};

export default ServiceAnimation;
