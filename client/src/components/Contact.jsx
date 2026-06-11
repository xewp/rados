import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone } from 'lucide-react';
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
      aria-label="Contact and Delivery Information"
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

      <div className="section-padding max-w-6xl mx-auto relative z-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="font-oswald tracking-[0.3em] text-gold/80 uppercase text-sm">How to Enjoy</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="font-cinzel font-black text-cream mb-4"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Ready to Taste
          <span className="block text-gradient-gold">the Tradition?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-poppins text-cream/75 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: 'var(--text-body)' }}
        >
          Whether you want to visit our physical store in Tondo or order from the comfort of your home, we have you covered.
        </motion.p>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Card 1: Dine-In & Takeout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl border border-cream/10 flex flex-col justify-between"
            style={{ background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(8px)' }}
          >
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl text-gold font-bold mb-4 flex items-center gap-2">
                🏢 Dine-In & Takeout
              </h3>
              <p className="font-poppins text-cream/80 text-sm mb-6 leading-relaxed">
                Visit our physical store to experience the authentic carinderia atmosphere, or call ahead to prepare your order.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-lg flex-shrink-0 mt-0.5">📍</div>
                  <div>
                    <h4 className="font-cinzel text-cream font-bold text-xs uppercase tracking-wider mb-0.5">Store Address</h4>
                    <p className="font-poppins text-cream/70 text-xs sm:text-sm leading-relaxed">{SITE_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-lg flex-shrink-0 mt-0.5">⏰</div>
                  <div>
                    <h4 className="font-cinzel text-cream font-bold text-xs uppercase tracking-wider mb-0.5">Operating Hours</h4>
                    <p className="font-poppins text-cream/70 text-xs sm:text-sm">{SITE_INFO.hours} (Open Daily)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-cream/10">
              <a
                href={SITE_INFO.phoneHref}
                className="btn-primary text-sm px-6 py-3.5 w-full sm:w-auto text-center justify-center flex items-center gap-2"
                aria-label={`Call ${SITE_INFO.phoneDisplay}`}
              >
                <Phone size={16} />
                Call {SITE_INFO.phoneDisplay}
              </a>
              <a
                href={SITE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-poppins font-semibold text-cream border border-cream/30 hover:border-cream hover:bg-cream/10 transition-all duration-300 w-full sm:w-auto justify-center text-sm"
                aria-label="Visit Facebook"
              >
                <FacebookIcon size={16} />
                Message Facebook
              </a>
            </div>
          </motion.div>

          {/* Card 2: Grab / Lalamove Delivery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl border border-cream/10 flex flex-col justify-between"
            style={{ background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(8px)' }}
          >
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl text-gold font-bold mb-4 flex items-center gap-2">
                🛵 Grab & Lalamove Delivery
              </h3>
              <p className="font-poppins text-cream/80 text-sm mb-6 leading-relaxed">
                Book a rider using <strong>Grab Assistant</strong> or <strong>Lalamove Pabili</strong> services to purchase and deliver your food hot.
              </p>
              
              <h4 className="font-cinzel text-cream font-bold text-xs uppercase tracking-wider mb-2">Booking Guide:</h4>
              <ol className="font-poppins text-cream/70 text-xs list-decimal pl-4 space-y-2 mb-6 leading-relaxed">
                <li>Choose <strong>Grab Assistant</strong> or <strong>Lalamove Pabili (Purchase Service)</strong>.</li>
                <li>Set pickup point to <strong>Rado's Lechon since 1994</strong> ({SITE_INFO.address}).</li>
                <li>Write the dishes you want to order in the rider instructions.</li>
                <li>Give the rider our contact: <strong>{SITE_INFO.phoneDisplay}</strong>.</li>
                <li>Pay the rider cash on delivery!</li>
              </ol>
            </div>

            <div className="p-4 rounded-2xl border border-cream/10 bg-cream/5 text-xs text-cream/60 font-poppins mt-auto">
              <span className="text-gold font-semibold uppercase block mb-1">Pricing Tip:</span>
              Single dishes are ₱130. Meals with garlic fried rice are ₱150. Riders can check our daily availability by calling before they order.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
