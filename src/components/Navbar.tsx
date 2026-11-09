"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react';
import AIAssistantDrawer from './AIAssistantDrawer';
import { clinics } from '@/data/clinics';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/tedaviler', label: 'Tedaviler' },
  { href: '/hakkinda', label: 'Hakkında' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [clinicsOpen, setClinicsOpen] = useState(false);
  const clinicsRef = useRef<HTMLDivElement>(null);

  // Klinikler paneli: dışarı tıklayınca, Esc ile ve sayfa değişince kapanır
  useEffect(() => {
    if (!clinicsOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (clinicsRef.current && !clinicsRef.current.contains(e.target as Node)) {
        setClinicsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setClinicsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [clinicsOpen]);

  useEffect(() => {
    setClinicsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/5 transition-all duration-300 ${
          scrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logonew.png"
                  alt="Dr. Ömer Özdemir Logo"
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <span className="font-serif text-lg text-ink whitespace-nowrap">Dr. Ömer Özdemir</span>
              </Link>
              <div ref={clinicsRef} className="relative hidden lg:block pl-4 border-l border-ink/10">
                <button
                  type="button"
                  onClick={() => setClinicsOpen((open) => !open)}
                  aria-expanded={clinicsOpen}
                  aria-haspopup="true"
                  aria-label="Klinikler ve telefon numaraları"
                  className="flex items-center gap-2 text-xs text-ink-soft hover:text-mint transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">Klinikler ve Telefon</span>
                  <span className="xl:hidden">Klinikler</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      clinicsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {clinicsOpen && (
                  <div className="absolute left-0 top-full mt-4 w-[22rem] rounded-3xl bg-white border border-ink/10 shadow-xl p-5 space-y-5">
                    {clinics.map((clinic) => (
                      <div key={clinic.id}>
                        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-mint mb-1">
                          {clinic.side}
                        </span>
                        <p className="font-serif text-base text-ink mb-1">{clinic.name}</p>
                        <p className="flex items-start gap-1.5 text-xs text-ink-soft leading-relaxed mb-3">
                          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                          {clinic.address}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <a
                            href={clinic.phoneHref}
                            className="inline-flex items-center gap-1.5 rounded-full bg-ink text-cream text-xs font-medium px-4 py-2 hover:bg-mint transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            {clinic.phone}
                          </a>
                          <a
                            href={clinic.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-ink/15 text-ink text-xs font-medium px-4 py-2 hover:border-mint hover:text-mint transition-colors"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={clinic.mapsSearchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-ink/15 text-ink text-xs font-medium px-4 py-2 hover:border-mint hover:text-mint transition-colors"
                          >
                            Harita
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-ink w-11 h-11 inline-flex items-center justify-center"
                aria-label="Menüyü aç/kapat"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 xl:gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    isActivePath(link.href) ? 'text-mint' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setDrawerOpen(true)}
                className="ml-2 flex items-center gap-2 whitespace-nowrap rounded-full bg-ink pl-2 pr-5 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-mint"
              >
                <span className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/Arise.jpg" alt="" fill style={{ objectFit: 'cover' }} />
                </span>
                AI Asistan
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? 'max-h-[44rem] mt-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-1 py-3 text-ink">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 px-3 rounded-lg ${
                    isActivePath(link.href) ? 'bg-mint-light text-mint' : 'hover:bg-ink/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDrawerOpen(true);
                }}
                className="mt-1 flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-medium text-cream"
              >
                <span className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/Arise.jpg" alt="" fill style={{ objectFit: 'cover' }} />
                </span>
                AI Asistan
              </button>
              <div className="mt-3 border-t border-ink/10 pt-4 space-y-4 px-3">
                {clinics.map((clinic) => (
                  <div key={clinic.id}>
                    <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-mint mb-0.5">
                      {clinic.side}
                    </span>
                    <p className="font-serif text-base text-ink">{clinic.name}</p>
                    <p className="text-xs text-ink-soft leading-relaxed mb-2">{clinic.address}</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={clinic.phoneHref}
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink text-cream text-xs font-medium px-4 py-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {clinic.phone}
                      </a>
                      <a
                        href={clinic.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-ink/15 text-ink text-xs font-medium px-4 py-2"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating AI assistant bubble */}
      <button
        onClick={() => setDrawerOpen((prev) => !prev)}
        aria-label={drawerOpen ? 'AI Asistanı kapat' : 'AI Asistan ile konuş'}
        className="fixed z-50 bottom-20 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-ink shadow-lg hover:bg-mint transition-all duration-200 hover:scale-105 flex items-center justify-center overflow-hidden"
      >
        {drawerOpen ? (
          <X className="w-6 h-6 text-cream" />
        ) : (
          <span className="relative w-full h-full rounded-full overflow-hidden">
            <Image src="/Arise.jpg" alt="AI Asistan" fill style={{ objectFit: 'cover' }} />
          </span>
        )}
      </button>

      <AIAssistantDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
