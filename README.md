# 🌿 Website Resmi Desa Wisata Sangkuliman

### _"The Magical of Sangkuliman" — The Living Heritage of Nature_

Kecamatan Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur

Website profil ekowisata modern, mewah, elegan, dan berbasis data otentik desa. Dibangun menggunakan **React 19**, **Vite**, **Tailwind CSS**, **Lucide React Icons**, dan **React Router DOM**, dengan konsep visual editorial travel aesthetic (_Playfair Display_ + _Plus Jakarta Sans_, palet cream `#FBF9F5` & forest green `#1B3B2B`, aksen gold, dan transisi halus).

---

## 🌟 Pembaruan & Fitur Utama

1. **100% Data Faktual & Terverifikasi**:
   - Seluruh konten bersumber langsung dari arsip dokumentasi resmi Desa Sangkuliman dan Pokdarwis BMT.
   - Tidak ada harga atau booking fiktif. Seluruh tombol diarahkan untuk konsultasi langsung via WhatsApp Pokdarwis BMT dengan pesan otomatis kontekstual.
   - Menyajikan sejarah relokasi 220 KK dari Desa Pela sejak 1986, peresmian 30 Mei 1990 oleh Mensos Prof. Haryati Soebadio, penataan seragam KKN Haryono, dan pelopor air bersih mandiri sejak 1988.

2. **Arsitektur Multi-Halaman Dinamis (React Router)**:
   - `/` : **Beranda (Landing Page)** lengkap dengan Hero, Pill Bar, Tentang & Sejarah Desa, Direktori Destinasi, Pengalaman Lokal, Siklus 3 Musim Danau, Wisata Bertanggung Jawab, Central Link Hub, dan Mitra Resmi.
   - `/destinasi/:slug` : **Halaman Detail Destinasi Editorial Dinamis** menggunakan sistem _Content Blocks_ (FullText, Split Zigzag, Gallery Carousel dengan Lightbox, Quick Info, Edukasi Alat Nelayan, dan Mitos/Legenda).
   - `/kuliner` : **Halaman Kuliner Tradisional & Oleh-Oleh Khas** (Iwak Basumap Danau Saguntur, kue basah Kikicak & Kalalapon, aneka kue kering, Kedai BMT, suvenir, dan info homestay warga).

3. **Komponen Konten Interaktif**:
   - **Galeri Carousel & Lightbox**: Carousel mandiri dengan tombol prev/next, dot indicators, navigasi keyboard panah kiri/kanan, gesture swipe di mobile, dan modal fullscreen lightbox.
   - **Image With Fallback**: Jika foto belum diunggah, layout tetap rapi dengan kartu placeholder gradasi forest green elegan dan ikon bertema alam.
   - **AI Chatbot Asisten Desa**: Menjawab pertanyaan seputar satwa Pesut Mahakam, Bekantan di RT 001, akses feri Liang Ulu, waktu terbaik berkunjung, kuliner, dan mengarahkan konsultasi jadwal/homestay ke WhatsApp.

---

## 🛠️ Cara Menjalankan Project

### 1. Instalasi Dependensi

```bash
npm install
```

### 2. Mode Pengembangan (Development)

```bash
npm run dev
```

Buka browser pada alamat `http://localhost:5173/`.

### 3. Build Produksi

```bash
npm run build
```

Hasil build siap saji tersimpan di folder `dist/`.

### 4. Pengecekan Kode (Linting)

```bash
npm run lint
```

---

## 📁 Struktur Folder & File

```
sangkuliman/
├── public/
│   ├── favicon.svg
│   └── images/                       # Direktori Foto Terstruktur per Destinasi
│       ├── hero/                     # Foto panorama latar Hero
│       ├── pesut-mahakam/            # Foto Pesut Mahakam & rakit apung
│       ├── tari-jepen/               # Foto Tari Jepen Sanggar Saguntur
│       ├── gunung-tallo/             # Foto pulau gundukan & Akar Jaraya
│       ├── tanjung-rappeh/           # Foto sunset & hamparan rumput kemarau
│       ├── tanjung-palla/            # Foto tanjung & gembala sapi kalang
│       ├── tanjung-hallat/           # Foto pulau tengah danau & alat nelayan
│       ├── pemukiman-1990/           # Foto rumah seragam, jalan ulin, air bersih
│       ├── luah-palla/               # Foto percabangan sungai & long boat
│       ├── luah-ulaman/              # Foto alat Sangga & sapi berenang
│       ├── luah-kijang/              # Foto sungai hutan & jebakan Reba
│       ├── danau-saguntur/           # Foto pohon penunggu 40m & keramba
│       ├── bekantan/                 # Foto kawanan bekantan jalan RT 001
│       ├── sport-tourism/            # Foto lapangan bola dataran tinggi
│       ├── kuliner/                  # Foto Iwak Basumap, kue basah & kering
│       └── kedai-bmt/                # Foto Kedai BMT, sahung, kopi, suvenir
├── src/
│   ├── components/
│   │   ├── ContentBlocks/
│   │   │   ├── FullTextBlock.jsx     # Blok teks narasi nyaman baca (max-w-3xl)
│   │   │   ├── SplitBlock.jsx        # Blok foto-teks zigzag dengan animasi scroll
│   │   │   ├── GalleryCarousel.jsx   # Carousel foto dengan modal Lightbox
│   │   │   ├── QuickInfoCard.jsx     # Ringkasan lokasi, akses, & aktivitas
│   │   │   ├── ResponsibleCard.jsx   # Kartu etika konservasi satwa & alam
│   │   │   ├── FishingGearCard.jsx   # Kartu edukasi alat tangkap tradisional
│   │   │   ├── LegendBlock.jsx       # Blok narasi dongeng Legenda Cakki
│   │   │   ├── WaterSeasonsBlock.jsx # Kartu 3 fase siklus air danau
│   │   │   └── ImageWithFallback.jsx # Gambar aman dengan placeholder elegan
│   │   ├── AboutHistory.jsx          # Seksi Sejarah & Statistik Pemukiman 1990
│   │   ├── CentralLinkHub.jsx        # Link Hub terpadu, tombol QR & Salin Tautan
│   │   ├── ChatbotWidget.jsx         # Widget asisten cerdas desa 24/7
│   │   ├── CtaBanner.jsx             # Banner kutipan sunset & WhatsApp CTA
│   │   ├── CulinaryPage.jsx          # Halaman /kuliner lengkap
│   │   ├── CuratedCategories.jsx     # Grid destinasi dengan filter tab
│   │   ├── DestinationDetail.jsx     # Template dinamis detail /destinasi/:slug
│   │   ├── Footer.jsx                # Footer resmi Pokdarwis BMT & identitas Kukar
│   │   ├── Hero.jsx                  # Hero section dengan koordinat & WhatsApp CTA
│   │   ├── Icons.jsx                 # Custom SVG icons media sosial
│   │   ├── LocalExperiences.jsx      # 6 Pengalaman nyata kampung nelayan
│   │   ├── Navbar.jsx                # Top glassmorphic bar & drawer mobile
│   │   ├── PartnersSection.jsx       # Mitra resmi & kelembagaan
│   │   ├── PillCategories.jsx        # Pill bar kategori utama desa
│   │   ├── ResponsibleTourism.jsx    # Seksi kode etik wisata bertanggung jawab
│   │   ├── ScrollToTop.jsx           # Auto scroll ke atas saat pindah rute
│   │   ├── SearchModal.jsx           # Modal pencarian instan destinasi & kuliner
│   │   ├── VideoModal.jsx            # Modal pemutar video YouTube profil desa
│   │   ├── BrochureModal.jsx         # Modal unduh E-Brochure PDF desa
│   │   └── WhatsAppButton.jsx        # Tombol WhatsApp terpusat pesan dinamis
│   ├── data/
│   │   └── villageData.js            # PUSAT DATA RESMI DESA (Teks, Kontak, Destinasi)
│   ├── App.jsx                       # Routing & Komponen Utama
│   ├── index.css                     # Tailwind utilities & font tokens
│   └── main.jsx                      # Entry point React
└── package.json
```

---

## 🔧 Panduan Pengelolaan & Pembaruan Konten

Seluruh data, nomor kontak, tautan media sosial, daftar destinasi, kuliner, dan FAQ chatbot tersimpan di satu file:
👉 `src/data/villageData.js`

### 1. Mengganti Nomor WhatsApp & Media Sosial

Buka `src/data/villageData.js` pada bagian `siteConfig`:

```javascript
export const siteConfig = {
  // Ganti dengan nomor WhatsApp resmi Pokdarwis BMT (gunakan kode negara 62 tanpa spasi/tanda +)
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",

  socials: {
    instagram: "https://www.instagram.com/pokdarwisbmt/",
    tiktok: "https://tiktok.com/@desawisatasangkuliman",
    youtube: "https://youtube.com/@desawisatasangkuliman",
    facebook: "https://facebook.com/desawisatasangkuliman",
  },
  ...
};
```

_Nomor WhatsApp ini otomatis terpasang pada seluruh tombol di website dengan pesan pemesanan/pertanyaan otomatis sesuai konteks halaman._

### 2. Cara Menaruh Foto di `public/images/`

Cukup simpan file foto Anda di dalam folder yang sesuai pada `public/images/{nama-folder}/`.
Standar penamaan file:

- `cover.jpg` : Foto cover utama (rasio landscape lebar, disarankan min. 1600x900px).
- `1.jpg`, `2.jpg`, `3.jpg`, dst. : Foto-foto dokumentasi untuk blok teks dan galeri carousel.
- Format yang didukung: `.jpg`, `.jpeg`, `.webp`, `.png`.

_Catatan: Jika foto belum diunggah, website secara otomatis menampilkan visual kartu placeholder gradasi forest green yang rapi dan elegan tanpa merusak tata letak._

### 3. Cara Menambah Destinasi Baru

Untuk menambahkan destinasi atau atraksi baru ke website, cukup tambahkan objek baru ke dalam array `destinations` di `src/data/villageData.js`:

```javascript
{
  slug: "nama-destinasi-baru", // Digunakan untuk alamat URL: /destinasi/nama-destinasi-baru
  name: "Nama Destinasi Lengkap",
  category: "Spot Alam / Budaya / Satwa",
  tagline: "Kalimat puitis atau moto keunikan tempat",
  bestTime: "Air pasang besar dan musim kemarau",
  cover: "/images/nama-folder/cover.jpg",
  summary: "Ringkasan 1-2 kalimat untuk kartu di Beranda.",
  blocks: [
    {
      type: "fulltext",
      title: "Judul Narasi Pengantar",
      text: "Teks pengantar yang nyaman dibaca dengan format paragraf penuh..."
    },
    {
      type: "split",
      imagePosition: "left", // 'left' atau 'right' (otomatis bergantian)
      images: ["/images/nama-folder/1.jpg"],
      title: "Kearifan Lokal di Spot Ini",
      text: "Uraian fakta, cerita kearifan lokal, atau keunikan alam...",
      caption: "Keterangan foto dokumentasi"
    },
    {
      type: "gallery",
      title: "Dokumentasi Foto Wisatawan",
      images: [
        "/images/nama-folder/1.jpg",
        "/images/nama-folder/2.jpg",
        "/images/nama-folder/3.jpg",
        "/images/nama-folder/4.jpg"
      ],
      caption: "Dokumentasi keindahan alam spot ini."
    },
    {
      type: "fulltext",
      title: "Pesan Pelestarian Lingkungan",
      text: "Ajakan menjaga kelestarian alam dan menjaga kebersihan sungai..."
    }
  ],
  quickInfo: {
    lokasi: "Posisi wilayah di Desa Sangkuliman",
    akses: "Ces ketinting / long boat atau jalan darat jembatan ulin",
    waktuTerbaik: "Pagi hari (06.30 - 09.00 WITA)",
    aktivitas: [
      "Aktivitas 1",
      "Aktivitas 2",
      "Aktivitas 3"
    ]
  }
}
```

_Setelah ditambahkan, destinasi baru akan langsung muncul di Beranda (CuratedCategories), dapat dicari di Search Modal, dan memiliki halaman detail dinamis otomatis di `/destinasi/nama-destinasi-baru`!_

---

## 📋 Daftar TODO Data & Foto yang Perlu Disiapkan

### 1. Data yang Perlu Diisi Pengelola (`// TODO: ISI DATA` di `villageData.js`):

- `siteConfig.whatsapp`: Nomor WhatsApp aktif pengurus Pokdarwis BMT.
- `siteConfig.socials`: URL akun resmi Instagram, TikTok, YouTube, dan Facebook jika ada pembaruan link.
- `culinaryData.pendingItems`:
  - **Buah Nyiur**: Deskripsi olahan/manfaat & foto produk.
  - **Madu Lebah Kelulut Saguntur**: Deskripsi khasiat, panen lebah kelulut & foto produk.
  - **Kue Kalalapon 1990**: Resep pembeda era 1990 & foto kue.
  - **Kue Kikicak 1990**: Resep pembeda era 1990 & foto kue.
- `culinaryData.homestayInfo`: Daftar nama pemilik homestay warga, jumlah kamar, dan kontak penginapan jika ingin ditampilkan secara rinci.

### 2. Foto yang Perlu Disiapkan per Folder (`public/images/`):

| Folder            | Kebutuhan Foto                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hero/`           | `cover.jpg` (Foto panorama udara desa / pemukiman terpadu / Danau Semayang)                                                                                               |
| `pesut-mahakam/`  | `cover.jpg`, `1.jpg`, `2.jpg` (Pesut menyemburkan air, tepi sungai, rakit apung)                                                                                          |
| `tari-jepen/`     | `cover.jpg`, `1.jpg`, `2.jpg` (Penari Sanggar Seni Saguntur BMT dengan busana adat)                                                                                       |
| `gunung-tallo/`   | `cover.jpg`, `1.jpg`, `2.jpg` (Tiga gundukan, gerbang Akar Jaraya, pohon purba)                                                                                           |
| `tanjung-rappeh/` | `cover.jpg`, `1.jpg`, `2.jpg` (Sunset Danau Semayang, padang rumput kemarau, pohon dalam air)                                                                             |
| `tanjung-palla/`  | `cover.jpg`, `1.jpg`, `2.jpg` (Tanjung 2 km, pohon tahan air, gembala sapi kalang)                                                                                        |
| `tanjung-hallat/` | `cover.jpg`, `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg` (Pulau tengah danau, plang nama, camping hammock, alat nelayan)                                                           |
| `pemukiman-1990/` | `cover.jpg`, `1.jpg`, `2.jpg`, `3.jpg` (Rumah panggung seragam, jalan jembatan ulin, instalasi air bersih hibah 2024)                                                     |
| `luah-palla/`     | `cover.jpg`, `1.jpg`, `2.jpg` (Percabangan sungai alami, long boat wisata, aksi gotong royong gulma)                                                                      |
| `luah-ulaman/`    | `cover.jpg`, `1.jpg` (Alat tangkap rakit Sangga, sapi berenang di tepi danau)                                                                                             |
| `luah-kijang/`    | `cover.jpg`, `1.jpg` (Sungai kecil dalam hutan, pagar ranting perangkap Reba)                                                                                             |
| `danau-saguntur/` | `cover.jpg`, `1.jpg`, `2.jpg` (Pohon penunggu danau 40m di tengah danau, keramba apung, perahu ulin)                                                                      |
| `bekantan/`       | `cover.jpg`, `1.jpg`, `2.jpg` (Kawanan bekantan di dahan pohon ujung jalan RT 001)                                                                                        |
| `sport-tourism/`  | `cover.jpg`, `1.jpg` (Lapangan sepak bola dataran tinggi, wisatawan bertanding bola)                                                                                      |
| `kuliner/`        | `iwak-basumap.jpg`, `kikicak.jpg`, `kalalapon.jpg`, `sampret.jpg`, `baulu.jpg`, `ruti-balok.jpg`, `kacang-sembunyi.jpg`, `cincin.jpg`, `kerupuk-ikan.jpg`, `kopi-bmt.jpg` |
| `kedai-bmt/`      | `baju-bmt.jpg`, `sahung.jpg`, `alat-nelayan.jpg` (Kedai BMT, topi sahung, suvenir baju)                                                                                   |

---

## 🌿 Identitas & Semangat Desa

> _"Jelajahi Nusantara • Singgahi Kutai Kartanegara • Kunjungi Desa Wisata Sangkuliman"_  
> **Dikelola oleh**: Kelompok Sadar Wisata Bertata Menata Tertata (Pokdarwis BMT) bersama Tim Desa Ramah Lingkungan  
> **Penanggung Jawab Dokumentasi & Sanggar Seni**: Rojali Lie
