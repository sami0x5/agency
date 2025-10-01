import React from 'react';
import Image, { StaticImageData } from 'next/image';
import * as motion from 'motion/react-client';

const NotifyOrderList = ({
  data,
  index,
}: {
  data: {
    id: string;
    imgUrl: StaticImageData;
    message: string;
    time: string;
  };
  index: number;
}) => {
  return (
    <motion.li
      key={data.id}
      initial={{
        y: index === 1 ? -60 : index === 2 ? -120 : 0,
        x: index === 1 ? 5 : index === 2 ? 10 : 0,
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ delay: 1.6 }}
      className={`relative flex gap-3 items-center bg-white px-2 py-2 max-w-xs rounded-xl shadow shadow-gray-900 -z-[${index}] `}>
      <div className="size-12 rounded-full flex-none">
        <Image
          className="rounded-full w-full h-full "
          src={data.imgUrl}
          alt="Alex profile picture"
        />
      </div>
      <div className="flex flex-col justify-start flex-1">
        <p className=" text-gray-950/85 self-end text-xs    ">{data.time}</p>
        <p className="text-black">{data.message} </p>
      </div>
    </motion.li>
  );
};

export default NotifyOrderList;
