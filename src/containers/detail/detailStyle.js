import React from 'react';
import styled, { keyframes } from 'styled-components';
import background1 from './backgroundform.png';

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
background: url(${background1});
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
  background: black; /* Đặt màu nền thành đen */
  color: white;
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
  height: 750px;
  margin-top: 20px;
  background: url(${background1});
  background-size: cover;
  background-position: center;  
  border-radius: 20px;
  overflow: hidden;
`;

export const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 58%;
  height: 100%;
  color: #fff;
  background: transparent;
  padding: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #FFA500;
  color: white;
  padding: 5px 10px;
  font-size: 10px;
`;

export const DollarSign = styled.span`
  font-size: 12px; /* Điều chỉnh kích thước "$" */
  margin-right: 2px; /* Khoảng cách giữa "$" và giá tiền */
  position: absolute; /* Đặt vị trí tuyệt đối cho "$" */
  top: 50%; /* Đặt "$" ở giữa theo chiều dọc */
  transform: translateY(-50%); /* Để căn giữa "$" theo chiều dọc */
  left: -10px; /* Đặt "$" ra xa bên trái */
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  left: 0;
  right: 0;    
`;

export const SoldCount = styled.h5`
  margin: 0;
  float: right;
  font-size: 12px; /* Điều chỉnh kích thước chữ */
  color: #888; /* Màu xám nhạt */
  font-family: 'Roboto', sans-serif; /* Phông chữ hiện đại (thay thế 'Roboto' bằng phông chữ bạn muốn sử dụng) */
  /* Thêm các kiểu form hiện đại nếu cần */
`;

export const Price = styled.h4`
  margin: 0;
  float: left;
  font-size: 20px; /* Điều chỉnh kích thước chữ */
  color: #FF3030;
  font-family: 'Roboto', sans-serif;
  position: relative; /* Tạo vị trí tương đối để đặt pseudo-element */
`;


export const ItemInfo1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NameProduct = styled.p`
  text-align: left; /* Đặt văn bản lệch trái */
  padding-left: 0px; /* Khoảng cách từ lề trái */
  margin: 0;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  height: 300px;
  position: relative;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }

  img {
    max-width: 100%;
    max-height: 80%;
    object-fit: cover;
  }
`;

export const CartImage = styled.img`
  /* CSS cho CartImage */
  width: 50px;
  height: 50px;
  cursor : pointer;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 30px;
`;

export const TextItem = styled.span`
    font-size: 40px; /* Điều chỉnh kích thước cho đoạn văn bản (p) */
    text-align: center; 
    margin: 10px 0;
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
  height: 70vh;  
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;
  background-color: #f72d7a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 40px;
  cursor: pointer;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; 
  
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

export const AvatarImagebuton = styled.img`
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

// Sử dụng styled-components để áp dụng animation
export const FlashingImage = styled.img`
  animation: ${flashAnimation} 1s infinite; // Sử dụng animation với vô hạn lặp lại
`;

export const AvatarImageSet = styled.img`
  width: 500px;
  height: 450px;
  border-radius: 50%;
  transition: filter 0.3s ease;
`;

export const AvatarContainerSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;

  .upload-button {
    margin-top: 8px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  #avatar-upload {
    display: none; /* Ẩn input để tùy chỉnh giao diện */
  }
`;

export const CloseButtonStyled = styled.button`
  font-size: 20px;
  padding: 5px 10px;
  border: 1px solid transparent;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;

