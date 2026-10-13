import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Leaf, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/villageData';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: isHomePage ? '#beranda' : '/' },
    { name: 'Tentang & Sejarah', href: isHomePage ? '#tentang' : '/#tentang' },
    { name: 'Pilihan Spot', href: isHomePage ? '#kategori' : '/#kategori' },
    { name: 'Pengalaman', href: isHomePage ? '#pengalaman' : '/#pengalaman' },
    { name: 'Musim', href: isHomePage ? '#musim' : '/#musim' },
    { name: 'Kuliner', isRoute: true, href: '/kuliner' },
    { name: 'Link Hub', href: isHomePage ? '#linkhub' : '/#linkhub' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3.5'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-forest-900 text-gold-400 shadow-md'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-forest-800'
              }`}
            >
              <Leaf className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <span
                className={`block font-serif text-lg sm:text-xl font-bold tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-forest-950' : 'text-white'
                }`}
              >
                Sangkuliman
              </span>
              <span
                className={`block text-[10px] tracking-[0.2em] uppercase font-medium ${
                  isScrolled ? 'text-stone-500' : 'text-stone-200'
                }`}
              >
                Desa Ekowisata • Kukar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium tracking-wide transition-all relative py-1 hover:text-gold-500 ${
                      isScrolled ? 'text-stone-700 hover:text-forest-900' : 'text-stone-100 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 hover:text-gold-500 ${
                    isScrolled ? 'text-stone-700 hover:text-forest-900' : 'text-stone-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Pencarian Destinasi"
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled
                  ? 'text-stone-600 hover:bg-stone-100 hover:text-forest-900'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* CTA Button: Informasi Lebih Lanjut */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-forest-900 text-white hover:bg-forest-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-forest-700/50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Informasi Lebih Lanjut</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              aria-label="Cari Destinasi"
              className={`p-2 rounded-full ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu Navigasi"
              className={`p-2 rounded-full ${
                isScrolled ? 'text-stone-900 bg-stone-100' : 'text-white bg-white/15'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-forest-950 text-stone-100 p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between border-b border-forest-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Desa Wisata Sangkuliman</h3>
                  <p className="text-xs text-stone-400">The Magical of Sangkuliman</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-forest-900 text-stone-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-serif tracking-wide py-2 text-stone-200 hover:text-gold-400 border-b border-forest-900/60"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif tracking-wide py-2 text-stone-200 hover:text-gold-400 border-b border-forest-900/60"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-forest-800">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-800" />
              <span>Informasi Lebih Lanjut via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
