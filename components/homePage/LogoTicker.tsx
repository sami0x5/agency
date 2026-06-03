'use client';
import React from 'react';
import { motion } from 'motion/react';
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandDiscord,
  IconBrandSlack,
  IconRobot,
  IconDiamondFilled,
} from '@tabler/icons-react';

const tools = [
  { id: 1, label: 'OpenClaw', Icon: IconRobot },
  { id: 3, label: 'Telegram', Icon: IconBrandTelegram },
  { id: 4, label: 'WhatsApp', Icon: IconBrandWhatsapp },
  { id: 2, label: 'Hermes Agent', Icon: IconRobot },
  { id: 5, label: 'Discord', Icon: IconBrandDiscord },
  { id: 6, label: 'Slack', Icon: IconBrandSlack },
  { id: 7, label: 'Obsidian', Icon: IconDiamondFilled },
];

const LogoTicker = () => {
  return (
    <section className="overflow-hidden px-12 py-6 md:py-12">
      <p className="mt-7 md:mt-5 lg:mt-0 text-center text-xl text-white/60">
        We build with the best tools
      </p>
      <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mt-2 lg:mt-5">
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex-none flex gap-24 pr-24 items-center">
          {Array.from({ length: 2 }).map((_, index) => (
            <React.Fragment key={index}>
              {tools.map(tool => (
                <div
                  key={tool.id}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <tool.Icon size={48} className="text-white" />
                  <span className="text-white text-2xl font-medium whitespace-nowrap">
                    {tool.label}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
