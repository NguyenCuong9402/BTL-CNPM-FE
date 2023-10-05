import React from 'react';
import styled, { keyframes } from 'styled-components';
import background1 from './backgroundform.png';
import background2 from './backgound2.jpg';

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
  height: 750px;
  margin-top: 20px;
  background: url(${background2});
  background-size: cover;
  background-position: center;  
  border-radius: 20px;
  overflow: hidden;
`;

export const CustomTable = styled.table`
  width: 100%;
  left: 50%;

  border-collapse: collapse;
  margin-top: 20px;
  
`;
export const CustomTableContainer = styled.div`
  width: 100%;
  max-height: 400px; /* Set the maximum height as needed */
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #ccc; /* Add a border for a better look */
`;

export const TableHeader = styled.th`
  padding: 22px;
  width: 120px;
  text-align: center;
  background-color: #f0f0f0;
  position: relative;
  cursor: pointer;

  .sort-icon {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: bold;
  }
`;

export const TableCell = styled.td`
  padding: 8px 12px;
  text-align: center;
  width: 120px;
`;

export const ImageInTableCell = styled.img`
  width: 30%; /* This makes the image take up the full width of the table cell */
`;


export const TableContainer = styled.div`
  width: 100%;
  max-height: 600px; /* Increase the maximum height as needed */
  min-height: 600px;
  overflow: hidden; /* Hide vertical scrollbar */
`;

export const TableHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #f0f0f0;
  z-index: 1;
`;

export const TableBodyContainer = styled.div`
  max-height: 500px; /* Increase the maximum height as needed */
  min-height: 500px;
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #ccc; /* Add a border for a better look */
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationInfo = styled.div`
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #008000;
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
  justify-content: space-between;
  flex-direction: column;
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
  height: 70vh;  
`;

export const Button = styled.button`
  width: 300px;
  height: 100px;
  background-color: #f72d7a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 40px;
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

// Sử dụng styled-components để áp dụng animation
export const FlashingImage = styled.img`
  animation: ${flashAnimation} 1s infinite; // Sử dụng animation với vô hạn lặp lại
`;

