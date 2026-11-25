# Explore World 🌍

Website katalog destinasi unik & misterius di seluruh dunia, **terinspirasi dari Atlas Obscura** — tempat-tempat aneh, indah, dan penuh cerita yang jarang masuk brosur wisata.

## Fitur
- 🗂️ Katalog destinasi dengan kartu gambar, badge kategori, suhu & waktu terbaik berkunjung
- 🔍 Pencarian real-time (nama, negara, kategori, deskripsi) + tag populer
- 🌏 Filter berdasarkan benua (Asia, Eropa, Afrika, Amerika, Oceania)
- ♥ Tombol favorit per kartu ("daftar jelajah")
- 🧭 Grid kategori eksplorasi (Lanskap Aneh, Reruntuhan, Ekstrem Kutub, Vulkanik, dll.)
- 📖 Bagian cerita/editorial ala majalah perjalanan
- ✉️ Form newsletter (simulasi)
- 📱 Responsif penuh + navbar mobile hamburger
- 🎨 Palet earthy khas Atlas Obscura (krem, tanah liat, teal, emas) dengan font Fraunces + Inter

## Struktur
```
explore-world/
├── index.html   # struktur halaman
├── style.css    # styling & responsif
└── app.js       # data destinasi + logika search/filter/favorit
```

## Menjalankan
Cukup buka `index.html` di browser, atau jalankan server lokal:

```bash
cd explore-world
python3 -m http.server 8000
# buka http://localhost:8000
```

## Menambah Destinasi
Edit array `destinations` di `app.js`:

```js
{
  name: "Nama Tempat",
  country: "Negara",
  region: "asia|eropa|afrika|amerika|oceania",
  badge: "Kategori",
  desc: "Deskripsi singkat...",
  img: "URL gambar",
  temp: "25°C",
  best: "Periode terbaik"
}
```

> Catatan: ini proyek fan-made yang hanya mengambil *spirit* kurasi Atlas Obscura; konten, logo, dan merek mereka adalah milik Atlas Obscura.
