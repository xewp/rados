import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function MenuCard({ item, index, inView }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.07, ease: 'easeOut' }}
      className="card-warm overflow-hidden group"
      role="article"
      aria-label={`Menu item: ${item.name}`}
    >
      {/* Image */}
      <div
        style={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: '#6B3E26', flexShrink: 0 }}
      >
        <img
          src={item.image}
          alt={`${item.name} — Rado's Lechon`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {item.isBestSeller && (
          <div className="absolute top-3 left-3">
            <span className="badge-bestseller">
              <Star size={9} fill="currentColor" />
              Best Seller
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 text-2xl">{item.emoji}</div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Top accent line */}
        <div className="w-10 h-0.5 bg-gold mb-3 rounded-full" />
        
        <h3
          className="font-cinzel font-bold text-charcoal mb-2"
          style={{ fontSize: 'var(--text-h3)' }}
        >
          {item.name}
        </h3>
        <p
          className="font-poppins text-charcoal/65 mb-4 leading-relaxed"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          {item.description}
        </p>

        {/* Price row */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-cream-dark">
          <div className="flex items-baseline gap-2">
            <span
              className="font-oswald font-bold text-gold"
              style={{ fontSize: 'var(--text-price)' }}
            >
              {item.price}
            </span>
            {item.priceWithRice && (
              <span className="font-poppins text-charcoal/50 text-xs">
                / {item.priceWithRice} w/ rice
              </span>
            )}
          </div>
          {item.isBestSeller && (
            <div className="stars text-xs">★★★★★</div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative"
      aria-label="Full Menu"
      style={{ background: 'var(--cream-dark)' }}
    >
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,0 L0,0 Z"
            style={{ fill: 'var(--lechon-brown)' }} />
        </svg>
      </div>

      <div className="section-padding pt-20 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">What We Serve</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-cinzel font-black text-charcoal text-center mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Our Full
          <span className="text-gradient-gold"> Menu</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="section-divider w-full max-w-xs">
            <Flame size={16} className="text-gold" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center font-poppins text-charcoal/60 mb-12"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          Prices include: solo / with rice
        </motion.p>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10"
        >
          <p className="font-poppins text-charcoal/50 text-sm">
            ✦ All dishes are freshly prepared daily ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
