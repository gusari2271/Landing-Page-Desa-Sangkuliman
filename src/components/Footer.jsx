import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MessageSquare, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/villageData';
import { InstagramIcon, YoutubeIcon, FacebookIcon, TikTokIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-stone-300 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-900/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center border border-forest-700">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wider text-white uppercase">
                  Sangkuliman
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">
                  Desa Ekowisata • Kutai Kartanegara
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Desa Wisata Sangkuliman merupakan pulau dataran tinggi diapit 2 sungai dan 2 danau dengan kekayaan satwa Pesut Mahakam dan Bekantan, pemukiman terpadu sejak 1990, serta kearifan tradisi nelayan yang asri.
            </p>

            {/* Hashtag Identitas Desa */}
            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-semibold text-gold-300/90">
              {siteConfig.hashtags.map((tag, idx) => (
                <span key={idx} className="bg-forest-900/80 px-2.5 py-1 rounded-md border border-forest-800">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-stone-300 flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-stone-300 flex items-center justify-center transition-all"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-stone-300 flex items-center justify-center transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-stone-300 flex items-center justify-center transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-forest-900 hover:bg-emerald-600 hover:text-white text-stone-300 flex items-center justify-center transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-stone-400">
              <li><a href="/#beranda" className="hover:text-gold-300 transition-colors">Beranda Utama</a></li>
              <li><a href="/#tentang" className="hover:text-gold-300 transition-colors">Sejarah Pemukiman 1990</a></li>
              <li><a href="/#kategori" className="hover:text-gold-300 transition-colors">Direktori Destinasi</a></li>
              <li><a href="/#musim" className="hover:text-gold-300 transition-colors">Tiga Musim Danau</a></li>
              <li><Link to="/kuliner" className="hover:text-gold-300 transition-colors">Kuliner & Kedai BMT</Link></li>
              <li><a href="/#linkhub" className="hover:text-gold-300 transition-colors">Pusat Link Hub Resmi</a></li>
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">Sekretariat Pengelola</h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-light text-stone-400">
              <p className="font-medium text-gold-300">
                {siteConfig.manager.pokdarwis}
              </p>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteConfig.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>© {new Date().getFullYear()} Desa Wisata Sangkuliman. Dikelola oleh Pokdarwis BMT & Tim Desa Ramah Lingkungan.</p>
          <div className="flex items-center gap-1">
            <span>The Magical of Sangkuliman</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-current inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
