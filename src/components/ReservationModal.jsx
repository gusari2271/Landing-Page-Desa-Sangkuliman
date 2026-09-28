import React, { useState } from 'react';
import { X, Calendar, Users, MessageSquare, Check, Sparkles, Send, Shield } from 'lucide-react';
import { tourPackages, villageInfo } from '../data/villageData';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageId: 'day-trip',
    date: '',
    guests: '2 Orang',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPkg = tourPackages.find(p => p.id === formData.packageId) || tourPackages[0];

    const message = `*FORMULIR RESERVASI DESA WISATA SANGKULIMAN*
----------------------------------------
*Nama Pengunjung:* ${formData.name}
*Nomor Kontak/WA:* ${formData.phone}
*Pilihan Paket:* ${selectedPkg.name} (${selectedPkg.price})
*Rencana Tanggal:* ${formData.date || 'Belum ditentukan'}
*Jumlah Pengunjung:* ${formData.guests}
*Catatan Tambahan:* ${formData.notes || '-'}
----------------------------------------
Halo Admin Desa Sangkuliman, mohon konfirmasi ketersediaan jadwal dan tata cara pembayarannya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${villageInfo.contact.whatsapp}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-forest-950 text-white p-6 relative border-b border-forest-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-forest-900 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-2 border border-forest-800">
            <Sparkles className="w-3 h-3" />
            <span>RESERVASI SATU PINTU</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">Rencanakan Kunjungan Anda</h3>
          <p className="text-xs text-stone-300 font-light mt-1">
            Isi formulir singkat di bawah untuk terhubung langsung dengan admin resmi Desa Sangkuliman via WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Pratama"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-forest-800 text-sm bg-cream-100"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="Contoh: 08123456789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-forest-800 text-sm bg-cream-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Jumlah Tamu
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-forest-800 text-sm bg-cream-100"
              >
                <option value="1 Orang (Solo)">1 Orang (Solo Traveler)</option>
                <option value="2 Orang (Pasangan)">2 Orang (Pasangan)</option>
                <option value="3-5 Orang (Keluarga Kecil)">3 - 5 Orang (Keluarga Kecil)</option>
                <option value="6-10 Orang (Rombongan)">6 - 10 Orang (Rombongan)</option>
                <option value="Lebih dari 10 Orang (Grup Komunitas)">Lebih dari 10 Orang (Komunitas/Perusahaan)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Pilihan Paket Wisata
            </label>
            <div className="space-y-2">
              {tourPackages.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`block p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.packageId === pkg.id
                      ? 'border-forest-800 bg-forest-50/50 shadow-xs'
                      : 'border-stone-200 bg-cream-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="packageId"
                        value={pkg.id}
                        checked={formData.packageId === pkg.id}
                        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                        className="accent-forest-800"
                      />
                      <span className="font-semibold text-sm text-forest-950">{pkg.name}</span>
                    </div>
                    <span className="text-xs font-bold text-forest-800">{pkg.price}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-light mt-1 pl-6">
                    Fasilitas: {pkg.includes.join(' • ')}
                  </p>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Perkiraan Tanggal Kunjungan
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-forest-800 text-sm bg-cream-100"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
              Catatan Khusus / Permintaan (Opsional)
            </label>
            <textarea
              rows="2"
              placeholder="Contoh: Menu vegetarian, butuh penjemputan dari pusat kota, dll."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-forest-800 text-sm bg-cream-100"
            ></textarea>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>Kirim Pemesanan ke WhatsApp Pengelola</span>
            </button>
            <p className="text-center text-[11px] text-stone-400 mt-2">
              Tidak ada pembayaran di muka tanpa konfirmasi resmi dari Pokdarwis Sangkuliman.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
