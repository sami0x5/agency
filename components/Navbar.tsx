import Link from 'next/link';
import Logo from './Logo';
import SlideArrowButton from './Buttons/SlideArrowButton';

const Navbar = () => {
  const navLinks: { title: string; link: string; id: string }[] = [
    { title: 'Services', link: '/services', id: 'fdddfa44' },
    { title: 'Work', link: '/work', id: 'fdf3543fdafa' },
    { title: 'FAQs', link: '/#faqs', id: 'dfk3i343434' },
    { title: 'Pricing', link: '/pricing', id: 'fdf354gf3gr3a' },
  ];
  return (
    <header className=" fixed top-0 left-0 right-0 flex  items-center justify-between py-4 px-8 text-white/75 w-full h-20 z-[999] bg-gray-950/10 backdrop-blur-lg  ">
      {/* logo */}
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {/* navbar */}
      <nav className="hidden lg:block">
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
      <SlideArrowButton className="hidden lg:block" />
      <div className="lg:hidden">
        <svg
          width="34"
          height="28"
          viewBox="0 0 34 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line
            x1="32"
            y1="2"
            x2="2"
            y2="2"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="32"
            y1="26"
            x2="2"
            y2="26"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="31"
            y1="14"
            x2="15"
            y2="14"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
