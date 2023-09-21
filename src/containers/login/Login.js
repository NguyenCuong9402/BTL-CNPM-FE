import React, { useState } from 'react';import './loginStyle.css'; // Import file CSS
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đăng nhập ở đây, ví dụ: kiểm tra tên người dùng và mật khẩu
    if (email === 'user' && password === 'password') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }
  };
  return (
    <div>
      {/* NAVBAR CREATION */}
      <header className="header">
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </nav>
        <form action="" className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><i className='bx bx-search'></i></button>
        </form>
      </header>

      {/* LOGIN FORM CREATION */}
      <div className="background"></div>
      <div className="container">
        <div className="item">
          <h2 className="logo"><i className='bx bxl-xing'></i>Word Scamble</h2>
          <div className="text-item">
            <h2>Welcome! <br /><span>To Our Game</span></h2>
            <p>Tận hưởng niềm vui cùng chúng tôi</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="https://www.youtube.com/watch?v=fLRf8JqSX8A"><i className='bx bxl-youtube'></i></a>
              <a href="https://www.instagram.com/cuong.9402/"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>
        </div>
        <div className="login-section">
          <div className="form-box login">
            <form action="" onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>Password</label>
              </div>
              <div className="remember-password">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forget Password</a>
              </div>
              <button className="btn">Log In</button>
              <div className="create-account">
                <p>Create A New Account? <a href="#" className="register-link">Sign Up</a></p>
              </div>
            </form>
          </div>
          {/* <div className="form-box register">
            <form action="">
              <h2>Sign Up</h2>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-user'></i></span>
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-password">
                <label><input type="checkbox" />I agree with this statement</label>
              </div>
              <button className="btn">Sign Up</button>
              <div className="create-account">
                <p>Already Have An Account? <a href="#" className="login-link">Sign In</a></p>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;