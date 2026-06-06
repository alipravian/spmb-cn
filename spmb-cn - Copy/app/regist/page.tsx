"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("Isi semua data terlebih dahulu!");
      return;
    }

    alert("Akun berhasil dibuat!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow">

        <h1 className="text-4xl font-bold text-center text-blue-900">
          Selamat Datang
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          masukan akun anda untuk mendaftar
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
          <div className="flex justify-between mb-2">
            <label className="font-semibold">
              Password
            </label>

            <span className="text-sm text-gray-500">
              Lupa Password?
            </span>
          </div>

          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded font-semibold"
        >
          Masuk Sekarang →
        </button>

        <Link href="/login">
          <button className="w-full mt-4 border border-green-700 text-green-700 py-3 rounded font-semibold">
            Kembali ke Login
          </button>
        </Link>

      </div>
    </div>
  );
}