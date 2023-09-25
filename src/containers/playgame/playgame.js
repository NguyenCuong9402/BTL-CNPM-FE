import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css'; 
import {
  UserInfoContainer , UserName, Background, AvatarImage, AvatarContainer, DropdownMenu , DropdownItem , FlashingImage,
  Header, Navbar, Container, LoginSection, Button, ButtonContainer, Item, SocialIcon, TextItem
} from './playgameStyle';
import 'boxicons/css/boxicons.min.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import logout from './logout.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import arrowIcon from './arrow.png'; 
import WordSearch from './wordsearch.png'

function PlayGame() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userDataFromLocalStorage) {
      setUserData(userDataFromLocalStorage.name_user);
      setUserDataId(userDataFromLocalStorage.id);
    } else {
      history.push('/login'); // Điều hướng đến màn hình đăng nhập
    }
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
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
          <a href="/main"><i className='bx bxl-xing'></i>Word Scamble</a>
        </Navbar>
        <UserInfoContainer>
        <UserName>{name_user}</UserName>

        <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem>Cài Đặt</DropdownItem>
              <DropdownItem>Tài Khoản</DropdownItem>
              <DropdownItem onClick={handleLogout}>
              <img src={logout} alt="Logout" /></DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      <Container>
        <LoginSection>
            <ButtonContainer>
              <FlashingImage src={arrowIcon} alt="Mũi tên" width="50" />
            </ButtonContainer>
        </LoginSection>
        <Item>
          <h2 className="logo"><i className='bx bxl-xing'></i>Word Scamble</h2>
          <TextItem>
            <img width="350" height="250" src={WordSearch} alt="Word Search" />
          </TextItem>
        </Item>
      </Container>
    </div>
  );
}

export default PlayGame;