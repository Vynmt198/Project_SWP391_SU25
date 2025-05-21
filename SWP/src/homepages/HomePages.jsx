import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="/your-logo-path.png" alt="Logo" className="logo" />
          <h1 className="header-title">Hệ Thống Quản Lý Điều Trị HIV</h1>
        </div>
        <nav className="nav-links">
          <a href="/login">Đăng nhập</a>
          <a href="/register">Đăng ký</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="main-title">Chào mừng đến với hệ thống chăm sóc HIV toàn diện</h2>
        <p className="main-description">
          Hệ thống hỗ trợ quản lý hồ sơ bệnh nhân, đơn thuốc ARV, lịch hẹn, xét nghiệm và nhắc nhở dùng thuốc một cách an toàn và bảo mật.
        </p>
        <div className="main-buttons">
          <a href="/login" className="btn-primary">Bắt đầu ngay</a>
          <a href="/about" className="btn-outline">Tìm hiểu thêm</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2025 HIV Medical Services. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
}
