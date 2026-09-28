// Data Mock Terpusat Desa Wisata Sangkuliman
// Mudah dikustomisasi dan dikelola oleh tim pengelola desa

export const villageInfo = {
  name: "Desa Wisata Sangkuliman",
  tagline: "The Living Heritage of Nature",
  subtitle: "Temukan harmoni keaslian alam pedesaan, kearifan lokal masyarakat, dan pengalaman wisata yang tak terlupakan.",
  locationName: "Sangkuliman, Paser, Kalimantan Timur, Indonesia",
  coordinates: "1.6842° S, 116.1428° E",
  contact: {
    whatsapp: "6281234567890", // Ganti dengan nomor WhatsApp resmi pengelola
    whatsappDisplay: "+62 812-3456-7890",
    email: "halo@desasangkuliman.id",
    address: "Kecamatan Paser Belengkong, Kabupaten Paser, Kalimantan Timur",
    mapsUrl: "https://maps.google.com/?q=Sangkuliman+Paser+Kalimantan+Timur",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127500!2d116.1428!3d-1.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDEnMDIuOSJTIDExNsKwMDgnMzQuMSJF!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid",
  },
  socials: {
    instagram: "https://www.instagram.com/pokdarwisbmt/",
    tiktok: "https://tiktok.com/@desawisatasangkuliman",
    youtube: "https://youtube.com/@desawisatasangkuliman",
    facebook: "https://facebook.com/desawisatasangkuliman",
  },
  brochureUrl: "#unduh-brosur",
  videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
};

// 1. Pill Discover Bar (Discover Sangkuliman)
export const discoverPills = [
  {
    id: "budaya",
    title: "Budaya & Tradisi",
    subtitle: "Kearifan leluhur yang hidup",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    icon: "Sparkles",
  },
  {
    id: "alam",
    title: "Wisata Alam & Sungai",
    subtitle: "Kesejukan sungai alami",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: "Waves",
  },
  {
    id: "kuliner",
    title: "Kuliner Khas",
    subtitle: "Citarasa otentik resep desa",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    icon: "Utensils",
  },
  {
    id: "edukasi",
    title: "Edukasi & Kriya",
    subtitle: "Seni anyaman & kebun organik",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    icon: "BookOpen",
  },
  {
    id: "homestay",
    title: "Homestay Asri",
    subtitle: "Kenyamanan ramah keluarga",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    icon: "Home",
  },
  {
    id: "pengalaman",
    title: "Pengalaman Lokal",
    subtitle: "Aktivitas bersama warga",
    image: "https://images.unsplash.com/photo-1500932334442-8761ee4810a7?auto=format&fit=crop&w=800&q=80",
    icon: "Users",
  },
];

// 2. Kategori Pilihan (Find What You Love in Sangkuliman)
export const curatedCategories = [
  {
    id: 1,
    category: "Tempat Menginap",
    subCategory: "Homestay Desa",
    title: "Homestay Pondok Tepian Alam",
    description: "Rumah kayu tradisional di kelilingi pepohonan rimbun dengan layanan ramah keluarga khas desa.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
    price: "Mulai Rp 250.000 / malam",
    tag: "Favorit Tamu",
    rating: "4.9",
  },
  {
    id: 2,
    category: "Warung & Kuliner",
    subCategory: "Kuliner Tradisional",
    title: "Dapur Rasa Rimba & Ikan Bakar Sungai",
    description: "Olahan ikan segar sungai Sangkuliman berpadu dengan sambal rempah daun lokal yang khas.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: "Mulai Rp 25.000 / porsi",
    tag: "Khas Desa",
    rating: "4.8",
  },
  {
    id: 3,
    category: "Aktivitas & Petualangan",
    subCategory: "Susur Sungai & Kano",
    title: "Eksplorasi Susur Sungai Jernih",
    description: "Mengarungi aliran sungai sejuk dengan perahu tradisional berpemandu lokal yang berpengalaman.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    price: "Paket Rp 75.000 / orang",
    tag: "Terpopuler",
    rating: "5.0",
  },
  {
    id: 4,
    category: "Spot Relaksasi",
    subCategory: "Ketenangan Alami",
    title: "Taman Bambu & Gazebo Tepian Air",
    description: "Sudut hening berlatar gemericik air dan hembusan angin untuk relaksasi dan meditasi santai.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    price: "Tiket Masuk Rp 10.000",
    tag: "Instagramable",
    rating: "4.9",
  },
  {
    id: 5,
    category: "Oleh-oleh & Kriya",
    subCategory: "Kerajinan Tangan",
    title: "Galeri Kriya Anyaman & Madu Hutan",
    description: "Produk kerajinan tangan berbahan rotan alami serta madu murni asli hutan Sangkuliman.",
    image: "https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?auto=format&fit=crop&w=800&q=80",
    price: "Mulai Rp 35.000",
    tag: "BUMDes",
    rating: "4.7",
  },
  {
    id: 6,
    category: "Agenda Budaya",
    subCategory: "Seni & Tradisi",
    title: "Pertunjukan Musik & Tari Sangkuliman",
    description: "Pagelaran seni tari sambut tamu dan alunan musik tradisional di balai pertemuan desa.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    price: "Sesuai Jadwal Event",
    tag: "Budaya",
    rating: "4.9",
  },
];

// 3. Local Experiences Grid (Experience Sangkuliman Like a Local)
export const localExperiences = [
  {
    id: 1,
    title: "Susur Sungai Fajar & Menikmati Kabut",
    category: "Wisata Air",
    time: "05.30 - 08.00 WITA",
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=800&q=80",
    description: "Menyusuri hulu sungai saat kabut pagi menyelimuti rimba hijau dengan hembusan angin sejuk.",
  },
  {
    id: 2,
    title: "Belajar Menganyam Rotan Bersama Pengrajin",
    category: "Workshop Kriya",
    time: "09.00 - 11.30 WITA",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b5ab8?auto=format&fit=crop&w=800&q=80",
    description: "Mempelajari teknik anyaman turun-temurun dan membawa pulang hasil karya buatan tangan sendiri.",
  },
  {
    id: 3,
    title: "Panen Sayur & Buah Organik Kebun Warga",
    category: "Agrowisata",
    time: "08.00 - 10.00 WITA",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    description: "Memetik hasil kebun segar langsung dari pohonnya bersama para petani desa yang ramah.",
  },
  {
    id: 4,
    title: "Masak Bareng Resep Warisan Nenek Moyang",
    category: "Wisata Kuliner",
    time: "11.30 - 14.00 WITA",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    description: "Meracik bumbu alami dan memasak santapan siang di dapur tungku kayu tradisional.",
  },
  {
    id: 5,
    title: "Sunset Tracking & Menatap Bukit Hijau",
    category: "Petualangan",
    time: "16.30 - 18.15 WITA",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "Berjalan santai melintasi perbukitan asri hingga menyaksikan matahari terbenam emas.",
  },
  {
    id: 6,
    title: "Malam Keakraban & Api Unggun Cerita Desa",
    category: "Malam Budaya",
    time: "19.30 - 21.30 WITA",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    description: "Duduk melingkar menikmati teh hangat, ubi bakar, dan kisah dongeng sejarah desa.",
  },
];

// 4. Central Link Hub (Akses Terpadu Satu Pintu)
export const linkHubItems = [
  {
    id: "wa-booking",
    title: "WhatsApp Reservasi & Paket Wisata",
    subtitle: "Konsultasi jadwal & pemesanan paket wisata langsung dengan pengelola",
    icon: "MessageSquareText",
    badge: "Respon Cepat",
    highlight: true,
    actionType: "link",
    url: `https://wa.me/${villageInfo.contact.whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Sangkuliman,%20saya%20ingin%20bertanya%20informasi%20paket%20wisata%20dan%20reservasi.`,
  },
  {
    id: "gmaps-route",
    title: "Petunjuk Arah & Google Maps",
    subtitle: "Titik koordinat resmi dan panduan rute navigasi menuju desa",
    icon: "MapPin",
    badge: "Navigasi",
    highlight: false,
    actionType: "link",
    url: villageInfo.contact.mapsUrl,
  },
  {
    id: "instagram",
    title: "Instagram Resmi @pokdarwisbmt",
    subtitle: "Update foto harian, galeri pengunjung, dan jadwal agenda terbaru",
    icon: "Instagram",
    badge: "Foto & Story",
    highlight: false,
    actionType: "link",
    url: villageInfo.socials.instagram,
  },
  {
    id: "tiktok",
    title: "TikTok Desa Wisata",
    subtitle: "Video reels estetis keindahan alam dan keseruan aktivitas desa",
    icon: "Video",
    badge: "Video Pendek",
    highlight: false,
    actionType: "link",
    url: villageInfo.socials.tiktok,
  },
  {
    id: "youtube",
    title: "YouTube Channel Desa Sangkuliman",
    subtitle: "Dokumenter lengkap budaya desa, susur sungai, dan wawancara sesepuh",
    icon: "Youtube",
    badge: "Dokumenter",
    highlight: false,
    actionType: "link",
    url: villageInfo.socials.youtube,
  },
  {
    id: "facebook",
    title: "Facebook Fanpage Desa Wisata",
    subtitle: "Komunitas pecinta wisata desa dan info kegiatan sosial",
    icon: "Facebook",
    badge: "Komunitas",
    highlight: false,
    actionType: "link",
    url: villageInfo.socials.facebook,
  },
  {
    id: "download-pdf",
    title: "Unduh E-Brochure & Panduan Wisata (PDF)",
    subtitle: "Buku saku digital lengkap: peta spot, tarif homestay, dan tips berkunjung",
    icon: "FileDown",
    badge: "Gratis Unduh",
    highlight: true,
    actionType: "download",
    url: "#unduh-brosur-pdf",
  },
];

// 5. Featured Partners & BUMDes
export const partnersList = [
  { name: "Pokdarwis Sangkuliman", role: "Kelompok Sadar Wisata", code: "POKDARWIS" },
  { name: "BUMDes Karya Lestari", role: "Badan Usaha Milik Desa", code: "BUMDES" },
  { name: "Paguyuban Homestay", role: "Akomodasi Warga", code: "HOMESTAY" },
  { name: "Kriya Anyam Rotan", role: "UMKM Kerajinan", code: "UMKM KRIYA" },
  { name: "Dinas Pariwisata Daerah", role: "Pembina Resmi", code: "DISPAR" },
  { name: "Komunitas Sahabat Alam", role: "Konservasi Sungai", code: "ECO-WARRIOR" },
];

// 6. Paket Wisata Pilihan untuk Booking Modal
export const tourPackages = [
  {
    id: "day-trip",
    name: "Paket Jelajah Sehari (Day Trip)",
    price: "Rp 150.000 / orang",
    duration: "1 Hari (08.00 - 17.00)",
    includes: ["Susur Sungai Perahu", "Makan Siang Khas Desa", "Tiket Semua Spot", "Pemandu Lokal"],
  },
  {
    id: "stay-experience",
    name: "Paket Live-in & Homestay (2D1N)",
    price: "Rp 450.000 / orang",
    duration: "2 Hari 1 Malam",
    includes: ["Homestay Tradisional", "3x Makan Resep Desa", "Susur Sungai & Agrowisata", "Workshop Anyaman", "Malam Keakraban"],
  },
  {
    id: "custom-group",
    name: "Paket Rombongan / Edukasi Komunitas",
    price: "Hubungi Admin (Custom)",
    duration: "Fleksibel",
    includes: ["Fasilitas Lengkap", "Ruang Pertemuan Balai", "Pertunjukan Seni Tradisional", "Katering Tradisional"],
  },
];

// 7. Data FAQ / Knowledge Base untuk AI Chatbot Widget
export const chatbotKnowledge = [
  {
    keywords: ["lokasi", "alamat", "arah", "dimana", "peta", "maps"],
    answer: "Desa Wisata Sangkuliman terletak di Kecamatan Paser Belengkong, Kabupaten Paser, Kalimantan Timur. Anda dapat mengaksesnya via jalur darat dengan waktu tempuh sekitar 30-40 menit dari pusat kota Tana Paser. Rute Google Maps tersedia di Pusat Informasi kami!",
  },
  {
    keywords: ["harga", "biaya", "paket", "tiket", "tarif", "bayar"],
    answer: "Tiket masuk kawasan mulai Rp 10.000. Untuk paket wisata: Day Trip (Rp 150.000/orang) dan Paket Live-in Homestay 2D1N (Rp 450.000/orang) sudah termasuk makan khas desa, pemandu, dan aktivitas susur sungai.",
  },
  {
    keywords: ["homestay", "menginap", "kamar", "hotel", "villa", "tidur"],
    answer: "Kami menyediakan Homestay asri rumah panggung kayu khas desa yang dikelola langsung oleh warga. Harga mulai Rp 250.000/malam dengan suasana sejuk dan sarapan olahan tradisional.",
  },
  {
    keywords: ["sungai", "susur", "perahu", "kano", "air"],
    answer: "Aktivitas Susur Sungai Sangkuliman menggunakan perahu tradisional dengan jaket pelampung dan didampingi pemandu lokal berpengalaman. Waktu terbaik adalah saat pagi hari (06.00-08.30) untuk menikmati suasana kabut alam yang menawan.",
  },
  {
    keywords: ["reservasi", "pesan", "booking", "hubungi", "kontak", "whatsapp", "wa"],
    answer: "Anda dapat memesan langsung melalui tombol 'Rencanakan Kunjungan' atau WhatsApp resmi pengelola di nomor +62 812-3456-7890. Tim kami siap membantu menyusun jadwal terbaik Anda!",
  },
  {
    keywords: ["makan", "kuliner", "menu", "warung", "ikan"],
    answer: "Kuliner andalan Sangkuliman adalah Ikan Bakar Rempah Sungai Segar, sayur pakis liar, sambal daun lokal, dan lalapan segar hasil kebun organik desa. Dijamin lezat dan otentik!",
  },
];
