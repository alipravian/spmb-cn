export default function LupaPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          Lupa Password
        </h1>

        <input
          type="email"
          placeholder="Masukkan email"
          className="w-full border p-3 rounded"
        />

        <button className="w-full mt-4 bg-green-600 text-white p-3 rounded">
          Kirim Link Reset
        </button>
      </div>
    </div>
  );
}