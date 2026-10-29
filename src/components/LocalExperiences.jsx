import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MessageCircle } from 'lucide-react';
import { localExperiences, getWhatsAppUrl } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function LocalExperiences() {
  return (
    <section id="pengalaman" className="py-16 sm:py-24 bg-cream-100 relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Large Feature Card */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block mb-2">
                PENGALAMAN NYATA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
                Experience Sangkuliman <span className="italic font-light text-forest-800">Like a Local</span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Merasakan denyut kehidupan kampung nelayan: duduk santai menanti semburan Pesut Mahakam di fajar hari, belajar memasang Rawai Pakal di tengah danau, hingga menikmati sepiring gurih Iwak Basumap hangat.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-1"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi Pengalaman Desa</span>
              </a>
            </div>

            {/* Featured Portrait Photo Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-card mt-6 h-80 sm:h-96 group">
              <ImageWithFallback
                src="/images/tanjung-hallat/cover.webp"
                alt="Kehangatan Masyarakat dan Nelayan Sangkuliman"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block mb-1">
                  KEARIFAN KAMPUNG NELAYAN
                </span>
                <p className="font-serif text-lg font-bold">Kehangatan Warga Yang Siap Menyambut Anda</p>
                <p className="text-xs text-stone-300 font-light mt-0.5">Senyum ramah, kearifan lestari, dan ketulusan hati</p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Grid Collage Experiences (Links to /destinasi/:slug) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {localExperiences.map((exp) => (
                <Link
                  key={exp.id}
                  to={`/destinasi/${exp.slug}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-44 overflow-hidden">
                      <ImageWithFallback
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-forest-900/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider">
                          {exp.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug line-clamp-2">
                        {exp.title}
                      </h3>
                      <p className="text-stone-500 text-xs font-light mt-1.5 line-clamp-2 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom link */}
                  <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-forest-800">
                      <Compass className="w-3.5 h-3.5 text-gold-600" />
                      Ekowisata
                    </span>
                    <span className="text-[11px] font-semibold text-gold-600 group-hover:text-forest-900 transition-colors">
                      Pelajari →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
