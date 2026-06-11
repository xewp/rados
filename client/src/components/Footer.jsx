import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import FacebookIcon from './icons/FacebookIcon';
import { SITE_INFO } from '../data/siteData';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Location', href: '#location' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="relative"
      style={{ background: 'var(--charcoal)' }}
    >
      {/* Wave separator */}
      <div className="overflow-hidden leading-none" style={{ height: '50px' }}>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            style={{ fill: 'var(--lechon-brown)' }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-cinzel font-black text-cream text-xl tracking-wide leading-tight">
                RADO'S LECHON
              </h2>
              <p className="font-oswald tracking-[0.3em] text-gold text-xs uppercase mt-0.5">
                ✦ Since 1994 ✦
              </p>
            </div>
            <p className="font-poppins text-cream/60 text-sm leading-relaxed mb-5">
              Authentic Filipino comfort food in the heart of Tondo, Manila. Serving with pride since 1994.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gold group"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Facebook"
              >
                <FacebookIcon size={16} className="text-cream group-hover:text-charcoal" />
              </a>
              <a
                href={SITE_INFO.phoneHref}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gold group"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label={`Call ${SITE_INFO.phoneDisplay}`}
              >
                <Phone size={16} className="text-cream group-hover:text-charcoal" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel font-bold text-cream text-sm mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-poppins text-cream/60 text-sm hover:text-gold transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cinzel font-bold text-cream text-sm mb-4 tracking-wider">Contact</h3>
            <div className="space-y-3">
              <a
                href={SITE_INFO.phoneHref}
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors group"
              >
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="font-poppins text-sm">{SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={SITE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
              >
                <FacebookIcon size={14} className="text-gold flex-shrink-0" />
                <span className="font-poppins text-sm">Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Hours & Location */}
          <div>
            <h3 className="font-cinzel font-bold text-cream text-sm mb-4 tracking-wider">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-cream/60 text-sm">Open Daily</p>
                  <p className="font-oswald font-semibold text-gold text-base">{SITE_INFO.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-cream/60 text-sm leading-relaxed">{SITE_INFO.address}</p>
                  <a
                    href={SITE_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-gold text-xs hover:text-gold-light transition-colors mt-1 inline-block"
                  >
                    View on Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="font-poppins text-cream/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Rado's Lechon. All rights reserved. · Est. 1994 in Tondo, Manila.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-poppins text-xs text-cream/60 hover:text-gold border border-white/10 hover:border-gold/40 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
