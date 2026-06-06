import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Gambar */}
      <img
        src="/bgcn.jpg"
        alt="Citra Negara"
        className="w-[450px] object-cover"
      />

      {/* Tombol */}
      <Link href="/regist">
        <button
          className="
            mt-8
            px-20
            py-3
            bg-green-600
            text-white
            text-2xl
            font-bold
            rounded-2xl
            hover:bg-green-700
            transition
          "
        >
          Masuk
        </button>
      </Link>

      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-blue-700 font-semibold text-sm">
          Akreditasi Unggul • SPMB 2026-2027
        </p>

        <p className="text-gray-500 text-xs mt-1">
          © 2026 PANITIA SPMB. SELURUH HAK CIPTA DILINDUNGI.
        </p>
      </div>
    </main>
  );
}