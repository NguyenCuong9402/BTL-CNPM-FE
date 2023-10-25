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
  height:0px;
  width: 100%;
  filter: blur(10px);
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

export const Container = styled.div`
  flex: 1; /* Container cha chiếm 90% còn lại */
  margin-top: 90px;
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;


`;

export const Container1 = styled.div`
  flex: 1; /* Container1 chiếm 30% chiều rộng của Container cha */
  background-color: white; /* Màu nền của Container1 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container5 = styled.div`
    margin-bottom: 20px;
`;

export const Container6 = styled.div`
  flex: 3;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  width: 60%;
  align-self: center;
  display: flex;
  background-color: #f0f0f0;
`;

export const ContainerDelete = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f0f0f0;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #cc0000; /* Màu đỏ đậm hơn khi hover */
  }
`;

export const ContainerBuy = styled.div`
  flex: 9;
  display: flex;
  flex-direction: row;
  background-color: #f0f0f0;
`;

export const Buy1 = styled.div`
  flex: 7;
  background-color: #99cc99; /* Màu xanh lá cây là một ví dụ */
`;

export const Buy2 = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  background-color: #66cc99; /* Màu xanh lá cây là một ví dụ */
`;




export const Container2 = styled.div`
  background-size: cover;
  background-position: center;
  width: 60%;
  flex: 6;
  display: flex;
  align-self: center;
  flex-direction: column;
  overflow-y: auto;
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



export const TableContainer = styled.table`
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    margin-bottom: 10px;
    height: 90%;
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
  width: 45%;
  padding: 8px;
`;

export const PhanLoaiColumn = styled.td`
  width: 15%;
  padding: 8px;
`;

export const PhanLoaiColumnCell = styled.td`
  width: 15%;
  padding: 8px;
  text-align: center;
`;


export const ProductColumnCell = styled.td`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

export const LeftContainerProduct = styled.div`
  width: 30%;
  height: 100%;
  padding: 4px; /* Điều chỉnh khoảng cách và lề bên trong container */
  img {
    height:120px;
    width:100px;
    object-fit: cover;
  }
`;

export const RightContainerProduct = styled.div`
  width: 70%;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Căn giữa theo chiều ngang */
`;




export const PriceColumn = styled.td`
  width: 10%;
  padding: 8px;
  text-align: center;
`;

export const PriceColumnCell = styled.td`
  width: 10%;
  padding: 8px;
  text-align: center;
`;

export const QuantityColumn = styled.td`
  width: 10%;
  padding: 8px;
  text-align: center;      
`;

export const QuantityColumnCell = styled.td`
  width: 10%;
  padding: 8px;
  text-align: center;
`; 
export const QuantityInput = styled.input`
  width: 60px; /* Điều chỉnh kích thước ô input */
  height: 40px;
  text-align: center;
  border: 1px solid #ccc; /* Điều chỉnh đường viền của ô input */
  border-radius: 4px; /* Điều chỉnh góc bo tròn */
`;

export const TotalColumn = styled.td`
  width: 15%;
  padding: 8px;
  text-align: center;
`;

export const TotalColumnCell = styled.td`
  width: 15%;
  padding: 8px;
  text-align: center;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`;

export const TBody = styled.tbody`
  height: 200px;
`;

export const BuyButton = styled.button`
  background-color: orange;
  color: white;
  font-size: 30px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  border-radius: 0;

  &:hover {
    background-color: #ff7700;
  }
`;


export const XacNhanThayDoi = styled.button`
  background-color: orange;
  color: white;
  font-size: 15px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  border-radius: 0;

  &:hover {
    background-color: #ff7700;
  }
`;

export const TotalText = styled.span`   
  font-size: 30px;
  margin-right: 350px;
  margin-top:5px;
  padding: 10px 20px;
  color: #333; /* Màu chữ tổng tiền */
  position: absolute;
  
`;

export const TotalAmount = styled.span`
  font-size: 36px;
  padding: 10px 20px;

  color: #ff7700; /* Màu số tiền */
  margin-right: 200px;
  margin-top:0px;
  position: absolute;
`;