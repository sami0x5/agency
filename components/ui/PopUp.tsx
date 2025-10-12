'use client';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PopUp = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(
    <div className="fixed top-0 left-0 right-0 z-[2000] flex justify-center items-center">
      <motion.p
        initial={{ y: '-200px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-200px', opacity: 0 }}
        className={` py-2 md:text-lg md:px-4 px-2 mt-10 rounded-lg text-center ${className}`}>
        {children}
      </motion.p>
    </div>,
    document.body
  );
};

export default PopUp;
