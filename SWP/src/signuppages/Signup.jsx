import React from 'react';
import './Signup.css';

export default function Signup() {
  return (
    <div className="signup-page">
      {/* Header */}
      <header className="signup-header-logo">
        <div className="logo-title-wrapper">
          <h2>HIV Treatment and Medical Services System</h2>
        </div>
        <a href="/login">Đăng nhập</a>
      </header>

      {/* Main Content */}
      <main className="signup-main">
        {/* Left: Info */}
        <div className="signup-info">
          <h2>Đăng ký tài khoản</h2>
          <p>
            Tham gia hệ thống quản lý điều trị HIV với các dịch vụ y tế toàn diện, an toàn và bảo mật.
          </p>
          <ul>
            <li>Hỗ trợ điều trị & theo dõi tiến trình</li>
            <li>Bảo mật thông tin tuyệt đối</li>
            <li>Tư vấn và hỗ trợ 24/7</li>
          </ul>
        </div>

        {/* Right: Form */}
        <form className="signup-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              required
            />
          </div>

          <button type="submit">
            Đăng ký ngay
          </button>
        </form>
      </main>
    </div>
  );
}
