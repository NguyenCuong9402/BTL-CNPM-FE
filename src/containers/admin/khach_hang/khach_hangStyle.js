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
  width: 90%;
  background-color: white; /* Màu nền của Container2 */
  height: 100%; /* Chiều cao 100% */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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

export const HoaDon1 = styled.div`
  flex: 8;
  background-color: blue;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const HoaDonHeader = styled.div`
  flex: 1;
  background-color: red;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
export const HoaDonCell = styled.div`
  flex: 8;
  background-color: blue;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Thêm độ cuộn lăn khi cần */
`;

export const BodyHoaDon = styled.div`
  flex: 1;
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
 
`;

export const CreatedDateCell = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Màu đen với độ trong suốt */
  z-index: 98; /* Đặt z-index nhỏ hơn so với popup */
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 500px;
  width: 700px;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0; /* Màu xanh (sửa mã màu tùy ý) */
  padding: 30px;
  z-index: 99;
  // Thêm các thuộc tính CSS khác cho popup tại đây

  overflow-y: auto; /* Thêm độ cuộn lăn khi cần */
  display: flex;
  flex-direction: column;
`;

export const Popup1 = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;



export const PopupitemName = styled.div`
  flex:4;
  display: flex;
  background-color:white;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

`;
export const PopupitemQuantity = styled.div`
  flex:2;
  display: flex;
  background-color:white;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

`;

export const PopupitemColor = styled.div`
  flex:2;
  display: flex;
  background-color:white;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

`;

export const PopupitemSize = styled.div`
  flex:2;
  display: flex;
  background-color:white;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  // Thêm các thuộc tính CSS cho nút đóng tại đây
`;

export const DonViGiaoHangCell = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const TongThanhToanCell = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const LoiNhanCell = styled.div`
  flex: 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const ChiTietSanPhamCell = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  
`;

export const ActionCell = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  
`;

export const UserCell = styled.div`
  flex: 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);


`;

export const DiaChiCell = styled.div`
  flex: 3;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const CreatedDate = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const DonViGiaoHang = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const TongThanhToan = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const LoiNhan = styled.div`
  flex: 2;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ChiTietSanPham = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Action = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const User = styled.div`
  flex: 2;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const DiaChi = styled.div`
  flex: 3;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const HoaDon2 = styled.div`
  flex: 2;
  background-color: red;
  display: flex;
  flex-direction: column;
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

export const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? '#00f' : '#ccc')}; /* Đổi màu nền dựa trên isOn */
  transition: 0.4s;
  border-radius: 34px;
  transform: translateX(${(props) => (props.isOn ? '26px' : '0')}); /* Thay đổi vị trí dựa trên isOn */
`;

export const ToggleSwitchIndicator = styled.span`
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: ${(props) => (props.isOn ? '30px' : '4px')}; /* Thay đổi vị trí dựa trên isOn */
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  transform: translateX(${(props) => (props.isOn ? '26px' : '0')}); /* Thay đổi vị trí dựa trên isOn */
`;

