'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function MobileStickyCall() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-40 w-full max-w-[calc(100%-3rem)] px-4">
      <motion.a
        href="tel:+40747368632"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 w-full py-4 bg-brand-red text-brand-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg border border-brand-red hover:bg-brand-redHover transition duration-300 relative overflow-hidden"
      >
        <motion.span
          className="absolute inset-0 bg-white opacity-0"
          animate={{ scale: [1, 2], opacity: [0.15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
        />
        <Phone size={18} className="animate-pulse" />
        Hívj most: 0747 368 632
      </motion.a>
    </div>
  );
}
