import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Flame } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

function StarRow({ count = 5 }) {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`f-${i}`} style={{ color: '#D4A017', fontSize: '14px' }}>★</span>
      ))}
      {hasHalf && (
        <span style={{
          background: 'linear-gradient(90deg, #D4A017 50%, rgba(212, 160, 23, 0.2) 50%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '14px',
          display: 'inline-block'
        }}>★</span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`e-${i}`} style={{ color: 'rgba(212, 160, 23, 0.2)', fontSize: '14px' }}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      style={{
        background: '#FDFAF4',
        borderLeft: '4px solid #D4A017',
        borderRadius: '16px',
        padding: '24px',
        width: '320px',
        flexShrink: 0,
        boxShadow: '0 4px 20px rgba(107,62,38,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <StarRow count={t.rating} />
        <Quote size={18} style={{ color: 'rgba(212,160,23,0.3)', flexShrink: 0 }} />
      </div>
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          color: 'rgba(27,27,27,0.8)',
          fontSize: '0.85rem',
          lineHeight: 1.7,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{t.review}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid #EDE5D5' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4A017, #C8790A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#1B1B1B',
            flexShrink: 0,
          }}
        >
          {t.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', fontWeight: 600, color: '#1B1B1B', fontSize: '13px', lineHeight: 1.2 }}>{t.name}</p>
          <p style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(27,27,27,0.5)', fontSize: '11px', marginTop: '2px' }}>Google Maps ✓</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Duplicate for seamless infinite loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Customer Reviews"
      style={{ background: 'var(--cream)' }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-20 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'var(--gold)', filter: 'blur(80px)', opacity: 0.05 }}
      />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">Google Reviews</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="font-cinzel font-black text-charcoal text-center mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          What Our Customers
          <span className="block text-gradient-gold">Are Saying</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="section-divider w-full max-w-xs">
            <Flame size={16} className="text-gold" />
          </div>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4].map(i => <span key={i} style={{ color: '#D4A017', fontSize: '20px' }}>★</span>)}
            <span style={{
              background: 'linear-gradient(90deg, #D4A017 50%, rgba(212, 160, 23, 0.2) 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '20px',
              display: 'inline-block'
            }}>★</span>
          </div>
          <span className="font-oswald font-bold text-3xl text-charcoal">4.5</span>
          <span className="font-poppins text-charcoal/60 text-sm">on Google Maps</span>
        </motion.div>
      </div>

      {/* ── Marquee Track ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative"
        style={{ paddingBottom: '4rem' }}
      >
        {/* Spotlight gradient — left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 'clamp(80px, 15vw, 200px)',
            background: 'linear-gradient(to right, var(--cream) 0%, transparent 100%)',
          }}
        />
        {/* Spotlight gradient — right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: 'clamp(80px, 15vw, 200px)',
            background: 'linear-gradient(to left, var(--cream) 0%, transparent 100%)',
          }}
        />

        {/* Scrolling track */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              width: 'max-content',
              animation: 'marqueeScroll 40s linear infinite',
              paddingLeft: '20px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; }}
            onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
