import React from 'react';
import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  flex: 1; /* Container cha chiếm 90% còn lại */
  margin-top: 90px;
  background-color: white;
  width: 60%;
  display: flex;
`;

export const Container1 = styled.div`
  flex: 3; /* Container1 chiếm 30% chiều rộng của Container cha */
  background-color: green; /* Màu nền của Container1 */
  height: 100%; /* Chiều cao 100% */
  display: flex;
  flex-direction: column;
`;
export const Container3 = styled.div`
  flex: 2; /* Container3 chiếm 30% chiều rộng của Container1 */
  background-color: #dcdcdc; /* Màu nền của Container3 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarContainer3 = styled.img`
  border-radius: 50%; /* Tạo hình dạng bo tròn */
  max-width: 80%; /* Đảm bảo ảnh không vượt quá kích thước container */
  max-height: 80%;
`;

export const Container4 = styled.div`
  flex: 1; /* Container4 chiếm 10% chiều rộng của Container1 */
  background-color: #dcdcdc; /* Màu nền của Container4 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameContainer4 = styled.div`
  text-align: left; /* Để căn trái nội dung */
  color: black; /* Màu chữ đen */
  font-size: 20px; /* Font size 30px */
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out; /* Hiệu ứng thay đổi màu nền và kích thước */
  
  &:hover {
    background-color: black; /* Màu nền khi hover */
    color: white; /* Màu chữ khi hover */
    transform: scale(1.1); /* Hiệu ứng phóng to khi hover */
  }
`;

export const Container5 = styled.div`
  flex: 1; /* Container5 chiếm 60% chiều rộng của Container1 */
  background-color: white; /* Màu nền của Container5 */
  display: flex;
  align-items: center; /* Căn giữa dọc */
`;

export const IconContainer5 = styled.img`
  margin-left:20px;
  width: 30px; /* Độ rộng của ảnh icon */
  height: 30px; /* Chiều cao của ảnh icon */
  margin-right: 10px; /* Khoảng cách giữa ảnh và dòng chữ */
`;
export const TextContainer5 = styled.div`
  font-size: 26px; /* Kích thước font chữ */
`;

export const Container6 = styled.div`
  flex: 6; /* Container6 chiếm 60% chiều rộng của Container1 */
  background-color: white; /* Màu nền của Container6 */
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa dọc */
`;

export const Ct1 = styled.div`
  flex: 1; /* Ct1 chiếm 20% chiều rộng của Container6 */
  background-color: white; /* Màu nền của Ct1 */
  width: 100%;
`;

export const Ct2 = styled.div`
  flex: 1; /* Ct2 chiếm 20% chiều rộng của Container6 */
  background-color: white; /* Màu nền của Ct2 */
  width: 100%;
`;

export const Ct3 = styled.div`
  flex: 1; /* Ct3 chiếm 20% chiều rộng của Container6 */
  background-color: white; /* Màu nền của Ct3 */
  width: 100%;
`;

export const Ct4 = styled.div`
  flex: 7; /* Ct4 chiếm 40% chiều rộng của Container6 */
  background-color: lightpink; /* Màu nền của Ct4 */
  width: 100%;
`;

export const ButtonContainer6 = styled.button`
  text-align: center;
  margin-left: 70px;
  font-size: 16px; /* Kích thước font chữ */
  margin-top: 10px;
  background-color: white; /* Màu nền của nút (màu xanh) */
  color: black; /* Màu chữ trắng */
  border: none; /* Loại bỏ viền */
  cursor: pointer; /* Biểu tượng con trỏ khi hover nút */
`;


export const Container2 = styled.div`
  flex: 7; /* Container2 chiếm 70% chiều rộng của Container cha */
  background-color: blue; /* Màu nền của Container2 */
  height: 100%; /* Chiều cao 100% */
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  padding: 25px 13%;
  background-color:black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
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
  margin-right: 20px;
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

export const AvatarImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
  transition: filter 0.3s ease;
  cursor : pointer;

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




export const Body = styled.div`
  height: 97.9vh;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
