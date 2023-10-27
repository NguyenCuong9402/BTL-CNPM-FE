import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  AvatarImage,
  AvatarContainer,
  Body,
  Header,
  Container,
  Container2,
  Navbar,
  CartImage,
  HoaDon1,
  HoaDon2,
  ContainerProfileA,
  BodyHoaDon,
  ContainerProfileB,
  HoaDonHeader,
  HoaDonCell,
  User,
  CreatedDate,
  ChiTietSanPham,
  TongThanhToan,
  DonViGiaoHang,
  LoiNhan,
  DiaChi,
  LoiNhanCell,
  DiaChiCell,
  UserCell,
  ChiTietSanPhamCell,
  CreatedDateCell,
  DonViGiaoHangCell,
  TongThanhToanCell,
} from "./hoa_donStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import Modal from "../../../modal";

function formatDate(created_date) {
  // Convert timestamp (in seconds) to milliseconds
  const createdDate = new Date(created_date * 1000);
  const hours = createdDate.getHours().toString().padStart(2, "0");
  const minutes = createdDate.getMinutes().toString().padStart(2, "0");
  const seconds = createdDate.getSeconds().toString().padStart(2, "0");
  const day = createdDate.getDate().toString().padStart(2, "0");
  const month = (createdDate.getMonth() + 1).toString().padStart(2, "0"); // Cộng 1 vì tháng được đếm từ 0 đến 11
  const year = createdDate.getFullYear();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const formattedDate = `${day}/${month}/${year}`;
  const formattedCreatedDate = `${formattedTime} ${formattedDate}`;
  return formattedCreatedDate;
}

function HoaDon() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [user_id, setUserDataId] = useState(null);
  const [user_name, setUserName] = useState("");
  const [data, setData] = useState([])
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        window.location.href = "/index";
      } else {
        setUserDataId(userDataFromLocalStorage.id);
        setUserName(userDataFromLocalStorage.name_user);
      }
    } else {
      window.location.href = "/admin/login";
    }
    fetchData()
  }, []);

  useEffect(() => {}, []);
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  const fetchData = async () => {
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/orders/manage`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.message.status === "success") {
        const formattedData = response.data.data.map((item) => ({
          ...item,
          created_date: formatDate(item.created_date), // Format the timestamp

        }));
        setData(formattedData);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  return (
    <Body>
      <Header>
        <Navbar>
          <a href="/admin/main" style={{ fontSize: "30px" }}>
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
        <UserInfoContainer>
          <UserName>{user_name}</UserName>
          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
          </AvatarContainer>
          <CartImage src={logout} alt="logout" onClick={handleLogout} />
        </UserInfoContainer>
      </Header>
      <Container>
        <Container2>
          <ContainerProfileA>
            <h2
              style={{
                marginLeft: "25px",
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Quản lý đơn hàng.
            </h2>
            <p
              style={{
                marginLeft: "25px",
                fontSize: "16px",
                marginTop: "5px",
              }}
            ></p>
          </ContainerProfileA>
          <ContainerProfileB>
            <HoaDon2></HoaDon2>

            <HoaDon1>
              <HoaDonHeader>
                <User>Người mua hàng</User>
                <ChiTietSanPham>Chi tiết đơn hàng</ChiTietSanPham>
                <LoiNhan>Lời nhắn</LoiNhan>
                <DiaChi>Địa chỉ</DiaChi>
                <DonViGiaoHang>Ship</DonViGiaoHang>
                <TongThanhToan>Tổng</TongThanhToan>
                <CreatedDate>Ngày</CreatedDate>
              </HoaDonHeader>
              <HoaDonCell>
              {data.map((item) => (
                <BodyHoaDon>
                <UserCell> {item.user_name}</UserCell>
                <ChiTietSanPhamCell></ChiTietSanPhamCell>
                <LoiNhanCell>{item.loi_nhan}</LoiNhanCell>
                <DiaChiCell>{item.address}, {item.xa}, {item.huyen}, {item.tinh}</DiaChiCell>
                <DonViGiaoHangCell>{item.don_vi_ship} ({item.gia_ship}$)</DonViGiaoHangCell>
                <TongThanhToanCell>{item.tong_thanh_toan}</TongThanhToanCell>
                <CreatedDateCell>{item.created_date}</CreatedDateCell>
              </BodyHoaDon>
              ))}
              </HoaDonCell>
            </HoaDon1>
          </ContainerProfileB>
        </Container2>
      </Container>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </Body>
  );
}

export default HoaDon;
