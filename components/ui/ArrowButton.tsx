import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const ArrowButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href="/contact"
      className="group cursor-pointer slide-anime px-5 py-3 rounded-full w-[180px] bg-amber-300 text-black flex justify-around items-center font-semibold mt-4 ">
      {children}
      <div className="group-hover:translate-x-2 transition-all">
        <ArrowRight />
      </div>
    </Link>
  );
};

export default ArrowButton;
