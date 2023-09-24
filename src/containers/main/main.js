import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css'; 
import {
  GlobalStyles, UserInfoContainer , UserName, LogoutButton,
  Background, 
  Header,
  Navbar,
  Container,
  LoginSection,
  FormBox,
  RegisterForm,
  LoginForm, Button, ButtonContainer,
  Item, SocialIcon, TextItem
} from './mainStyle';
import 'boxicons/css/boxicons.min.css'; // Import thư viện icons
import axios from 'axios';
import { Link } from 'react-router-dom';

function Main() {
  const [name_user, setUserData] = useState(null);

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserData(userDataFromLocalStorage.name_user);
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    window.location.href = '/login'
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
        <UserInfoContainer>
          <UserName>{name_user}</UserName>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      <Container>
        <LoginSection>
            <ButtonContainer>
            <Button>Play</Button>
            <Button>History</Button>
          </ButtonContainer>
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