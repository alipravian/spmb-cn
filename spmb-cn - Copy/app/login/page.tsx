"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/beranda");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl p-10 rounded shadow">

        <h1 className="text-3xl font-bold text-center text-blue-900">
          Selamat Datang
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Silakan masuk menggunakan akun pendaftaran Anda.
        </p>

        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Nomor/Email
          </label>

          <input
            type="text"
            placeholder="Masukkan nomor/email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white py-3 rounded font-semibold"
        >
          Masuk Sekarang →
        </button>

        <p className="text-center mt-8 text-gray-600">
          Belum memiliki akun?
        </p>

        <Link href="/regist">
          <button className="w-full mt-3 border border-green-700 text-green-700 py-3 rounded font-semibold">
            Daftar Akun Baru
          </button>
        </Link>

      </div>
    </div>
  );
}