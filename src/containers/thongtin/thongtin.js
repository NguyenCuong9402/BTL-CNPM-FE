import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  AvatarImage,
  AvatarContainer,
  Body,
  DropdownMenu,
  DropdownItem,
  Header,
  Container,
  Container1,
  Container2,
  Navbar,
  CartImage,
  Container3,
  Container4,
  Container5,
  NameContainer4,
  AvatarContainer3,
  Container6, Ct1, Ct2, Ct3, Ct4,
  TextContainer5,
  IconContainer5, ButtonContainer6,
} from "./thongtinStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import cart from "./trolley.png";
import user from "./user.png";
import Modal from "../../modal";

function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();

  const [data, setData] = useState({});

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserDataId(userDataFromLocalStorage.id);
      } else {
      }
    } else {
      window.location.href = "/login";
    }
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
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
      const response = await axios.get(`http://127.0.0.1:5000/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.data.message.status === "success") {
        const formattedData = response.data.data;
        setData(formattedData);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, [data]);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChangepass = async () => {
    history.push(`/changepass`, {});
  };

  const SangGioHang = () => {
    history.push(`/cart`, {});
  };
  return (
    <Body>
      <Header>
        <Navbar>
          <a href="/index" style={{ fontSize: "30px" }}>
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>

        <UserInfoContainer>
          <UserName>{data.name_user}</UserName>
          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem onClick={handleChangepass}>
                Đổi mật khẩu
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <img src={logout} alt="Logout" />
              </DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
          <CartImage
            src={cart}
            alt="Cart"
            className="cart"
            onClick={SangGioHang}
          />
        </UserInfoContainer>
      </Header>
      <Container>
        <Container1>
          <Container3>
            <AvatarContainer3 src={avatarUrl} />
          </Container3>
          <Container4>
            <NameContainer4>{data.name_user}</NameContainer4>
          </Container4>
          <Container5>
            <IconContainer5 src={user} />
            <TextContainer5>Hồ Sơ Của Tôi</TextContainer5>
          </Container5>
          <Container6>  
            <Ct1>
              <ButtonContainer6>Tài khoản</ButtonContainer6>
            </Ct1>
            <Ct2>
              <ButtonContainer6>Mật khẩu</ButtonContainer6>
            </Ct2>
            <Ct3>
              <ButtonContainer6>Lịch sử mua hàng</ButtonContainer6>

            </Ct3>
            <Ct4></Ct4>
          </Container6>
        </Container1>
        <Container2>{/* Nội dung của Container2 */}</Container2>
      </Container>
      {/* <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={handleCloseModal}
      /> */}
    </Body>
  );
}

export default Profile;