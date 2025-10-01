'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const Project = ({
  item,
}: {
  item: {
    name: string;
    img: StaticImageData;
    link: string;
    desc: string;
    tags: string[];
  };
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const boxRef = useRef<HTMLAnchorElement>(null);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };
  const handleMouseEnter = () => {
    setIsInside(true);
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  return (
    <Link
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" bg-[#181616ac] rounded-2xl  max-w-3xl justify-self-center mb-6 lg:mb-2 group overflow-clip transition duration-500  relative lg:cursor-none  "
      href={item.link}
      target={isDesktop ? '_blank' : '_self'}>
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ scale: 0, rotate: '-180deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '180deg' }}
            transition={{ type: 'spring', duration: 0.6, bounce: 0.4 }}
            className="z-10 absolute size-20  bg-white border border-white/10 rounded-full  pointer-events-none  -translate-x-1/2 -translate-y-1/2 hidden lg:flex justify-center items-center  "
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}>
            {' '}
            <span>
              <ArrowUpRight color="black" size={48} />
            </span>{' '}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="overflow-clip">
        {' '}
        <Image
          placeholder="blur"
          className="rounded-t-2xl group-hover:scale-105 transition duration-500"
          src={item.img}
          alt={item.name}
        />{' '}
      </div>
      <div className="p-4 flex flex-col gap-2 ">
        <div className="grid grid-cols-2 justify-between ">
          <div className="flex  items-center gap-2 text-md lg:text-lg ">
            2025
            <span className="size-2 rounded-full bg-white "></span>
            {item.name}
          </div>
          <div className="flex gap-2 flex-wrap justify-end items-center">
            {item.tags.map(tag => (
              <div
                key={tag}
                className="bg-black px-4 py-1 rounded-full  relative  text-xs lg:text-sm ">
                {tag}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-white to-blue-500 -z-10 -m-[1.5px] "></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-md opacity-80 text-lg lg:text-2xl ">{item.desc} </p>
      </div>
    </Link>
  );
};

export default Project;
