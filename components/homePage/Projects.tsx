import React from 'react';
import SectionHeader from '../SectionHeader';
import aiSEOImg from '@/public/aiseo.png';
import landingPageImg from '@/public/landingpage.png';
import layersImg from '@/public/layers.png';
import Project from '../Project';

const allData = [
  {
    name: 'AI SEO Startup',
    img: aiSEOImg,
    link: 'https://ai-startup-landing-page-beta.vercel.app/',
    desc: ' A landing page for an AI SEO startup, showcasing their services and features.',
    tags: ['Landing Page', 'MVP', 'Development'],
  },
  {
    name: 'Layers',
    img: layersImg,
    link: 'https://layers-swart.vercel.app/',
    desc: ' Layers is a collaborative design tool that lets teams create, prototype, and share ideas seamlessly.',
    tags: ['Landing Page', 'MVP', 'Development'],
  },
  {
    name: 'Landing page',
    img: landingPageImg,
    link: 'https://landing-page-demo-two.vercel.app/',
    desc: ' A landing page for startup, showcasing their services and features.',
    tags: ['Landing Page'],
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
    <section className="mt-12 lg:p-12  overflow-clip relative p-6">
      <SectionHeader title={pillTitle} className={`text-lg ${className}`} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 ">
        {allData.map((item, index) => (
          <Project key={`${item.name}${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
