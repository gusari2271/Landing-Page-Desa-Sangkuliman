import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Utensils, 
  Coffee, 
  ShoppingBag, 
  Home, 
  Sparkles, 
  Clock, 
  HelpCircle,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { culinaryData, siteConfig } from '../data/villageData';
import WhatsAppButton from './WhatsAppButton';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function CulinaryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 selection:bg-forest-900 selection:text-white">
      
      {/* 1. TOP NAV */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-semibold text-forest-900 hover:text-gold-600 transition-colors group text-sm"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Beranda</span>
        </Link>
        <WhatsAppButton
          destinationName="Kuliner & Oleh-Oleh Khas"
          variant="compact"
          label="Tanya WA"
        />
      </nav>

      {/* 2. HEADER HERO */}
      <header className="py-16 sm:py-24 bg-gradient-to-b from-forest-950 to-forest-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-300 text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GASTRONOMI & KRIYA LOKAL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Kuliner & Oleh-Oleh <br />
            <span className="italic font-light text-gold-200">Khas Sangkuliman</span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Menikmati cita rasa otentik masakan kampung nelayan, kue basah dan kering tradisional, racikan Kopi BMT, hingga cendera mata khas di ujung perkampungan.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* 3. IKON KULINER UTAMA: IWAK BASUMAP */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={culinaryData.iconic.photo}
                alt={culinaryData.iconic.title}
                className="w-full h-72 sm:h-84 object-cover"
                containerClassName="w-full h-full"
                caption="Iwak Basumap olahan ikan air tawar khas Danau Saguntur"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="px-3 py-1 rounded-full bg-gold-500 text-forest-950 text-[10px] font-bold uppercase tracking-wider">
                {culinaryData.iconic.category}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                {culinaryData.iconic.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                {culinaryData.iconic.description}
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  destinationName="Kuliner Iwak Basumap"
                  label="Pesan / Tanya Informasi Iwak Basumap"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 4. KUE BASAH TRADISIONAL */}
        <section className="space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
              RESEP TRADISI
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Kue Basah Tradisional
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {culinaryData.kueBasah.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft flex flex-col justify-between group hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="h-48 rounded-2xl overflow-hidden mb-4">
                    <ImageWithFallback
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-forest-950 mt-1 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. KUE KERING & OLEH-OLEH */}
        <section className="space-y-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
              OLEH-OLEH KHAS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Kue Kering & Camilan Renyah
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culinaryData.kueKering.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-stone-200 shadow-soft flex flex-col justify-between group hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="h-40 rounded-2xl overflow-hidden mb-3">
                    <ImageWithFallback
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest-950 mt-0.5 mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. DAFTAR ITEM YANG BELUM ADA DESKRIPSI (BADGE: DESKRIPSI SEGERA HADIR) */}
        <section className="space-y-6">
          <div className="border-t border-stone-200 pt-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
              PRODUK DESA DALAM PENDATAAN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Hasil Bumi & Olahan Khas Lainnya
            </h3>
            <p className="text-xs text-stone-500 font-light mt-1">
              Produk berikut tercatat sebagai potensi khas desa, detail deskripsi dan foto resmi sedang dalam proses verifikasi tim Pokdarwis BMT.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {culinaryData.pendingItems.map((item) => (
              <div
                key={item.id}
                className="bg-cream-100 rounded-3xl p-5 border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-2xl overflow-hidden mb-3">
                    <ImageWithFallback
                      src=""
                      alt={item.name}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-semibold mb-2">
                    <Clock className="w-3 h-3 text-amber-700" />
                    <span>Deskripsi segera hadir</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-forest-950">
                    {item.name}
                  </h4>
                  <p className="text-stone-500 text-xs font-light mt-1">
                    Kategori: {item.category}
                  </p>
                </div>
                {/* TODO: ISI DATA */}
                <div className="mt-4 pt-3 border-t border-stone-200/80">
                  <span className="text-[10px] text-stone-400 italic">
                    Pokdarwis BMT Sangkuliman
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. KEDAI BMT, MINUMAN, & SUVENIR */}
        <section className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-400 block">
                SENTRA KAMPUNG NELAYAN
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold">
                {culinaryData.kedaiBmt.name}
              </h3>
              <p className="text-gold-200 text-sm font-serif italic">
                "{culinaryData.kedaiBmt.motto}"
              </p>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
                {culinaryData.kedaiBmt.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Minuman Khas */}
              <div className="p-6 rounded-2xl bg-forest-900/80 border border-forest-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold">Minuman Khas</h4>
                    <p className="text-xs text-stone-300 font-light">Sajian segar di Kedai BMT</p>
                  </div>
                </div>
                {culinaryData.drinks.map((d, i) => (
                  <div key={i} className="pt-2 border-t border-forest-800">
                    <p className="font-semibold text-sm text-gold-300">{d.name}</p>
                    <p className="text-xs text-stone-300 font-light mt-0.5">{d.description}</p>
                  </div>
                ))}
              </div>

              {/* Suvenir & Cendera Mata */}
              <div className="p-6 rounded-2xl bg-forest-900/80 border border-forest-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold">Suvenir & Kerajinan</h4>
                    <p className="text-xs text-stone-300 font-light">Karya Pokdarwis & Warga</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-forest-800">
                  {culinaryData.souvenirs.map((s, i) => (
                    <div key={i} className="text-xs">
                      <span className="font-semibold text-gold-300">{s.name}: </span>
                      <span className="text-stone-300 font-light">{s.description}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. HOMESTAY SECTION (FAKTUAL + WHATSAPP CTA) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-card">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-900 mx-auto flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block">
              AKOMODASI WARGA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              {culinaryData.homestayInfo.title}
            </h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              {culinaryData.homestayInfo.description}
            </p>
            <div className="pt-3">
              <WhatsAppButton
                destinationName="Homestay Warga Sangkuliman"
                label="Tanyakan Ketersediaan Homestay via WhatsApp"
              />
            </div>
            <p className="text-[11px] text-stone-400 font-light">
              * Dikelola bersama warga dan Kedai BMT tanpa perantara.
            </p>
          </div>
        </section>

      </main>

    </div>
  );
}
