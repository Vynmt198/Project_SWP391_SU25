import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Chào mừng đến với hệ thống quản lý điều trị HIV</h1>
      <p>Bạn đã đăng nhập thành công!</p>
      {/* Thêm các component hoặc menu ở đây */}
    </div>
  );
}

export default App;