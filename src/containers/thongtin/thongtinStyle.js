import React from 'react';
import styled, { keyframes } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  width: 80%;
  display: flex;
  flex-direction: column;

`;

export const Container1 = styled.div`
  flex: 2; /* Container1 chiếm 30% chiều rộng của Container cha */
  background-color: green; /* Màu nền của Container1 */
  width: 100%; /* Chiều cao 100% */
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
  font-size: 15px; /* Font size 30px */
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
  background-color: white; /* Màu nền của Ct4 */
  width: 100%;
`;

export const ButtonContainer6 = styled.button`
  text-align: center;
  margin-left: 70px;
  font-size: 16px; /* Kích thước font chữ */
  margin-top: 10px;
  background-color: white;
  color: ${props => (props.active ? 'orange' : 'black')};
  border: none; /* Loại bỏ viền */
  cursor: pointer; /* Biểu tượng con trỏ khi hover nút */
`;


export const Container2 = styled.div`
  flex: 8; /* Container2 chiếm 70% chiều rộng của Container cha */
  background-color: white; /* Màu nền của Container2 */
  height: 100%; /* Chiều cao 100% */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerProfileA = styled.div`
  flex: 2; 
  background-color: white; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 10px solid #ccc; /* Thêm viền 1px với màu xám (#ccc) */
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

export const ContainerProfileB = styled.div`
  flex: 8;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  
`;

export const ContainerProfile2B1 = styled.div`
  flex: 3; /* ContainerProfileB1 chiếm 20% tỷ lệ flex của ContainerProfileB */
  background-color: #f0f0f0; /* Màu nền của ContainerProfileB1 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColumnProfileB1 = styled.div`
  flex: 20;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnProfileB2 = styled.div`
  flex: 20;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ColumnProfileB2ChuaButtonSave = styled.div`
  flex: 20;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const ForgotPasswordLink = styled.span`
  margin-left: 30px;
  transition: color 0.3s, text-decoration 0.3s;
  color: blue;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;



export const ContainerProfile2B2 = styled.div`
  flex: 4; /* ContainerProfileB1 chiếm 20% tỷ lệ flex của ContainerProfileB */
  background-color: #f0f0f0; /* Màu nền của ContainerProfileB1 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export const ContainerProfileB1 = styled.div`
  flex: 2; /* ContainerProfileB1 chiếm 20% tỷ lệ flex của ContainerProfileB */
  background-color: #f0f0f0; /* Màu nền của ContainerProfileB1 */
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColumnProfile1 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnProfile2 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const ColumnProfile3 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnProfile4 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;  
`;
export const ColumnProfile5 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const ColumnProfile6 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnProfile8 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnProfile7 = styled.div`
  flex: 9; 
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerProfileB2 = styled.div`
  flex: 5; /* ContainerProfileB2 chiếm 60% tỷ lệ flex của ContainerProfileB */
  background-color: white; /* Màu nền của ContainerProfileB2 */
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColumnProfileT1 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ColumnProfileT2 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
export const ColumnProfileT3 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ColumnProfileT4 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;  
  flex-direction: row;
`;

export const RadioButtonGioiTinh = ({ selected, onClick }) => (
  <div
    style={{
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: selected ? "2px solid #ff0000" : "2px solid #000",
      backgroundColor: selected ? "#ff0000" : "#fff",
      cursor: "pointer",
      marginRight: "50px",
      position: "relative",
    }}
    onClick={onClick}
  >
    {selected && (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#ff0000",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    )}
  </div>
);

export const ColumnProfileT5 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 200px; // Điều chỉnh kích thước của ô chọn lịch
  height: 50px;
  padding: 10px;
  font-size: 20px;
  
  .react-datepicker__current-month {
    font-size: 20px; // Điều chỉnh font size của tháng
  }

  .react-datepicker__day {
    width: 40px; // Điều chỉnh kích thước của số ngày
    height: 40px;
    font-size: 16px; // Điều chỉnh font size của số
  }

  .react-datepicker__day--selected {
    background-color: #ff0000; // Đổi màu nền khi ngày được chọn
  }
`;

export const ColumnProfileT6 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

`;

export const SelectDiaChi = styled.select`
  border: 1px solid #ccc;
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  margin-right: 20px;
  &:focus {
    outline: none;
    border: 1px solid #007bff; /* Màu viền khi ô select được focus */
  }
`;

export const ColumnProfileT8 = styled.div`
  flex: 13;
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

`;


export const ColumnProfileT7 = styled.div`
  flex: 9; 
  background-color: #f0f0f0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledButtonSave = styled.button`
  background-color: orange;
  color: white;
  border: none;
  width: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6600;
  }
`;

export const ContainerProfileB3 = styled.div`
  flex: 3; /* ContainerProfileB3 chiếm 20% tỷ lệ flex của ContainerProfileB */
  background-color: blue; /* Màu nền của ContainerProfileB3 */
  width: 20%;
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
