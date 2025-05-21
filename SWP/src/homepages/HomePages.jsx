import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-100 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-red-600 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/your-logo-path.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-white text-xl font-bold">
            Hệ Thống Quản Lý Điều Trị HIV
          </h1>
        </div>
        <nav className="space-x-4 text-white font-medium">
          <a href="/login" className="hover:underline">Đăng nhập</a>
          <a href="/register" className="hover:underline">Đăng ký</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
          Chào mừng đến với hệ thống chăm sóc HIV toàn diện
        </h2>
        <p className="text-gray-700 max-w-xl mb-8">
          Hệ thống hỗ trợ quản lý hồ sơ bệnh nhân, đơn thuốc ARV, lịch hẹn, xét nghiệm và nhắc nhở dùng thuốc một cách an toàn và bảo mật.
        </p>
        <div className="flex gap-4">
          <a
            href="/login"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Bắt đầu ngay
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-white border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white text-center py-4">
        © 2025 HIV Medical Services. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
}