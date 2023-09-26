import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgrounplay from './backgroundplay.png';

// Styled Components
export const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    height: 100vh;
    width: 100%;
    background: #000;
  }
`;

export const Background = styled.div`
background: url(${backgrounplay});
background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  filter: blur(10px);
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 13%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Navbar = styled.nav`
  a {
    position: relative;
    font-size: 16px;
    color: #fff;
    margin-right: 30px;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      bottom: -5px;
      border-radius: 5px;
      transform: translateY(10px);
      opacity: 0;
      transition: .5s ease;
    }

    &:hover::after {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SearchBar = styled.form`
  width: 250px;
  height: 45px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;

  &::placeholder {
    color: #fff;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;

  i {
    font-size: 22px;
  }
`;


export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 550px;
  margin-top: 20px;
  background: url(${backgrounplay});
  background-size: cover;
  background-position: center;  
  border-radius: 20px;
  overflow: hidden;
`;



export const Logo = styled.h2`
  color: #fff;
  font-size: 30px;
`;

export const TextItem = styled.div`
  h2 {
    font-size: 40px;
    line-height: 1;
  }

  p {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const SocialIcon = styled.div`
  a i {
    color: #fff;
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
    transition: .5s ease;
  }

  a:hover i {
    transform: scale(1.2);
  }
`;

export const LoginSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 58%);
  height: 100%;
  color: #fff;
`;

export const FormBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RegisterForm = styled.div`
  transform: translateX(430px);
  transition: transform .6s ease;
  transition-delay: 0s;
`;

export const ActiveRegisterForm = styled.div`
  transform: translateX(0px);
  transition-delay: .7s;
`;

export const LoginForm = styled.div`
  transform: translateX(0px);
  transition: transform .6s ease;
  transition-delay: 0.7s;
`;

export const ActiveLoginForm = styled.div`
  transform: translateX(430px);
  transition-delay: 0s;
`;

export const InputBox = styled.div`
  width: 340px;
  height: 50px;
  border-bottom: 2px solid #fff;
  margin: 30px 0;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  padding-right: 28px;
  color: #fff;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0`;

// Thêm styled cho ButtonContainer và Button
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  justify-content: center; 
  align-items: center;
  height: 50vh;  
`;

export const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 58%;
  height: 100%;
  color: #fff;
  background: transparent;
  padding: 80px;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  
`;

export const Button = styled.button`
  width: 150px;
  background-color: #f72d7a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  
  position: relative; /* Thêm thuộc tính này để xác định vị trí của biểu tượng */

  /* Định dạng biểu tượng bằng CSS */
  .play-icon {
    position: absolute;
    right: 10px; /* Điều chỉnh vị trí của biểu tượng */
    top: 50%; /* Đưa biểu tượng vào giữa theo chiều dọc */
    transform: translateY(-50%); /* Dịch biểu tượng lên trên để căn giữa */
    opacity: 0; /* Ẩn biểu tượng ban đầu */
    transition: opacity 0.3s; /* Hiệu ứng nhấp nháy */
  }

  &:hover .play-icon {
    opacity: 1; /* Hiển thị biểu tượng khi hover */
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px; /* Khoảng cách giữa tên người dùng và nút đăng xuất */
`;

export const UserName = styled.h4`
  margin-right: 10px;
  color: #fff; /* Màu chữ cho tên người dùng */
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const AvatarImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width:100px;
  top: 100%;
  right: 0;
  display: none;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${AvatarContainer}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
  img {
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    margin-right: 10px;
    transition: filter 0.3s ease; /* Thêm hiệu ứng chuyển đổi trong 0.3 giây */
  
  &:hover {
    filter: brightness(1.2); /* Tăng độ sáng lên 20% khi hover */
    transform: scale(1.1);
  }
  }
`;
export const LogoutButton = styled.img`
  width: 60px; 
  height: 60px; 
  border-radius: 50%; 
  margin-right: 10px;
  transition: filter 0.3s ease; /* Thêm hiệu ứng chuyển đổi trong 0.3 giây */
  
  &:hover {
    filter: brightness(1.2); /* Tăng độ sáng lên 20% khi hover */
    transform: scale(1.1);
  }
`

export const flashAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Tạo styled component cho container ảnh
export const HintImageContainer = styled.div`
  margin-top: 50px; /* Khoảng cách giữa chữ và ảnh */
  border-radius: 8px; /* Độ cong viền */
  overflow: hidden; /* Ẩn phần ngoài của ảnh */
`;

// Tạo styled component cho ảnh
export const HintImage = styled.img`
  max-height: 100%;
  max-width: 90%; /* Đảm bảo ảnh không vượt quá kích thước của container */
  transition: transform 0.3s ease-in-out; /* Hiệu ứng khi hover vào ảnh */

  &:hover {
    transform: scale(1.1); /* Phóng to ảnh khi hover vào */
  }
`;

// Tạo styled component cho hiệu ứng fadeIn
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const QuickTipImage = styled.img`
  position: absolute; /* Đặt vị trí tuyệt đối để nằm trên ảnh */
  width: 100px; /* Đặt kích thước phù hợp cho ảnh nhỏ */
  top: 0; /* Đặt vị trí top ở đầu container */
  left: 0; /* Đặt vị trí left ở đầu container */
  &:hover {
    transform: scale(1.1); /* Phóng to ảnh khi hover vào */
  }
`;



export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; /* Cân giữa các ô theo chiều ngang */
  align-items: center; /* Cân giữa các ô theo chiều dọc */
  margin-bottom: 50px; /* Cân khoảng cách giữa ô đề và trả lời */
  
`;

export const ClickableText = styled.span`
  display: inline-block;
  padding: 10px;
  background: red;
  border-radius: 5px;
  cursor: pointer;
  width: 50px; /* Cố định chiều rộng của ô chứa văn bản */
  height: 50px; /* Cố định chiều cao của ô chứa văn bản */
  text-align: center; /* Căn giữa nội dung theo chiều ngang */
  margin-bottom: 10px;

  /* Thêm các kiểu CSS cho ClickableText ở đây (nếu cần) */
`;

export const TextAnswer = styled.span`
  display: inline-block;
  padding: 10px;
  background: blue;
  border-radius: 5px;
  cursor: pointer
  width: 100px; /* Cố định chiều rộng của ô chứa văn bản */
  height: 50px; /* Cố định chiều cao của ô chứa văn bản */
  min-width: 50px; /* Cố định kích thước tối thiểu */
  text-align: center; /* Căn giữa nội dung theo chiều ngang */
  `;



