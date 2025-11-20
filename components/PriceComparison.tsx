'use client';
import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import Mypricing from '@/public/pricingImages/my-pricing.png';
import Musemind from '@/public/pricingImages/musemind.png';
import Blend from '@/public/pricingImages/blend.png';
import Amply from '@/public/pricingImages/amply.png';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FullScreenImage from './ui/FullScreenImage';
import { AnimatePresence, motion } from 'motion/react';

const comparisonList: {
  name: string;
  image: StaticImageData;
  link: string;
}[] = [
  {
    name: 'Musemind',
    image: Musemind,
    link: 'https://musemind.agency/pricing-plan',
  },

  {
    name: 'Blend',
    image: Blend,
    link: 'https://www.blendb2b.com/en-us/pricing',
  },
  { name: 'Amply', image: Amply, link: 'https://www.joinamply.com/retainers' },
];

const PriceComparison = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(false);
  const [ourFullScreenImage, setOurFullScreenImage] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (fullScreenImage || ourFullScreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [fullScreenImage, ourFullScreenImage]);

  useEffect(() => {
    const windowSize = () => {
      if (window.innerWidth >= 1040) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    windowSize();
  }, []);

  const handleCloseFullScreen = () => {
    setFullScreenImage(false);
  };
  const handleCloseOurFullScreen = () => {
    setOurFullScreenImage(false);
  };

  return (
    <div className="mt-30 ">
      <SectionHeader title="Price Comparison" className="" />
      <h2 className="p-2  text-4xl text-center  tracking-tight  font-semibold  bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent mt-5">
        What Makes Us Different
      </h2>
      <p className="text-lg  opacity-70 text-center p-3 ">
        Built with the same standards as top companies, made affordable for you.
      </p>
      {/* price comparison cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 bg-gray-700/40 rounded-2xl text-black p-2 md:p-6 mt-5 pb-8   ">
        {/* our price */}
        <div className="flex flex-col justify-center items-center lg:col-span-2  ">
          <div className=" border border-white/80 p-0.5 md:p-1 rounded-full mb-1 md:mb-3 lg:mb-5">
            <p className="font-semibold text-xs md:text-sm bg-gradient-to-r from-[#2ab9aa] to-[#1f9731] p-1 md:p-2 rounded-full cursor-pointer select-none ">
              Our Pricing
            </p>
          </div>

          {ourFullScreenImage ? (
            <FullScreenImage
              handleCloseFullScreen={handleCloseOurFullScreen}
              ourImage={{ name: 'Codenix', image: Mypricing }}
            />
          ) : (
            <motion.div
              layoutId="ourImage"
              className="z-50"
              onClick={() => {
                setOurFullScreenImage(true);
              }}>
              <Image
                src={Mypricing}
                alt="Codenix price"
                className="rounded-lg cursor-zoom-in"
                placeholder="blur"
              />
            </motion.div>
          )}
        </div>
        {/* vs text */}
        <div className="text-4xl md:text-5xl text-white italic font-bold flex ">
          {' '}
          <span>V</span> <span className="translate-y-1">S</span>{' '}
        </div>
        {/* competitors pricing */}
        <div className="flex flex-col justify-center items-center lg:col-span-2">
          <div className="flex gap-1 md:gap-2 border border-white/80 p-0.5 md:p-1 rounded-full mb-1 md:mb-3 lg:mb-5">
            {comparisonList.map((competitor, index) => (
              <div
                key={competitor.name}
                onClick={() => {
                  setSelectedCompetitor(index);
                }}
                className={`relative font-semibold text-xs md:text-sm  p-1 md:p-2 rounded-full  cursor-pointer select-none transition ${
                  selectedCompetitor === index
                    ? ' text-black'
                    : 'text-white hover:bg-white/10'
                }`}>
                {selectedCompetitor === index && (
                  <motion.div
                    layoutId="selectedCompetitor"
                    className="absolute inset-0 bg-gradient-to-r from-[#2ab9aa] to-[#1f9731] rounded-full"></motion.div>
                )}
                <span className="relative">{competitor.name}</span>
              </div>
            ))}
          </div>
          {/* competitor image */}
          {fullScreenImage ? (
            <FullScreenImage
              handleCloseFullScreen={handleCloseFullScreen}
              imageData={{
                ...comparisonList[selectedCompetitor],
                isDesktop: isDesktop,
              }}
            />
          ) : (
            // i was here
            <div className="relative transition">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ filter: 'blur(5px)' }}
                  animate={{ filter: 'blur(0)' }}
                  transition={{ duration: 0.3 }}
                  key={selectedCompetitor}
                  layoutId="competitorImage">
                  <Image
                    src={comparisonList[selectedCompetitor].image}
                    alt={comparisonList[selectedCompetitor].name + 'price'}
                    onClick={() => {
                      setFullScreenImage(true);
                    }}
                    className="rounded-lg transition-all duration-500 cursor-zoom-in"
                    placeholder="blur"
                  />
                  <Link
                    href={comparisonList[selectedCompetitor].link}
                    className="absolute bottom-2 right-2 bg-red-500 text-white flex px-2 py-1 rounded-md text-sm justify-center items-center drop-shadow-lg drop-shadow-black  "
                    target={isDesktop ? '_blank' : '_self'}>
                    <span>View</span>
                    <span>
                      <ArrowUpRight />
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
