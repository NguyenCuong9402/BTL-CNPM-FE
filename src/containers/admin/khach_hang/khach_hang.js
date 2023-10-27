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
} from "./khach_hangStyle";
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
  const formattedDate = `${year}-${month}-${day}`;
  const formattedCreatedDate = `${formattedDate}`;
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

function Khach_Hang() {
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

  const [order_by, setOrder_by] = useState("desc"); // Mặc định là desc

 

  const toggleOrder = () => {
    // Khi người dùng bấm, thay đổi trạng thái từ 'desc' sang 'asc' hoặc ngược lại
    const newOrder = order_by === 'desc' ? 'asc' : 'desc';
    setOrder_by(newOrder);
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
    fetchData(order_by);
  }, [order_by]);

  useEffect(() => {}, []);
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  const fetchData = async (order_by) => {
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/user/list-user?order_by=${order_by}`,
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
          fetchData();
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

  function splitEmailIntoLines(email, maxLineLength) {
    const lines = [];
    for (let i = 0; i < email.length; i += maxLineLength) {
      lines.push(email.slice(i, i + maxLineLength));
    }
    return lines.join("\n");
  }

  

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
              Danh sách khách hàng.
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
                <User>Tên</User>
                <DiaChi>Địa chỉ</DiaChi>
                <DonViGiaoHang>Số điện thoại</DonViGiaoHang>
                <TongThanhToan>Đăng ký</TongThanhToan>
                <CreatedDate>Ngày Sinh</CreatedDate>
                <ChiTietSanPham>Giới tính</ChiTietSanPham>
                <Action onClick={toggleOrder}>
                  Đã tiêu ($)
                  {order_by === 'desc' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-arrow-down-filled"
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
                    <path
                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>):(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-arrow-up-filled"
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
                    <path
                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  )}
                </Action>
                <LoiNhan>Email</LoiNhan>
              </HoaDonHeader>
              <HoaDonCell>
                {data.map((item) => (
                  <BodyHoaDon>
                    <UserCell>{item.name_user} </UserCell>
                    <DiaChiCell>
                      {item.address}, {item.xa}, {item.huyen}, {item.tinh}
                    </DiaChiCell>
                    <DonViGiaoHangCell>{item.phone_number}</DonViGiaoHangCell>
                    <TongThanhToanCell>{item.created_date}</TongThanhToanCell>
                    <CreatedDateCell>{item.birthday}</CreatedDateCell>
                    <ChiTietSanPhamCell>
                      {item.gender === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-gender-androgyne"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M13 11l6 -6"></path>
                          <path d="M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                          <path d="M19 9v-4h-4"></path>
                          <path d="M16.5 10.5l-3 -3"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-gender-female"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                          <path d="M12 14v7"></path>
                          <path d="M9 18h6"></path>
                        </svg>
                      )}
                    </ChiTietSanPhamCell>
                    <ActionCell>
                      {/* <ToggleSwitch
                        isOn={item.trang_thai}
                        onToggle={() => handleToggle(item.trang_thai, item.id)}
                      /> */}
                      {item.count_money_buy}
                    </ActionCell>{" "}
                    <LoiNhanCell>
                      {" "}
                      {splitEmailIntoLines(item.email, 20)}
                    </LoiNhanCell>
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

export default Khach_Hang;
