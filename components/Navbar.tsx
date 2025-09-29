'use client';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import Logo from './Logo';
import SlideArrowButton from './Buttons/SlideArrowButton';
import { AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

const navLinks: { title: string; link: string; id: string }[] = [
  { title: 'Services', link: '/services', id: 'fdddfa44' },
  { title: 'Work', link: '/work', id: 'fdf3543fdafa' },
  { title: 'FAQs', link: '/#faqs', id: 'dfk3i343434' },
  { title: 'Pricing', link: '/pricing', id: 'fdf354gf3gr3a' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [headerCollapse, setHeaderCollapse] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', current => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    if (current > 50) {
      setHeaderCollapse(true);
    } else {
      setHeaderCollapse(false);
    }
    if (current > 300 && diff > 0) {
      setScrollDirection('down');
    } else if (diff < 0) {
      setScrollDirection('up');
    }
  });
  return (
    <motion.header
      layout
      className={`fixed  left-0 right-0  min-h-20 z-[999]  flex justify-center items-start overflow-hidden ${
        scrollDirection === 'up' ? 'top-0' : '-top-100'
      }`}>
      <motion.div
        layout
        className={` flex flex-col    items-center justify-center  text-white/75  bg-gray-950/10 backdrop-blur-lg h-auto ${
          headerCollapse
            ? 'w-max border border-white/30 rounded-4xl   mt-5 py-2 px-4'
            : `w-full  py-4 px-8 ${
                isHamburgerOpen ? 'border-b border-white/30' : ''
              }`
        } `}>
        <div
          className={`flex  items-center  justify-between  text-white/75   h-full ${
            headerCollapse ? 'w-max  gap-12 md:gap-40 lg:gap-8' : 'w-full'
          }`}>
          {/* logo */}
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          {/* navbar */}
          <nav className="hidden lg:block " aria-label="Desktop navigation">
            <ul className="flex gap-4 text-lg ">
              {navLinks.map(navLink => (
                <li key={navLink.id}>
                  <Link
                    className="relative after:absolute after:-bottom-0.5   after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white/75 
       after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    href={navLink.link}>
                    {' '}
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* contact button */}
          <SlideArrowButton className="hidden lg:block" />
          {/* hamburger */}
          <div className="lg:hidden relative">
            <button
              onClick={() => {
                setIsHamburgerOpen(!isHamburgerOpen);
              }}>
              <svg
                width="34"
                height="28"
                viewBox="0 0 34 28"
                fill="none"
                className="transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="32"
                  y1="2"
                  x2="2"
                  y2="2"
                  stroke="white"
                  strokeWidth="4"
                  className={`transition-all duration-300 origin-left ${
                    isHamburgerOpen ? 'rotate-45 -translate-y-0.5' : ''
                  }`}
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="26"
                  x2="2"
                  y2="26"
                  stroke="white"
                  strokeWidth="4"
                  className={`transition-all duration-300 origin-left  ${
                    isHamburgerOpen ? '-rotate-45 translate-y-1' : ''
                  }`}
                  strokeLinecap="round"
                />
                {/* middle line */}
                <line
                  x1="31"
                  y1="14"
                  x2="15"
                  y2="14"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className={`transition-all duration-300  ${
                    isHamburgerOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* mobile navigation */}
        <AnimatePresence>
          {isHamburgerOpen ? (
            <motion.nav
              key={'navbar'}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
              exit={{ height: 0 }}
              className="lg:hidden "
              aria-label="Mobile navigation">
              {/* ul list */}
              <ul className="flex flex-col gap-4 text-lg mt-2 ">
                {navLinks.map(navLink => (
                  <li key={navLink.id}>
                    <Link
                      onClick={() => {
                        if (isHamburgerOpen) {
                          setIsHamburgerOpen(false);
                        }
                      }}
                      href={navLink.link}>
                      {' '}
                      {navLink.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    onClick={() => {
                      if (isHamburgerOpen) {
                        setIsHamburgerOpen(false);
                      }
                    }}
                    href="/contact">
                    Contact
                  </Link>{' '}
                </li>
              </ul>
            </motion.nav>
          ) : (
            ''
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
