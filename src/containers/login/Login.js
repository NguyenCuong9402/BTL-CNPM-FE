import React, { useState, useEffect } from 'react';
import './loginStyle.css'; // Import file CSS
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link, useHistory  } from 'react-router-dom';
import WordSearch from './wordsearch.png'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    // Kiểm tra xem trong localStorage có user không
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      history.push('/main');
    }
  }, [history]);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <header className="header">
        <nav className="navbar">
        <a href="/main"><i className='bx bxl-xing'></i>Word Scamble</a>
        </nav>
      </header>

      {/* LOGIN FORM CREATION */}
      <div className="background"></div>
      <div className="container">
        <div className="item">
          <h2 className="logo"><i className='bx bxl-xing'></i>Word Scamble</h2>
          <div className="text-item">
            <img  width="500" height="250" src={WordSearch} alt="Word Search" />
            <h2>Welcome! <br /><span>To Our Game</span></h2>
            <p>Tận hưởng niềm vui cùng chúng tôi</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-twitter'></i></a>
              <a href="https://www.youtube.com/watch?v=fLRf8JqSX8A"><i className='bx bxl-youtube'></i></a>
              <a href="https://www.instagram.com/cuong.9402/"><i className='bx bxl-instagram'></i></a>
              <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-linkedin'></i></a>
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