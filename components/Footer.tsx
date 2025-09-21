import Link from 'next/link';
import SlideArrowButton from './Buttons/SlideArrowButton';
import Logo from './Logo';

const quickLinks: { linkName: string; link: string }[] = [
  { linkName: 'Home', link: '/' },
  { linkName: 'Services', link: '#services' },
  { linkName: 'Work', link: '#work' },
  { linkName: 'Pricing', link: '/pricing' },
  { linkName: 'Contact', link: '/contact' },
];

const Footer = () => {
  return (
    <footer className="relative   bg-gray-900 z-10  text-white  ">
      <div className="md:flex w-full md:justify-between p-8 md:p-16">
        <div className="flex flex-col items-start gap-3 md:gap-6 mb-12 md:mb-0">
          <Logo />
          <h2 className="max-w-md  text-lg opacity-80">
            A full-service Web Agency focusing on building functional, simple,
            human-centered digital products for future.
          </h2>
          <SlideArrowButton />
        </div>

        <div className="flex flex-col gap-2 lg:mr-36">
          <h2 className="md:mb-2">QUICK LINK</h2>
          {quickLinks.map(item => (
            <Link
              className="opacity-65 hover:opacity-100 transition font-sans font-normal"
              href={item.link}
              key={item.linkName}>
              {' '}
              {item.linkName}{' '}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center pb-8 opacity-75">
        © Codenix 2025 | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
