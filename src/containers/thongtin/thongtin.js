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
  Container6,
  Ct1,
  Ct2,
  Ct3,
  Ct4,
  TextContainer5,
  IconContainer5,
  ButtonContainer6,
  ContainerProfileA,
  ContainerProfileB,
  ContainerProfileB1,
  ContainerProfileB2,
  ContainerProfileB3,
  ColumnProfile1,
  ColumnProfile2,
  ColumnProfile3,
  ColumnProfile4,
  ColumnProfile5,
  ColumnProfile6,
  ColumnProfile7,
  ColumnProfileT1,
  ColumnProfileT2,
  ColumnProfileT3,
  ColumnProfileT4,
  ColumnProfileT5,
  ColumnProfileT6,
  ColumnProfileT7,
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
  const [nameUser, setNameUser] = useState("");
  const [phoneUser, setPhoneUser] = useState("");

  const history = useHistory();

  const [data, setData] = useState({});
  const [activeButton, setActiveButton] = useState(1);
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
        setNameUser(formattedData.name_user)
        setPhoneUser(formattedData.phone)
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
  }, []);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChangepass = async () => {
    history.push(`/changepass`, {});
  };

  const SangGioHang = () => {
    history.push(`/cart`, {});
  };

  const handleInputNameChange = (newName) => {
    setNameUser(newName);
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
            <TextContainer5>Tài khoản</TextContainer5>
          </Container5>
          <Container6>
            <Ct1>
              <ButtonContainer6
                active={activeButton === 1}
                onClick={() => setActiveButton(1)}
              >
                Hồ sơ
              </ButtonContainer6>
            </Ct1>
            <Ct2>
              <ButtonContainer6
                active={activeButton === 2}
                onClick={() => setActiveButton(2)}
              >
                Mật khẩu
              </ButtonContainer6>
            </Ct2>
            <Ct3>
              <ButtonContainer6
                active={activeButton === 3}
                onClick={() => setActiveButton(3)}
              >
                Đơn hàng
              </ButtonContainer6>
            </Ct3>
            <Ct4></Ct4>
          </Container6>
        </Container1>
        <Container2>
          {activeButton === 1 && (
            <React.Fragment>
              <ContainerProfileA>
                <h2
                  style={{
                    marginLeft: "25px",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Hồ Sơ Của Tôi
                </h2>
                <p style={{ marginLeft: "25px", fontSize: "16px" }}>
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </p>
              </ContainerProfileA>
              <ContainerProfileB>
                <ContainerProfileB1>
                  <ColumnProfile1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Tài khoản:
                    </p>
                  </ColumnProfile1>
                  <ColumnProfile6>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Họ tên:
                    </p>
                  </ColumnProfile6>
                  <ColumnProfile2>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Số điện thoại:
                    </p>
                  </ColumnProfile2>
                  <ColumnProfile3>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Giới tính:
                    </p>
                  </ColumnProfile3>
                  <ColumnProfile4>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Ngày sinh:
                    </p>
                  </ColumnProfile4>
                  <ColumnProfile5>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Địa chỉ:
                    </p>
                  </ColumnProfile5>
                  <ColumnProfile7></ColumnProfile7>
                </ContainerProfileB1>
                <ContainerProfileB2>
                  <ColumnProfileT1><p style={{ fontSize: "20px", marginLeft: "15px", color: 'black'  }}>
                      {data.email}
                    </p></ColumnProfileT1>
                  <ColumnProfileT2>
                  <input
                    type="text"
                    value={nameUser}
                    onChange={(e) => handleInputNameChange(e.target.value)}
                  /></ColumnProfileT2>
                  <ColumnProfileT3></ColumnProfileT3>
                  <ColumnProfileT4></ColumnProfileT4>
                  <ColumnProfileT5></ColumnProfileT5>
                  <ColumnProfileT6></ColumnProfileT6>
                  <ColumnProfileT7></ColumnProfileT7>
                </ContainerProfileB2>
                <ContainerProfileB3></ContainerProfileB3>
              </ContainerProfileB>
            </React.Fragment>
          )}
          {activeButton === 2 && <React.Fragment></React.Fragment>}
          {activeButton === 3 && (
            <React.Fragment>
              <div>Oke1</div>
              <div>Oke1</div>
            </React.Fragment>
          )}
        </Container2>
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
