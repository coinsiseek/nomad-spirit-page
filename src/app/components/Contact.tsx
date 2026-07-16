'use client';

import { motion } from 'framer-motion';
import { Phone, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/p/Nomad-Spirit-BJJ-Cs%C3%ADkszereda-61560834976038/',
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      label: 'Nomad Spirit BJJ Csíkszereda',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nomad.csik',
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: '@nomad.csik',
    },
    {
      name: 'Membership Portal',
      url: 'https://berlet.nomad-spirit.com',
      icon: <Globe size={20} />,
      label: 'Bérletek / Tagoknak',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-brand-black relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-border/40"
    >
      {/* Background decoration */}
      <div className="absolute right-1/2 translate-x-1/2 bottom-0 w-[400px] h-[200px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-6xl font-black text-brand-white tracking-wider uppercase mb-6">
            KÉSZEN ÁLLSZ A HARCRA?
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-8" />
          
          <p className="text-lg sm:text-xl text-brand-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed font-sans font-light">
            Várunk az első ingyenes próbaedzésedre. Kérdésed van az edzésekkel kapcsolatban? Hívj minket telefonon bizalommal vagy keress minket közösségi oldalainkon!
          </p>

          {/* Big Phone Button */}
          <div className="mb-16">
            <motion.a
              href="tel:+40747368632"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-red hover:bg-brand-redHover text-brand-white font-display text-2xl sm:text-3xl font-bold tracking-widest uppercase rounded shadow-2xl shadow-brand-red/20 transition duration-300 border border-brand-red"
            >
              <Phone size={28} className="animate-pulse" />
              0747 368 632
            </motion.a>
            <p className="text-xs text-brand-textSecondary mt-3 font-sans tracking-wide uppercase">
              Kattints a számra a közvetlen híváshoz
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-brand-charcoal hover:bg-zinc-900 border border-brand-border hover:border-brand-red/50 rounded-lg transition duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-brand-black border border-brand-border flex items-center justify-center text-brand-textSecondary group-hover:text-brand-red group-hover:border-brand-red/30 transition duration-300 mb-3">
                  {link.icon}
                </div>
                <span className="text-brand-white font-bold text-xs uppercase tracking-wider mb-1 font-sans">
                  {link.name}
                </span>
                <span className="text-brand-textSecondary text-xs font-sans font-light truncate max-w-full">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
