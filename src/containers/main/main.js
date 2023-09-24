import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css'; 
import {
  GlobalStyles,
  Background,
  Header,
  Navbar,
  SearchBar,
  Container,
  LoginSection,
  FormBox,
  RegisterForm,
  ActiveRegisterForm,
  LoginForm,
  ActiveLoginForm,
  InputBox,
  Input,
  Label,
  Item, SocialIcon, TextItem
} from './mainStyle';
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link } from 'react-router-dom';

function Main() {
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
        
        <LoginSection>
          <FormBox>
            <RegisterForm>
              <div className="remember-password">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forget Password</a>
              </div>
              <button className="btn">Log In</button>
              <div className="create-account">
                <p>Create A New Account? <Link to="/Register" className="register-link">Sign Up</Link></p>
              </div>
            </RegisterForm>
            <LoginForm>
              {/* ... */}
            </LoginForm>
          </FormBox>
        </LoginSection>
        
        <Item>
          <h2 className="logo"><i className='bx bxl-xing'></i>Word Scamble</h2>
          <TextItem>
            <h2>Welcome! <br /><span>To Our Game</span></h2>
            <p>Tận hưởng niềm vui cùng chúng tôi</p>
            <SocialIcon>
              <a href="https://www.facebook.com/cuong.9402/"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="https://www.youtube.com/watch?v=fLRf8JqSX8A"><i className='bx bxl-youtube'></i></a>
              <a href="https://www.instagram.com/cuong.9402/"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </SocialIcon>
          </TextItem>
        </Item>
      </Container>
    </div>
  );
}

export default Main;