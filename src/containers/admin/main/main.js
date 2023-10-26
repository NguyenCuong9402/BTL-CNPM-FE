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
  RadioButtonGioiTinh,
  CustomDatePicker,
  SelectDiaChi,
  StyledButtonSave,
  ColumnProfileT8,
  ColumnProfile8,
  ContainerProfile2B1,
  ContainerProfile2B2,
  ColumnProfileB1,
  ColumnProfileB2,
  ColumnProfileB2ChuaButtonSave,
  ForgotPasswordLink, SanPham1, SanPham2, SanPham3, SearchBarContainer, SearchInput, SearchButton
} from "./mainStyled";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import cart from "./trolley.png";
import user from "./user.png";
import Modal from "../../../modal";

function Main() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [user_id, setUserDataId] = useState(null);
  const [nameUser, setNameUser] = useState("");
  const [address, setAddressUser] = useState("");
  const [text_search, setTextSearch] = useState("");
  const [text_search1, setTextSearch1] = useState("");
  const [phoneUser, setPhoneUser] = useState("");
  const [gioiTinh, setGioiTinh] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const history = useHistory();

  const [data, setData] = useState({});
  const [activeButton, setActiveButton] = useState(1);

  const [tinh, SetTinh] = useState("");
  const [huyen, SetHuyen] = useState("");
  const [xa, SetXa] = useState("");

  const [DsTinh, SetDsTinh] = useState([]);
  const [DsHuyen, SetDsHuyen] = useState([]);
  const [DsXa, SetDsXa] = useState([]);

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        window.location.href = "/index";
      } else {
        setUserDataId(userDataFromLocalStorage.id);
      }
    } else {
      window.location.href = "/login";
    }
    fetchData();
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
        setNameUser(formattedData.name_user);
        setAddressUser(formattedData.address);
        setPhoneUser(formattedData.phone_number);
        setGioiTinh(formattedData.gender);
        setSelectedDate(new Date(formattedData.birthday));
        SetTinh(formattedData.tinh);
        SetHuyen(formattedData.huyen);
        SetXa(formattedData.xa);
        fetchDiaChi(formattedData.tinh, formattedData.huyen, formattedData.xa);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  const handleSearch = () => {
    setTextSearch(text_search1);
  };
  const fetchDiaChi = async (tinh, huyen, xa) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/user/tim_dia_chi?tinh=${tinh}&huyen=${huyen}&xa=${xa}`
      );
      if (response.data.message.status === "success") {
        const formattedData = response.data.data;
        SetDsTinh(formattedData.tinh);
        SetDsHuyen(formattedData.huyen);
        SetDsXa(formattedData.xa);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  // Call fetchData when the component mounts
  // useEffect(() => {
  //   fetchDiaChi(tinh, huyen, xa);
  // }, []);
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

  const handleInputAddressChange = (newAddress) => {
    setAddressUser(newAddress);
  };

  const handleInputPhoneChange = (newPhone) => {
    setPhoneUser(newPhone);
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleGenderChange = (gender) => {
    setGioiTinh(gender);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const ChooseTinh = (newTinh) => {
    SetTinh(newTinh);
    fetchDiaChi(newTinh, "", "");
    SetHuyen("");
    SetXa("");
  };

  const ChooseHuyen = (tinh, newHuyen) => {
    SetHuyen(newHuyen);
    fetchDiaChi(tinh, newHuyen, "");
    SetXa("");
  };

  const [password, SetPassWord] = useState("");
  const [new_password, SetNewPassWord] = useState("");
  const [confirm_password, SetConfirmPassWord] = useState("");

  const ChangeInforUser = async () => {
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.put(
        `http://127.0.0.1:5000/api/v1/user/update`,
        {
          name_user: nameUser,
          birthday: selectedDate,
          phone_number: phoneUser,
          address: address,
          gender: gioiTinh,
          tinh: tinh,
          huyen: huyen,
          xa: xa,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.message.status === "success") {
        const formattedData = response.data.data;
        setData(formattedData);
        setNameUser(formattedData.name_user);
        setAddressUser(formattedData.address);
        setPhoneUser(formattedData.phone_number);
        setGioiTinh(formattedData.gender);
        setSelectedDate(new Date(formattedData.birthday));
        SetTinh(formattedData.tinh);
        SetHuyen(formattedData.huyen);
        SetXa(formattedData.xa);
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  const ChangePassWordUser = async () => {
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.put(
        `http://127.0.0.1:5000/api/v1/user/change-password`,
        {
          password: password,
          new_password: new_password,
          confirm_password: confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.message.status === "success") {
        SetPassWord("");
        SetNewPassWord("");
        SetConfirmPassWord("");
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  return (
    <Body>
      <Header>
        <Navbar>
          <a href="/index" style={{ fontSize: "30px" }}>
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
        {activeButton === 1 && (
            <React.Fragment>
          <SearchBarContainer>
              <SearchInput
                type="text"
                placeholder="Search..."
                value={text_search1}
                onChange={(e) => setTextSearch1(e.target.value)}
              />
              <SearchButton onClick={handleSearch}>
                <i className="bx bx-search"></i>
              </SearchButton>
            </SearchBarContainer>
            </React.Fragment>)}
        <UserInfoContainer>
          <UserName>{data.name_user}</UserName>
          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
          </AvatarContainer>
          <CartImage src={logout} alt="logout" onClick={handleLogout} />
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
                Sản phẩm
              </ButtonContainer6>
              <ButtonContainer6
                active={activeButton === 4}
                onClick={() => setActiveButton(4)}
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
              <ButtonContainer6
                active={activeButton === 6}
                onClick={() => setActiveButton(6)}
              >
                Thêm nhân viên
              </ButtonContainer6>
            </Ct2>
            <Ct3>
              <ButtonContainer6
                active={activeButton === 3}
                onClick={() => setActiveButton(3)}
              >
                Đơn hàng
              </ButtonContainer6>
              <ButtonContainer6
                active={activeButton === 5}
                onClick={() => setActiveButton(5)}
              >
                Khách hàng
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
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Xin chào Ông Chủ!
                </h2>
                <p
                  style={{
                    marginLeft: "25px",
                    fontSize: "16px",
                    marginTop: "5px",
                  }}
                >
                  Chúc ngài một ngày tốt lành!
                </p>
              </ContainerProfileA>
              <ContainerProfileB>
                <SanPham1></SanPham1>
                <SanPham2>
                  <SanPham3></SanPham3>
                  <SanPham3></SanPham3>
                </SanPham2>
              </ContainerProfileB>
            </React.Fragment>
          )}
          {activeButton === 4 && (
            <React.Fragment>
              <ContainerProfileA>
                <h2
                  style={{
                    marginLeft: "25px",
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Thông tin của tài khoản
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
                  <ColumnProfile4>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Địa chỉ:
                    </p>
                  </ColumnProfile4>
                  <ColumnProfile8>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Địa chỉ bổ sung:
                    </p>
                  </ColumnProfile8>
                  <ColumnProfile2>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Số điện thoại:
                    </p>
                  </ColumnProfile2>
                  <ColumnProfile3>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Ngày sinh:
                    </p>
                  </ColumnProfile3>

                  <ColumnProfile5>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Giới tính:
                    </p>
                  </ColumnProfile5>
                  <ColumnProfile7></ColumnProfile7>
                </ContainerProfileB1>
                <ContainerProfileB2>
                  <ColumnProfileT1>
                    <p
                      style={{
                        fontSize: "20px",
                        marginLeft: "15px",
                        color: "black",
                      }}
                    >
                      {data.email}
                    </p>
                  </ColumnProfileT1>

                  <ColumnProfileT2>
                    <input
                      type="text"
                      value={nameUser}
                      onChange={(e) => handleInputNameChange(e.target.value)}
                      style={{
                        width: "97%", // Đặt chiều rộng của ô Input
                        padding: "10px", // Thêm padding để làm cho nó lớn hơn
                        border: "1px solid #ccc", // Định dạng đường viền
                        borderRadius: "5px", // Định dạng góc bo tròn
                        fontSize: "16px", // Đặt kích thước chữ
                      }}
                    />
                  </ColumnProfileT2>
                  <ColumnProfileT6>
                    <SelectDiaChi
                      value={tinh}
                      onChange={(e) => ChooseTinh(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Thành phố/Tỉnh
                      </option>
                      {DsTinh.map((tinhItem) => (
                        <option key={tinhItem} value={tinhItem}>
                          {tinhItem}
                        </option>
                      ))}
                      {/* Thêm các tùy chọn cho tỉnh tại đây */}
                    </SelectDiaChi>

                    <SelectDiaChi
                      value={huyen}
                      onChange={(e) => ChooseHuyen(tinh, e.target.value)}
                    >
                      <option value="" disabled selected>
                        Quận/ Huyện
                      </option>
                      {DsHuyen.map((huyenItem) => (
                        <option key={huyenItem} value={huyenItem}>
                          {huyenItem}
                        </option>
                      ))}
                      {/* Thêm các tùy chọn cho tỉnh tại đây */}
                    </SelectDiaChi>

                    <SelectDiaChi
                      value={xa}
                      onChange={(e) => SetXa(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Phường/ Xã
                      </option>
                      {DsXa.map((xaItem) => (
                        <option key={xaItem} value={xaItem}>
                          {xaItem}
                        </option>
                      ))}
                      {/* Thêm các tùy chọn cho tỉnh tại đây */}
                    </SelectDiaChi>
                  </ColumnProfileT6>
                  <ColumnProfileT8>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => handleInputAddressChange(e.target.value)}
                      style={{
                        width: "97%", // Đặt chiều rộng của ô Input
                        padding: "10px", // Thêm padding để làm cho nó lớn hơn
                        border: "1px solid #ccc", // Định dạng đường viền
                        borderRadius: "5px", // Định dạng góc bo tròn
                        fontSize: "13px", // Đặt kích thước chữ
                      }}
                    />
                  </ColumnProfileT8>
                  <ColumnProfileT3>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      value={phoneUser}
                      onChange={(e) => {
                        const numericValue = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10); // Loại bỏ các ký tự không phải số và giới hạn độ dài tối đa 10 ký tự
                        handleInputPhoneChange(numericValue);
                      }}
                      style={{
                        width: "97%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                      }}
                    />
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => toggleVisibility()} // Hàm để bật/tắt hiển thị giá trị
                    >
                      👁️
                    </span>
                  </ColumnProfileT3>
                  <ColumnProfileT5>
                    <ColumnProfileT5>
                      <CustomDatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                      />
                    </ColumnProfileT5>
                  </ColumnProfileT5>

                  <ColumnProfileT4>
                    <span
                      style={{
                        marginRight: "5px",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Nam
                    </span>
                    <RadioButtonGioiTinh
                      selected={gioiTinh === 0}
                      onClick={() => handleGenderChange(0)}
                    ></RadioButtonGioiTinh>
                    <span
                      style={{
                        marginRight: "5px",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      Nữ
                    </span>

                    <RadioButtonGioiTinh
                      selected={gioiTinh === 1}
                      onClick={() => handleGenderChange(1)}
                    ></RadioButtonGioiTinh>
                  </ColumnProfileT4>
                  <ColumnProfileT7>
                    <StyledButtonSave onClick={() => ChangeInforUser()}>
                      Lưu
                    </StyledButtonSave>
                  </ColumnProfileT7>
                </ContainerProfileB2>
                <ContainerProfileB3></ContainerProfileB3>
              </ContainerProfileB>
            </React.Fragment>
          )}
          {activeButton === 2 && (
            <React.Fragment>
              <ContainerProfileA>
                <h2
                  style={{
                    marginLeft: "25px",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Hãy bảo vệ tài khoản của bạn!
                </h2>
                <p style={{ marginLeft: "25px", fontSize: "16px" }}>
                  Thay đổi mật khẩu để bảo mật tài khoản
                </p>
              </ContainerProfileA>
              <ContainerProfileB>
                <ContainerProfile2B1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Mật khẩu hiện tại:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Mật khẩu mới:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Xác nhận mật khẩu:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1></ColumnProfileB1>
                  <ColumnProfileB1></ColumnProfileB1>
                </ContainerProfile2B1>
                <ContainerProfile2B1>
                  <ColumnProfileB2>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => SetPassWord(e.target.value)}
                      style={{
                        width: "97%", // Đặt chiều rộng của ô Input
                        padding: "10px", // Thêm padding để làm cho nó lớn hơn
                        border: "1px solid #ccc", // Định dạng đường viền
                        borderRadius: "5px", // Định dạng góc bo tròn
                        fontSize: "13px", // Đặt kích thước chữ
                      }}
                    />
                  </ColumnProfileB2>
                  <ColumnProfileB2>
                    <input
                      type="password"
                      value={new_password}
                      onChange={(e) => SetNewPassWord(e.target.value)}
                      style={{
                        width: "97%", // Đặt chiều rộng của ô Input
                        padding: "10px", // Thêm padding để làm cho nó lớn hơn
                        border: "1px solid #ccc", // Định dạng đường viền
                        borderRadius: "5px", // Định dạng góc bo tròn
                        fontSize: "13px", // Đặt kích thước chữ
                      }}
                    />
                  </ColumnProfileB2>
                  <ColumnProfileB2>
                    <input
                      type="password"
                      value={confirm_password}
                      onChange={(e) => SetConfirmPassWord(e.target.value)}
                      style={{
                        width: "97%", // Đặt chiều rộng của ô Input
                        padding: "10px", // Thêm padding để làm cho nó lớn hơn
                        border: "1px solid #ccc", // Định dạng đường viền
                        borderRadius: "5px", // Định dạng góc bo tròn
                        fontSize: "13px", // Đặt kích thước chữ
                      }}
                    />
                  </ColumnProfileB2>
                  <ColumnProfileB2ChuaButtonSave>
                    <StyledButtonSave onClick={() => ChangePassWordUser()}>
                      Lưu
                    </StyledButtonSave>
                    <ForgotPasswordLink>Quên mật khẩu</ForgotPasswordLink>
                  </ColumnProfileB2ChuaButtonSave>
                  <ColumnProfileB2></ColumnProfileB2>
                </ContainerProfile2B1>
                <ContainerProfile2B2></ContainerProfile2B2>
              </ContainerProfileB>
            </React.Fragment>
          )}
          {activeButton === 3 && (
            <React.Fragment>
              <div>Oke1</div>
              <div>Oke1</div>
            </React.Fragment>
          )}
          {activeButton === 5 && (
            <React.Fragment>
              <div>NGười dùng</div>
              <div>NGười dùng</div>
            </React.Fragment>
          )}

          {activeButton === 6 && (
            <React.Fragment>
              <div>Nhân viên</div>
              <div>Nhân viên</div>
            </React.Fragment>
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

export default Main;