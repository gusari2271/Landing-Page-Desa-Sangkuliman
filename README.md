# 🌿 Landing Page Desa Wisata Sangkuliman

Landing page modern, mewah, elegan, dan responsif untuk **Desa Wisata Sangkuliman** (The Living Heritage of Nature). Dibangun menggunakan **React (Vite)**, **Tailwind CSS**, dan **Lucide React Icons**, dengan konsep visual editorial travel aesthetic terinspirasi dari referensi *Intaran Sanur*.

---

## ✨ Fitur & Keunggulan Utama

1. **Top Glassmorphic Navbar**:
   - Logo Desa Wisata Sangkuliman & Tagline.
   - Menu navigasi responsif dengan *drawer mobile*.
   - Pencarian instan spot wisata & tombol CTA "Rencanakan Kunjungan".
   - Efek transparan saat di atas dan solid *blur* saat di-scroll.

2. **Editorial Hero Section**:
   - Tipografi Serif klasik (*Playfair Display*) & Sans-serif modern (*Plus Jakarta Sans*).
   - Aksen tulisan tangan (*"Authentic, Calm, Alive"*).
   - Dua tombol aksi: *Jelajahi Desa* & *Tonton Video Profil* (dengan YouTube modal popup).
   - Tag titik koordinat geografis resmi desa.

3. **Pill Category Bar (Discover Sangkuliman)**:
   - Baris kategori visual interaktif: Budaya & Tradisi, Wisata Alam & Sungai, Kuliner Khas, Edukasi & Kriya, Homestay Asri, dan Pengalaman Lokal.

4. **Kategori Pilihan (Find What You Love in Sangkuliman)**:
   - 6 Grid Card foto wisata dengan filter tab dinamis (Homestay, Kuliner, Susur Sungai, Spot Alam, Kerajinan, Agenda Budaya).
   - Modal detail spot lengkap dengan estimasi harga dan tombol konsultasi WhatsApp.

5. **Local Experiences Grid (Experience Sangkuliman Like a Local)**:
   - Kolom narasi kearifan warga desa berpadu dengan kolase 6 foto aktivitas lokal.

6. **Dedicated Central Link Hub (Satu Pintu Akses Terpadu - Solusi Notulen)**:
   - Menyelesaikan masalah link yang sering tersebar.
   - Tombol akses instan: WhatsApp Reservasi, Rute Google Maps, Akun Resmi Instagram, TikTok, YouTube, Facebook, serta Unduh E-Brochure PDF.
   - Fitur *Salin Tautan* & *Pop-up Scan Kode QR*.

7. **Mitra & Dukungan (Featured Partners & BUMDes)**:
   - Deretan logo dan kartu mitra pendukung: Pokdarwis, BUMDes Karya Lestari, Paguyuban Homestay, UMKM Kriya Rotan, Dispar, dan Sahabat Alam.

8. **Bottom CTA Banner**:
   - Panorama golden-hour dengan kutipan *"Tenangnya alam, hangatnya sambutan warga."* dan tombol booking cepat.

9. **Slot Integrasi AI Chatbot (Tanya AI Desa)**:
   - Bubble mengambang di pojok kanan bawah dengan asisten cerdas 24/7 simulator tanya jawab seputar desa.
   - Dilengkapi panduan & slot penyisipan kode skrip chatbot pihak ketiga (Chatbase, Chatling, Tidio, Dify).

---

## 🛠️ Panduan Menjalankan Project

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan di Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:5173/`.

### 3. Build untuk Produksi
```bash
npm run build
```

---

## 📁 Struktur Folder & File

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Glassmorphic Sticky Header
│   │   ├── Hero.jsx              # Panoramic Hero & Video CTA
│   │   ├── PillCategories.jsx    # Discover Sangkuliman Pill Grid
│   │   ├── CuratedCategories.jsx # 6 Card Highlights & Filter Tabs
│   │   ├── LocalExperiences.jsx  # Experience Like a Local Collage
│   │   ├── CentralLinkHub.jsx    # Pusat Informasi & Link Tree Terpadu
│   │   ├── PartnersSection.jsx   # Mitra Resmi & BUMDes
│   │   ├── CtaBanner.jsx         # Bottom Sunset CTA Banner
│   │   ├── Footer.jsx            # Footer Lengkap & Media Sosial
│   │   ├── ChatbotWidget.jsx     # AI Chatbot Widget & Integrasi Slot
│   │   ├── Icons.jsx             # Custom Brand SVG Icons
│   │   ├── ReservationModal.jsx  # Form Reservasi Auto-WA
│   │   ├── VideoModal.jsx        # Modal Video Profil YouTube
│   │   ├── SearchModal.jsx       # Modal Pencarian Cepat
│   │   ├── BrochureModal.jsx     # Modal Unduh E-Brochure
│   │   └── SpotDetailModal.jsx   # Modal Detail Spot Wisata
│   ├── data/
│   │   └── villageData.js        # Data Mock Terpusat (Mudah Diedit)
│   ├── App.jsx                   # Komponen Utama
│   ├── index.css                 # Styling Tailwind & Custom Theme
│   └── main.jsx                  # Entry Point React
├── index.html                    # HTML Header & Google Fonts
├── tailwind.config.js            # Konfigurasi Palet Warna & Tipografi
└── package.json
```

---

## 🤖 Panduan Integrasi AI Chatbot Pihak Ketiga (Chatbase / Chatling / Tidio)

Buka file `src/components/ChatbotWidget.jsx`:
1. Ubah variabel `USE_EXTERNAL_SCRIPT = true;`
2. Masukkan URL skrip atau script tag dari provider AI Chatbot Anda.
3. Anda juga dapat menggunakan chatbot bawaan yang sudah terhubung dengan data tanya jawab Desa Wisata Sangkuliman.

---

## 📝 Mengubah Data & Konten Desa

Seluruh teks, nomor WhatsApp, tautan sosial media, foto, daftar homestay, harga paket wisata, dan FAQ tersimpan rapi di:
👉 `src/data/villageData.js`
Cukup ubah data pada file tersebut tanpa perlu membongkar struktur kode komponen.
