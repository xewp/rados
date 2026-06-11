import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/siteData';

export default function Gallery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  const nextImage = () => setLightbox((prev) => (prev + 1) % GALLERY_IMAGES.length);

  const gridLayout = [
    'col-span-1 row-span-1',   // top-left small
    'col-span-1 row-span-2',   // top-center tall
    'col-span-1 row-span-1',   // top-right small
    'col-span-1 row-span-1',   // bottom-left small
    'col-span-1 row-span-1',   // bottom-center small
    'col-span-1 row-span-1',   // bottom-right small
  ];

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative overflow-hidden"
        aria-label="Photo Gallery"
        style={{ background: 'var(--charcoal)' }}
      >
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }} />

        <div className="section-padding max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <span className="font-oswald tracking-[0.3em] text-gold uppercase text-sm">Visual Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-cinzel font-black text-cream text-center mb-4"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            A Feast for
            <span className="block text-gradient-gold">the Eyes</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="section-divider w-full max-w-xs">
              <Flame size={16} className="text-gold" />
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {GALLERY_IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                onClick={() => openLightbox(i)}
                style={{ height: '240px', position: 'relative', borderRadius: '16px', overflow: 'hidden', display: 'block', cursor: 'pointer', border: 'none', padding: 0 }}
                className="focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal group"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="font-cinzel text-cream font-semibold text-sm">{img.caption}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl transition-all duration-400 pointer-events-none" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(27, 27, 27, 0.96)', backdropFilter: 'blur(16px)' }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-all duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full mx-16 rounded-2xl overflow-hidden shadow-warm-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightbox].src}
                alt={GALLERY_IMAGES[lightbox].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center"
                style={{ background: 'linear-gradient(to top, rgba(27,27,27,0.8), transparent)' }}>
                <p className="font-cinzel text-cream font-semibold">{GALLERY_IMAGES[lightbox].caption}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? 'bg-gold w-5' : 'bg-white/40'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
