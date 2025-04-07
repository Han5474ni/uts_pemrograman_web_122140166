export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p>Last Updated: April 7, 2025</p>

          <h2>Halo! Selamat datang di YaNews — tempat kamu cari berita seru, update, dan terpercaya ✨</h2>
          <p>
          Kami sangat menghargai privasi kamu. Di halaman ini, kami akan jelaskan gimana data kamu digunakan di YaNews. Simpel aja, biar nggak pusing bacanya!
          </p>
          <br />
          <h2>Data Apa yang Kami Kumpulkan?</h2>
          <br />
          <p>
          Tenang aja, kami nggak ngumpulin data pribadi kamu sembarangan. Tapi ada beberapa data umum yang mungkin terekam saat kamu akses website kami, misalnya:
          </p>

          <ul>
            <li>
              <strong>Pencarian berita yang kamu lakukan</strong> includes first name, last name, username or similar identifier.
            </li>
            <li>
              <strong>Halaman yang kamu kunjungi</strong> includes email address and telephone numbers.
            </li>
            <li>
              <strong>Info umum dari browser seperti jenis perangkat, waktu kunjungan, dan lokasi kasar (via IP)</strong> </li>
          </ul>
          <br />
          <h2>Untuk menampilkan berita, kami menggunakan layanan pihak ketiga yaitu NewsAPI.org. Jadi, beberapa request data berita dilakukan lewat server mereka.</h2>
        </div>
      </div>
    </main>
  );
}
