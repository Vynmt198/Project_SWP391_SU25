import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 👉 import file CSS riêng

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3000/users?userIDEmail=${email}`);
      const user = res.data[0];

      // ⚠️ Mặc định giả lập password: 123456
      if (user && password === "123456") {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        setError("Sai email hoặc mật khẩu.");
      }
    } catch (err) {
      setError("Lỗi đăng nhập. Vui lòng thử lại.");
    }
  };

  return (
    <div className="login-container">
     <h2>HIV Treatment and Medical Services System</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
