import React, { useState } from 'react';
import './loginStyle.css'; // Import file CSS
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // const userData = JSON.parse(localStorage.getItem('user'))
  //           console.log(userData)
  //           if (userData) {
  //               alert("Bạn đã đăng nhập, hãy đăng xuất nếu muốn đổi tài khoản.")
  //               window.location.href = '/main';
  //           }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   // Gửi yêu cầu POST đến API đăng nhập
    //   const response = await axios.post('http://127.0.0.1:5000/api/v1/user/login', {
    //     email,
    //     password,
    //   });

    //   if (response.status === 200) {
    //     // Đăng nhập thành công, chuyển hướng đến trang main
    //     window.location.href = '/main'; // Bạn có thể thay đổi đường dẫn tùy ý
    //   } else {
    //     setError('Đăng nhập thất bại. Vui lòng thử lại.');
    //   }
    // } catch (error) {
    //   // Xử lý lỗi từ API
    //   setError('Đăng nhập thất bại. Vui lòng thử lại.');
    // }

    axios.post('http://127.0.0.1:5000/api/v1/user/login', {
      email: email,
      password: password,
      admin: false
    })
      .then(function (response) {
        if (response.data.message.status === "success") {
          localStorage.setItem('accessToken', response.data.data.access_token);
          localStorage.setItem('refreshToken', response.data.data.refresh_token);
          localStorage.setItem('user', JSON.stringify(response.data.data.user));

          // axios.get('http://127.0.0.1:5000/api/v1/product', {
          //     headers: {
          //             Authorization: `Bearer ${response.data.data.access_token}`
          //     }
          // })
          // .then(function(response) {
          //     console.log(response);
          // })
          // .catch(function(error) {
          //     console.error(error);
          // });
          alert(response.data.message.text);
          window.location.href = '/main';
        }
        if (response.data.message.status === "error") {
          alert(response.data.message.text);
          window.location.href = '/login';

        }

      })
      .catch(function (error) {
        console.error(error);
        alert('Tài khoản không tồn tại');
      });
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
                <p>Create A New Account? <Link to="/Register" className="register-link">Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;