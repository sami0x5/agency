import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ButtonHoverDown from '../Buttons/ButtonHoverDown';
import { GridBackgroundDemo } from '../ui/GridBgDemo';
import HeroAnimated from '../ui/HeroAnimated';

const Hero = () => {
  return (
    <section className="overflow-clip mask-[linear-gradient(to_bottom,black,black_80%,transparent)] w-full h-[80vh] lg:h-[110vh] relative">
      {/* image bg */}
      <GridBackgroundDemo />
      {/* page content */}
      <div className="absolute inset-0 flex items-center flex-col top-36  ">
        <h1 className="text-4xl lg:text-7xl md:text-6xl text-center  max-w-5xl tracking-tight leading-tight font-semibold stroke-1 drop-shadow-xl drop-shadow-gray-950 bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent z-20">
          We Set Up AI Agents That Actually Work.
        </h1>

        <p className="lg:text-2xl md:text-xl text-md max-w-5xl text-center lg:mt-6 mt-3 text-white/60 font-light italic drop-shadow-lg drop-shadow-gray-950  z-20">
          From OpenClaw to Hermes, we handle the full installation,
          configuration, and automation. The system runs 24/7, so you can get
          more done without putting in more hours.
        </p>
        {/* cta button */}
        <div className="mt-10 flex gap-8 z-20 items-center">
          <div>
            <ButtonHoverDown url="/contact" />
          </div>
          <Link
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-blue-500 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 flex group w-fit text-blue-500 drop-shadow-md drop-shadow-black"
            href="/work">
            See Work
            <span className="group-hover:translate-x-1 transition-all delay-200">
              <ArrowRight />
            </span>
          </Link>
        </div>
        {/* animated components */}
        <HeroAnimated />
      </div>
    </section>
  );
};

export default Hero;
