'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/p/Nomad-Spirit-BJJ-Cs%C3%ADkszereda-61560834976038/',
      icon: (
        <svg
          className="w-4 h-4"
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
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nomad.csik',
      icon: (
        <svg
          className="w-4 h-4"
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
    },
    {
      name: 'Bérlet',
      url: 'https://berlet.nomad-spirit.com',
      icon: <Globe size={16} />,
    },
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-zinc-800">
            <Image
              src="/logonomad.png"
              alt="Nomad Spirit Logo Small"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="font-display text-lg tracking-wider text-brand-white">
            NOMAD SPIRIT BJJ
          </span>
        </div>

        {/* Center: Copyright */}
        <p className="text-xs text-brand-textSecondary font-sans font-light order-3 md:order-2">
          &copy; {currentYear} Nomad Spirit BJJ Csíkszereda. Minden jog fenntartva.
        </p>

        {/* Right: Repeated small social icons */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-brand-charcoal hover:bg-brand-red border border-brand-border hover:border-brand-red flex items-center justify-center text-brand-textSecondary hover:text-brand-white transition duration-300 shadow-md"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
