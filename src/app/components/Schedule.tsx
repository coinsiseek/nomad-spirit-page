'use client';

import { motion, Variants } from 'framer-motion';
import { Clock, Tag, Compass } from 'lucide-react';

export default function Schedule() {
  const sessions = [
    {
      day: 'Hétfő',
      time: '18:00 – 20:00',
      type: 'Gi/No-Gi Edzés',
      focus: 'Alapvető technikák, földrevitelek (judo és birkozó elemek), majd szabad küzdelmek (sparring).',
      label: 'Kezdő & Haladó',
      badgeColor: 'border-brand-red text-brand-red bg-brand-red/10',
    },
    {
      day: 'Szerda',
      time: '19:00 – 21:00',
      type: 'Gi/No-Gi Edzés',
      focus: 'Fókuszban a drillek és különféle technikák gyakorlása, majd szabad küzdelmek (sparring).',
      label: 'Kezdő & Haladó',
      badgeColor: 'border-brand-white/40 text-brand-white bg-white/5',
    },
    {
      day: 'Szombat',
      time: '12:00 – 14:00',
      type: 'Open Mat',
      focus: 'Szabad szőnyeg mindenkinek. Hozd a haverokat, gyakorold a tanultakat, és gurulj baráti légkörben.',
      label: 'Nyílt szőnyeg',
      badgeColor: 'border-amber-500 text-amber-500 bg-amber-500/10',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="schedule"
      className="py-24 md:py-32 bg-brand-black relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-black text-brand-white tracking-wider uppercase mb-4">
              EDZÉSREND
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mb-6" />
            <p className="text-brand-textSecondary max-w-xl mx-auto font-sans font-light">
              Csatlakozz bármelyik edzésünkhöz! 13 éves kortól 100ig. Kezdőket is várunk — az edzéseket a szintednek megfelelően fűszerezzük.
            </p>
          </motion.div>
        </div>

        {/* Schedule Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sessions.map((session, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-brand-charcoal border border-brand-border rounded-lg p-8 relative flex flex-col justify-between group hover:border-brand-red/60 transition duration-300 shadow-xl"
            >
              {/* Card glowing light effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-red/0 to-brand-red/[0.02] rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300" />
              
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display text-3xl font-bold tracking-widest text-brand-white uppercase">
                    {session.day}
                  </span>
                  <span
                    className={`px-3 py-1 border text-[10px] uppercase font-bold tracking-widest rounded ${session.badgeColor}`}
                  >
                    {session.label}
                  </span>
                </div>

                {/* Training Type */}
                <h3 className="text-xl font-bold text-brand-white mb-4 flex items-center gap-2 font-sans group-hover:text-brand-red transition duration-300">
                  <Compass size={18} />
                  {session.type}
                </h3>

                {/* Details */}
                <p className="text-brand-textSecondary text-sm mb-6 leading-relaxed font-sans font-light">
                  {session.focus}
                </p>
              </div>

              {/* Time block */}
              <div className="flex items-center gap-3 pt-6 border-t border-brand-border/60 mt-auto">
                <Clock size={16} className="text-brand-red" />
                <span className="font-display text-2xl font-bold tracking-wider text-brand-white">
                  {session.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-brand-charcoal/50 border border-brand-border/50 rounded-lg p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
            <Tag size={18} />
          </div>
          <div>
            <h4 className="text-brand-white font-bold mb-1 font-sans">Először jössz?</h4>
            <p className="text-brand-textSecondary text-sm leading-relaxed font-sans font-light">
              Tiszta póló/rashguard és rövidnadrág elegendő az első edzésekre. Papucsot hozz magaddal a tatami széléig. Az első edzésed teljesen ingyenes!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
