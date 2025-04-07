import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>

        <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="BeritaKita Team"
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2>Apa itu YaNews?</h2>
          <p>
          YaNews adalah sebuah portal berita interaktif yang dibuat sebagai bagian dari tugas Ujian Tengah Semester (UTS) Pemrograman Web ITERA. Tujuannya bukan cuma buat dapet nilai, 
          tapi juga buat latihan membangun website modern dengan React JS.
          </p>
          <br />
          <h2>Fitur-Fitur YaNews:</h2>
          <li>🔍 Pencarian Berita: Pengguna bisa cari berita berdasarkan kata kunci</li>
          <li>🗂️ Kategori Berita: Berita dikategorikan (misalnya: teknologi, kesehatan, hiburan, dll).</li>
          <li>🛠️ Data Lokal: Semua berita diambil dari file db.json lokal, bukan dari API online.</li>
          <br />
          <h2>Tujuan Dibuatnya YaNews:</h2>
          <li>Belajar cara kerja React JS dalam membangun UI.</li>
          <li>Mempraktikkan konsep routing, state management, dan component-based design.</li>
          <li>Melatih diri menggunakan tools modern seperti Tailwind CSS dan JSON Server.</li>
          <li>Dan tentunya, sebagai bagian dari penilaian UTS 😄</li>
          <br />
          <h2>Kenapa Namanya YaNews?</h2>
          <p>Karena "YaNews" terdengar simpel, catchy, dan langsung ngasih tahu kalau ini website berita. Kayak bilang, “ya, ini news!” 😄</p>
          <br />
        </div>
      </div>
    </main>
  );
}
