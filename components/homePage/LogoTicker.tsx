'use client';
import Image from 'next/image';
import React from 'react';
import Adidas from '../../public/companyLogos/adidas.png';
import Blackberry from '../../public/companyLogos/blackberry-seeklogo.png';
import Chanel from '../../public/companyLogos/chanel-2-logo-svgrepo-com.png';
import Giant from '../../public/companyLogos/giant-bicycles-logo-svgrepo-com.png';
import TuneIn from '../../public/companyLogos/tunein-logo-svgrepo-com.png';
import Oracle from '../../public/companyLogos/oracle-6-logo-svgrepo-com.png';
import { motion } from 'motion/react';

const logos = [
  { id: 1, src: Adidas, alt: 'Adidas Logo' },
  {
    id: 2,
    src: Blackberry,

    alt: 'Blackberry Logo',
  },
  { id: 6, src: Oracle, alt: 'Oracle Logo' },
  {
    id: 3,
    src: Chanel,

    alt: 'Chanel Logo',
  },
  {
    id: 4,
    src: Giant,

    alt: 'Giant Logo',
  },
  {
    id: 5,
    src: TuneIn,

    alt: 'Tunein Logo',
  },
];

const LogoTicker = () => {
  return (
    <section className="overflow-hidden px-12 py-6 md:py-12">
      <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex-none flex gap-24 pr-24 items-center">
          {Array.from({ length: 2 }).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map(logo => (
                <Image
                  key={logo.id}
                  className="invert "
                  width={155}
                  height={34}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
