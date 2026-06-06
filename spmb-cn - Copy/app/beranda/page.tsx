"use client";

import Link from "next/link";

export default function BerandaPage() {
  const jurusan = [
    "MPLB",
    "DKV",
    "PERHOTELAN",
    "PPLG",
    "TJKT",
    "PEMASARAN",
  ];

  return (
    <main className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 font-bold text-blue-900">
          SPMB Citra Negara
        </div>
      </nav>

      <section
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 text-white">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-bold">
            PENERIMAAN PESERTA DIDIK BARU
          </span>

          <h1 className="text-5xl font-bold mt-6">
            Selamat Datang di
            <br />
            SMK CITRA NEGARA
          </h1>

          <p className="mt-4 max-w-xl">
            Wujudkan pendidikan berkualitas dan masa depan terbaik
            bersama SMK Citra Negara.
          </p>

          <Link href="/formulir">
            <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold">
              Daftar Sekarang →
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto -mt-12 relative z-20">
        <div className="grid md:grid-cols-4 gap-4 px-6">
          {[
            ["6", "Program Studi"],
            ["14", "Ekstrakurikuler"],
            ["15K", "Alumni"],
            ["A", "Akreditasi"],
          ].map(([a, b]) => (
            <div
              key={b}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <h2 className="text-3xl font-bold text-blue-900">{a}</h2>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-bold">Jalur Plus</h3>
          <p className="text-gray-600 mt-2">
            Jalur prestasi akademik maupun non akademik.
          </p>

          <button className="mt-4 w-full bg-green-600 text-white py-3 rounded">
            Detail Jalur
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold">Jalur Reguler</h3>

          <p className="text-gray-600 mt-2">
            Jalur umum untuk seluruh calon murid baru.
          </p>

          <button className="mt-4 w-full bg-gray-500 text-white py-3 rounded">
            Lihat Jadwal
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Program Keahlian
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {jurusan.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <div className="h-60 bg-gray-300" />
              <div className="p-4 text-center font-bold">{item}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}