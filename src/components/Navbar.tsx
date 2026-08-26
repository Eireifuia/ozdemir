"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AIAssistantDrawer from './AIAssistantDrawer';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/tedaviler', label: 'Tedaviler' },
  { href: '/ozgecmis', label: 'Özgeçmiş' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'İletişim' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logonew.png"
                alt="Dr. Ömer Özdemir Logo"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <span className="font-serif text-lg text-ink">Dr. Ömer Özdemir</span>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-ink focus:outline-none"
                aria-label="Menüyü aç/kapat"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActivePath(link.href) ? 'text-mint' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setDrawerOpen(true)}
                className="ml-2 flex items-center gap-2 rounded-md bg-ink pl-2 pr-5 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-mint"
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
              mobileMenuOpen ? 'max-h-72 mt-4' : 'max-h-0'
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
            </div>
          </div>
        </div>
      </nav>

      <AIAssistantDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
