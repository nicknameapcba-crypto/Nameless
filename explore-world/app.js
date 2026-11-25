/* ============ Explore World — data & interaksi ============ */

// ----- Data destinasi (terinspirasi gaya katalog Atlas Obscura) -----
const destinations = [
  {
    name: "Pulau Socotra",
    country: "Yaman",
    region: "asia",
    badge: "Lanskap Aneh",
    desc: "Rumah bagi pohon naga berbentuk payung dan tanaman yang tak ditemukan di tempat lain di bumi — sering disebut 'pulau paling alien di dunia'.",
    img: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=70",
    temp: "27°C", best: "Okt–Apr"
  },
  {
    name: "Kapadokia",
    country: "Turki",
    region: "asia",
    badge: "Lanskap Aneh",
    desc: "Cerobong peri hasil erosi vulkanik, kota bawah tanah kuno, dan fajar yang dipenuhi ratusan balon udara.",
    img: "https://images.unsplash.com/photo-1641128324977-45b62c61927d?auto=format&fit=crop&w=800&q=70",
    temp: "18°C", best: "Apr–Jun"
  },
  {
    name: "Salar de Uyuni",
    country: "Bolivia",
    region: "amerika",
    badge: "Lanskap Aneh",
    desc: "Danau garam terbesar di dunia; saat hujan, berubah menjadi cermin raksasa yang memantulkan langit.",
    img: "https://images.unsplash.com/photo-1589497199812-7df1da045890?auto=format&fit=crop&w=800&q=70",
    temp: "14°C", best: "Des–Mar"
  },
  {
    name: "Petra",
    country: "Yordania",
    region: "asia",
    badge: "Reruntuhan",
    desc: "Kota batu merah muda para Nabatea, dipahat langsung dari tebing canyon lebih dari 2.000 tahun lalu.",
    img: "https://images.unsplash.com/photo-1579606038175-114d2dad6440?auto=format&fit=crop&w=800&q=70",
    temp: "22°C", best: "Mar–Mei"
  },
  {
    name: "Aurora Tromsø",
    country: "Norwegia",
    region: "eropa",
    badge: "Ekstrem Kutub",
    desc: "Gerbang utara untuk berburu cahaya aurora, dengan malam kutub yang dramatis dan fjord yang membeku.",
    img: "https://images.unsplash.com/photo-1483347756197-71ef80e5a3a6?auto=format&fit=crop&w=800&q=70",
    temp: "-4°C", best: "Sep–Mar"
  },
  {
    name: "Makori Sand Dunes",
    country: "Kenya",
    region: "afrika",
    badge: "Lanskap Aneh",
    desc: "Gurun pasir emas seluas 40 km² di tengah padang sabana hijau — anomali geologis dekat Mombasa.",
    img: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=70",
    temp: "30°C", best: "Jun–Okt"
  },
  {
    name: "Danau Kawah Putih",
    country: "Indonesia",
    region: "asia",
    badge: "Vulkanik",
    desc: "Kawah gunung berapi Ciwidey dengan air susu kebiruan yang berubah warna mengikuti suhu dan belerang.",
    img: "https://images.unsplash.com/photo-1537996194471-ea6f2b2be9aa?auto=format&fit=crop&w=800&q=70",
    temp: "10°C", best: "Apr–Okt"
  },
  {
    name: "Borobudur",
    country: "Indonesia",
    region: "asia",
    badge: "Reruntuhan",
    desc: "Candi Buddha terbesar di dunia, kubun mandala raksasa dari abad ke-9 dengan 2.672 panel relief.",
    img: "https://images.unsplash.com/photo-1596402184320-41bd6c29a3b4?auto=format&fit=crop&w=800&q=70",
    temp: "28°C", best: "Apr–Okt"
  },
  {
    name: "Waitomo Glowworm",
    country: "Selandia Baru",
    region: "oceania",
    badge: "Bawah Tanah",
    desc: "Gua kapur yang langit-langitnya bertabur 'bintang' biologis dari larva cacing pemancar cahaya.",
    img: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=70",
    temp: "12°C", best: "Sepanjang tahun"
  },
  {
    name: "Station McMurdo",
    country: "Antartika",
    region: "oceania",
    badge: "Ekstrem Kutub",
    desc: "Benua es tanpa penduduk tetap; gletser setinggi gedung dan koloni penguin jutaan ekor.",
    img: "https://images.unsplash.com/photo-1551969014-7d2a4db62c3b?auto=format&fit=crop&w=800&q=70",
    temp: "-20°C", best: "Nov–Feb"
  },
  {
    name: "Stonehenge",
    country: "Inggris",
    region: "eropa",
    badge: "Misteri",
    desc: "Lingkaran batu neolitikum berusia 5.000 tahun yang penataan dan tujuan pastinya masih diperdebatkan.",
    img: "https://images.unsplash.com/photo-1591742269404-9ba1ed7fe046?auto=format&fit=crop&w=800&q=70",
    temp: "11°C", best: "Mei–Sep"
  },
  {
    name: "Chefchaouen",
    country: "Maroko",
    region: "afrika",
    badge: "Kota Unik",
    desc: "Kota pegunungan yang seluruh gangnya dicat biru indigo sejak abad ke-15 — labirin fotojenik di Rif.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=70",
    temp: "24°C", best: "Mar–Mei"
  }
];

// ----- Render kartu -----
const grid = document.getElementById("cardGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
let activeFilter = "all";
let query = "";

function cardHTML(d, i){
  return `
  <article class="card" style="animation-delay:${i*60}ms">
    <div class="card-img">
      <img src="${d.img}" alt="${d.name}" loading="lazy"/>
      <span class="badge">${d.badge}</span>
      <button class="fav" title="Simpan ke daftar jelajah">♡</button>
    </div>
    <div class="card-body">
      <span class="loc">${d.country}</span>
      <h3>${d.name}</h3>
      <p class="desc">${d.desc}</p>
      <div class="meta"><span>🌡️ ${d.temp}</span><span>🗓️ Terbaik: ${d.best}</span></div>
    </div>
  </article>`;
}

function render(){
  const q = query.trim().toLowerCase();
  const list = destinations.filter(d =>
    (activeFilter === "all" || d.region === activeFilter) &&
    (!q || (d.name + " " + d.country + " " + d.badge + " " + d.desc).toLowerCase().includes(q))
  );
  grid.innerHTML = list.map(cardHTML).join("");
  emptyState.classList.toggle("hidden", list.length > 0);
  resultCount.textContent = q
    ? `${list.length} tempat cocok dengan "${query}".`
    : `Menampilkan ${list.length} tempat menakjubkan.`;

  // Toggle favorit
  grid.querySelectorAll(".fav").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btn.classList.toggle("on");
      btn.textContent = btn.classList.contains("on") ? "♥" : "♡";
    });
  });
}

// ----- Filter benua -----
document.getElementById("filterBar").addEventListener("click", e=>{
  const chip = e.target.closest(".chip");
  if(!chip) return;
  document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
  chip.classList.add("active");
  activeFilter = chip.dataset.filter;
  render();
});

// ----- Pencarian -----
const searchInput = document.getElementById("searchInput");
document.getElementById("searchForm").addEventListener("submit", e=>{
  e.preventDefault();
  query = searchInput.value;
  render();
  document.getElementById("destinasi").scrollIntoView({behavior:"smooth"});
});
searchInput.addEventListener("input", ()=>{ query = searchInput.value; render(); });

// Tag populer di hero
document.querySelectorAll(".tag").forEach(t=>{
  t.addEventListener("click", ()=>{
    searchInput.value = t.dataset.query;
    query = t.dataset.query;
    render();
    document.getElementById("destinasi").scrollIntoView({behavior:"smooth"});
  });
});

// ----- Mobile nav -----
document.getElementById("navToggle").addEventListener("click", ()=>{
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll("#navLinks a").forEach(a=>{
  a.addEventListener("click", ()=>document.getElementById("navLinks").classList.remove("open"));
});

// ----- Newsletter (simulasi) -----
document.getElementById("nlForm").addEventListener("submit", e=>{
  e.preventDefault();
  document.getElementById("nlMsg").textContent = "✓ Terima kasih! Cek inbox untuk konfirmasi.";
  e.target.reset();
});

render();
