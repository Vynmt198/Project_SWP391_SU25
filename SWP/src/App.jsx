import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './homepages/HomePages';

function App() {
  const navigate = useNavigate();

  return (
    <>
    <HomePage />

    <div>
      <h1>Chào mừng đến với hệ thống quản lý điều trị HIV</h1>
      <p>Bạn đã đăng nhập thành công!</p>
      {/* Thêm các component hoặc menu ở đây */}
    </div>
    </>
  );
}

export default App;