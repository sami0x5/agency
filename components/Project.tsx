import Image, { StaticImageData } from 'next/image';
import React from 'react';
import cursor from '../public/cursor2.png';
import Link from 'next/link';

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
  return (
    <Link
      className=" bg-[#181616ac] rounded-2xl  max-w-3xl justify-self-center mb-6 lg:mb-2 group overflow-clip transition duration-500   "
      href={item.link}
      target="_blank">
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
