import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import { SITE_INFO } from '../data/siteData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
              aria-label="Rado's Lechon - Home"
            >
              <div className="flex flex-col leading-none">
                <span
                  className="font-cinzel font-black text-charcoal tracking-wide transition-colors group-hover:text-gold-dark"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)' }}
                >
                  RADO'S LECHON
                </span>
                <span className="font-oswald text-gold tracking-[0.25em] uppercase"
                  style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}>
                  ✦ SINCE 1994 ✦
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 font-poppins font-medium text-sm transition-colors duration-200 rounded-full
                    ${activeSection === link.href.slice(1)
                      ? 'text-gold-dark'
                      : 'text-charcoal hover:text-gold-dark'
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-gold/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-lechon-brown/30 text-lechon-brown font-poppins font-medium text-sm hover:bg-lechon-brown hover:text-cream transition-all duration-300"
                aria-label="Visit Rado's Lechon on Facebook"
              >
                <FacebookIcon size={14} />
                Facebook
              </a>
              <a
                href={SITE_INFO.phoneHref}
                className="btn-primary text-sm px-5 py-2.5"
                aria-label={`Call Rado's Lechon at ${SITE_INFO.phoneDisplay}`}
              >
                <Phone size={14} />
                Order Now
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} className="text-charcoal" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} className="text-charcoal" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden"
            >
              <div className="mx-4 rounded-2xl shadow-warm-xl overflow-hidden"
                style={{ background: 'rgba(253, 250, 244, 0.98)', backdropFilter: 'blur(20px)' }}>
                <nav className="p-6" aria-label="Mobile navigation">
                  <div className="flex flex-col gap-1">
                    {NAV_LINKS.map((link, i) => (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleNavClick(link.href)}
                        className={`text-left px-4 py-3 rounded-xl font-poppins font-medium transition-all duration-200
                          ${activeSection === link.href.slice(1)
                            ? 'bg-gold/15 text-gold-dark font-semibold'
                            : 'text-charcoal hover:bg-cream-dark'
                          }`}
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-cream-dark flex flex-col gap-3">
                    <a
                      href={SITE_INFO.phoneHref}
                      className="btn-primary justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone size={16} />
                      Call Us: {SITE_INFO.phoneDisplay}
                    </a>
                    <a
                      href={SITE_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <FacebookIcon size={16} />
                      Follow on Facebook
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
