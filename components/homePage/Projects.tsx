import React from 'react';
import SectionHeader from '../SectionHeader';
import aiSEOImg from '@/public/workImages/aiseo.png';
import layersImg from '@/public/workImages/layers.png';
import theNestStandard from '@/public/workImages/thenest-standard.png';
import Project from '../Project';
import { StaticImageData } from 'next/image';

const allData: {
  name: string;
  img: StaticImageData;
  link: string;
  desc: string;
  tags: string[];
  date: string;
}[] = [
  {
    name: 'The Nest Standard',
    img: theNestStandard,
    link: 'https://www.theneststandard.com/',
    desc: 'A custom-built cleaning service website showcasing services and driving estimate requests.',
    tags: ['Cleaning Service', 'Business Website'],
    date: '18 Nov 2025',
  },
  {
    name: 'AI SEO Startup',
    img: aiSEOImg,
    link: 'https://ai-startup-landing-page-beta.vercel.app/',
    desc: ' A landing page for an AI SEO startup, showcasing their services and features.',
    tags: ['Landing Page', 'Demo'],
    date: '11 Aug 2025',
  },
  {
    name: 'Layers',
    img: layersImg,
    link: 'https://layers-swart.vercel.app/',
    desc: ' Layers is a collaborative design tool that lets teams create, prototype, and share ideas seamlessly.',
    tags: ['Landing Page', 'Demo'],
    date: '21 Jul 2025',
  },
];

const Projects = ({
  pillTitle,
  className,
}: {
  pillTitle: string;
  className?: string;
}) => {
  return (
    <section className=" lg:p-12  overflow-clip relative p-6">
      <SectionHeader
        title={pillTitle}
        className={`text-lg pt-12 ${className}`}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 ">
        {allData.map((item, index) => (
          <Project key={`${item.name}${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
