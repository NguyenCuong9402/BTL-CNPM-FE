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

export const Background = styled.div`
  background-position: center;
  background-size: cover;
  height: 40%;
  width: 100%;
  filter: blur(10px);
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  padding: 25px 13%;
  background-color:black;
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

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 10px;
  flex: 1;
  border-radius: 5px;
  outline: none;
`;

export const SearchButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;


export const Container = styled.div`
  display: flex;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  flex-direction: column; 
  margin-top: 20px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

`;

export const Container1 = styled.div`
  display: flex;
  background-color: white; 
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 200;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
`;

export const Container5 = styled.div`
    margin-bottom: 20px;
`;

export const Container6 = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
`;


export const Container2 = styled.div`
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 84%;
  display: flex;
  align-self: center;
  flex-direction: column;
  display: flex;

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
height: 100vh;
width: 100%;
background: #000;
`;



export const TableContainer = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  margin-bottom: 10px;

`;


export const TableHeader = styled.thead`
  background-color: #fffefb;
`;

export const TableRow = styled.tr`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* Điều chỉnh giá trị để đổ bóng đậm hơn */
  height: 100px;
`;
export const TableCell = styled.tr`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4); /* Điều chỉnh giá trị để đổ bóng đậm hơn */
  height: 150px;
`;


export const ButtonColumn = styled.td`
  width: 5%;
  padding: 8px;
  text-align: center;
`;

export const ButtonColumnCell = styled.td`
  width: 5%;
  padding: 8px;
  text-align: center;
`;

export const ProductColumn = styled.td`
  width: 40%;
  padding: 8px;
`;

export const PriceColumn = styled.td`
  width: 15%;
  padding: 8px;
  text-align: center;
`;

export const ProductColumnCell = styled.td`
  width: 40%;
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

export const LeftContainerProduct = styled.div`
  width: 25%;   
  padding: 4px; /* Điều chỉnh khoảng cách và lề bên trong container */
`;

export const RightContainerProduct = styled.div`
  width: 75%;
  padding: 4px; /* Điều chỉnh khoảng cách và lề bên trong container */
`;

export const QuantityColumn = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;      
`;

export const QuantityColumnCell = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;
`;  

export const TotalColumn = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;
`;

export const TotalColumnCell = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`;