export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1E3478] rounded-3xl shadow-xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Selamat Datang di
          </h1>

          <h2 className="text-2xl font-bold text-green-400 mt-1">
            SMK CITRA NEGARA
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          />

          <select
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Pilih Jenis Kelamin</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>

          <select
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Pilih Jurusan</option>
            <option>RPL</option>
            <option>TKJ</option>
            <option>Multimedia</option>
          </select>

          <input
            type="text"
            placeholder="NISN"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}