'use client';
import React from 'react';
import Image from 'next/image';
import ProfilePic from '@/public/profile-pic.jpg';
import { motion } from 'motion/react';
import ButtonHoverDown from '../Buttons/ButtonHoverDown';

const values = [
  {
    number: '01',
    title: 'Self-hosted, always',
    desc: 'Your agent runs on your own computer or VPS. Your data, your workflows, your machine. Full ownership from day one.',
  },
  {
    number: '02',
    title: 'Outcomes, not features',
    desc: 'You tell us what eats your time and we automate it. We are not selling a platform, we are solving a specific problem in your business.',
  },
  {
    number: '03',
    title: 'We stay involved',
    desc: 'We do not hand over a setup and disappear. We tune and improve your agent as your needs grow.',
  },
];

const AboutContent = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pt-36 lg:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-semibold tracking-tight leading-none bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent">
          About
          <br />
          Codenix
        </motion.h1>

        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-gradient-to-r from-white/40 via-white/20 to-transparent mt-10 mb-12"
        />

        {/* Two-column intro */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'linear' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 pb-24 lg:pb-32">
          <p className="text-2xl lg:text-3xl text-white/50 font-light leading-relaxed">
            The person behind the agents that actually do the work.
          </p>
          <div className="text-white/65 text-lg leading-relaxed space-y-5">
            <p>
              We started Codenix around one frustration. AI agents are
              genuinely powerful, but most businesses never get past the demo.
              The setup is technical, the tools are scattered, and what people
              end up with is usually a chatbot that does very little.
            </p>
            <p>
              We do the opposite. We build self-hosted agents that quietly
              handle real work in the background, on your own computer or VPS,
              connected to the apps you already use. I am hands-on with every
              setup, which means you work directly with the person building your
              agent, not a sales layer.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pb-20 lg:pb-28 space-y-6">

        {/* Sami — text left, image right */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'linear' }}
          viewport={{ once: true }}
          className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0d0d0d] rounded-2xl overflow-clip group">
            <div className="order-2 lg:order-1 p-8 lg:p-14 flex flex-col justify-center">
              <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Sami
              </h2>
              <span className="mt-4 bg-black border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/50 w-fit tracking-wide">
                Founder
              </span>
              <hr className="border-white/10 my-7" />
              <p className="text-white/65 text-lg leading-relaxed">
                Sami is a software developer and AI agent expert. With a
                background in building software and a focus on deploying
                self-hosted AI agents for real businesses, Sami works hands-on
                with platforms like OpenClaw and Hermes, covering everything
                from installation and security to the custom skills and
                workflows that make an agent genuinely useful. The result is an
                agent that does real work, runs reliably, and stays fully yours.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[320px] lg:h-full min-h-[420px] overflow-hidden">
              <Image
                src={ProfilePic}
                alt="Sami, Founder of Codenix"
                fill
                className="object-cover object-center transition duration-700 group-hover:scale-105"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0d0d0d]/60 lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </motion.div>

      </section>

      {/* ── How We Work ──────────────────────────────────── */}
      <section className="px-6 lg:px-16 pb-20 lg:pb-28">
        <motion.h2
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'linear' }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent mb-12">
          How we work
        </motion.h2>
        <div className="divide-y divide-white/10">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.5, ease: 'linear', delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 lg:gap-20 py-9 lg:py-11 items-start">
              <span className="text-5xl lg:text-7xl font-semibold text-white/10 leading-none flex-none w-16 lg:w-28 select-none">
                {item.number}
              </span>
              <div className="pt-1 lg:pt-3">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/60 text-lg leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-16 pb-32">
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'linear' }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16 flex flex-col items-start gap-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-gray-400/75 via-white/80 to-gray-400 bg-clip-text text-transparent leading-tight">
              Ready to put
              <br />
              an agent to work?
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-md">
              Tell us what eats your time and we will show you what an AI
              agent can take off your plate.
            </p>
          </div>
          <div className="flex-none">
            <ButtonHoverDown url="/contact?booking=true" text="Book a Call" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutContent;
