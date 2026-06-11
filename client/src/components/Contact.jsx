import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import { SITE_INFO } from '../data/siteData';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Contact Rado's Lechon"
      style={{ background: 'var(--lechon-brown)' }}
    >
      {/* Grain */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'var(--gold)', filter: 'blur(60px)' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'var(--gold)', filter: 'blur(60px)' }} />

      <div className="section-padding max-w-4xl mx-auto relative z-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold/80 uppercase text-sm">Ready to Order?</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="font-cinzel font-black text-cream mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Come Visit Us
          <span className="block text-gradient-gold">Tonight!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-poppins text-cream/75 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: 'var(--text-body)' }}
        >
          Crispy lechon, hot soup, and good vibes await you in the heart of Tondo.
          Open every night — come hungry, leave happy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={SITE_INFO.phoneHref}
            className="btn-primary text-base w-full sm:w-auto px-8 py-4"
            aria-label={`Call Rado's Lechon at ${SITE_INFO.phoneDisplay}`}
          >
            <Phone size={18} />
            Call {SITE_INFO.phoneDisplay}
          </a>
          <a
            href={SITE_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold text-cream border-2 border-cream/30 hover:border-cream hover:bg-cream/10 transition-all duration-300 w-full sm:w-auto justify-center"
            aria-label="Visit Rado's Lechon on Facebook"
          >
            <FacebookIcon size={18} />
            Follow on Facebook
          </a>
        </motion.div>

        {/* Quick Info Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-cream/20"
        >
          <div className="flex items-center gap-2 text-cream/70">
            <Clock size={15} className="text-gold" />
            <span className="font-poppins text-sm">Open Daily · {SITE_INFO.hours}</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-cream/20" />
          <div className="flex items-center gap-2 text-cream/70">
            <MapPin size={15} className="text-gold" />
            <span className="font-poppins text-sm">{SITE_INFO.address}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
