import React, { useState } from 'react';
import './loginStyle.css'; // Import file CSS
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
   Background, Logo, FormBox, WelcomeText, Description,InputBox, Input,Icon, RememberPassword, CreateAccount, Btn, FormTitle,
    Header, Navbar, Container, Item, SocialIcon,
  } from './signinStyle';

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
      <Header>
        <Navbar>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </Navbar>
      </Header>
      <Background></Background>
      <Container>
      <Item>
        <Logo><i className='bx bxl-xing'></i>Word Scamble</Logo>
        <WelcomeText>Welcome! <br /><span>To Our Game</span></WelcomeText>
        <Description>Tận hưởng niềm vui cùng chúng tôi</Description>
        <SocialIcon>
            <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-twitter'></i></a>
            <a href="https://www.youtube.com/watch?v=fLRf8JqSX8A"><i className='bx bxl-youtube'></i></a>
            <a href="https://www.instagram.com/cuong.9402/"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-linkedin'></i></a>
        </SocialIcon>
      </Item>
      <FormBox>       
        <form action="" onSubmit={handleSubmit}>
          <FormTitle>Sign In</FormTitle>
          <InputBox>
            <Icon><i className='bx bxs-envelope'></i></Icon>
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </InputBox>
          <InputBox>
            <Icon><i className='bx bxs-lock-alt'></i></Icon>
            <Input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </InputBox>
          <RememberPassword>
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forget Password</a>
          </RememberPassword>
          <Btn>Log In</Btn>
          <CreateAccount>
            <p>Create A New Account? <Link to="/Register" className="register-link">Sign Up</Link></p>
          </CreateAccount>
        </form>
      </FormBox>
    </Container>
    </div>
  );
}

export default Login;