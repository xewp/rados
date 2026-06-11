import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink, Flame } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const INFO_CARDS = [
  {
    icon: <Clock size={22} className="text-gold" />,
    title: "Operating Hours",
    lines: [
      { label: "Monday – Sunday", value: SITE_INFO.hours },
      { label: "Open Daily", value: SITE_INFO.hoursNote },
    ],
  },
  {
    icon: <MapPin size={22} className="text-gold" />,
    title: "Our Location",
    lines: [
      { label: "Address", value: SITE_INFO.address },
      { label: "City", value: "Tondo, Manila" },
    ],
  },
  {
    icon: <Phone size={22} className="text-gold" />,
    title: "Get in Touch",
    lines: [
      { label: "Phone", value: SITE_INFO.phoneDisplay },
      { label: "Hours", value: `${SITE_INFO.hours} daily` },
    ],
    isPhone: true,
  },
];

export default function Location() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Location and Hours"
      style={{ background: 'var(--cream-dark)' }}
    >
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">Find Us</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="font-cinzel font-black text-charcoal text-center mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Visit Us in
          <span className="block text-gradient-gold">Tondo, Manila</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="section-divider w-full max-w-xs">
            <Flame size={16} className="text-gold" />
          </div>
        </motion.div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
              className="card-warm p-6"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(212, 160, 23, 0.1)' }}>
                {card.icon}
              </div>
              <h3 className="font-cinzel font-bold text-charcoal mb-3 text-base">{card.title}</h3>
              <div className="space-y-1.5">
                {card.lines.map((line) => (
                  <div key={line.label}>
                    <p className="font-poppins text-charcoal/50 text-xs">{line.label}</p>
                    {card.isPhone ? (
                      <a
                        href={SITE_INFO.phoneHref}
                        className="font-oswald font-semibold text-gold text-lg hover:text-gold-amber transition-colors"
                        aria-label={`Call ${SITE_INFO.phoneDisplay}`}
                      >
                        {line.value}
                      </a>
                    ) : (
                      <p className="font-poppins font-medium text-charcoal text-sm">{line.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map + Directions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          {/* Map Container */}
          <div className="rounded-3xl overflow-hidden shadow-warm-xl"
            style={{ height: 'clamp(280px, 50vw, 460px)' }}>
            <iframe
              title="Rado's Lechon Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0840555!2d120.9642421!3d14.6227372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b53c3bd8362d%3A0xe678c5fd2be169a!2sRado's%20Lechon%20since1994!5e0!3m2!1sen!2sph!4v1686000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(20%) saturate(85%) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing location of Rado's Lechon in Tondo, Manila"
            />
          </div>

          {/* Directions button */}
          <div className="text-center mt-6">
            <a
              href={SITE_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              aria-label="Get directions to Rado's Lechon on Google Maps"
            >
              <MapPin size={17} />
              Get Directions
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
