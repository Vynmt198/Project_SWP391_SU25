import React from "react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Giới Thiệu Hệ Thống</h1>
        <p>
          Hệ thống quản lý dịch vụ y tế và điều trị HIV giúp nâng cao khả năng tiếp cận chăm sóc y tế, theo dõi phác đồ điều trị ARV, và hỗ trợ cộng đồng một cách hiệu quả.
        </p>
      </section>

      <section className="about-content">
        <h2> Mục Tiêu</h2>
        <p>
          Cung cấp nền tảng kỹ thuật số để quản lý lịch khám, tra cứu xét nghiệm, đặt lịch tư vấn, hỗ trợ bác sĩ và bệnh nhân quản lý phác đồ điều trị một cách tối ưu.
        </p>

        <h2> Bảo Mật & Ẩn Danh</h2>
        <p>
          Người dùng có thể đăng ký ẩn danh để tránh kỳ thị. Hệ thống sử dụng mã hóa hiện đại để đảm bảo an toàn dữ liệu cá nhân và hồ sơ bệnh án.
        </p>

        <h2> Hỗ Trợ Bác Sĩ</h2>
        <p>
          Giao diện giúp bác sĩ dễ dàng chọn và tùy chỉnh phác đồ ARV phù hợp từng bệnh nhân. Quản lý lịch hẹn, hồ sơ bệnh nhân, bằng cấp và lịch làm việc.
        </p>

        <h2> Báo Cáo & Phân Tích</h2>
        <p>
          Cung cấp dashboard báo cáo toàn diện cho quản lý và cơ sở y tế để theo dõi hiệu quả điều trị và quản lý dịch vụ y tế.
        </p>
      </section>
    </div>
  );
}
