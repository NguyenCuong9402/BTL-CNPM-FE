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
  Popup,
  CloseButton,
  Overlay,
  Popup1,
  PopupitemColor,
  PopupitemSize,
  PopupitemQuantity,
  PopupitemName,
  Action,
  ActionCell,
  ToggleSwitchIndicator,
  ToggleSwitchSlider,
  ToggleSwitchInput,
  ToggleSwitchWrapper,
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

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput type="checkbox" checked={isOn} onChange={onToggle} />
      <ToggleSwitchSlider className="slider" isOn={isOn} />
      <ToggleSwitchIndicator isOn={isOn} />
    </ToggleSwitchWrapper>
  );
};

function HoaDon() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [user_id, setUserDataId] = useState(null);
  const [user_name, setUserName] = useState("");
  const [data, setData] = useState([]);

  const [orderItems, setOrderItems] = useState([]);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [showPopup, setShowPopup] = useState(false);

  function openPopup(list) {
    setShowPopup(true);
    setOrderItems(list);
  }

  function closePopup() {
    setShowPopup(false);
    setOrderItems([]);
  }

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
    fetchData();
  }, []);

  useEffect(() => {}, []);
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/admin/login";
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

  const handleToggle = async (trang_thai, id) => {
    if (trang_thai) {
      setModalMessage("Đơn hàng đã được xếp!");
      setModalOpen(true);
    } else {
      try {
        const access_token = localStorage.getItem("accessToken");
        const response = await axios.put(
          `http://127.0.0.1:5000/api/v1/orders/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
  
        if (response.data.message.status === "success") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
          fetchData()
        }
        setModalMessage(response.data.message.text);
        setModalOpen(true);
  
        console.log("Dữ liệu đã được gửi thành công:", response.data);
      } catch (error) {
        // Xử lý lỗi ở đây nếu cần.
  
        console.error("Lỗi khi gửi dữ liệu:", error);
      }
    }
  };

  console.log(data);

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
            <HoaDon1>
              <HoaDonHeader>
                <User>Người mua hàng</User>
                <DiaChi>Địa chỉ</DiaChi>
                <DonViGiaoHang>Ship</DonViGiaoHang>
                <TongThanhToan>Tổng</TongThanhToan>
                <CreatedDate>Ngày</CreatedDate>
                <ChiTietSanPham>Chi tiết đơn hàng</ChiTietSanPham>
                <Action>Tình trạng</Action>
                <LoiNhan>Lời nhắn</LoiNhan>
              </HoaDonHeader>
              <HoaDonCell>
                {data.map((item) => (
                  <BodyHoaDon>
                    <UserCell>{item.user_name} </UserCell>
                    <DiaChiCell>
                      {item.address}, {item.xa}, {item.huyen}, {item.tinh}
                    </DiaChiCell>
                    <DonViGiaoHangCell>
                      {item.don_vi_ship} ({item.gia_ship}$)
                    </DonViGiaoHangCell>
                    <TongThanhToanCell>
                      {item.tong_thanh_toan}
                    </TongThanhToanCell>
                    <CreatedDateCell>{item.created_date}</CreatedDateCell>
                    <ChiTietSanPhamCell
                      onClick={() => openPopup(item.order_items)}
                    >
                      Xem Chi Tiết
                    </ChiTietSanPhamCell>
                    <ActionCell>
                      <ToggleSwitch
                        isOn={item.trang_thai}
                        onToggle={() => handleToggle(item.trang_thai, item.id)}
                      />
                    </ActionCell>{" "}
                    <LoiNhanCell>{item.loi_nhan}</LoiNhanCell>
                  </BodyHoaDon>
                ))}
              </HoaDonCell>
            </HoaDon1>
          </ContainerProfileB>
          {showPopup && (
            <>
              <Overlay />
              <Popup>
                <CloseButton onClick={closePopup}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </CloseButton>
                <Popup1>
                  <PopupitemName>Tên</PopupitemName>
                  <PopupitemColor>Màu</PopupitemColor>
                  <PopupitemQuantity>SL</PopupitemQuantity>
                  <PopupitemSize>Size</PopupitemSize>
                </Popup1>
                {orderItems.map((item) => (
                  <Popup1>
                    <PopupitemName>{item.product_name}</PopupitemName>
                    <PopupitemColor>{item.color}</PopupitemColor>
                    <PopupitemQuantity>{item.size}</PopupitemQuantity>
                    <PopupitemSize>{item.quantity}</PopupitemSize>
                  </Popup1>
                ))}
              </Popup>
            </>
          )}
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
