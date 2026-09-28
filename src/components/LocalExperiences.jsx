import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { localExperiences } from '../data/villageData';

export default function LocalExperiences({ onOpenReservation }) {
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
                PENGALAMAN LOKAL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
                Experience Sangkuliman <span className="italic font-light text-forest-800">Like a Local</span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Dari gemuruh riak perahu pagi hari, memetik sayuran segar di kebun organik bersama warga, hingga belajar menganyam kriya rotan. Sangkuliman menyajikan interaksi tulus yang akan selalu Anda kenang.
            </p>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:translate-x-1"
            >
              <span>Ikuti Pengalaman Desa</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>

            {/* Featured Portrait Photo Card (Matching left woman photo in Intaran Sanur) */}
            <div className="relative rounded-3xl overflow-hidden shadow-card mt-6 h-80 sm:h-96 group">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
                alt="Warga Lokal Desa Sangkuliman"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block mb-1">
                  KEARIFAN LOKAL
                </span>
                <p className="font-serif text-lg font-bold">Kehangatan Warga Yang Siap Menyambut Anda</p>
                <p className="text-xs text-stone-300 font-light mt-0.5">Senyum ramah, cerita tulus, dan kekeluargaan</p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Grid Collage Experiences */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {localExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 shadow-soft hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
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

                  {/* Time badge */}
                  <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-forest-800">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      {exp.time}
                    </span>
                    <span className="text-[11px] font-semibold text-gold-600 group-hover:text-forest-900 transition-colors">
                      Eksplor →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
