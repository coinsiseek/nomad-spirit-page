'use client';

import Image from 'next/image';
import { Skull, WavesVertical, BoneFracture, HandMetal } from 'lucide-react';
import { motion, Variants as MotionVariants } from 'framer-motion';

export default function Intro() {
  const containerVariants: MotionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: MotionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const values = [
    {
      icon: <BoneFracture className="text-brand-red" size={24} />,
      title: 'Kopogd le gyakran',
      desc: 'Minél többször leütöd, annál hamarabb nem fogod.',
    },
    {
      icon: <WavesVertical className="text-brand-red" size={24} />,
      title: '3 az 1-ben',
      desc: 'Pszichoterápia, fizioterápia és aromaterápia is egyben.',
    },
    {
      icon: <Skull className="text-brand-red" size={24} />,
      title: 'Ego Halál',
      desc: 'Egy jó sarokfeszítés és pillanatok alatt elfelejted, hogy egyáltalán volt egód.',
    },
    {
      icon: <HandMetal className="text-brand-red" size={24} />,
      title: 'Finomvegyes Technikák',
      desc: 'Semmi felesleges cirkusz — csak azok a fogások, amik tényleg működnek.',
    },
  ];

  return (
    <section
      id="intro"
      className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-[250px] h-[250px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Logo & Emblem */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl group-hover:bg-brand-red/20 transition duration-500 pointer-events-none" />
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border-2 border-brand-border group-hover:border-brand-red/50 p-4 transition duration-500 flex-shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/logonomad.png"
                    alt="Nomad Spirit Emblem"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 280px, 360px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Details */}
          <motion.div variants={itemVariants} className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-brand-white tracking-wider uppercase mb-6 relative">
              A Nomad Szellemiség
              <span className="block w-20 h-1 bg-brand-red mt-2" />
            </h2>

            <p className="text-lg text-brand-white font-medium mb-4 leading-relaxed font-sans">
              A brazil jiu-jitsu több mint küzdősport — ez egy fizikai és mentális malom-játszma.
            </p>

            <p className="text-brand-textSecondary mb-10 leading-relaxed font-sans font-light">
              Csíkszeredai klubunkat azzal a céllal hoztuk létre, hogy egy befogadó környezetet biztosítsunk a BJJ szerelmeseinek. Nem számít, ha még soha nem álltál küzdősport szőnyegen, vagy ha már évek óta edzesz: modern tatamival és profi edzésekkel várunk!
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-900 border border-brand-border flex items-center justify-center">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-brand-white font-bold mb-1 font-sans">
                      {val.title}
                    </h4>
                    <p className="text-brand-textSecondary text-sm leading-relaxed font-sans font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
