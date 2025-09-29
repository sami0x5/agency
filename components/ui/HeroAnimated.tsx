import React from 'react';
import AnalyticsAnim from '../Animations/AnalyticsAnim';
import MoreSales from '../svgComponents/MoreSales';

import HeadShotImg1 from '@/public/headshot1.webp';
import * as motion from 'motion/react-client';
import NotifyOrderList from './NotifyOrderList';
const NotifyOrdersData = [
  {
    id: 'dkajfkjfdeekdjfe',
    imgUrl: HeadShotImg1,
    message: 'Ryan Placed a new order',
    time: '5m ago',
  },
  {
    id: 'dkajfkjkdjfe',
    imgUrl: HeadShotImg1,
    message: 'Imran canceled the order',
    time: '30m ago',
  },
  {
    id: 'dkajfkjkdj333gfe',
    imgUrl: HeadShotImg1,
    message: 'Alex order a new items that worth $20',
    time: '1h ago',
  },
];

const HeroAnimated = () => {
  return (
    <>
      {/* analytics img */}
      <motion.div
        initial={{ x: 300, opacity: 0, y: -100 }}
        animate={{ x: 0, opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
        className=" absolute h-60 md:h-80 w-auto xl:top-60 xl:-right-40 drop-shadow-2xl drop-shadow-black z-10 lg:top-65 lg:-right-45 md:top-85 md:-right-45 top-85 ">
        <AnalyticsAnim />
      </motion.div>
      {/* more sales svg */}
      <div className="hidden md:block absolute xl:top-8 xl:left-6 drop-shadow-2xl lg:top-8 lg:left-2 md:top-75 md:left-2 drop-shadow-black z-10 opacity-50">
        <MoreSales className="w-72" />
      </div>
      {/* Order Notify */}
      <div className="hidden absolute w-max   xl:top-70 xl:left-10 drop-shadow-2xl drop-shadow-black z-10  md:block lg:top-70 lg:left-8 md:top-138 md:left-8">
        <ul className="flex flex-col gap-2 relative ">
          {/* i was here and i was making notification type animation */}
          {NotifyOrdersData.map((data, index) => (
            <NotifyOrderList key={data.id} data={data} index={index} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeroAnimated;
