import React from "react";
import styled, { keyframes } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Styled Components
export const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,500&display=swap");

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

export const ButtonAdd = styled.button`
  background-color: orange;
  width: 150px;
  height: 50px;
  color: white;
  &:hover {
    background-color: #ff7700;
  }
`;

export const Container = styled.div`
  flex: 1; /* Container cha chiếm 90% còn lại */
  margin-top: 90px;
  background-color: #f0f0f0;
  width: 100%;
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

export const Container2 = styled.div`
  width: 60%;
  background-color: white; /* Màu nền của Container2 */
  height: 100%; /* Chiều cao 100% */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerProfileA = styled.div`
  flex: 1;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid #ccc; /* Thêm viền 1px với màu xám (#ccc) */
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

export const ContainerProfileB = styled.div`
  flex: 9;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const AddProDuct1 = styled.div`
  flex: 6;
  display: flex;
  flex-direction: row;
`;

export const Add1 = styled.div`
  flex: 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
export const SelectLoaiQuanAo = styled.select`
width: 150px;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: white;
font-size: 14px;
color: #333;
`;

export const CAdd1 = styled.div`
  flex: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black; /* Đặt màu chữ thành đen */

`;

export const CAdd5 = styled.div`
  flex: 4;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: black; /* Đặt màu chữ thành đen */

`;

export const CAdd3 = styled.div`
  flex: 4;
  background-color: white;
  display: flex;
  justify-content: flext-start;
  align-items: center;
  flex-direction: row;
  overflow-y: auto;
  width:80%;
  height:80%;
  border: 1px solid #ccc; /* Thêm viền kẻ đường viền màu xám *
`;


export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  margin-right: 15px;
  margin-bottom: 10px; /* Khoảng cách giữa các ô */
`;

export const Add2 = styled.div`
  flex: 7;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

`;


export const AddProDuct2 = styled.div`
  flex: 4;
  background-color: red;
  display: flex;
  flex-direction: column;

`;

export const AddAnh2 = styled.div`
  flex: 5;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddAnh3 = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Image = styled.img`
  width: 100%;
  max-height: 500px;
  max-width: 500px;
  height: 100%;
  object-fit: cover; /* Đảm bảo hình ảnh vừa đủ bên trong phần tử con */
`;

export const AddAnh4 = styled.div`
  flex: 4;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const Container5 = styled.div`
  flex: 1; /* Container5 chiếm 60% chiều rộng của Container1 */
  background-color: white; /* Màu nền của Container5 */
  display: flex;
  align-items: center; /* Căn giữa dọc */
`;

export const IconContainer5 = styled.img`
  margin-left: 20px;
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

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  padding: 25px 13%;
  background-color: black;
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
      transition: 0.5s ease;
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
  cursor: pointer;
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
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
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
`;

export const Body = styled.div`
  height: 97.9vh;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
