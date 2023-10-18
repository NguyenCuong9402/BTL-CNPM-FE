import React, { useState, useEffect } from 'react';
import './loginStyle.css'; // Import file CSS   okeeeeee
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link, useHistory  } from 'react-router-dom';
import WordSearch from './wordsearch.png'
import Modal from "../../modal";

function Login() {
  const [email, setEmail] = useState('');
  const [emailforget, setEmailForget] = useState('');
  const [isPush, setPush] = useState(false);

  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailForgetChange = (e) => {
    setEmailForget(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    // Kiểm tra xem trong localStorage có user không
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      history.push('/index');
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
          window.location.href = '/index';
        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }

      })
      .catch(function (error) {
        console.error(error);
        alert('Tài khoản không tồn tại');
      });
  };


  const handleCloseModal = () => {
    setModalOpen(false);
    if (isPush === true) {
      setShowForgotPassword(false)
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };
  const handleSendPasswordEmail = () => {
    axios.post('http://127.0.0.1:5000/api/v1/user/send_pass_email', {
      email: emailforget,
    })
      .then(function (response) {
        if (response.data.message.status === "success") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
          setPush(true)
          setEmailForget('')

        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert('Có lỗi xảy ra khi gửi email khôi phục mật khẩu');
      });
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar">
        <a href="/index"><i className='bx bxl-xing'></i>Word Scamble</a>
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
                <a onClick={handleForgotPasswordClick}>Forget Password</a>
              </div>
              <button className="btn">Log In</button>
              <div className="create-account">
                <p>Create A New Account? <Link to="/Register" className="register-link">Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
        {showForgotPassword && (
          <div>
          <div className="overlay"></div>
          <div className="forgot-password-form">
          <h2 style={{ color: 'white' }}>Nhập Email</h2>          
          <div className="input-box">
            <input
              type="email"
              required
              value={emailforget}
              onChange={handleEmailForgetChange}
              placeholder="Điền email"
            />
          </div>
          <button className="btn1" onClick={handleSendPasswordEmail}>Send Email</button>
          <button className="btn1" onClick={() => setShowForgotPassword(false)}>Cancel</button>
          </div>
          </div>
          )}
      </div>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
    </div>
  );
}

export default Login;