import React, { useState } from 'react';
import './loginStyle.css'; // Import file CSS
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây, ví dụ: kiểm tra tên người dùng và mật khẩu
    if (username === 'user' && password === 'password') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="logo512.png" alt="Logo" />
      </div>
      <div className="form-container">
        <h2>Word Scamble, xin chào</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Tên người dùng</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Your Gmail"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Your Password"
              required
            />
          </div>
          <div className="button-container">
          <button type="submit">Đăng nhập</button>
          <button type="submit">Đăng ký</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;