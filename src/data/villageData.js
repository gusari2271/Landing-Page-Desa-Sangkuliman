/**
 * DATA DESA WISATA SANGKULIMAN (DATA RESMI & TERVERIFIKASI)
 * Kecamatan Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur
 * 
 * Pengelola: Pokdarwis "Bertata Menata Tertata" (BMT) & Tim Desa Ramah Lingkungan
 * Penanggung Jawab Sanggar / Dokumentasi: Rojali Lie
 * 
 * CATATAN PENGELOLA:
 * - Seluruh data di file ini disesuaikan dengan profil dan arsip resmi desa.
 * - Jika ada data yang bertanda "// TODO: ISI DATA", silakan lengkapi nilainya saat data resmi sudah tersedia.
 * - Tidak ada harga/booking statis, semua konsultasi langsung diarahkan ke WhatsApp resmi pengelola.
 */

// ==========================================
// 1. KONFIGURASI SITUS & IDENTITAS DESA
// ==========================================
export const siteConfig = {
  name: "Desa Wisata Sangkuliman",
  categoryName: "Desa Ekowisata",
  nickname: "The Magical of Sangkuliman",
  tagline: "The Living Heritage of Nature",
  subtitle: "Pulau unik di dataran tinggi yang diapit 2 sungai, 2 danau, dan dihuni 2 satwa langka Pesut Mahakam serta Bekantan.",
  invitation: "Jelajahi Nusantara • Singgahi Kutai Kartanegara • Kunjungi Desa Wisata Sangkuliman",
  hashtags: [
    "Desa Ekowisata",
    "Kampung Nelayan",
    "Pemukiman Terpadu 1990",
    "Desa Lestari",
    "Desa Ramah Lingkungan",
    "Keragaman Hayati"
  ],
  geographySummary: "Desa berbentuk pulau dataran tinggi yang diapit 2 sungai (Sungai Mahakam & anak Sungai Mahakam), 2 danau (Danau Saguntur & Danau Semayang), 4 luah (Palla, Caki, Kijang, Ulaman), 4 teluk (Mentaba, Garam, Kayu Pagat, Kalan Malang), 3 tanjung (Rappeh, Palla, Hallat), serta pulau penjaga kampung Gunung Tallo.",
  location: {
    village: "Desa Sangkuliman",
    district: "Kecamatan Kota Bangun",
    regency: "Kabupaten Kutai Kartanegara",
    province: "Kalimantan Timur",
    fullAddress: "Desa Sangkuliman, Kecamatan Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur",
    coordinatesDisplay: "Sangkuliman, Kota Bangun, Kutai Kartanegara",
    mapsUrl: "https://maps.google.com/?q=Sangkuliman+Kota+Bangun+Kutai+Kartanegara",
  },
  // SATU SUMBER NOMOR WHATSAPP UNTUK SELURUH WEBSITE
  // TODO: ISI DATA dengan nomor WhatsApp resmi Pokdarwis BMT (contoh: 6281234567890)
  whatsapp: "62XXXXXXXXXXX",
  whatsappDisplay: "+62 XXX-XXXX-XXXX",
  email: "pokdarwis.bmt.sangkuliman@gmail.com", // // TODO: ISI DATA bila ada email resmi
  socials: {
    // TODO: ISI DATA bila akun sosial media resmi diperbarui
    instagram: "https://www.instagram.com/pokdarwisbmt/",
    tiktok: "https://tiktok.com/@desawisatasangkuliman",
    youtube: "https://youtube.com/@desawisatasangkuliman",
    facebook: "https://facebook.com/desawisatasangkuliman",
  },
  manager: {
    pokdarwis: "Kelompok Sadar Wisata Bertata Menata Tertata (Pokdarwis BMT)",
    environmentalTeam: "Tim Desa Ramah Lingkungan",
    documentationLead: "Rojali Lie",
  },
  access: [
    {
      title: "Jalur Transportasi Air",
      description: "Menyusuri keindahan sungai dan danau menggunakan perahu long boat atau ces ketinting tradisional.",
      vehicles: "Long boat, Ces ketinting"
    },
    {
      title: "Jalur Penyeberangan Feri & Darat",
      description: "Melalui penyeberangan Desa Liang Ulu menaiki kapal feri, dilanjutkan melintasi badan jalan jembatan ulin semenisasi yang nyaman dilalui sepeda motor dan mobil.",
      note: "Pengunjung juga dapat menyeberang membawa sepeda santai."
    }
  ],
  bestTime: "Saat air pasang besar dan musim kemarau.",
  heroImage: "/images/hero/cover.jpg",
  videoEmbed: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
};

// Kompatibilitas mundur untuk komponen lama yang membaca villageInfo
export const villageInfo = {
  ...siteConfig,
  contact: {
    whatsapp: siteConfig.whatsapp,
    whatsappDisplay: siteConfig.whatsappDisplay,
    email: siteConfig.email,
    address: siteConfig.location.fullAddress,
    mapsUrl: siteConfig.location.mapsUrl,
  }
};

/**
 * Helper untuk membuat URL WhatsApp dengan pesan dinamis kontekstual
 */
export const getWhatsAppUrl = (destinationName = "") => {
  const baseNumber = siteConfig.whatsapp;
  const message = destinationName
    ? `Halo, saya ingin mendapat informasi lebih lanjut tentang ${destinationName} di Desa Wisata Sangkuliman.`
    : `Halo Pengelola Pokdarwis BMT Desa Wisata Sangkuliman, saya ingin mendapat informasi lebih lanjut mengenai kunjungan wisata.`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
};

// ==========================================
// 2. STATISTIK DESA (FAKTUAL)
// ==========================================
export const villageStats = [
  { value: "2", label: "Sungai Utama", desc: "Sungai Mahakam & Anak Sungai Mahakam" },
  { value: "2", label: "Danau Alami", desc: "Danau Saguntur & Danau Semayang (13.000 Ha)" },
  { value: "3", label: "Tanjung Eksotis", desc: "Tanjung Rappeh, Tanjung Palla, Tanjung Hallat" },
  { value: "4", label: "Luah Sungai", desc: "Luah Palla, Luah Caki, Luah Kijang, Luah Ulaman" },
  { value: "2", label: "Satwa Langka", desc: "Pesut Mahakam & Bekantan Terlindungi" },
  { value: "1990", label: "Pemukiman Terpadu", desc: "Diresmikan Menteri Sosial Prof. Haryati Soebadio" },
];

// ==========================================
// 3. TIGA KONDISI AIR DI SANGKULIMAN (SEASONS)
// ==========================================
export const waterSeasons = [
  {
    id: "pasang-besar",
    title: "Danau Air Pasang Besar",
    badge: "Panorama Lautan Tawar",
    description: "Tenggelamnya balantu (dataran) di tengah danau. Permukaan danau membentang sayup mata memandang menyerupai lautan lepas yang megah.",
    highlights: [
      "Pepohonan kokoh berdiri di dalam air danau",
      "Jalur perahu dan long boat melaju leluasa menjelajah kawasan",
      "Pemandangan negeri dongeng saat menyusuri tepian hutan terendam air"
    ],
    bestActivity: "Susur Danau & Sungai, Fotografi Panorama Air, Diskusi Santai di Tepi Sungai"
  },
  {
    id: "pasang-sedang",
    title: "Danau Air Pasang Sedang",
    badge: "Masa Penanaman Pohon",
    description: "Air tidak terlalu dalam dan tidak tuhur (surut). Balantu Tanjung Hallat timbul mengering sebagian, sementara bagian kawasan lainnya masih terendam air.",
    highlights: [
      "Waktu ideal bagi Pokdarwis BMT menanam bibit pohon tahan air (Berunai, Balik Kara, Bunghur)",
      "Pohon sempat tumbuh mencapai ketinggian sebelum pasang berikutnya",
      "Aktivitas nelayan disesuaikan dengan kadar kejernihan air"
    ],
    bestActivity: "Edukasi Konservasi Penanaman Pohon, Berkeliling Desa Pemukiman 1990"
  },
  {
    id: "kemarau",
    title: "Danau Kering (Musim Kemarau)",
    badge: "Surga Nelayan & Padang Hijau",
    description: "Danau surut menyisakan aliran sungai kecil penghubung antardesa. Permukaan danau berganti menjadi hamparan padang rumput hijau yang sangat luas berpadu pasir dan tanah liat.",
    highlights: [
      "Area perkemahan (camping) alami dengan udara sejuk",
      "Aktivitas nelayan tradisional mencapai puncaknya di Tanjung Hallat",
      "Pemanenan ikan musiman dengan alat Reba, Jala, dan Tamba Udang"
    ],
    bestActivity: "Camping di Hamparan Rumput Hijau, Edukasi Alat Tangkap Ikan, Panen Reba"
  }
];

// ==========================================
// 4. ETIKA WISATA BERTANGGUNG JAWAB
// ==========================================
export const responsibleTourism = [
  {
    title: "Jangan Mengejar atau Memburu Pesut Mahakam",
    description: "Pesut adalah mamalia pemalu yang sensitif terhadap suara. Hindari memacu mesin perahu dengan bising dan jangan berteriak agar pesut merasa aman mencari makan."
  },
  {
    title: "Dilarang Menebang Pohon & Merusak Hutan",
    description: "Pepohonan di tanjung dan danau adalah pemecah ombak alami dan penyangga gulma penyelamat kampung. Kepercayaan warga meyakini penebangan sembarangan membawa musibah."
  },
  {
    title: "Jaga Kebersihan Sungai, Danau, & Daratan",
    description: "Bawa pulang sampah Anda dan jangan membuang sampah apa pun ke perairan Mahakam demi menjaga kelestarian biota ikan air tawar konsumsi pesut."
  },
  {
    title: "Lindungi Habitat Bekantan & Satwa Hutan",
    description: "Saksikan Bekantan dari badan jalan umum tanpa mendekat berlebihan atau memberi makanan asing. Matikan mesin sepeda motor saat memotret."
  },
  {
    title: "Hormati Kearifan Lokal & Pemilik Lahan",
    description: "Dilarang menggali tanah/cacing di kawasan keramat Gunung Tallo tanpa izin pemilik (Bapak Ridwan). Junjung tinggi etika bertamu di lingkungan warga."
  }
];

// ==========================================
// 5. PILL CATEGORIES (KATEGORI DISCOVER BERANDA)
// ==========================================
export const discoverPills = [
  {
    id: "satwa",
    title: "Satwa Langka",
    subtitle: "Pesut Mahakam & Bekantan",
    icon: "Sparkles",
    slug: "pesut-mahakam",
    image: "/images/pesut-mahakam/cover.jpg",
  },
  {
    id: "budaya",
    title: "Budaya & Tarian",
    subtitle: "Tari Jepen Saguntur BMT",
    icon: "Sparkles",
    slug: "tari-jepen",
    image: "/images/tari-jepen/cover.jpg",
  },
  {
    id: "alam-danau",
    title: "Wisata Alam & Danau",
    subtitle: "Danau Saguntur & Hallat",
    icon: "Waves",
    slug: "danau-saguntur",
    image: "/images/danau-saguntur/cover.jpg",
  },
  {
    id: "susur-sungai",
    title: "Susur Sungai & Luah",
    subtitle: "Luah Palla, Kijang & Ulaman",
    icon: "Compass",
    slug: "luah-palla",
    image: "/images/luah-palla/cover.jpg",
  },
  {
    id: "sejarah",
    title: "Sejarah & Legenda",
    subtitle: "Pemukiman 1990 & Dongeng Cakki",
    icon: "BookOpen",
    slug: "pemukiman-1990",
    image: "/images/pemukiman-1990/coverpemukiman.png",
  },
  {
    id: "kuliner-khas",
    title: "Kuliner & Oleh-oleh",
    subtitle: "Iwak Basumap & Kedai BMT",
    icon: "Utensils",
    slug: "kuliner",
    image: "/images/kuliner/cover.jpg",
  },
];

// ==========================================
// 6. DATA LENGKAP DESTINASI (13 ITEM SPESIFIK)
// ==========================================
export const destinations = [
  // 1. PESUT MAHAKAM
  {
    slug: "pesut-mahakam",
    name: "Pesut Mahakam (Orcaella brevirostris)",
    category: "Wisata Satwa & Edukasi",
    tagline: "Edukasi Pembelajaran Mamalia Air Tawar Langka Sungai Mahakam",
    bestTime: "Sore, pagi, maupun malam hari saat air tenang",
    cover: "/images/pesut-mahakam/cover.jpg",
    coverPosition: "center 38%", // Atur fokus foto: 'center', 'center 38%', 'top', 'bottom', atau persentase misal 'center 35%'
    coverZoom: 1,                // Zoom foto: 1 (normal 100%), 1.1 (zoom in 10%), 1.25 (zoom in 25%) - selalu gunakan >= 0.8 agar tajam
    coverFit: "cover",           // 'cover' (penuh rasio layar) atau 'contain' (tampil utuh 100% tanpa crop dengan ambient blur di belakang)
    summary: "Menyaksikan sekawanan lumba-lumba air tawar langka yang dilindungi di habitat alaminya di sekitar perairan Sungai Mahakam dan anak sungainya.",
    blocks: [
      {
        type: "fulltext",
        title: "Mamalia Air Tawar Langka yang Terancam Punah",
        text: "Mamalia Pesut atau yang dikenal sebagai Pesut Mahakam adalah spesies lumba-lumba air tawar yang langka dan hanya ditemukan di Sungai Mahakam serta anak sungainya di Kalimantan Timur, termasuk di sekitar wilayah perairan Desa Wisata Sangkuliman. Pesut Mahakam merupakan salah satu spesies yang dilindungi undang-undang dan berstatus terancam punah (endangered). Satwa istimewa ini memiliki ciri khas tubuh berwarna abu-abu muda hingga putih keperakan, dengan panjang tubuh mencapai 2,5 meter."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/pesut-mahakam/1.jpg"],
        title: "Menikmati Atraksi Alami Tanpa Sekat",
        text: "Pesut Mahakam dapat muncul di mana saja di perairan Sungai Mahakam desa, tidak hanya terpaku pada satu titik tertentu. Pengunjung dapat menyaksikan sekawanan pesut berenang mencari makan dari tepi sungai, serambi rumah warga, rakit apung, maupun perahu ces ketinting. Cukup sediakan kamera di tangan untuk mengabadikan momen langka saat pesut menyemburkan air dari lubang pernapasannya.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/pesut-mahakam/2.jpg"],
        title: "Bermalam di Homestay & Diskusi Bersama Pokdarwis",
        text: "Bermalam di homestay warga Desa Wisata Sangkuliman memberi kesempatan istimewa menyaksikan kemunculan pesut di waktu fajar atau temaram senja. Wisatawan dapat menikmati suasana desa yang asri, duduk santai dalam diskusi ringan bersama pengurus Pokdarwis BMT sambil ditemani semburan air pesut di aliran sungai yang tenang.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "responsible",
        title: "Pedoman Etika Wisata Bertanggung Jawab",
        items: [
          "Jangan pernah mengejar, memburu, atau mengintimidasi kawanan pesut dengan perahu.",
          "Suara bising mesin perahu dan teriakan keras dapat mengakibatkan pesut merasa terancam dan menjauh dari area makan.",
          "Matikan mesin perahu atau kurangi kecepatan saat berada di dekat lokasi kemunculan pesut.",
          "Jaga perairan bebas dari sampah plastik yang berbahaya bagi mamalia air tawar."
        ]
      },
      {
        type: "fulltext",
        title: "Akses Menuju Lokasi Habitat",
        text: "Untuk menuju desa ekowisata ini, wisatawan cukup menyeberang menggunakan sepeda atau kendaraan melalui kapal feri penyeberangan Liang Ulu. Begitu tiba, Anda langsung disambut susunan rumah pemukiman desa terpadu 1990 yang bersih, teratur, dan asri sebelum memulai pengamatan pesut di tepian sungai."
      }
    ],
    quickInfo: {
      lokasi: "Aliran Sungai Mahakam & Anak Sungai Mahakam, Desa Sangkuliman",
      akses: "Kapal feri penyeberangan Liang Ulu dilanjutkan ke tepian desa, atau naik ces ketinting / long boat susur sungai",
      waktuTerbaik: "Pagi hari (06.00-08.30 WITA) dan sore hari (16.30-18.00 WITA)",
      aktivitas: [
        "Pengamatan pesut dari rakit apung & serambi rumah",
        "Fotografi satwa liar & lanskap sungai",
        "Diskusi ekowisata bersama Pokdarwis BMT",
        "Menginap di homestay pinggir sungai warga"
      ]
    }
  },

  // 2. TARI JEPEN GUNUNG TALLO
  {
    slug: "tari-jepen",
    name: "Tari Jepen Gunung Tallo",
    category: "Budaya & Tradisi",
    tagline: "Kisah Putri Penjaga Kampong di Antara Dua Danau & Dua Sungai",
    bestTime: "Saat penyambutan tamu wisata, pagelaran seni desa, & festival budaya",
    cover: "/images/tari-jepen/cover.jpg",
    coverPosition: "center 30%", // Menyelaraskan fokus ke busana penari & mahkota jepen
    coverZoom: 1,                // Skala 1 (100%) menjaga ketajaman resolusi asli tanpa pecah/blur
    coverFit: "cover",           // 'cover' atau 'contain'
    summary: "Tarian khas garapan Sanggar Seni Saguntur Bertata Menata Tertata yang mengangkat mitos Putri Kuning penjaga kampung nelayan dan Gunung Tallo.",
    blocks: [
      {
        type: "fulltext",
        title: "Tari Jepen yang Menceritakan Tempat Penuh Misteri",
        text: "Tari Jepen Gunung Tallo dengan lakon 'Putri Penjaga Kampong' mengisahkan riwayat Gunung Tallo dan Danau Saguntur. Tarian ini melukiskan awal mula sebuah pulau di dataran tinggi dengan pepohonan tua menjulang puluhan meter, tanah berbatu berpasir putih dan bertanah merah, yang dikelilingi Sungai Mahakam, anak Sungai Mahakam, Danau Saguntur, dan Danau Semayang."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/tari-jepen/1.jpg"],
        title: "Legenda Putri Kuning & Benteng Gunung Tallo",
        text: "Alkisah, pulau ini dahulunya tidak berpenghuni dan dijaga oleh seorang putri cantik rupawan bernama Putri Kuning yang bertahta di istana megah bersama rakyat yang hidup makmur sejahtera. Ketika peradaban berganti menjadi Kampung Nelayan di mana warga mencari ikan di danau, sungai, dan luah menggunakan gubeng serta alat tangkap tradisional, Putri Kuning beserta rakyatnya berpindah menetap di Gunung Tallo. Dari sana, sang putri menjadi perisai danau, sungai, dan luah agar kampung tetap lestari.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/tari-jepen/2.jpg"],
        title: "Kekayaan Alam & Satwa dalam Balutan Gerak",
        text: "Gerak tari ini menyiratkan keragaman hayati Sangkuliman: ikan gabus, jilawat, repang, kendia, puyau, sepat siam, biawan, lais, lepok, kelabiri, lalang, patin, baung, keli, panang, dan papuyu di perairan; serta satwa hutan seperti kijang, babi hutan, lutung, bekantan, kera, burung enggang, burung elang, burung bekakah, cuing, dan burung hantu.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Profil Sanggar Seni Saguntur",
        text: "Tari Jepen ini dilestarikan oleh Sanggar Seni Saguntur Bertata Menata Tertata dengan 7 orang penari berbakat (2 pria dan 5 wanita). Pembina Tim: Adhwa Aqila Sarwa dan Amanah; Penggarap Tari: Reka; Penata Musik: Eka Putra; dan Penanggung Jawab Sanggar: Rojali Lie."
      }
    ],
    quickInfo: {
      lokasi: "Balai Pertemuan Warga / Panggung Seni Sanggar Saguntur, Desa Sangkuliman",
      akses: "Darat via penyeberangan Liang Ulu atau transportasi air long boat",
      waktuTerbaik: "Sore hingga malam hari pada acara penyambutan atau festival desa",
      aktivitas: [
        "Menyaksikan pementasan Tari Jepen Putri Penjaga Kampong",
        "Belajar instrumen musik gambus & tabuhan jepen tradisional",
        "Interaksi budaya bersama penari Sanggar Seni Saguntur"
      ]
    }
  },

  // 3. GUNUNG TALLO - PENJAGA KAMPONG
  {
    slug: "gunung-tallo",
    name: "Gunung Tallo (Penjaga Kampong)",
    category: "Wisata Alam & Edukasi Konservasi",
    tagline: "Pulau Tiga Gundukan Berpagar Akar Jaraya & Perlindungan Sejarah",
    bestTime: "Musim kemarau dan saat peralihan air naik",
    cover: "/images/gunung-tallo/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Pulau seluas hampir 2 hektar dengan tiga gundukan mistis, pintu gerbang akar jaraya, dan belasan jenis pohon hutan langka yang tidak pernah tenggelam banjir.",
    blocks: [
      {
        type: "fulltext",
        title: "Misteri Tiga Gundukan yang Tak Pernah Tenggelam",
        text: "Gunung Tallo memiliki arti 'Gunung Tiga'—merujuk pada tiga gundukan tanah yang tertata sangat rapi dan dikelilingi oleh jalinan akar yang menembus tanah, menyerupai sebuah pintu gerbang alami menuju ketiga gundukan tersebut. Pulau seluas hampir dua hektar ini berada di dataran tinggi yang kokoh, sehingga tidak pernah tenggelam meski dilanda banjir pasang besar. Pemilik lahan ini adalah Bapak Ridwan, yang bermitra penuh dengan Pokdarwis BMT untuk menjaga kawasan hutan tetap lestari."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/gunung-tallo/1.jpg"],
        title: "Keunikan Akar Jaraya & Pohon Misterius Tanpa Kulit",
        text: "Salah satu keajaiban botani di Gunung Tallo adalah tumbuhan bernama 'Akar Jaraya'. Tumbuhan ini hidup merambat panjang dan sangat kuat mengitari gundukan tinggi, membentuk gerbang alami yang hanya ditemukan di kawasan ini. Konon di masa kerajaan dan penjajahan, gerbang akar ini menjadi tempat persembunyian pejuang pribumi dari kepungan musuh. Selain itu, terdapat sebatang pohon misterius tanpa kulit yang sangat keras, kokoh, dan hingga kini belum diketahui spesies pastinya.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/gunung-tallo/2.jpg"],
        title: "Habitat Belasan Pohon Langka & Satwa Rimba",
        text: "Kawasan hutan Gunung Tallo menyimpan pohon-pohon langka seperti belikara, banglon, bunghur, rengas, berunai, ketumbu, jambu hutan, kahoy, perupuk, dan jalume. Hutan ini juga menjadi rumah bagi kawanan lutung, kera, burung bekakah, ketutupi, cuwing, buawak, serta burung elang.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Fenomena Cacing Langka & Pesan Pelestarian",
        text: "Pada saat musim air danau mulai naik, fenomena alam unik terjadi: keluarnya cacing tanah langka dari gundukan ini. Kehadiran cacing musiman ini sangat dinanti nelayan rawai dan pancing sebagai umpan ikan baung, haruan (gabus), dan patin. Warga meyakini pohon di Gunung Tallo pantang ditebang sembarangan agar tanah tidak terkena penyakit menahun. Pokdarwis BMT bersama Tim Desa Ramah Lingkungan secara aktif mengawasi kawasan agar tidak dirusak oleh penebangan liar atau perusakan gundukan tanpa izin."
      }
    ],
    quickInfo: {
      lokasi: "Pulau Hutan Gunung Tallo, sisi barat Desa Sangkuliman",
      akses: "Transportasi air perahu ces ketinting atau long boat",
      waktuTerbaik: "Musim kemarau saat eksplorasi daratan atau awal musim air naik",
      aktivitas: [
        "Eksplorasi gerbang Akar Jaraya & pohon purba tanpa kulit",
        "Identifikasi pohon kayu hutan langka Kalimantan",
        "Edukasi konservasi pohon bersama Pokdarwis BMT",
        "Pengamatan burung elang, bekakah, dan satwa primata"
      ]
    }
  },

  // 4. TANJUNG RAPPEH
  {
    slug: "tanjung-rappeh",
    name: "Tanjung Rappeh",
    category: "Spot Alam / Sunset",
    tagline: "Harmoni Lanskap Menjorok ke Danau dengan Sunset Spektakuler",
    bestTime: "Air pasang besar dan musim kemarau menjelang senja",
    cover: "/images/tanjung-rappeh/cover.png",
    coverPosition: "center 35%", // Menyelaraskan lanskap tanjung & pantulan danau
    coverZoom: 1,
    coverFit: "cover",
    summary: "Tanjung menjorok sepanjang 400 meter berhadapan dengan Tanjung Palla, lokasi terbaik menyaksikan matahari terbenam di ufuk barat Danau Semayang.",
    blocks: [
      {
        type: "fulltext",
        title: "Pesona Ufuk Barat Danau Semayang",
        text: "Tanjung Rappeh menawarkan harmoni alam yang memukau. Tempat ini merupakan tanjung tanah yang menjorok ke perairan danau dengan lebar sekitar seratus meter dan bentang panjang hampir empat ratus meter, berseberangan langsung dengan Tanjung Palla. Diapit oleh air danau, sungai, dan luah, Tanjung Rappeh menjadi tempat favorit wisatawan dan penggiat alam untuk mengabadikan momen matahari terbenam (sunset) yang membias keemasan di perairan Danau Semayang."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/tanjung-rappeh/1.jpg"],
        title: "Dua Wajah di Dua Musim Berbeda",
        text: "Tanjung Rappeh menghadirkan lanskap yang kontras namun sama-sama memesona di setiap musim. Pada musim kemarau, daratan tanjung berubah menjadi hamparan padang rumput hijau yang luas dan nyaman untuk area berkemah (camping). Sementara saat musim banjir air pasang besar, panorama tanjung kian magis dengan pepohonan kokoh yang berdiri megah mencuat dari dalam permukaan air danau.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/tanjung-rappeh/2.jpg"],
        title: "Keceriaan Wisatawan Susur Danau Semayang",
        text: "Menyusuri perairan Danau Semayang menuju Tanjung Rappeh menghadirkan pengalaman berwisata yang tak terlupakan. Bersama perahu wisata warga dan pemandu lokal Pokdarwis BMT, para pengunjung dapat menikmati semilir angin danau, panorama terbuka yang luas, serta kehangatan keramahan masyarakat kampung nelayan.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/tanjung-rappeh/3.jpg"],
        title: "Penjaga Alami Terpaan Ombak Danau",
        text: "Tanjung Rappeh merupakan titik terdepan yang menahan hantaman ombak Danau Semayang. Terpaan ombak yang berkala mengikis tepi tanjung hingga membentuk hamparan pasir pantai tepi danau yang unik. Pepohonan kokoh yang tumbuh berjejer di bibir tanjung menjadi benteng alami penahan abrasi sekaligus saksi bisu keindahan lanskap air danau yang magis.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Akses & Dokumentasi",
        text: "Menuju ke Tanjung Rappeh ditempuh dengan menyusuri danau dan sungai menggunakan transportasi long boat atau ces ketinting. Dokumentasi foto keindahan tanjung ini dirintis dan diabadikan oleh penggiat desa, Rojali Lie."
      }
    ],
    quickInfo: {
      lokasi: "Tanjung Rappeh, menghadap Danau Semayang, Desa Sangkuliman",
      akses: "Perahu ces ketinting atau long boat dari dermaga desa",
      waktuTerbaik: "Pukul 17.00 - 18.30 WITA untuk melihat sunset, atau musim kemarau untuk camping",
      aktivitas: [
        "Menyaksikan matahari terbenam di ufuk barat Danau Semayang",
        "Berkemah (camping) di padang rumput hijau saat kemarau",
        "Fotografi lanskap pohon dalam air saat pasang besar",
        "Susur danau dengan ces ketinting"
      ]
    }
  },

  // 5. TANJUNG PALLA
  {
    slug: "tanjung-palla",
    name: "Tanjung Palla",
    category: "Spot Alam & Edukasi Peternakan",
    tagline: "Benteng Penyangga Ombak & Edukasi Gembala Sapi Kalang",
    bestTime: "Air pasang besar dan musim kemarau",
    cover: "/images/tanjung-palla/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Dataran tinggi sepanjang 2 km dengan barisan pohon kayu tahan air berakar kokoh, pemecah gulma Danau Semayang, serta lokasi unik gembala sapi kalang.",
    blocks: [
      {
        type: "fulltext",
        title: "Benteng Alami Menghalau Gelombang & Gulma Danau",
        text: "Tanjung Palla adalah sebuah tanjung dataran tinggi yang menjorok ke perairan danau dengan panjang hampir dua kilometer dan lebar sekitar seratus meter. Di kawasan ini tumbuh subur pohon-pohon kayu berakar kuat tahan air yang menjulang tinggi, seperti rengas, berunai, perepat, halaban, perupuk, bungur, balikkara, ketumbu, bangkal, dan maranga. Vegetasi kokoh ini menjadi benteng pertahanan pertama terhadap ombak Danau Semayang sekaligus penyangga hantaman tumbuhan gulma (ambul) yang hanyut saat banjir besar."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/tanjung-palla/1.jpg"],
        title: "Wisata Edukasi Gembala Sapi Kalang",
        text: "Selain menjadi tempat teduh untuk menikmati indahnya matahari terbenam Danau Semayang, Tanjung Palla menyuguhkan daya tarik edukasi peternakan sapi kalang. Di sini wisatawan dapat belajar bagaimana warga memelihara dan menggembalakan sapi yang tangguh berhadapan dengan musim banjir. Tumbuhan gulma yang tersangkut dan tumbuh subur di lahan tanjung dimanfaatkan sebagai pakan alami melimpah, meringankan peternak yang sebelumnya harus mencari rumput jauh ke Desa Kedang Murung, Kota Bangun Seberang, atau Sebelimbingan.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/tanjung-palla/2.jpg"],
        title: "Gerakan Kolaborasi Tanam Pohon Tahan Air",
        text: "Mengingat pentingnya fungsi Tanjung Palla sebagai penahan abrasi dan gelombang, Pokdarwis BMT terus mendorong program penanaman pohon tahan air berkelanjutan. Inisiatif komunitas ini berkolaborasi erat dengan Pemerintahan Desa Sangkuliman, Dinas Lingkungan Hidup dan Kehutanan (DLHK) Kabupaten Kutai Kartanegara, serta DLHK Provinsi Kalimantan Timur.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Transportasi Menuju Tanjung Palla",
        text: "Akses menuju Tanjung Palla dapat dijangkau menggunakan perahu long boat atau ces ketinting tradisional, baik di waktu air pasang besar maupun saat musim kemarau tiba."
      }
    ],
    quickInfo: {
      lokasi: "Tanjung Palla, berseberangan dengan Tanjung Rappeh, Desa Sangkuliman",
      akses: "Transportasi air ces ketinting atau long boat",
      waktuTerbaik: "Sore hari untuk pengamatan sapi kalang dan panorama senja",
      aktivitas: [
        "Edukasi kearifan lokal peternakan sapi kalang musim banjir",
        "Edukasi penanaman pohon kayu tahan air bersama Pokdarwis",
        "Menikmati teduhnya bentang alam pepohonan tua dan sunset",
        "Susur danau dan sungai"
      ]
    }
  },

  // 6. TANJUNG HALLAT / PULAU HALLAT (DESTINASI UTAMA)
  {
    slug: "tanjung-hallat",
    name: "Tanjung Hallat (Pulau Hallat)",
    category: "Petualangan & Edukasi Nelayan",
    tagline: "Sahabat Sejati Para Nelayan di Tengah Bentang Danau Semayang 13.000 Hektar",
    bestTime: "Air pasang besar, pasang sedang, dan musim kemarau",
    cover: "/images/tanjung-hallat/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Satu-satunya pulau di tengah Danau Semayang seluas 13.000 hektar. Tempat berteduh nelayan saat badai, pusat edukasi 5 alat tangkap tradisional, konservasi pohon tahan air, dan spot camping terbaik.",
    blocks: [
      {
        type: "fulltext",
        title: "Satu-Satunya Pulau di Tengah Lautan Danau Semayang",
        text: "Tanjung Hallat, atau yang dikenal juga sebagai Pulau Hallat, berada persis di hamparan Danau Semayang yang memiliki bentangan luas sekitar 13.000 hektar. Saat musim air pasang besar tiba, danau ini tampak tak berpenghujung menyerupai lautan lepas yang agung. Sebaliknya saat musim kemarau panjang, danau mengering menyisakan aliran sungai kecil sebagai urat nadi transportasi. Di tengah bentang alam mahaluas tersebut, Pulau Hallat berdiri kokoh dilingkupi pepohonan rimbun sebagai satu-satunya pulau sekaligus sahabat sejati bagi para nelayan."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/tanjung-hallat/1.jpg"],
        title: "Peneduh Nelayan dari Amukan Badai & Gelombang",
        text: "Tanjung Hallat memiliki peran vital bagi keselamatan nelayan Danau Semayang. Nelayan sejati diuji mental dan kesabarannya oleh alam saat bertarung melawan ombak besar, terik panas, dan hujan lebat. Ketika angin kencang mendadak turun dan gelombang mengombang-ambingkan perahu di tengah danau, Pulau Hallat adalah tempat perlindungan utama bagi perahu nelayan untuk bersandar dan berteduh hingga cuaca kembali tenang.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "water-seasons",
        title: "Tiga Fase Perubahan Air Danau Semayang",
        subtitle: "Kelompok Sadar Wisata BMT membagi siklus kehidupan air danau menjadi tiga fase utama:"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/tanjung-hallat/2.jpg"],
        title: "Pesona Padang Rumput Kemarau & Aktivitas Camping",
        text: "Saat musim kemarau, permukaan Tanjung Hallat bertransformasi menjadi padang rumput hijau yang luas memukau dengan perpaduan dasar tanah liat, lumpur, dan pasir. Kawasan ini menjadi tempat favorit bagi wisatawan untuk mendirikan tenda perkemahan (camping) dan memasang hammock di bawah rindangnya pepohonan, menikmati heningnya malam dan gemerlap langit bintang di tengah danau.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fishing-gears",
        title: "Kearifan Alat Tangkap Tradisional Nelayan Sangkuliman",
        subtitle: "Wisata edukasi nelayan bersama pemandu lokal Pokdarwis BMT memperkenalkan berbagai teknik penangkapan ikan ramah lingkungan warisan leluhur:",
        gears: [
          {
            name: "Rawai Pakal",
            target: "Udang Sungai",
            operation: "Dipasang sore hari dan diangkat malam hari",
            tools: "Tali rawai panjang, sodok udang, lentera / lampu sorot aki, umpan kelapa tua dipotong kecil-kecil.",
            desc: "Nelayan menyusuri bentangan tali rawai di kegelapan malam dengan lampu sorot aki. Diuji ketabahan saat angin dan gelombang tiba-tiba datang di tengah danau."
          },
          {
            name: "Reba",
            target: "Ikan Belida, Kakap, Lais, Tauman, & Baung",
            operation: "Tangkapan musiman tahunan",
            tools: "Pagar tancapan ranting kayu (±6x4 m), jaring trol haris bertali jurai atas & pemberat bawah.",
            desc: "Ranting kayu ditancapkan rapat di dalam air sebagai jebakan alami. Saat panen, jaring dipasang menutup rapat, ranting dibuang keluar perlahan, dan ikan dipanen melimpah—bahkan dapat mencapai satu ton dalam sekali masa panen."
          },
          {
            name: "Tamba Udang",
            target: "Udang Sungai Segar",
            operation: "Pemasangan menggunakan turus bambu",
            tools: "Anyaman bilah-bilah bambu halus, tali panjang turus / bambu kecil, umpan potongan kelapa tua.",
            desc: "Perangkap ramah lingkungan dari bambu dijalin rapat untuk menangkap udang sungai berukuran sedang dan besar."
          },
          {
            name: "Melantung Rengge",
            target: "Ikan Sungai (Istimewa: Patin Kuning)",
            operation: "Dilarutkan di perairan berkedalaman hingga 6 meter",
            tools: "Jaring sepanjang hampir 50 meter, pelampung/penimbul dari bambu atau botol plastik bekas.",
            desc: "Alat penghalau ikan yang dihanyutkan perlahan mengikuti arus danau untuk menangkap ikan bernilai tinggi seperti patin kuning."
          },
          {
            name: "Mengumpan Udang",
            target: "Udang Kecil & Udang Galah",
            operation: "Menabur umpan beras disusul lemparan jala",
            tools: "Jala mata 1 cm (udang kecil), jala mata 2 cm (udang galah), bambu kecil penanda (ciri), pakan beras.",
            desc: "Perahu nelayan minimal membawa dua jala. Pakan beras ditaburkan, dipasang penanda bambu kecil, lalu berselang 5-10 menit jala dilemparkan dengan cermat."
          }
        ]
      },
      {
        type: "gallery",
        images: [
          "/images/tanjung-hallat/1.jpg",
          "/images/tanjung-hallat/2.jpg",
          "/images/tanjung-hallat/3.jpg",
          "/images/tanjung-hallat/4.jpg"
        ],
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover",
        caption: "Dokumentasi keasrian Tanjung Hallat, plang kayu identitas pulau, suasana camping tenda, dan penanaman pohon bersama Pokdarwis BMT."
      },
      {
        type: "fulltext",
        title: "Aksi Konservasi & Masa Depan Ekowisata",
        text: "Kini Tanjung Hallat dikelola aktif oleh Pokdarwis BMT sebagai destinasi ekowisata unggulan. Mengingat pohon-pohon kokoh di pulau kerap terancam tumbang akibat hantaman ombak berkala, Pokdarwis bersama Tim Desa Ramah Lingkungan secara mandiri dan berkelanjutan menanam anak pohon tahan air seperti berunai, balik kara, dan bunghur, didukung bantuan bibit dari Dinas Lingkungan Hidup Kab. Kutai Kartanegara. Harapan besar tertuju agar destinasi ini terus berkembang memberi edukasi nyata tentang kehidupan nelayan dan mendongkrak ekonomi warga melalui olahan berbahan dasar ikan segar."
      }
    ],
    quickInfo: {
      lokasi: "Pulau di tengah Danau Semayang (13.000 Ha), wilayah Desa Sangkuliman",
      akses: "Transportasi air perahu long boat atau ces ketinting (waktu pasang besar maupun kemarau)",
      waktuTerbaik: "Musim kemarau (aktivitas nelayan & camping) dan pasang besar (panorama lautan tawar)",
      aktivitas: [
        "Edukasi praktik penangkapan ikan tradisional (Reba, Rawai Pakal, Tamba, Rengge, Jala)",
        "Camping di padang rumput hijau luas dan pasang hammock di pohon rindang",
        "Aksi penanaman pohon tahan air bersama Pokdarwis BMT",
        "Menikmati olahan ikan segar khas nelayan Danau Semayang"
      ]
    }
  },

  // 7. LUAH PALLA
  {
    slug: "luah-palla",
    name: "Luah Palla",
    category: "Susur Sungai",
    tagline: "Percabangan Sungai Alami Menghubungkan Danau, Luah, & Tanjung",
    bestTime: "Saat air pasang besar dan musim kemarau",
    cover: "/images/luah-palla/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Percabangan sungai alami sepanjang hampir 3 km dengan air tenang dan jernih, jalur utama feri dan long boat berpayung pepohonan asri.",
    blocks: [
      {
        type: "fulltext",
        title: "Urat Nadi Perairan Alami Sangkuliman",
        text: "Luah Palla di Desa Ekowisata Sangkuliman merupakan percabangan sungai alami yang berada tepat di tengah aliran anak Sungai Mahakam. Luah ini terhubung langsung dengan Danau Semayang, Danau Saguntur, Luah Kijang, Luah Ulaman, Luah Caki, Tanjung Rappeh, dan Tanjung Palla dengan bentang aliran mencapai hampir tiga kilometer. Keberadaannya mencerminkan keterikatan mendalam masyarakat Sangkuliman dengan alam perairan."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/luah-palla/1.jpg"],
        title: "Jalur Transportasi Air Berair Jernih & Tenang",
        text: "Dengan air yang tenang dan jernih serta deretan pepohonan kokoh yang asri di sisi kanan dan kiri, Luah Palla menjadi jalur favorit transportasi perahu nelayan, kapal feri penyeberangan, hingga perahu long boat wisata. Jalur ini menjadi andalan utama Pokdarwis BMT dalam mengusung paket bertajuk 'Susuri Danau, Sungai, dan Luah' yang banyak memukau wisatawan lokal maupun mancanegara.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/luah-palla/2.jpg"],
        title: "Gotong Royong Mengurai Gulma & Konservasi Hijau",
        text: "Pada musim air pasang besar, jalur aliran luah terkadang tertutup oleh rumpun gulma air (ambul). Warga bersama komunitas Pokdarwis bergotong royong membelah dan mengurainya bersama agar jalur perahu kembali terbuka. Menjaga kelestarian Luah Palla adalah bagian dari komitmen ekonomi hijau desa untuk mendukung pariwisata berkelanjutan, perikanan air tawar, dan UMKM.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      }
    ],
    quickInfo: {
      lokasi: "Percabangan anak Sungai Mahakam, Desa Sangkuliman",
      akses: "Perahu ces ketinting atau long boat",
      waktuTerbaik: "Pagi hari saat kabut air mulai terangkat atau sore hari menjelang senja",
      aktivitas: [
        "Susur sungai alami konsep 'Susuri Danau, Sungai, dan Luah'",
        "Menikmati keteduhan kanopi pepohonan tepi luah",
        "Fotografi pantulan air sungai jernih",
        "Edukasi konservasi perairan bersama Pokdarwis BMT"
      ]
    }
  },

  // 8. LUAH ULAMAN
  {
    slug: "luah-ulaman",
    name: "Luah Ulaman",
    category: "Susur Sungai & Ekologi",
    tagline: "Aliran Surga Nelayan saat Surut & Fenomena Sapi Berenang",
    bestTime: "Saat air surut / musim kemarau dan waktu air pasang besar",
    cover: "/images/luah-ulaman/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Spot mencari ikan saat surut ketika air danau mengalir ke sini. Tempat melihat alat tangkap Sangga rakit, satwa primata, dan pemandangan langka sapi berenang.",
    blocks: [
      {
        type: "fulltext",
        title: "Muara Pertemuan Aliran Air Danau",
        text: "Luah Ulaman adalah salah satu spot perairan istimewa di Desa Wisata Sangkuliman. Lokasi ini menjadi tempat favorit bagi nelayan mencari ikan saat air danau surut atau di musim kemarau, ketika limpasan ikan dari Danau Semayang dan Danau Saguntur mengalir deras menuju area luah ini. Berdekatan posisinya dengan Tanjung Rappeh dan Tanjung Palla, kawasan ini menawarkan susur danau dan sungai mengitari desa berbentuk pulau."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/luah-ulaman/1.jpg"],
        title: "Alat Tangkap 'Sangga' & Fenomena Sapi Berenang",
        text: "Saat menyusuri Luah Ulaman, pengunjung dapat menyaksikan langsung warga menangkap ikan menggunakan alat tangkap tradisional bernama 'Sangga' yang memiliki struktur rakit apung sebagai tempat penyangganya. Pemandangan kian unik dengan keberadaan kawanan sapi yang berenang menyeberangi tepian danau untuk mencari makan, ditemani riuhnya lutung dan kera yang bergelantungan di dahan pohon tepian.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Edukasi Ekologi & Lanskap Mengagumkan",
        text: "Selain menyuguhkan panorama air yang memukau, Luah Ulaman menghadirkan edukasi ekologi yang sangat kaya mengenai siklus hidup ikan air tawar pedalaman dan interaksi harmonis warga dengan ekosistem perairan Mahakam."
      }
    ],
    quickInfo: {
      lokasi: "Kawasan aliran Luah Ulaman, dekat Tanjung Rappeh & Palla, Desa Sangkuliman",
      akses: "Transportasi air perahu long boat atau ces ketinting",
      waktuTerbaik: "Musim kemarau (saat ikan bermigrasi) atau pagi hari",
      aktivitas: [
        "Melihat pengoperasian alat tangkap rakit 'Sangga'",
        "Menyaksikan fenomena unik sapi berenang mencari makan",
        "Pengamatan satwa primata lutung dan kera",
        "Susur perairan melingkari pulau desa"
      ]
    }
  },

  // 9. LUAH KIJANG
  {
    slug: "luah-kijang",
    name: "Luah Kijang",
    category: "Susur Sungai",
    tagline: "Aliran Sungai Kecil Membelah Hutan Rimbun & Jejak Tradisi Reba",
    bestTime: "Saat air pasang besar dan musim kemarau",
    cover: "/images/luah-kijang/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Aliran sungai kecil berhawa sejuk membelah hutan lebat, dipagari jajaran jebakan ranting kayu Reba warisan leluhur.",
    blocks: [
      {
        type: "fulltext",
        title: "Kesejukan Sungai di Tengah Kerimbunan Hutan",
        text: "Luah Kijang adalah aliran sungai kecil alami yang membelah keheningan hutan rimbun Sangkuliman. Aliran airnya menghadirkan suasana yang sangat tenang, teduh, dan sejuk, jauh dari hiruk-pikuk keramaian. Nama 'Luah Kijang' konon berakar dari sejarah masa lalu di mana kawasan hutan ini dihuni oleh populasi kijang yang berlimpah, memberi nilai historis tersendiri bagi masyarakat desa."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/luah-kijang/1.jpg"],
        title: "Pagar Ranting Reba di Sepanjang Aliran",
        text: "Di sepanjang tepian aliran Luah Kijang, terlihat pepohonan kayu rimbun dan pagar-pagar ranting kayu yang ditancapkan rapi sebagai perangkap ikan tradisional bernama 'Reba'. Keberadaan jebakan Reba di sepanjang luah ini menjadi bukti otentik kearifan lokal nelayan yang terus dirawat dan diwariskan turun-temurun hingga saat ini.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      }
    ],
    quickInfo: {
      lokasi: "Aliran sungai kecil Luah Kijang, Desa Sangkuliman",
      akses: "Perahu long boat atau ces ketinting",
      waktuTerbaik: "Pagi hingga siang hari saat sinar matahari menembus kanopi hutan",
      aktivitas: [
        "Susur sungai hutan alami yang tenang dan sejuk",
        "Melihat struktur perangkap ranting Reba dari dekat",
        "Fotografi lanskap sungai hutan hujan tropis",
        "Menikmati heningnya alam tanpa polusi suara"
      ]
    }
  },

  // 10. DANAU SAGUNTUR & LEGENDA CAKKI
  {
    slug: "danau-saguntur",
    name: "Danau Saguntur & Legenda Cakki",
    category: "Danau, Legenda & Konservasi",
    tagline: "Penyelamat Kampong Nelayan, Pohon Penunggu Danau 40 Meter, & Mitos Sakti Cakki",
    bestTime: "Air pasang besar dan musim kemarau",
    cover: "/images/danau-saguntur/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Danau luas penghubung 8 luah dan jalur pintas 5 desa. Memiliki pohon penunggu setinggi 40m di tengah danau, pemecah gelombang pemukiman, serta legenda sakti pemuda Cakki.",
    blocks: [
      {
        type: "fulltext",
        title: "Danau Luas Penyelamat Pemukiman Kampong Nelayan",
        text: "Danau Saguntur merupakan perairan danau yang luas dan kaya akan aneka ragam ikan air tawar. Tepi barat danau berbatasan dengan lahan Gunung Tallo, sedangkan tepi timurnya menyatu dengan Danau Semayang serta terhubung langsung ke Sungai Mahakam. Danau ini menghubungkan delapan luah alami dan menjadi jalur pintas air menuju ibu kota Kecamatan Kota Bangun bagi warga Desa Melintang, Muara Enggelam, Semayang, Tubuhun, dan Pela. Di sini para nelayan menambatkan keramba budidaya dengan aman dari terpaan ombak besar dan hanyutan gulma."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/danau-saguntur/1.jpg"],
        title: "Pohon Berusia Ratusan Tahun & Penahan Gelombang",
        text: "Tepat di tengah Danau Saguntur, berdiri sebatang pohon tua 'penunggu danau' yang menjulang setinggi hampir 40 meter dengan lingkar batang 4 meter dan dedaunan sangat lebat yang menaungi area seluas lapangan sepak bola. Pohon-pohon besar dan pulau pulau kecil di Danau Saguntur ini berfungsi sebagai pemecah gelombang dan penyangga gulma besar Danau Semayang seluas 13.000 hektar agar tidak langsung menyeruak tumpah menghantam pemukiman warga di bantaran Sungai Mahakam.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "legend",
        title: "Legenda / Cerita Rakyat: Asal Mula Danau Saguntur & Pendekar Cakki",
        badge: "Cerita Rakyat & Mitos Lokal",
        text: "Dahulu kala, danau ini dipercaya sebagai tempat pemandian para putri jelita bersama ratusan pengawal yang rupawan. Karena banyaknya nelayan yang memasang lukah dan alat tangkap di danau, kegembiraan para putri mandi pun terganggu. Alat-alat tangkap nelayan kemudian dilepaskan secara gaib oleh buaya sakti penunggu danau, hingga nelayan gagal memperoleh ikan.\n\nAlkisah, seorang pemuda bernama Cakki yang memiliki kepekaan batin mengintai pada tengah malam pukul 00:00 di balik semak kumpai miyang. Ia melihat sekelompok pemuda dan seorang perempuan membawa ikan hasil tangkapan menuju Gunung Tallo. Cakki menghadang di pintu gerbang akar Gunung Tallo dengan senjata tombak berukir motif Dayak berlambang Ular Sawa dengan ujung permata tembus bandang. Seketika, sekelompok penghuni itu berubah wujud menjadi buaya raksasa!\n\nPertarungan sengit terjadi di tengah kilatan cahaya. Dengan ketangkasannya, Cakki mengayunkan mandau dan berhasil menebas ekor buaya jantan. Ekor yang putus membuat buaya melarikan diri kembali ke danau diiringi suara menggelegar dahsyat laksana guntur bersahutan. Sang buaya betina merapal mantra 'Geleger-Gelugur-Geligir' hingga seluruh kawanan lenyap. Cakki segera menancapkan ekor buaya jantan tersebut di tengah danau, yang seketika berubah wujud menjadi pohon kokoh penunggu danau. Sejak saat itu, Cakki menamai danau tersebut 'Danau Saguntur' (dari suara guntur yang menggelegar)."
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/danau-saguntur/2.jpg"],
        title: "Kearifan Perahu Tradisional Ulin",
        text: "Perahu tradisional warga dibuat dari batang pohon pilihan seperti kayu ulin, bengkitai, dan amring. Perahu dibuat dengan lunas kokoh, berlantai kayu yang dapat menyimpan perbekalan makanan, dilengkapi kemudi berbentuk bulan sabit yang khas, beratap daun nipah, serta dihiasi ukiran tradisional indah di bagian depan dan belakang perahu.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Aksi Tanam Pohon Pokdarwis BMT & Tim Desa Ramah Lingkungan",
        text: "Menyadari peran vital ekologis danau sebagai penyangga hidup biota air konsumsi Pesut Mahakam dan habitat satwa rimba (lutung, kera, bekantan), Pokdarwis BMT bersama Tim Desa Ramah Lingkungan secara konsisten mengedukasi pemilik lahan dan menanam pohon tahan air di pulau-pulau kecil Danau Saguntur."
      }
    ],
    quickInfo: {
      lokasi: "Danau Saguntur, penghubung Sungai Mahakam dan Danau Semayang, Desa Sangkuliman",
      akses: "Transportasi air perahu long boat atau ces ketinting",
      waktuTerbaik: "Musim pasang besar (menjelajah danau bagai negeri dongeng) dan kemarau (aktivitas mereba, menjala, mendanau)",
      aktivitas: [
        "Menyaksikan Pohon Penunggu Danau setinggi hampir 40 meter di tengah air",
        "Mendengarkan penuturan hikayat Legenda Cakki dari tetua desa",
        "Melihat budidaya ikan di keramba terapung yang terlindung",
        "Susur danau dengan perahu tradisional kayu ulin berukir"
      ]
    }
  },

  // 11. PEMUKIMAN TERPADU 1990
  {
    slug: "pemukiman-1990",
    name: "Pemukiman Terpadu 1990",
    category: "Sejarah & Kehidupan Desa",
    tagline: "Tata Kelola Pemukiman Rapi, Air Bersih Mandiri 1988, & Jejak Relokasi 220 KK",
    bestTime: "Sepanjang tahun (pagi atau sore hari untuk jalan santai)",
    cover: "/images/pemukiman-1990/coverpemukiman.png",
    coverPosition: "center 45%", // Menyelaraskan deretan rumah pemukiman & pekarangan bunga
    coverZoom: 1,
    coverFit: "cover",
    summary: "Sejarah pemindahan 220 KK dari Desa Pela sejak 1986, diresmikan 30 Mei 1990 oleh Mensos Prof. Haryati Soebadio, penataan seragam mahasiswa KKN Haryono, dan pelopor air bersih mandiri 1988.",
    blocks: [
      {
        type: "fulltext",
        title: "Jejak Sejarah Relokasi Menuju Dataran Tinggi Bebas Banjir",
        text: "Sebelum dikenal sebagai Desa Sangkuliman, wilayah ini merupakan hasil perpindahan penduduk dari Desa Pela ke kawasan baru bernama Desa Pela Baru. Program permukiman terpadu ini dirancang pemerintah sejak 1986 dan mulai direalisasikan pada tahun 1987 dengan tujuan memindahkan warga ke wilayah dataran tinggi karena desa lama kerap dilanda banjir bandang. Keberhasilan program relokasi ini ditandai dengan berpindahnya 220 kepala keluarga (KK) dipimpin oleh almarhum M. Ainie selaku Petinggi Desa kala itu."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/pemukiman-1990/1.jpg"],
        title: "Pembangunan Awal & Desain Tata Letak KKN Haryono",
        text: "Pembangunan pemukiman dimulai tahun 1986 setelah pembersihan lahan, sempat terhenti, dan dilanjutkan kembali tahun 1987 dengan dana awal Rp 600.000 untuk 15 unit rumah pertama, disusul pembangunan 45 unit rumah tambahan. Keunikan desa ini terletak pada rancangan tata letak rumah yang dirancang oleh Haryono, seorang mahasiswa Kuliah Kerja Nyata (KKN). Berkat rancangannya, setiap rumah memiliki ukuran kapling dan posisi yang teratur seragam menghadap jalan, menjadikan pemukiman sangat rapi dan tertata.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/pemukiman-1990/2.png"],
        title: "Peresmian Mensos 1990 & Pemekaran 2012",
        text: "Melalui proses panjang, pemukiman terpadu ini akhirnya diresmikan secara resmi pada 30 Mei 1990 oleh Menteri Sosial RI Prof. Dr. Haryati Soebadio. Sempat menyandang nama 'Nusa Indah' sebagai desa persiapan, wilayah ini kemudian resmi menjadi Desa Sangkuliman pada pemekaran tahun 2012. Dalam pemekaran tersebut, Bupati Kutai Kartanegara Rita Widyasari menetapkan nama jalan dan gang dengan nama 'Nusa Indah' sebagai penghormatan abadi terhadap identitas awal mula berdirinya desa.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/pemukiman-1990/3.jpg"],
        title: "Pelopor Pengelolaan Air Bersih Mandiri Sejak 1988",
        text: "Fakta sejarah yang membanggakan: pada tahun 1988, Desa Sangkuliman tercatat sebagai satu-satunya desa di Kecamatan Kota Bangun yang berhasil memiliki fasilitas pengelolaan air bersih mandiri untuk mencukupi kebutuhan sekitar 220 kepala keluarga. Kemandirian ini terus berlanjut hingga kini dengan hadirnya fasilitas instalasi air bersih bantuan hibah Pemerintah Provinsi Kalimantan Timur Tahun Anggaran 2024.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Menuju Desa Ekowisata 2025",
        text: "Diiringi kekayaan nilai sejarah, budaya, dan legenda leluhur yang melahirkan julukan 'The Magical of Sangkuliman', pada tahun 2025 desa ini resmi melangkah sebagai Desa Wisata Sangkuliman (Desa Ekowisata). Wisatawan dapat menjelajahi jalan jembatan ulin semenisasi, mengagumi rumah-rumah panggung kayu berpekarangan bunga asri, dan merasakan ketenangan hidup bermasyarakat yang hangat."
      }
    ],
    quickInfo: {
      lokasi: "Jalan Nusa Indah, Kawasan Pemukiman Terpadu, Desa Sangkuliman",
      akses: "Penyeberangan Liang Ulu naik kapal feri, dilanjutkan melintasi jembatan ulin semenisasi (motor & mobil)",
      waktuTerbaik: "Pagi hari (06.30 - 09.00 WITA) atau sore hari",
      aktivitas: [
        "Menyusuri jalan pemukiman 1990 yang rapi dengan sepeda santai",
        "Melihat arsitektur rumah panggung kayu seragam berpekarangan bunga",
        "Melihat fasilitas instalasi air bersih mandiri bersejarah",
        "Interaksi ramah dengan sesepuh dan warga kampung nelayan"
      ]
    }
  },

  // 12. BEKANTAN - KERAGAMAN HAYATI
  {
    slug: "bekantan",
    name: "Bekantan (Nasalis larvatus)",
    category: "Wisata Satwa & Konservasi",
    tagline: "Keragaman Hayati Primata Hidung Panjang Endemik Kalimantan di RT 001",
    bestTime: "Pagi hari saat berangkat aktivitas & sore hari menjelang petang",
    cover: "/images/bekantan/bekantancover2.jpg",
    summary: "Kelompok sekitar 22 ekor bekantan yang hidup alami di koridor hutan sepanjang 1 km dekat pintu gerbang desa RT 001, mudah diamati langsung dari badan jalan umum.",
    coverPosition: "center 25%", // Menyelaraskan fokus ke kepala & tubuh bekantan agar tidak terpotong
    coverZoom: 1,                // Skala 1 (100%) menjaga ketajaman resolusi asli tanpa pecah/blur
    coverFit: "cover",           // 'cover' atau 'contain'
    blocks: [
      {
        type: "fulltext",
        title: "Koloni Primata Endemik yang Bertahan di Tepi Desa",
        text: "Desa Ekowisata Sangkuliman merupakan habitat alami bagi kawanan satwa langka dilindungi, Bekantan (Nasalis larvatus). Berdasarkan pemantauan Pokdarwis BMT dan Tim Desa Ramah Lingkungan, saat ini tersisa sekitar 22 ekor bekantan yang hidup berkelompok dan berpindah-pindah mencari makan di koridor hutan desa dengan panjang sekitar 1 kilometer dan lebar 40 meter, tepatnya di titik lokasi dekat pintu gerbang desa (ujung jalan RT 001)."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/bekantan/bekantancover.png"],
        title: "Pakan Alami Tumbuhan Hutan",
        text: "Kawanan bekantan ini hidup dari berbagai tumbuhan hutan alami di ujung jalan RT 001, antara lain buah pohon kayu duri (disebut tumbuhan putri malu dengan buah duri), pohon kayu parupuk dengan buah yang dinamakan 'caping', serta pohon kayu bangalon dengan buah unik menyerupai kerantongan. Keberadaan pohon-pohon pakan inilah yang menjadi kunci bertahannya koloni bekantan di Sangkuliman.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "split",
        imagePosition: "right",
        images: ["/images/bekantan/2.jpg"],
        title: "Mudah Diamati dari Jalan Umum Desa",
        text: "Salah satu keistimewaan wisata satwa di Sangkuliman adalah kemudahan pengamatan. Wisatawan tidak perlu masuk jauh ke dalam rimba liar; cukup berdiri tenang di badan jalan umum desa dengan kamera atau ponsel di tangan. Kerap kali warga yang berangkat kerja di pagi hari disambut pemandangan langka kawanan bekantan bergelantungan di pucuk pohon, mematikan mesin sepeda motor sejenak untuk mengabadikan foto dan video dengan penuh rasa bangga.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Harapan Bantuan Bibit Pohon Habitat Asli",
        text: "Pokdarwis BMT dan Tim Desa Ramah Lingkungan terus memantau pergerakan kawanan bekantan ini demi memastikan habitatnya tidak terganggu. Komunitas sangat berharap adanya dukungan bantuan bibit penanaman pohon pakan sesuai habitat aslinya dari dinas terkait, demi melestarikan kekayaan alam 'Pulau yang memiliki 2 sungai, 2 danau, dan 2 hewan langka'."
      }
    ],
    quickInfo: {
      lokasi: "Koridor hutan tepi jalan RT 001, dekat pintu gerbang Desa Sangkuliman",
      akses: "Jalan umum desa (dapat diakses sepeda motor, sepeda, dan jalan kaki)",
      waktuTerbaik: "Pagi hari (06.30 - 08.00 WITA) dan sore hari (16.00 - 17.30 WITA)",
      aktivitas: [
        "Pengamatan satwa liar bekantan dari pinggir jalan umum",
        "Fotografi satwa endemik hidung panjang Kalimantan",
        "Edukasi vegetasi pakan alami bekantan (buah caping, duri, bangalon)",
        "Dukungan kampanye konservasi satwa dilindungi"
      ]
    }
  },

  // 13. SPORT TOURISM - SEPAK BOLA
  {
    slug: "sport-tourism",
    name: "Sport Tourism — Sepak Bola Dataran Tinggi",
    category: "Aktivitas & Olahraga",
    tagline: "Bermain Bola di Dataran Tinggi Bebas Banjir & Menyantap Iwak Basumap",
    bestTime: "Sore hari sepanjang tahun",
    cover: "/images/sport-tourism/cover.jpg",
    coverPosition: "center",
    coverZoom: 1,
    coverFit: "cover",
    summary: "Daya tarik sport tourism lapangan sepak bola berkualitas di dataran tinggi yang tak pernah terendam pasang besar, telah dikunjungi lebih dari 200 wisatawan.",
    blocks: [
      {
        type: "fulltext",
        title: "Sensasi Bermain Sepak Bola di Tengah Pulau Sungai & Danau",
        text: "Salah satu daya tarik unik Desa Wisata Sangkuliman adalah wisata olahraga (sport tourism). Wisatawan datang berkunjung untuk bertanding dan bermain sepak bola sambil menikmati panorama alam pedesaan, keteraturan pemukiman terpadu 1990 yang rapi, serta mencicipi kuliner khas desa 'Iwak Basumap'. Lapangan sepak bola desa ini terletak di atas pulau dataran tinggi, sehingga tidak pernah terendam air meski air danau sedang mengalami pasang besar."
      },
      {
        type: "split",
        imagePosition: "left",
        images: ["/images/sport-tourism/1.jpg"],
        title: "Telah Dikunjungi Lebih dari 200 Wisatawan",
        text: "Kualitas rumput dan kontur lapangan yang sangat baik membuat pengunjung merasa puas dan kagum. Tercatat lebih dari 200 wisatawan dari berbagai daerah telah berkunjung untuk merasakan pengalaman berolahraga di desa ini. Mereka kagum menyaksikan bagaimana sebuah desa di tengah perairan sungai dan danau memiliki fasilitas lapangan sepak bola yang begitu prima dan tidak pernah tergenang air.",
        photoPosition: "center",
        photoZoom: 1,
        photoFit: "cover"
      },
      {
        type: "fulltext",
        title: "Akses Menuju Lapangan Bola Desa",
        text: "Wisatawan dapat menuju lokasi lapangan melalui dua jalur: jalur perairan menggunakan long boat atau ces ketinting, ataupun jalur penyeberangan Liang Ulu dengan kapal feri dilanjutkan berkendara roda dua atau roda empat melintasi jembatan ulin semenisasi."
      }
    ],
    quickInfo: {
      lokasi: "Lapangan Sepak Bola Dataran Tinggi, Desa Sangkuliman",
      akses: "Feri Liang Ulu dilanjutkan jalan jembatan ulin semenisasi, atau perahu long boat",
      waktuTerbaik: "Pukul 15.30 - 18.00 WITA untuk bermain sepak bola santai",
      aktivitas: [
        "Bermain sepak bola persahabatan bersama warga desa",
        "Menikmati udara segar dataran tinggi di tengah pulau",
        "Mencicipi hidangan kuliner khas Iwak Basumap setelah berolahraga",
        "Jalan-jalan santai mengitari pemukiman terpadu 1990"
      ]
    }
  }
];

// ==========================================
// 7. DATA KULINER & OLEH-OLEH KHAS
// ==========================================
export const culinaryData = {
  title: "Kuliner Tradisional & Oleh-Oleh Sangkuliman",
  subtitle: "Cita rasa otentik warisan kampung nelayan serta sajian istimewa Kedai BMT.",
  iconic: {
    name: "Iwak Basumap",
    title: "Iwak Basumap Danau Saguntur",
    category: "Ikon Kuliner Utama",
    description: "Kuliner legendaris berbahan dasar ikan segar tangkapan nelayan Danau Saguntur yang dimasak dengan rempah khas tradisi pedalaman Kalimantan Timur, menyajikan kelembutan daging ikan yang beraroma harum dan gurih alami.",
    photo: "/images/kuliner/iwak-basumap.jpg",
  },
  kueBasah: [
    {
      name: "Kue Kikicak",
      category: "Kue Basah Tradisional",
      description: "Kue basah tradisional bertekstur kenyal dan lembut dengan taburan kelapa parut gurih dan saus gula merah cair yang manis legit.",
      photo: "/images/kuliner/kikicak.jpg"
    },
    {
      name: "Kue Kalalapon",
      category: "Kue Basah Tradisional",
      description: "Kue basah khas berbentuk bulat dengan sensasi ledakan manis gula aren di dalamnya saat digigit, dibalut parutan kelapa segar.",
      photo: "/images/kuliner/kalalapon.jpg"
    }
  ],
  kueKering: [
    {
      name: "Kue Sampret Mak Jaleha",
      category: "Kue Kering Khas",
      description: "Kue semprit renyah legendaris olahan tangan Mak Jaleha, bercita rasa manis gurih yang lumer di mulut.",
      photo: "/images/kuliner/sampret.jpg"
    },
    {
      name: "Kue Baulu",
      category: "Kue Tradisional",
      description: "Bolu panggang tradisional khas pedalaman dengan tekstur empuk dan aroma harum panggangan klasik.",
      photo: "/images/kuliner/baulu.jpg"
    },
    {
      name: "Kue Ruti Balok",
      category: "Kue Tradisional",
      description: "Kue roti berbentuk balok dengan kerenyahan luar dan kelembutan khas untuk teman minum kopi.",
      photo: "/images/kuliner/ruti-balok.jpg"
    },
    {
      name: "Kacang Sembunyi",
      category: "Camilan Renyah",
      description: "Kacang renyah yang tersembunyi di dalam gulungan kulit tipis berbalut karamel manis gurih.",
      photo: "/images/kuliner/kacang-sembunyi.jpg"
    },
    {
      name: "Kue Cincin",
      category: "Kue Tradisional",
      description: "Kue goreng tradisional berbentuk lingkaran dengan empat lubang, bercita rasa manis legit gula aren.",
      photo: "/images/kuliner/cincin.jpg"
    },
    {
      name: "Kerupuk Ikan",
      category: "Olahan Hasil Nelayan",
      description: "Kerupuk gurih dan renyah hasil olahan daging ikan air tawar tangkapan nelayan Danau Semayang dan Saguntur.",
      photo: "/images/kuliner/kerupuk-ikan.jpg"
    }
  ],
  // ITEM DENGAN DATA BELUM LENGKAP (TAMPILKAN PLACEHOLDER & BADGE "Deskripsi segera hadir")
  pendingItems: [
    {
      id: "buah-nyiur",
      name: "Buah Nyiur",
      category: "Hasil Bumi Desa",
      description: null, // TODO: ISI DATA deskripsi Buah Nyiur jika sudah tersedia
      photos: [] // TODO: ISI DATA foto Buah Nyiur
    },
    {
      id: "madu-kelulut",
      name: "Madu Lebah Kelulut Saguntur",
      category: "Hasil Hutan Alami",
      description: null, // TODO: ISI DATA deskripsi Madu Kelulut Saguntur jika sudah tersedia
      photos: [] // TODO: ISI DATA foto Madu Kelulut
    },
    {
      id: "kalalapon-1990",
      name: "Kue Kalalapon 1990",
      category: "Kue Tradisional",
      description: null, // TODO: ISI DATA deskripsi Kalalapon 1990 jika sudah tersedia
      photos: [] // TODO: ISI DATA foto Kalalapon 1990
    },
    {
      id: "kikicak-1990",
      name: "Kue Kikicak 1990",
      category: "Kue Tradisional",
      description: null, // TODO: ISI DATA deskripsi Kikicak 1990 jika sudah tersedia
      photos: [] // TODO: ISI DATA foto Kikicak 1990
    }
  ],
  drinks: [
    {
      name: "Kopi BMT",
      category: "Minuman Khas",
      description: "Racikan kopi nikmat khas sajian Kedai BMT, sempurna dinikmati di tepian desa sembari memandang perairan sungai.",
      photo: "/images/kuliner/kopi-bmt.jpg"
    }
  ],
  souvenirs: [
    {
      name: "Baju BMT",
      category: "Cendera Mata Resmi",
      description: "Kaos resmi berlogo Pokdarwis BMT Sangkuliman sebagai kenang-kenangan kunjungan ekowisata.",
      photo: "/images/kedai-bmt/baju-bmt.jpg"
    },
    {
      name: "Sahung",
      category: "Kerajinan Tradisional",
      description: "Topi caping anyaman tradisional pelindung terik matahari dan hujan khas perlengkapan para nelayan desa.",
      photo: "/images/kedai-bmt/sahung.jpg"
    },
    {
      name: "Alat-Alat Nelayan Tradisional",
      category: "Kriya Tradisional",
      description: "Replika dan kerajinan alat penangkap ikan ramah lingkungan warisan kearifan nelayan pedalaman Mahakam.",
      photo: "/images/kedai-bmt/alat-nelayan.jpg"
    }
  ],
  kedaiBmt: {
    name: "Kedai BMT",
    location: "Ujung perkampungan Desa Sangkuliman",
    motto: "Belum lengkap berada di desa wisata jika tidak singgah ke Kedai BMT.",
    description: "Kedai BMT berada di ujung perkampungan Desa Sangkuliman. Tempat ini menjadi sentra yang menyediakan dan menampung aneka olahan kue warga, pusat kuliner Iwak Basumap, suvenir khas desa, serta informasi homestay bagi para pelancong.",
    facilities: ["Pusat Oleh-Oleh Kue Warga", "Sajian Kuliner Khas & Kopi BMT", "Sentra Suvenir & Kriya", "Pusat Informasi Homestay Warga"]
  },
  homestayInfo: {
    title: "Menginap di Homestay Warga & Kedai BMT",
    description: "Nikmati keramahan warga kampung nelayan dengan bermalam di homestay rumah panggung warga atau akomodasi yang disediakan Kedai BMT. Menginap di desa memberi Anda kesempatan langka menyaksikan Pesut Mahakam menyemburkan air tepat dari teras rumah di waktu fajar atau temaram senja.",
    note: "Untuk pemesanan dan informasi ketersediaan kamar homestay, silakan hubungi Pokdarwis BMT via WhatsApp.",
    // TODO: ISI DATA daftar nama pemilik homestay, fasilitas rinci, dan dokumentasi foto kamar
    contactWaText: "Halo Pengelola Desa Wisata Sangkuliman, saya ingin menanyakan informasi homestay warga yang tersedia."
  }
};

// ==========================================
// 8. DATA PENGALAMAN NYATA (LOCAL EXPERIENCES)
// ==========================================
export const localExperiences = [
  {
    id: 1,
    title: "Melihat Pesut Mahakam di Perairan Bebas",
    category: "Wisata Satwa Langka",
    slug: "pesut-mahakam",
    image: "/images/pesut-mahakam/cover.jpg",
    description: "Menyaksikan mamalia air tawar langka menyemburkan air dari lubang napasnya di tepi sungai atau serambi rumah.",
  },
  {
    id: 2,
    title: "Susur Danau, Sungai, & Luah Naik Long Boat",
    category: "Petualangan Perairan",
    slug: "luah-palla",
    image: "/images/luah-palla/cover.jpg",
    description: "Mengitari pulau desa menyusuri percabangan alami Luah Palla, Danau Saguntur, dan Danau Semayang berair jernih.",
  },
  {
    id: 3,
    title: "Belajar Alat Tangkap Tradisional Nelayan",
    category: "Edukasi Kearifan Lokal",
    slug: "tanjung-hallat",
    image: "/images/tanjung-hallat/cover.jpg",
    description: "Mengenal teknik penangkapan ikan ramah lingkungan: Rawai Pakal, Reba, Tamba Udang, Melantung Rengge, dan Jala.",
  },
  {
    id: 4,
    title: "Menonton Pagelaran Tari Jepen Putri Penjaga Kampong",
    category: "Seni Budaya Tradisi",
    slug: "tari-jepen",
    image: "/images/tari-jepen/cover.jpg",
    description: "Menghayati riwayat Putri Kuning dan Gunung Tallo lewat alunan gambus Sanggar Seni Saguntur BMT.",
  },
  {
    id: 5,
    title: "Matahari Terbenam di Tanjung Rappeh & Tanjung Palla",
    category: "Panorama Sunset",
    slug: "tanjung-rappeh",
    image: "/images/tanjung-rappeh/cover.png",
    description: "Menyaksikan guratan senja emas di ufuk barat Danau Semayang dan keunikan gembala sapi kalang.",
  },
  {
    id: 6,
    title: "Bermain Sepak Bola & Menikmati Iwak Basumap",
    category: "Sport Tourism & Kuliner",
    slug: "sport-tourism",
    image: "/images/sport-tourism/cover.jpg",
    description: "Bertanding di lapangan dataran tinggi bebas banjir yang telah dikunjungi lebih dari 200 wisatawan, diakhiri santapan ikan bakar rempah.",
  },
];

// ==========================================
// 9. CENTRAL LINK HUB
// ==========================================
export const linkHubItems = [
  {
    id: "wa-info",
    title: "Informasi & Pertanyaan via WhatsApp",
    subtitle: "Konsultasi jadwal kunjungan, panduan wisata, dan informasi langsung dengan Pokdarwis BMT",
    icon: "MessageSquareText",
    badge: "Respon Cepat",
    highlight: true,
    actionType: "link",
    url: getWhatsAppUrl(),
  },
  {
    id: "gmaps-route",
    title: "Petunjuk Arah & Google Maps",
    subtitle: "Titik koordinat Desa Sangkuliman, Kec. Kota Bangun, Kab. Kutai Kartanegara",
    icon: "MapPin",
    badge: "Navigasi",
    highlight: false,
    actionType: "link",
    url: siteConfig.location.mapsUrl,
  },
  {
    id: "instagram",
    title: "Instagram Resmi @pokdarwisbmt",
    subtitle: "Dokumentasi foto harian alam desa, agenda penanaman pohon, dan kegiatan pokdarwis",
    icon: "Instagram",
    badge: "Foto & Cerita",
    highlight: false,
    actionType: "link",
    url: siteConfig.socials.instagram,
  },
  {
    id: "tiktok",
    title: "TikTok Desa Wisata",
    subtitle: "Video reels keindahan pesut mahakam, bekantan, dan bentang alam danau",
    icon: "Video",
    badge: "Video Pendek",
    highlight: false,
    actionType: "link",
    url: siteConfig.socials.tiktok,
  },
  {
    id: "youtube",
    title: "YouTube Channel Desa Sangkuliman",
    subtitle: "Dokumenter pesona alam, Tari Jepen Saguntur, dan sejarah pemukiman terpadu 1990",
    icon: "Youtube",
    badge: "Dokumenter",
    highlight: false,
    actionType: "link",
    url: siteConfig.socials.youtube,
  },
  {
    id: "facebook",
    title: "Facebook Fanpage Desa Wisata",
    subtitle: "Kabar komunitas peduli lingkungan dan informasi kegiatan ekowisata",
    icon: "Facebook",
    badge: "Komunitas",
    highlight: false,
    actionType: "link",
    url: siteConfig.socials.facebook,
  },
  {
    id: "download-pdf",
    title: "Unduh E-Brochure & Panduan Wisata (PDF)",
    subtitle: "Ringkasan direktori destinasi, panduan etika wisata bertanggung jawab, dan akses jalur desa",
    icon: "FileDown",
    badge: "Buku Saku",
    highlight: true,
    actionType: "download",
    url: "#unduh-brosur",
  },
];

// ==========================================
// 10. DAFTAR MITRA RESMI DESA (FAKTUAL)
// ==========================================
export const partnersList = [
  { name: "Pokdarwis BMT", role: "Bertata Menata Tertata", code: "POKDARWIS" },
  { name: "Tim Desa Ramah Lingkungan", role: "Pelestari Ekologi Desa", code: "ECO-TEAM" },
  { name: "Sanggar Seni Saguntur", role: "Seni Tari Jepen BMT", code: "SANGGAR" },
  { name: "Pemerintah Desa Sangkuliman", role: "Pemerintahan Desa", code: "PEMDES" },
  { name: "Dinas Lingkungan Hidup Kab. Kukar", role: "Dukungan Bibit & Konservasi", code: "DLH KUKAR" },
  { name: "DLHK Provinsi Kaltim", role: "Pembina Lingkungan Hidup", code: "DLHK KALTIM" },
  { name: "Kedai BMT Sangkuliman", role: "Sentra Kuliner & Homestay", code: "KEDAI BMT" },
];

// ==========================================
// 11. FAQ & KNOWLEDGE BASE AI CHATBOT
// ==========================================
export const chatbotKnowledge = [
  {
    keywords: ["pesut", "lumba", "mamalia", "melihat pesut", "satwa"],
    answer: "Pesut Mahakam adalah lumba-lumba air tawar langka dan dilindungi yang kerap muncul di perairan Sungai Mahakam sekitar Desa Sangkuliman. Anda dapat menyaksikannya dari tepi sungai, rakit apung, atau serambi rumah saat pagi, sore, maupun malam hari. Harap tidak mengejar atau membuat suara bising mesin yang mengganggu pesut."
  },
  {
    keywords: ["bekantan", "kera", "monyet", "hidung panjang", "rt 01"],
    answer: "Terdapat koloni sekitar 22 ekor Bekantan yang hidup alami di hutan sepanjang 1 km dekat pintu gerbang desa (ujung jalan RT 001). Wisatawan dapat mengamatinya langsung dengan berdiri tenang di badan jalan umum desa pada pagi atau sore hari saat mereka mencari makan buah parupuk (caping), duri, dan bangalon."
  },
  {
    keywords: ["lokasi", "alamat", "dimana", "peta", "maps", "rute", "akses", "jalan", "feri", "menyeberang"],
    answer: "Desa Wisata Sangkuliman terletak di Kecamatan Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur. Akses dapat ditempuh melalui: (1) Transportasi air: perahu long boat atau ces ketinting; (2) Jalur darat/feri: penyeberangan Liang Ulu naik kapal feri, lalu melintasi jalan jembatan ulin semenisasi desa yang dapat dilalui sepeda motor, sepeda santai, dan mobil."
  },
  {
    keywords: ["waktu", "kapan", "musim", "terbaik", "kunjung", "pasang", "kemarau"],
    answer: "Waktu terbaik berkunjung ke Sangkuliman adalah saat air pasang besar (danau menyerupai lautan lepas dan pohon berdiri di air) serta pada musim kemarau (danau surut menjadi hamparan padang rumput hijau luas untuk camping dan aktivitas nelayan)."
  },
  {
    keywords: ["sejarah", "latar belakang", "pela", "nusa indah", "1990", "asal usul", "mensos"],
    answer: "Desa Sangkuliman berawal dari relokasi 220 KK warga Desa Pela ke dataran tinggi bebas banjir sejak 1986. Diresmikan pada 30 Mei 1990 oleh Menteri Sosial Prof. Haryati Soebadio dengan nama Pela Baru/Nusa Indah. Tata letak rumah seragam dirancang mahasiswa KKN Haryono. Pada 2012 pemekaran wilayah resmi bernama Sangkuliman. Sejak 1988, desa ini menjadi pelopor mandiri air bersih di Kecamatan Kota Bangun."
  },
  {
    keywords: ["kuliner", "makan", "makanan", "iwak basumap", "kikicak", "kalalapon", "kue"],
    answer: "Kuliner ikonik kami adalah Iwak Basumap Danau Saguntur (olahan ikan segar khas desa). Selain itu tersedia kue basah tradisional (Kikicak, Kalalapon) serta aneka kue kering seperti Kue Sampret Mak Jaleha, Baulu, Ruti Balok, Kacang Sembunyi, Cincin, dan Kerupuk Ikan di Kedai BMT ujung perkampungan."
  },
  {
    keywords: ["kedai bmt", "kedai", "kopi bmt", "suvenir", "baju bmt", "sahung"],
    answer: "Kedai BMT berada di ujung perkampungan Desa Sangkuliman, menampung olahan kue warga serta menyediakan sajian Kopi BMT, suvenir Baju BMT, Sahung (topi nelayan), replika alat nelayan, dan informasi homestay."
  },
  {
    keywords: ["tanjung", "hallat", "rappeh", "palla", "sunset", "camping"],
    answer: "Sangkuliman memiliki 3 tanjung memikat: (1) Tanjung Rappeh: spot sunset ufuk barat dan padang camping kemarau; (2) Tanjung Palla: benteng pohon tahan air dan edukasi gembala sapi kalang; (3) Tanjung Hallat / Pulau Hallat: satu-satunya pulau di tengah Danau Semayang seluas 13.000 ha, tempat berteduh nelayan, edukasi 5 alat tangkap tradisional, dan camping."
  },
  {
    keywords: ["cakki", "legenda", "saguntur", "mitos", "putri"],
    answer: "Menurut legenda rakyat, Danau Saguntur dahulu merupakan pemandian para putri jelita. Pemuda sakti bernama Cakki berhasil menebas ekor buaya penunggu dan menancapkannya di tengah danau, yang kemudian bertransformasi menjadi Pohon Penunggu Danau setinggi 40 meter. Dari peristiwa itu lahirlah nama Danau Saguntur (dari suara guntur)."
  },
  {
    keywords: ["harga", "biaya", "paket", "tarif", "bayar", "homestay", "pesan", "booking", "reservasi", "kamar", "menginap", "kontak", "whatsapp", "wa"],
    answer: "Desa Wisata Sangkuliman tidak menerapkan paket harga kaku di website. Untuk informasi akomodasi homestay warga, panduan susur danau, atau konsultasi kunjungan, silakan hubungi langsung pengurus Pokdarwis BMT via WhatsApp resmi kami."
  }
];

// Fallback jika tidak ditemukan kecocokan di chatbot
export const getChatbotFallback = (query = "") => {
  return `Terima kasih atas pertanyaannya! Untuk informasi lebih lengkap mengenai "${query}", silakan hubungi langsung pengurus Pokdarwis BMT via WhatsApp di nomor ${siteConfig.whatsappDisplay}.`;
};
