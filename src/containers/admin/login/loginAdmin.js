import React, { useState, useEffect } from "react";
import './loginAdminStyle.css'; // Import file CSS   okeeeeee
import Modal from '../../../modal';
import "boxicons/css/boxicons.min.css";
import {
  Background,
  Header,
  Navbar,
  Container
} from "./loginAdminStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import WordSearch from "./wordsearch.png";

function LoginAdmin() {
  const history = useHistory();
  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        history.push("/main")
      }
      else{
        history.push("/Admin")
      }
    }
  }, []);
  const [email, setEmail] = useState('');
  const [emailforget, setEmailForget] = useState('');
  const [isPush, setPush] = useState(false);

  const [password, setPassword] = useState('');
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/api/v1/user/login', {
      email: email,
      password: password,
      admin: true
    })
      .then(function (response) {
        if (response.data.message.status === "success") {
          localStorage.setItem('accessToken', response.data.data.access_token);
          localStorage.setItem('refreshToken', response.data.data.refresh_token);
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
          window.location.href = '/admin/main';
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
      <Header>
        <Navbar>
          <a href="/admin/login">
            <i className="bx bxl-xing"></i>Word Scamble
          </a>
        </Navbar>
      </Header>
      <Background></Background>
      <Container>
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
      </Container>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />

    </div>
  );
}

export default LoginAdmin;
