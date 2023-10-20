import React from 'react';
import styled, { keyframes } from 'styled-components';
import background1 from './backgroundform.png';
import background2 from './background2.png';

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
  height: 90%;
  margin-top: 20px;
  background-color: white;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Container1 = styled.div`
position: relative;
width: 70%;
height: 100%; 
margin-top: 20px;
background-color: white;
background-size: cover;
background-position: center;
overflow: hidden;
flex: 0.8; 
`;

export const Container3 = styled.div`
position: relative;
width: 100%;
height: 86%; 
margin-top: 20px;
background-color: white;
background-size: cover;
background-position: center;
overflow: hidden;
`;

export const Container2 = styled.div`
position: relative;
width: 100%;
height: 100%; /* Đảm bảo Container2 chiếm toàn bộ chiều cao của Container */
margin-top: 20px;
background-color: orange;
background-size: cover;
background-position: center;
overflow: hidden;
flex: 0.2; /* Container2 chiếm 30% width của Container */
display: flex; /* Đảm bảo các item nằm dọc */
flex-direction: column;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex; /* Hiển thị các phần ngang nhau */
  align-items: center;
  justify-content: center; 
`;

export const SelectLoaiQuanAo = styled.select`
width: 40%;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: white;
font-size: 14px;
color: #333;
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
  width: 40%; 
  transition: transform 0.3s; 

  &:hover {
    transform: scale(1.2);
  }
`;

export const HoverZoomImage = styled.img`
  max-width: 30%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s; /* Add a transition for the transform property */

  &:hover {
    transform: scale(1.2); /* Scale the image to 120% on hover */
  }
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

export const PaginationContainer1 = styled.div`
  display: flex;
  justify-content: right;
  magin-right: 500;
  align-items: center;
  margin-top: 20px;
`;

export const DeleteButton = styled.button`
  background-color: #f72d7a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px; /* Đặt khoảng lề phải là 50px */
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

export const PaginationButtonPage = styled.button`
  /* CSS cho PaginationButton */
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: 0 4px;
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

export const ButtonClose = styled.button`
  width: 145px;
  height: 50px;
  background-color: #f72d7a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 20px;
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