import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ChevronDown, Flame } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={SITE_INFO.heroBg}
          alt="Rado's Lechon restaurant atmosphere"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />
      </motion.div>

      {/* Grain texture */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 mb-6"
          style={{ background: 'rgba(212, 160, 23, 0.12)' }}
        >
          <Flame size={14} className="text-gold" />
          <span className="font-oswald font-medium tracking-widest text-gold uppercase text-sm">
            Authentic Filipino Food
          </span>
          <Flame size={14} className="text-gold" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-cinzel font-black text-cream leading-tight mb-2"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          RADO'S
          <span className="block text-gradient-gold">LECHON</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(to right, transparent, #D4A017)' }} />
          <span className="font-oswald tracking-[0.4em] text-gold uppercase text-sm sm:text-base">
            Since 1994
          </span>
          <div className="h-px w-16 sm:w-24" style={{ background: 'linear-gradient(to left, transparent, #D4A017)' }} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-poppins text-cream/85 max-w-2xl mx-auto mb-4"
          style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
        >
          Tondo's most beloved lechon experience — where every bite tastes like home.
          Serving crispy Lechon Kawali, hearty soups, and authentic Filipino comfort food
          daily from <strong className="text-gold font-semibold">4:00 PM to 1:00 AM</strong>.
        </motion.p>

        {/* Address */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-poppins text-cream/60 text-sm mb-8"
        >
          📍 {SITE_INFO.address}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={SITE_INFO.phoneHref}
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto animate-pulse-gold"
            aria-label={`Call Rado's Lechon at ${SITE_INFO.phoneDisplay}`}
          >
            <Phone size={18} />
            Order Now — {SITE_INFO.phoneDisplay}
          </a>
          <button
            onClick={scrollToMenu}
            className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
            style={{ borderColor: 'rgba(212,160,23,0.7)', color: '#D4A017' }}
          >
            View Our Menu
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { num: '30+', label: 'Years Serving' },
            { num: '6', label: 'Signature Dishes' },
            { num: '❤️', label: 'Community Loved' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel font-black text-gold text-2xl sm:text-3xl">{stat.num}</div>
              <div className="font-poppins text-cream/70 text-xs sm:text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
