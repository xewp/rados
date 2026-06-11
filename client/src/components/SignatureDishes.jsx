import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Flame } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function SignatureDishes() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="signature"
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Signature Dishes"
      style={{ background: 'var(--lechon-brown)' }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">Most Ordered</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-cinzel font-black text-cream text-center mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Our Signature
          <span className="block text-gradient-gold">Dishes</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="section-divider w-full max-w-xs">
            <Flame size={18} className="text-gold" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SIGNATURE_DISHES.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
              className="group relative rounded-3xl overflow-hidden shadow-warm-xl cursor-default"
              role="article"
              aria-label={`${dish.name} — best seller`}
            >
              {/* Image */}
              <div className="relative aspect-food overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={`${dish.name} at Rado's Lechon`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Best seller badge */}
                <div className="absolute top-4 left-4">
                  <div className="badge-bestseller">
                    <Star size={10} fill="currentColor" />
                    Best Seller
                  </div>
                </div>

                {/* Emoji */}
                <div className="absolute top-4 right-4 text-2xl">{dish.emoji}</div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3
                  className="font-cinzel font-bold text-cream mb-1.5"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {dish.name}
                </h3>
                <p
                  className="font-poppins text-cream/75 mb-4 leading-relaxed"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {dish.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-oswald font-bold text-gold" style={{ fontSize: 'var(--text-price)' }}>
                      {dish.price}
                    </span>
                    {dish.priceWithRice && (
                      <span className="font-poppins text-cream/60 text-xs ml-2">
                        / {dish.priceWithRice} w/ rice
                      </span>
                    )}
                  </div>
                  <div className="stars text-sm">★★★★★</div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base"
          >
            See Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
