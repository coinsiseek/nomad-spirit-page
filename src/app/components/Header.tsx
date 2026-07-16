'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bemutatkozás', href: '#intro' },
    { name: 'Edzésrend', href: '#schedule' },
    { name: 'Helyszín', href: '#location' },
    { name: 'Kapcsolat', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border border-zinc-800 group-hover:border-brand-red transition duration-300">
            <Image
              src="/logonomad.png"
              alt="Nomad Spirit BJJ Logo"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <span className="font-display text-xl md:text-2xl tracking-wider text-brand-white group-hover:text-brand-red transition duration-300">
            NOMAD SPIRIT BJJ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wider text-brand-textSecondary hover:text-brand-white uppercase transition duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://berlet.nomad-spirit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-brand-red hover:bg-brand-red text-brand-white font-bold text-xs uppercase tracking-widest rounded transition duration-300"
          >
            <Globe size={14} />
            Bérletek / Tagoknak
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-white hover:text-brand-red transition duration-300 p-2 focus:outline-none"
            aria-label="Menü megnyitása"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-black border-b border-brand-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold tracking-widest text-brand-white hover:text-brand-red uppercase transition duration-300 py-2 border-b border-brand-border/50"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://berlet.nomad-spirit.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-red hover:bg-brand-redHover text-brand-white font-bold text-sm uppercase tracking-widest rounded transition duration-300 mt-2"
              >
                <Globe size={16} />
                Bérletek / Tagoknak
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
