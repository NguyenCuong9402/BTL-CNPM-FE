import React, { useState, useEffect } from "react";
import "./loginStyle.css"; // Import file CSS   okeeeeee
import "boxicons/css/boxicons.min.css"; // Import thư viện icons
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Modal from "../../modal";

import {
  SocialIcon,
  SocialIconItem,
  SocialLink,
  SocialIconItemHover,
  Item1Wrapper,
  StyledHeading,
  Header,
  Navbar,
} from "./loginStyled";
import sp1 from "./shopping.png";

function Login() {
  const [email, setEmail] = useState("");
  const [emailforget, setEmailForget] = useState("");
  const [isPush, setPush] = useState(false);

  const [password, setPassword] = useState("");
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
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
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      history.push("/index");
    }
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/v1/user/login", {
        email: email,
        password: password,
        admin: false,
      })
      .then(function (response) {
        if (response.data.message.status === "success") {
          localStorage.setItem("accessToken", response.data.data.access_token);
          localStorage.setItem(
            "refreshToken",
            response.data.data.refresh_token
          );
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          window.location.href = "/index";
        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Tài khoản không tồn tại");
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isPush === true) {
      setShowForgotPassword(false);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };
  const handleSendPasswordEmail = () => {
    axios
      .post("http://127.0.0.1:5000/api/v1/user/send_pass_email", {
        email: emailforget,
      })
      .then(function (response) {
        if (response.data.message.status === "success") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
          setPush(true);
          setEmailForget("");
        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Có lỗi xảy ra khi gửi email khôi phục mật khẩu");
      });
  };

  return (
    <div>
      <div className="body1">
        {/* LOGIN FORM CREATION */}
        <div className="background1"></div>
        <Header>
          <Navbar>
            <a
              href="/index"
              style={{
                fontSize: "26px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i className="bx bxl-xing" style={{ marginRight: "5px" }}></i>
              <span style={{ fontFamily: "Arial, sans-serif" }}>
                Trang chính
              </span>
            </a>
          </Navbar>
        </Header>
        <div className="container">
          <Item1Wrapper>
            <StyledHeading>Chào mừng đến với Shop</StyledHeading>
            <SocialIcon>
              <SocialLink href="https://www.facebook.com/cuong.9402">
                <SocialIconItem className="bx bxl-facebook" />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/cuong.9402">
                <SocialIconItem className="bx bxl-twitter" />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/watch?v=fLRf8JqSX8A">
                <SocialIconItemHover className="bx bxl-youtube" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/cuong.9402">
                <SocialIconItem className="bx bxl-instagram" />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/cuong.9402">
                <SocialIconItem className="bx bxl-linkedin" />
              </SocialLink>
            </SocialIcon>
            <img src ={sp1}></img>
          </Item1Wrapper>
          <div className="login-section">
            <div className="form-box login">
              <form action="" onSubmit={handleSubmit}>
                <h2 style={{ fontFamily: "Arial, sans-serif" }}>Đăng nhập</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-envelope"></i>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label>Password</label>
                </div>
                <div className="remember-password">
                  <label>
                    <input type="checkbox" style={{ fontFamily: "Arial, sans-serif" }} />
                    Nhớ mật khẩu
                  </label>
                  <a onClick={handleForgotPasswordClick}>Forget Password</a>
                </div>
                <button className="btn">Log In</button>
                <div className="create-account">
                  <p>
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/Register">
                      <p style={{color: 'Orange'}}>Đăng ký</p>
                    </Link>
                  </p>
                </div>
              </form>
              
            </div>
          </div>
          {showForgotPassword && (
            <div>
              <div className="overlay"></div>
              <div className="forgot-password-form">
                <h2 style={{ color: "white" }}>Nhập Email</h2>
                <div className="input-box">
                  <input
                    type="email"
                    required
                    value={emailforget}
                    onChange={handleEmailForgetChange}
                    placeholder="Điền email"
                  />
                </div>
                <button className="btn1" onClick={handleSendPasswordEmail}>
                  Send Email
                </button>
                <button
                  className="btn1"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default Login;
