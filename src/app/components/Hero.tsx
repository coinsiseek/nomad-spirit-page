'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Calendar } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax and fade-out scroll effects for the desktop mascot image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen bg-brand-black flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image & Dark Overlay Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero.webp"
          alt="Nomad Spirit Dojo Background"
          fill
          className="object-cover object-center opacity-70 select-none"
          sizes="100vw"
          priority
        />
        {/* Solid dark overlay to ensure it is sufficiently dark */}
        <div className="absolute inset-0 bg-black/75" />
        {/* Gradient overlay to blend edges with page sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      {/* Breathing Brand Red Glow in the bottom-right (behind mascot) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[350px] sm:w-[600px] xl:w-[750px] aspect-square bg-brand-red/15 rounded-full blur-[120px] pointer-events-none z-20"
      />

      {/* Breathing Brand Red Glow in the top-left (accents the text & badge) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[-10%] left-[-10%] w-[250px] sm:w-[500px] aspect-square bg-brand-red/[0.08] rounded-full blur-[100px] pointer-events-none z-20"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-30 w-full py-12 md:py-24">
        
        {/* Hero Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-8 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded-full text-brand-red font-bold text-xs uppercase tracking-widest mb-6 w-fit">
            <Shield size={12} />
            Csíkszereda Grappling Akadémia
          </div>

          <h1 className="font-display text-6xl sm:text-8xl xl:text-9xl font-black text-brand-white leading-none tracking-tight mb-2">
            NOMAD SPIRIT
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-brand-red tracking-wider uppercase mb-6">
            Brazilian Jiu-Jitsu ◆ Grappling
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-textSecondary max-w-xl mb-10 leading-relaxed font-sans font-light">
            Csíkszereda és környéke legjobb grappling bandája.
            Gyere, tanulj meg fojtogatni, kezet-lábat törni — jó kedvvel:)
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-redHover text-brand-white font-bold text-sm tracking-widest uppercase rounded shadow-lg shadow-brand-red/20 transition duration-300 border border-brand-red"
            >
              PRÓBÁLD KI INGYEN
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-zinc-900 text-brand-white font-bold text-sm tracking-widest uppercase rounded border border-brand-border transition duration-300"
            >
              <Calendar size={16} />
              EDZÉSRENDÜNK
            </a>
          </div>
        </motion.div>

        {/* Mobile/Tablet Gorilla Mascot (rendered in the grid layout - NO scroll fade) */}
        <div className="lg:hidden col-span-1 flex justify-center relative mt-8">
          <div className="relative w-[280px] sm:w-[380px] aspect-[4/5] drop-shadow-[0_20px_50px_rgba(200,16,46,0.15)]">
            <Image
              src="/gorilla.png"
              alt="Nomad Spirit Gorilla Mascot"
              fill
              className="object-contain"
              sizes="(max-w-768px) 280px, 380px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop Gorilla Mascot (Absolute bottom-right positioned, fades out on scroll) */}
      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hidden lg:block absolute bottom-0 right-4 xl:right-[8%] w-[33%] xl:w-[35%] max-w-[450px] aspect-[4/5] z-30 pointer-events-none"
      >
        <div className="relative w-full h-full drop-shadow-[0_25px_60px_rgba(200,16,46,0.25)]">
          <Image
            src="/gorilla.png"
            alt="Nomad Spirit Gorilla Mascot Desktop"
            fill
            className="object-contain object-bottom"
            sizes="450px"
            priority
          />
        </div>
      </motion.div>

      {/* Decorative background bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
