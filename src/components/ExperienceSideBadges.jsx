import { motion } from 'framer-motion';

const hangingCards = [
  {
    side: 'left',
    title: 'Turning Ideas Into Reality',
    lines: [
      'Every project starts as a rough idea.',
      'I turn it into working, shipped software — not just a prototype.',
      'From wireframe to production, I own the whole journey.'
    ]
  },
  {
    side: 'right',
    title: 'Always Learning, Always Building',
    lines: [
      'New stack, new framework, new challenge — I dive in.',
      'Growth never stops, and neither does the build.',
      'Curiosity is the constant behind every project I ship.'
    ]
  }
];

const HangingBadge = ({ card }) => {
  const isLeft = card.side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`hidden xl:flex absolute top-24 ${isLeft ? 'left-4 2xl:left-8' : 'right-4 2xl:right-8'} flex-col items-center z-10`}
    >
      {/* Clip / loop */}
      <div className="w-9 h-5 rounded-full border-2 border-black/70 relative shrink-0 bg-gray-300 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/70" />
      </div>

      {/* Lanyard string */}
      <div className="w-1 h-44 bg-gray-900 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none" />

      {/* Hanging card — ~1.6x the original size, still fits alongside the timeline */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: isLeft ? -2 : 2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
        className={`w-64 aspect-[2/3] flex flex-col justify-center rounded-2xl bg-gray-900 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.45)] p-7 relative cursor-default ${
          isLeft ? '-rotate-6' : 'rotate-6'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ff2a2a]/70 rounded-t-[1.25rem]" />

        <p className="text-lg font-black text-white text-center leading-snug tracking-wide mb-4">
          {card.title}
        </p>

        <div className="w-10 h-px bg-[#ff2a2a]/40 mx-auto mb-4" />

        {card.lines.map((line, i) => (
          <p
            key={i}
            className="text-[13px] font-medium text-gray-400 text-center leading-relaxed italic mb-3 last:mb-0"
          >
            {line}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ExperienceSideBadges = () => {
  return (
    <>
      {hangingCards.map((card) => (
        <HangingBadge key={card.side} card={card} />
      ))}
    </>
  );
};

export default ExperienceSideBadges;