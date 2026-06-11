import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import imgRado from '../assets/images/rado.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedDiv({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Memorial() {
  return (
    <section
      id="memorial"
      className="relative overflow-hidden section-padding text-cream"
      style={{
        background: 'linear-gradient(180deg, #1B1B1B 0%, #2A1A12 100%)',
        borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
      }}
      aria-label="Rado Memorial Tribute"
    >
      {/* Decorative Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'var(--gold)',
          filter: 'blur(120px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <AnimatedDiv className="relative group">
              {/* Outer Glow Frame */}
              <div className="absolute -inset-2 rounded-3xl opacity-35 blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-amber))' }} />
              
              {/* Main Frame */}
              <div 
                className="relative rounded-2xl overflow-hidden border-2 p-1.5 shadow-2xl max-w-sm sm:max-w-md"
                style={{ 
                  borderColor: 'rgba(212, 160, 23, 0.4)',
                  background: 'rgba(27, 27, 27, 0.85)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <img
                  src={imgRado}
                  alt="Rado Bautista - Founder of Rado's Lechon"
                  className="rounded-xl w-full h-auto object-cover aspect-[4/5] filter sepia-[15%] contrast-[1.05]"
                />
                <div className="absolute inset-x-2 bottom-2 p-4 bg-gradient-to-t from-black/80 via-black/45 to-transparent rounded-b-xl text-center">
                  <p className="font-cinzel text-gold font-bold text-sm tracking-wider">RADO BAUTISTA</p>
                  <p className="font-poppins text-cream/60 text-[10px] tracking-widest uppercase mt-0.5">Founder & Culinary Pioneer</p>
                </div>
              </div>
            </AnimatedDiv>
          </div>

          {/* Text Tribute Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
            <AnimatedDiv className="mb-2">
              <span className="font-oswald tracking-[0.3em] text-gold uppercase text-xs sm:text-sm">In Loving Memory</span>
            </AnimatedDiv>

            <AnimatedDiv delay={0.1} className="mb-4">
              <h2 className="font-cinzel font-black text-3xl sm:text-4xl text-cream tracking-wide">
                Rado Bautista
              </h2>
              <p className="font-oswald text-gold/80 text-sm sm:text-base tracking-widest mt-1">
                FEBRUARY 20, 1954 — NOVEMBER 22, 2022
              </p>
            </AnimatedDiv>

            {/* Glowing Divider */}
            <AnimatedDiv delay={0.15} className="mb-6 flex justify-center lg:justify-start">
              <div className="h-0.5 w-24 bg-gradient-to-r from-gold via-gold-amber to-transparent" />
            </AnimatedDiv>

            {/* Large Italic Quote */}
            <AnimatedDiv delay={0.2} className="relative mb-8 p-6 rounded-2xl border border-gold/10"
              style={{ background: 'rgba(212, 160, 23, 0.03)' }}>
              <Quote size={28} className="absolute -top-3 -left-3 text-gold/30" />
              <p className="font-poppins text-cream/90 text-sm sm:text-base italic leading-relaxed font-medium">
                "May kasabihan po tayo, nasa Diyos ang awa, nasa tao ang gawa, eh! nag hihingi ka ng awa ay tamad ka naman paanu ka aasenso?, kailangan po mag-sumikap ka sa sarili mo.."
              </p>
              <span className="block mt-3 text-right text-xs font-oswald text-gold uppercase tracking-wider">— Rado (Tikim TV Interview)</span>
            </AnimatedDiv>

            {/* Legacy Text */}
            <AnimatedDiv delay={0.3} className="space-y-4 font-poppins text-cream/70 text-sm leading-relaxed">
              <p>
                Rado founded Rado's Lechon in 1994 with a clear vision: to serve honest, flavorful Filipino comfort food through hard work and determination. His famous words from Tikim TV remind us that success comes to those who persevere.
              </p>
              <p>
                Although he passed away on November 22, 2022, his values, recipes, and legacy live on in Tondo, Manila, carried forward by his family with every steaming bowl of Tumbong Soup and crispy slice of Lechon Kawali.
              </p>
            </AnimatedDiv>
          </div>

        </div>
      </div>
    </section>
  );
}
