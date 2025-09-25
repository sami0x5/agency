'use client';
import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import Mypricing from '@/public/pricingImages/my-pricing.png';
import Musemind from '@/public/pricingImages/musemind.png';
import Huemor from '@/public/pricingImages/huemor.png';
import Blend from '@/public/pricingImages/blend.png';
import Amply from '@/public/pricingImages/amply.png';
import VSImage from './svgComponents/VSImage';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FullScreenImage from './ui/FullScreenImage';

const comparisonList = [
  {
    name: 'Musemind',
    image: Musemind,
    link: 'https://musemind.agency/pricing-plan',
  },
  {
    name: 'Huemor',
    image: Huemor,
    link: 'https://huemor.rocks/resources/website-cost-calculator/quote/?cost=%26lt%3B3+Months&pages=10-50&interactive=Simple++%26amp%3B+Effective&copy=No&seo=Yes&lang=No&dynamic=No&cms=WordPress&tfrom=67%2C500&tto=82%2C500',
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
      <div className="flex flex-col lg:flex-row justify-around items-center bg-gray-700/40 rounded-2xl text-black p-6 mt-5 pb-8 ">
        {/* our price */}
        <div className="flex flex-col justify-center items-center  ">
          <div className=" border border-white/80 p-1 rounded-full mb-5">
            <p className="font-semibold text-sm bg-gradient-to-r from-[#2ab9aa] to-[#1f9731] p-2 rounded-full cursor-pointer select-none ">
              Our Pricing
            </p>
          </div>
          {/* i was here */}
          {ourFullScreenImage ? (
            <FullScreenImage
              handleCloseFullScreen={handleCloseOurFullScreen}
              ourImage={{ name: 'Codenix', image: Mypricing }}
            />
          ) : (
            <Image
              src={Mypricing}
              onClick={() => {
                setOurFullScreenImage(true);
              }}
              alt="Codenix price"
              className="rounded-lg cursor-zoom-in"
              placeholder="blur"
            />
          )}
        </div>
        {/* versus image */}
        <div className="">
          {' '}
          <VSImage />{' '}
        </div>
        {/* competitors price */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 border border-white/80 p-1 rounded-full mb-5">
            {comparisonList.map((competitor, index) => (
              <p
                key={competitor.name}
                onClick={() => {
                  setSelectedCompetitor(index);
                }}
                className={`font-semibold text-sm   p-2 rounded-full  cursor-pointer select-none transition ${
                  selectedCompetitor === index
                    ? 'bg-gradient-to-r from-[#2ab9aa] to-[#1f9731] text-black'
                    : 'text-white hover:bg-white/10'
                }`}>
                {competitor.name}
              </p>
            ))}
          </div>
          {fullScreenImage ? (
            <FullScreenImage
              handleCloseFullScreen={handleCloseFullScreen}
              imageData={{
                ...comparisonList[selectedCompetitor],
                isDesktop: isDesktop,
              }}
            />
          ) : (
            <div className="relative">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
