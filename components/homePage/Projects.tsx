import React from 'react';
import SectionHeader from '../SectionHeader';

const allData: {
  name: string;
  youtubeId: string;
  desc: string;
  tags: string[];
  date: string;
}[] = [
  {
    name: 'Isolated Multi-Agent System with OpenClaw',
    youtubeId: '2idvKZv4yko',
    desc: 'A complete walkthrough of setting up an isolated multi-agent system using OpenClaw — from initial configuration to a fully running setup.',
    tags: ['OpenClaw', 'Multi-Agent'],
    date: 'TBD',
  },
  {
    name: 'AI Customer Support Agent with OpenClaw',
    youtubeId: '-UaKPJnwGlk',
    desc: 'We built a fully automated AI customer support agent using OpenClaw — handling queries, responding to customers, and running 24/7 without manual input.',
    tags: ['Customer Support', 'OpenClaw'],
    date: 'TBD',
  },
  {
    name: 'AI Agent for Client Business',
    youtubeId: 'PLACEHOLDER_VIDEO_ID',
    desc: 'A real-world setup where we install and configure an AI agent for a small business, handling follow-ups and internal tasks.',
    tags: ['Real-World Setup', 'Demo'],
    date: 'TBD',
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
          <div
            key={`${item.name}${index}`}
            className="bg-[#181616ac] rounded-2xl max-w-3xl justify-self-center mb-6 lg:mb-2 overflow-clip">
            <div className="overflow-clip">
              <iframe
                className="w-full aspect-video rounded-t-2xl"
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="grid grid-cols-2 justify-between">
                <div className="flex items-center gap-2 text-md lg:text-lg">
                  <span className="text-sm italic">{item.date}</span>
                  <span className="size-2 rounded-full bg-white"></span>
                  {item.name}
                </div>
                <div className="flex gap-2 flex-wrap justify-end items-center">
                  {item.tags.map(tag => (
                    <div
                      key={tag}
                      className="bg-black px-4 py-1 rounded-full relative text-xs lg:text-sm">
                      {tag}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-white to-blue-500 -z-10 -m-[1.5px]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-md opacity-80 text-lg lg:text-2xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
