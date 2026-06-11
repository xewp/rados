import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Clock, MapPin, Flame } from 'lucide-react';
import { SITE_INFO, MENU_ITEMS } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const USP_ITEMS = [
  {
    icon: <Flame size={22} className="text-gold" />,
    title: "Secret Family Recipe",
    desc: "Perfected over 30+ years and passed down with pride",
  },
  {
    icon: <Heart size={22} className="text-gold" />,
    title: "Fresh Ingredients Daily",
    desc: "Locally sourced, freshly prepared every single day",
  },
  {
    icon: <Clock size={22} className="text-gold" />,
    title: "Cooked the Tondo Way",
    desc: "Traditional methods, authentic Filipino flavors",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="About Rado's Lechon"
      style={{ background: 'var(--cream)' }}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
        style={{ background: 'var(--gold)', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'var(--lechon-brown)', filter: 'blur(100px)', transform: 'translate(-30%, 30%)' }} />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <AnimatedSection className="text-center mb-4">
          <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">Our Story</span>
        </AnimatedSection>

        {/* Section Title */}
        <AnimatedSection delay={0.1} className="text-center mb-4">
          <h2
            className="font-cinzel font-black text-charcoal"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            30 Years of Authentic
            <span className="block text-gradient-gold">Filipino Flavor</span>
          </h2>
        </AnimatedSection>

        {/* Divider */}
        <AnimatedSection delay={0.15} className="flex justify-center mb-12">
          <div className="section-divider w-full max-w-xs">
            <span className="text-gold text-lg">🔥</span>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            {SITE_INFO.story.split('\n\n').map((para, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <p
                  className="font-poppins text-charcoal/80 leading-relaxed mb-5"
                  style={{ fontSize: 'var(--text-body)' }}
                >
                  {para}
                </p>
              </AnimatedSection>
            ))}

            {/* Mission */}
            <AnimatedSection delay={0.5}>
              <div className="mt-6 p-5 rounded-2xl border-l-4 border-gold"
                style={{ background: 'rgba(212, 160, 23, 0.06)' }}>
                <p className="font-cinzel text-lechon-brown font-semibold text-sm mb-2 uppercase tracking-wider">
                  Our Mission
                </p>
                <p className="font-poppins text-charcoal/75 leading-relaxed italic"
                  style={{ fontSize: 'var(--text-body)' }}>
                  "{SITE_INFO.mission}"
                </p>
              </div>
            </AnimatedSection>

            {/* Hours & Location */}
            <AnimatedSection delay={0.6}>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-charcoal/70">
                  <Clock size={16} className="text-gold flex-shrink-0" />
                  <span className="font-poppins text-sm">
                    <strong className="text-charcoal">Open Daily</strong> · {SITE_INFO.hours}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/70">
                  <MapPin size={16} className="text-gold flex-shrink-0" />
                  <span className="font-poppins text-sm">{SITE_INFO.address}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.25}>
              <div className="relative">
                {/* Main image */}
                <div className="rounded-3xl overflow-hidden shadow-warm-xl aspect-food relative">
                  <img
                    src={MENU_ITEMS[0].image}
                    alt="Crispy Lechon Kawali - Rado's signature dish"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 card-warm px-5 py-4 rounded-2xl shadow-warm-lg"
                >
                  <div className="font-cinzel font-black text-gold text-2xl sm:text-3xl">1994</div>
                  <div className="font-poppins text-charcoal/70 text-xs sm:text-sm">Est. in Tondo</div>
                </motion.div>

                {/* Floating stat */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 card-warm px-4 py-4 rounded-2xl shadow-warm-lg text-center"
                >
                  <div className="font-cinzel font-black text-lechon-brown text-xl">30+</div>
                  <div className="font-poppins text-charcoal/70 text-xs">Years Trusted</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {USP_ITEMS.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.3 + i * 0.1}>
              <div className="card-warm p-6 text-center group cursor-default">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-gold/20"
                  style={{ background: 'rgba(212, 160, 23, 0.1)' }}>
                  {item.icon}
                </div>
                <h3 className="font-cinzel font-bold text-charcoal mb-2"
                  style={{ fontSize: 'var(--text-h3)' }}>
                  {item.title}
                </h3>
                <p className="font-poppins text-charcoal/65"
                  style={{ fontSize: 'var(--text-sm)' }}>
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
