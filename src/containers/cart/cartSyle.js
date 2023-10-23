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
  background-color: white;
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  flex-direction: column; 
  margin-top: 20px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  overflow: auto;
`;

export const Container1 = styled.div`
  display: flex;
  background-color: white; 
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 16%;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
  margin-bottom: 20px;
`;


export const Container2 = styled.div`
  background-color: white; 
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 84%;
  display: flex;
  align-self: center;
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

export const FormTitle = styled.h1`
  font-size: 26px;
  margin-top: 50px;
  height : 70px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 6px;
  color: white;
  text-shadow: 2px 2px 2px black;
  border-bottom: solid 1px white;
`;

export const UserInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 15px;
`;


export const UserInputLabel = styled.label`
  width: 95%;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0;
`;

export const UserInput = styled.input`
  height: 40px;
  width: 95%;
  border-radius: 7px;
  outline: none;
  border: 1px solid grey;
  padding: 0 10px;
`;
export const FormSubmitButton = styled.div`
  margin-top: 40px;
  text-align: center;
  button {
    margin: 20px 0; /* Adjust the margin as needed */
  }
`;
export const SubmitInput = styled.input`
  display: block;
  width: 10%; /* Đặt độ rộng 50% */
  margin: 0 auto; /* Căn giữa theo chiều ngang */
  font-size: 20px;
  padding: 10px;
  border: none;
  text-align: center;
  border-radius: 3px;
  color: rgb(209, 209, 209);
  background: rgba(63, 114, 76, 0.7);
  cursor: pointer;
  &:hover {
    filter: brightness(1.2); /* Tăng độ sáng lên 20% khi hover */
    transform: scale(1.1);
  }
`;

export const SubmitInputHover = styled(SubmitInput)`
  &:hover {
    background: rgba(56, 204, 93, 0.7);
    color: rgb(255, 255, 255);
    
  }
`;

export const ImagePreview = styled.img`  
  max-width: 100%;
  max-height: 300px;
  margin: 10px auto;
  display: block;
  border-radius: 10px;
`;

export const ChooseFileButton = styled.label`
  cursor: pointer;
  color: white;
`;

export const FileInputContainer = styled.div`
  text-align: center;
  input[type="file"] {
    color: white;
  }
`;



export const GridContainer = styled.div`
  display: grid;
  gap: 16px; /* Khoảng cách giữa các phần tử trong lưới */
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  max-height: 700px; /* Đặt chiều cao tối đa cho container */
  overflow: auto; /* Cho phép cuộn nếu nội dung vượt quá kích thước của container */
  padding: 16px; /* Khoảng cách giữa nội dung và viền container */
  width: 100%;
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

export const NameProduct = styled.p`
  text-align: left; /* Đặt văn bản lệch trái */
  padding-left: 0px; /* Khoảng cách từ lề trái */
  margin: 0;
`;



export const ItemInfo1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.h4`
  margin: 0;
  float: left;
  font-size: 20px; /* Điều chỉnh kích thước chữ */
  color: #FF3030;
  font-family: 'Roboto', sans-serif;
  position: relative; /* Tạo vị trí tương đối để đặt pseudo-element */
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


export const SoldCount = styled.h5`
  margin: 0;
  float: right;
  font-size: 12px; /* Điều chỉnh kích thước chữ */
  color: #888; /* Màu xám nhạt */
  font-family: 'Roboto', sans-serif; /* Phông chữ hiện đại (thay thế 'Roboto' bằng phông chữ bạn muốn sử dụng) */
  /* Thêm các kiểu form hiện đại nếu cần */
`;

export const DollarSign = styled.span`
  font-size: 12px; /* Điều chỉnh kích thước "$" */
  margin-right: 2px; /* Khoảng cách giữa "$" và giá tiền */
  position: absolute; /* Đặt vị trí tuyệt đối cho "$" */
  top: 50%; /* Đặt "$" ở giữa theo chiều dọc */
  transform: translateY(-50%); /* Để căn giữa "$" theo chiều dọc */
  left: -10px; /* Đặt "$" ra xa bên trái */
`;

export const Body = styled.div`
height: 100vh;
width: 100%;
background: #000;
`;



export const TableContainer = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

export const TableRow = styled.tr`
  background-color: ${props => (props.isSelected ? '#dcdcdc' : 'transparent')};
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;

export const ButtonColumn = styled.td`
  width: 5%;
  padding: 8px;
  text-align: center;
`;

export const ProductColumn = styled.td`
  width: 40%;
  padding: 8px;
  text-align: center;
`;

export const PriceColumn = styled.td`
  width: 15%;
  padding: 8px;
  text-align: center;
`;

export const QuantityColumn = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;
`;  

export const TotalColumn = styled.td`
  width: 20%;
  padding: 8px;
  text-align: center;
`;