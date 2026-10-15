import { Building, Droplets, Sparkles, ArrowRight } from 'lucide-react';
import { villageStats } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';
import GalleryCarousel from './ContentBlocks/GalleryCarousel';
import { Link } from 'react-router-dom';

export default function AboutHistory() {
  const historyPhotos = [
    "/images/pemukiman-1990/coverpemukiman.png",
    "/images/pemukiman-1990/1.jpg",
    "/images/pemukiman-1990/2.png",
    "/images/pemukiman-1990/3.jpg",
  ];

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-forest-50/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>LATAR BELAKANG & SEJARAH DESA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
            Menelusuri Jejak <br />
            <span className="italic font-light text-forest-800">The Magical of Sangkuliman</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Kisah keteguhan 220 kepala keluarga berpindah menuju dataran tinggi bebas banjir, hingga bertransformasi menjadi desa ekowisata percontohan dengan tata ruang rapi dan kemandirian air bersih sejak 1988.
          </p>
        </div>

        {/* 4/6 STATISTIK GEOGRAFIS FAKTUAL DESA */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {villageStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-cream-100 rounded-3xl p-5 border border-stone-200/80 shadow-soft text-center group hover:-translate-y-1 transition-transform"
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 block mb-1 group-hover:text-gold-600 transition-colors">
                {stat.value}
              </span>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-forest-950">
                {stat.label}
              </h3>
              <p className="text-[11px] text-stone-500 font-light mt-1 line-clamp-2">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FULLTEXT NARASI SEJARAH UTAMA */}
        <div className="max-w-4xl mx-auto bg-cream-100/60 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-16 space-y-6 text-stone-700 font-sans text-sm sm:text-base leading-relaxed font-light">
          
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Dari Relokasi Pela Baru 1986 Menuju Desa Ekowisata 2025
              </h3>
              <p className="text-xs text-stone-500">
                Arsip Sejarah Pemukiman Terpadu Desa Sangkuliman
              </p>
            </div>
          </div>

          <p className="text-justify sm:text-left">
            Sebelum dikenal sebagai Desa Sangkuliman, wilayah ini merupakan hasil perpindahan penduduk dari Desa Pela ke wilayah baru yang dinamakan <strong>Desa Pela Baru</strong>. Wilayah ini lahir dari program permukiman terpadu yang dirancang pemerintah sejak 1986 dan dijalankan pada tahun 1987. Faktor utama diadakannya relokasi adalah kondisi lingkungan di desa lama yang kerap dilanda bencana banjir, sehingga 220 kepala keluarga sepakat dipindahkan menuju dataran tinggi yang aman.
          </p>

          <p className="text-justify sm:text-left">
            Proses relokasi bersejarah ini dipimpin langsung oleh <strong>almarhum M. Ainie</strong> selaku Petinggi Desa saat itu atas usulan pemerintah. Pembangunan awal dimulai pada tahun 1986 dengan dana awal Rp 600.000 untuk 15 unit rumah pertama, kemudian dilanjutkan dengan penambahan 45 unit rumah berikutnya. Penataan tata letak pemukiman dirancang secara khusus oleh <strong>Haryono</strong>, seorang mahasiswa peserta Kuliah Kerja Nyata (KKN), sehingga ukuran kapling dan posisi setiap rumah seragam menghadap jalan, melahirkan desa yang tertata rapi, bersih, dan berstruktur teratur.
          </p>

          <p className="text-justify sm:text-left">
            Puncaknya, pada <strong>30 Mei 1990</strong>, pemukiman terpadu ini diresmikan secara kenegaraan oleh <strong>Menteri Sosial RI Prof. Dr. Haryati Soebadio</strong>. Sempat bernama Nusa Indah sebagai desa persiapan, wilayah ini kemudian resmi menyandang nama Desa Sangkuliman pada pemekaran tahun 2012. Dalam pemekaran tersebut, Bupati Kutai Kartanegara <strong>Rita Widyasari</strong> menetapkan batas administratif serta menyematkan nama jalan dan gang "Nusa Indah" sebagai penghormatan abadi terhadap identitas awal desa.
          </p>

          {/* Callout Air Bersih 1988 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-forest-900 text-white flex items-start gap-4">
            <Droplets className="w-6 h-6 text-gold-400 shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-sm sm:text-base text-gold-200">
                Pelopor Pengelolaan Air Bersih Mandiri Sejak 1988
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                Tahun 1988, Desa Sangkuliman menorehkan prestasi sebagai satu-satunya desa di Kecamatan Kota Bangun yang berhasil mengelola fasilitas air bersih mandiri untuk 220 KK, yang terus dipertahankan hingga hadirnya fasilitas instalasi air bersih bantuan hibah Pemprov Kaltim TA 2024.
              </p>
            </div>
          </div>

          <div className="pt-2 text-right">
            <Link
              to="/destinasi/pemukiman-1990"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors group"
            >
              <span>Baca Selengkapnya Kisah Pemukiman 1990</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* BLOK ZIGZAG FOTO & CAROUSEL */}
        <div className="space-y-12">
          
          {/* Zigzag 1: Foto Udara Pemukiman & Keteraturan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-card">
              <ImageWithFallback
                src="/images/pemukiman-1990/coverpemukiman.png"
                alt="Foto udara pemukiman terpadu Desa Sangkuliman yang rapi dan seragam"
                priority={true}
                className="w-full h-80 sm:h-96 object-cover"
                // caption="Keteraturan tata letak rumah berkat rancangan KKN Haryono 1987"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 block">
                TATA RUANG BERSEJARAH
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                Harmoni Rumah Panggung & Pekarangan Asri
              </h3>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Menyusuri jalan jembatan ulin semenisasi di Desa Sangkuliman menghadirkan kedamaian visual. Setiap rumah kayu dibangun dengan ukuran seragam berhiaskan pekarangan bunga warna-warni, mencerminkan ketertiban dan kegotongroyongan warga yang terjaga puluhan tahun.
              </p>
            </div>
          </div>

          {/* Zigzag 2: Galeri Carousel bila > 3 foto */}
          <GalleryCarousel
            images={historyPhotos}
            title="Galeri Dokumentasi Pemukiman Terpadu 1990"
            caption="Dokumentasi rumah kayu warga, instalasi air bersih hibah 2024, jalan semenisasi, dan suasana pemukiman."
          />

        </div>

      </div>
    </section>
  );
}
