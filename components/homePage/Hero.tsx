import React from 'react';

import { ArrowRight } from 'lucide-react';

import Link from 'next/link';
import ButtonHoverDown from '../Buttons/ButtonHoverDown';
import AnalyticsAnim from '../Animations/AnalyticsAnim';
import MoreSales from '../svgComponents/MoreSales';
import Image from 'next/image';
import { GridBackgroundDemo } from '../ui/GridBgDemo';

const NotifyOrdersData = [
  {
    id: 'dkajfkjkdj333gfe',
    imgUrl: 'none',
    message: 'Mivay order a new items that worth $20',
    time: '1h ago',
  },
  {
    id: 'dkajfkjkdjfe',
    imgUrl: 'none',
    message: 'Imran canceled the order',
    time: '30m ago',
  },
  {
    id: 'dkajfkjfdeekdjfe',
    imgUrl: 'none',
    message: 'Sami Placed a new order',
    time: '5m ago',
  },
];

const Hero = () => {
  return (
    <section className="overflow-clip mask-[linear-gradient(to_bottom,black,black_80%,transparent)] w-full h-[80vh] lg:h-[110vh] relative">
      {/* image bg */}
      <GridBackgroundDemo />
      {/* page content */}
      <div className="absolute inset-0 flex items-center flex-col top-36  ">
        <h1 className="text-4xl lg:text-7xl md:text-6xl text-center  max-w-5xl tracking-tight leading-tight font-semibold stroke-1 drop-shadow-xl drop-shadow-gray-950 bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent z-20">
          A Web Agency That Builds What Matters.
        </h1>

        <p className="lg:text-2xl md:text-xl text-md max-w-5xl text-center lg:mt-6 mt-3 text-white/60 font-light italic drop-shadow-lg drop-shadow-gray-950  z-20">
          A full-service agency offering web design, development, and SEO
          tailored to your business.
        </p>
        {/* cta button */}
        <div className="mt-10 flex gap-8 z-20 items-center">
          <div>
            <ButtonHoverDown />
          </div>
          <Link
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 flex group w-fit text-blue-500 drop-shadow-md drop-shadow-black"
            href="work">
            See Work
            <span className="group-hover:translate-x-1 transition-all delay-200">
              <ArrowRight />
            </span>
          </Link>
        </div>
        {/* analytics img */}
        <div className=" absolute h-60 md:h-80 w-auto xl:top-60 xl:-right-40 drop-shadow-2xl drop-shadow-black z-10 lg:top-65 lg:-right-45 md:top-85 md:-right-45 top-85 ">
          <AnalyticsAnim />
        </div>
        {/* more sales svg */}
        <div className="hidden md:block absolute xl:top-8 xl:left-6 drop-shadow-2xl lg:top-8 lg:left-2 md:top-75 md:left-2 drop-shadow-black z-10 opacity-50">
          <MoreSales className="w-72" />
        </div>
        {/* Order Notify */}
        <div className="hidden absolute w-max   xl:top-70 xl:left-10 drop-shadow-2xl drop-shadow-black z-10  md:block lg:top-70 lg:left-8 md:top-138 md:left-8">
          <ul className="flex flex-col gap-2 ">
            {NotifyOrdersData.map(data => (
              <li
                key={data.id}
                className="relative flex gap-3 items-center bg-white px-2 py-2 max-w-xs rounded-xl">
                <div className="bg-black size-12 rounded-full flex-none"></div>
                <div className="flex flex-col justify-start flex-1">
                  <p className=" text-gray-950/85 self-end text-xs    ">
                    {data.time}
                  </p>
                  <p className="text-black">{data.message} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
