import Link from "next/link";

export default function JalurPlus() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-blue-900 text-white p-3 font-semibold">
        SPMB SMK Citra Negara
      </div>

      <div className="p-4">
        <Link
          href="/beranda"
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">📘</div>

          <h1 className="text-2xl font-bold">
            Jalur Plus
          </h1>
        </div>

        <p className="mb-6">
          <b>Kurikulum Kejuruan:</b> Sama seperti mengikuti
          kurikulum kejuruan sesuai jurusan yang dipilih.
        </p>

        <p className="mb-6">
          <b>Fokus Keagamaan:</b> Terdapat kurikulum tambahan
          berupa pendalaman Al-Quran, Tahsin/Tahfidz,
          kajian kitab kuning, Bahasa Arab, dan Bahasa Inggris aktif.
        </p>

        <p>
          <b>Program Karakter & Fisik:</b> Diperkuat dengan
          penanaman akhlak dan olahraga sunnah seperti
          berkuda, memanah, dan berenang.
        </p>
      </div>
    </main>
  );
}