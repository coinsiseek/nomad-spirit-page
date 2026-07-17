'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Lock } from 'lucide-react';

interface LocationProps {
  cookieConsent: boolean | null;
  onAcceptCookies: () => void;
}

export default function Location({ cookieConsent, onAcceptCookies }: LocationProps) {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=46.370402,25.806031';
  
  // Custom dark styles map embed source (using the coordinates provided)
  const mapEmbedUrl = 'https://maps.google.com/maps?q=46.370402,25.806031&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <section
      id="location"
      className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl font-black text-brand-white tracking-wider uppercase mb-6">
                HELYSZÍN
              </h2>
              <div className="w-16 h-1 bg-brand-red mb-8" />
              
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-900 border border-brand-border flex items-center justify-center text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-white mb-1 font-sans">
                    Címünk
                  </h3>
                  <p className="text-brand-textSecondary leading-relaxed font-sans font-light">
                    Tapolca utca 20 (ISK épülete), Csíkszereda, Hargita megye, Románia
                  </p>
                  <p className="text-brand-textSecondary text-xs mt-1 font-mono font-light">
                    Koordináták: 46.370402, 25.806031
                  </p>
                </div>
              </div>

              <p className="text-brand-textSecondary mb-8 leading-relaxed font-sans font-light">
                Csíkszereda szívében, könnyen megközelíthető helyen találsz meg minket. Modern, tiszta, jól felszerelt grappling teremmel várunk minden érdeklődőt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-redHover text-brand-white font-bold text-xs uppercase tracking-widest rounded shadow-md transition duration-300 border border-brand-red"
                >
                  <Navigation size={14} />
                  ÚTVONALTERVEZÉS
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=46.37040186349991,25.806030892485285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-zinc-900 text-brand-textSecondary hover:text-brand-white font-bold text-xs uppercase tracking-widest rounded border border-brand-border transition duration-300"
                >
                  Megnyitás Google Térképen
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Embedded Map Facade / IFrame */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/10] bg-brand-black border border-brand-border rounded-lg overflow-hidden shadow-2xl"
            >
              {cookieConsent === true ? (
                <>
                  {/* Google Maps Iframe, dark styled via CSS filter */}
                  <iframe
                    title="Nomad Spirit BJJ Csíkszereda Map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: 'grayscale(1) invert(0.92) contrast(1.1) brightness(0.95)',
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Custom Red Marker Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-8px)] pointer-events-none z-10 flex flex-col items-center">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-brand-red filter drop-shadow-[0_4px_10px_rgba(200,16,46,0.6)]"
                    >
                      <MapPin size={40} fill="#c8102e" className="text-brand-white stroke-[1.5]" />
                    </motion.div>
                    {/* Pulsing Shadow */}
                    <motion.div
                      animate={{
                        scaleX: [1, 0.6, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-3.5 h-1.5 bg-brand-red rounded-full filter blur-[1px] mt-[-2px]"
                    />
                  </div>
                  {/* Transparent Clickable Overlay to make the map static and open directions on click */}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 cursor-pointer bg-transparent"
                    aria-label="Megnyitás Google Térképen"
                  />
                </>
              ) : (
                /* GDPR Cookie Wall Facade */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-brand-black/90 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mb-4 animate-pulse">
                    <Lock size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-white mb-2 uppercase tracking-widest font-display">
                    A Térkép Blokkolva Van (GDPR)
                  </h4>
                  <p className="text-sm text-brand-textSecondary max-w-sm mb-6 leading-relaxed font-sans font-light">
                    Az interaktív térkép betöltéséhez el kell fogadnia a sütik használatát, vagy kattintson az alábbi gombra az engedélyezéshez.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={onAcceptCookies}
                      className="px-5 py-2.5 bg-brand-red hover:bg-brand-redHover text-brand-white text-xs font-bold uppercase tracking-wider rounded transition duration-300"
                    >
                      Sütik elfogadása & Térkép betöltése
                    </button>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=46.37040186349991,25.806030892485285"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-brand-border text-brand-textSecondary hover:text-brand-white text-xs font-bold uppercase tracking-wider rounded transition duration-300"
                    >
                      Külső megnyitás térképen
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
