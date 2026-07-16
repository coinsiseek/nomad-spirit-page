'use client';

import { motion } from 'framer-motion';

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
}

export default function CookieBanner({ onAccept, onReject }: CookieBannerProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-brand-charcoal border border-brand-border p-6 rounded-lg shadow-2xl z-50 backdrop-blur-md bg-opacity-95"
    >
      <h3 className="text-lg font-bold text-brand-white mb-2 uppercase tracking-wider font-display">
        Süti Beállítások (GDPR)
      </h3>
      <p className="text-sm text-brand-textSecondary mb-4 leading-relaxed">
        Weboldalunk működéséhez és a Google Térkép szolgáltatás beágyazásához sütiket használunk. Az elfogadással hozzájárul a térkép betöltéséhez és a látogatottsági adatok anonim elemzéséhez.
      </p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onReject}
          className="px-4 py-2 text-xs font-semibold text-brand-textSecondary hover:text-brand-white transition duration-300 border border-transparent hover:border-brand-border rounded"
        >
          Elutasítás
        </button>
        <button
          onClick={onAccept}
          className="px-5 py-2 text-xs font-bold bg-brand-red text-brand-white hover:bg-brand-redHover transition duration-300 rounded shadow-md uppercase tracking-wider"
        >
          Elfogadás
        </button>
      </div>
    </motion.div>
  );
}
