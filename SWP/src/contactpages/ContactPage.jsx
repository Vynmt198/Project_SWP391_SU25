import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Liên hệ với chúng tôi</h1>
        <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình điều trị và chăm sóc sức khỏe.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Thông tin liên hệ</h2>
          <p> Địa chỉ: 123 Đường Sức Khỏe, Quận Y Tế, TP. HCM</p>
          <p> Điện thoại: 1900 999 888</p>
          <p> Email: hotro@hivtreatment.vn</p>
          <p> Thời gian làm việc: 08:00 - 17:00 (Thứ 2 - Thứ 6)</p>
        </div>

        <div className="contact-form">
          <h2>Gửi phản hồi hoặc câu hỏi</h2>
          <form>
            <label htmlFor="name">Họ tên</label>
            <input type="text" id="name" placeholder="Nhập họ tên của bạn" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Nhập địa chỉ email" />

            <label htmlFor="message">Nội dung</label>
            <textarea id="message" rows="5" placeholder="Nội dung liên hệ..."></textarea>

            <button type="submit">Gửi liên hệ</button>
          </form>
        </div>
      </div>
    </div>
  );
}