import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "MPLB",
    image: "/public/mplb.jpg",
  },
  {
    title: "DKV",
    image: "/public/dkv.jpg",
  },
  {
    title: "PERHOTELAN",
    image: "/public/perhotelan.jpg",
  },
  {
    title: "PPLG",
    image: "/public/pplg.jpg",
  },
  {
    title: "TJKT",
    image: "/public/tjkt.jpg",
  },
  {
    title: "PEMASARAN",
    image: "/public/pemasaran.jpg",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3">
        <h1 className="font-bold text-blue-900">
          SPMB Citra Negara
        </h1>
      </header>

      {/* Hero */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-school.jpg')",
          }}
        >
          <div className="h-full bg-green-900/70 p-5 text-white flex flex-col justify-center">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs w-fit">
              Pendaftaran Tahun 2026/2027
            </span>

            <h2 className="font-bold text-xl mt-4">
              Selamat Datang di SMK CITRA NEGARA
            </h2>

            <p className="text-sm mt-2 max-w-md">
              Wujudkan pendidikan terbaikmu.
              Daftar sekarang dan raih masa depan gemilang.
            </p>

            <button className="mt-4 bg-yellow-400 text-black px-5 py-2 rounded-lg w-fit font-medium">
              Daftar Sekarang →
            </button>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="grid grid-cols-2 gap-3 px-4 mt-4">
        <StatCard title="PROGRAM STUDI" value="6" />
        <StatCard title="EKSTRAKURIKULER" value="14" />
        <StatCard title="ALUMNI" value="15K" />
        <StatCard title="AKREDITASI" value="A" />
      </section>

      {/* Jalur */}
      <section className="px-4 mt-5 space-y-4">
        <RouteCard
          title="Jalur Plus"
          description="Program unggulan dengan kurikulum tambahan dan pembinaan karakter."
          href="/jalur/plus"
        />

        <RouteCard
          title="Jalur Reguler"
          description="Program pendidikan reguler sesuai kurikulum nasional."
          href="/jalur/reguler"
        />
      </section>

      {/* Jurusan */}
      <section className="px-4 mt-6">
        <div className="grid grid-cols-3 gap-4">
          {programs.map((item) => (
            <Link
              href={`/jurusan/${item.title.toLowerCase()}`}
              key={item.title}
              className="text-center"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="mx-auto object-cover"
                />

                <h3 className="text-xs font-semibold mt-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="grid grid-cols-4 py-2">
          <MenuItem label="Beranda" active />
          <MenuItem label="Daftar" />
          <MenuItem label="Dashboard" />
          <MenuItem label="Akun" />
        </div>
      </nav>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
      <div className="text-2xl font-bold text-blue-900">
        {value}
      </div>

      <div className="text-xs text-gray-500 mt-1">
        {title}
      </div>
    </div>
  );
}

function RouteCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="font-bold text-lg text-blue-900">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>

      <Link
        href={href}
        className="mt-4 block bg-green-600 text-white text-center py-2 rounded-lg"
      >
        Detail Jalur
      </Link>
    </div>
  );
}

function MenuItem({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`text-xs ${
        active
          ? "text-yellow-500 font-semibold"
          : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}