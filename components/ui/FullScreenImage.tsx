import { ArrowUpRight, X } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from 'motion/react-client';

const FullScreenImage = ({
  imageData,
  ourImage,
  handleCloseFullScreen,
}: {
  imageData?: {
    name: string;
    image: StaticImageData;
    link: string;
    isDesktop: boolean;
  };
  ourImage?: { name: string; image: StaticImageData };
  handleCloseFullScreen: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 lg:p-20 backdrop-blur-2xl z-50 flex justify-center items-center lg:items-start ">
      <div className="relative lg:mt-2">
        {imageData && (
          <motion.div
            layoutId="competitorImage"
            onClick={() => {
              handleCloseFullScreen();
            }}>
            <Image
              src={imageData.image}
              alt={imageData.name + 'price'}
              className="rounded-lg transition-all duration-500 cursor-zoom-out"
              placeholder="blur"
            />
            {imageData && (
              <Link
                href={imageData.link}
                className="absolute bottom-4 right-4 bg-red-500 text-white flex px-2 py-1 rounded-md text-lg justify-center items-center drop-shadow-lg drop-shadow-black  "
                target={imageData.isDesktop ? '_blank' : '_self'}>
                <span>View</span>
                <span>
                  <ArrowUpRight />
                </span>
              </Link>
            )}
            <div
              onClick={() => {
                handleCloseFullScreen();
              }}
              className="absolute bg-white right-2 -top-15 rounded-full p-1 lg:hidden  ">
              <X size={30} />
            </div>
          </motion.div>
        )}
        {ourImage && (
          <motion.div
            layoutId="ourImage"
            onClick={() => {
              handleCloseFullScreen();
            }}>
            <Image
              src={ourImage.image}
              alt={ourImage.name + 'price'}
              className="rounded-lg transition-all duration-500 cursor-zoom-out"
              placeholder="blur"
            />
            <div
              onClick={() => {
                handleCloseFullScreen();
              }}
              className="absolute bg-white right-2 -top-15 rounded-full p-1 lg:hidden  ">
              <X size={30} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FullScreenImage;
