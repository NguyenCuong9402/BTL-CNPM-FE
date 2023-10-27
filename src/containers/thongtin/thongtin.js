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
  Ct1, AddAnh2, AddAnh3, AddAnh4, Image,
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
  ColumnProfileB2ChuaButtonSave, ForgotPasswordLink, ButtonAdd
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
  const [address, setAddressUser] = useState("");

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
        setUserDataId(userDataFromLocalStorage.id);
      } else {
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

  const ChangePassWordUser = async () =>{
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.put(
        `http://127.0.0.1:5000/api/v1/user/change-password`,
        {
          password: password,
          new_password: new_password,
          confirm_password: confirm_password
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.message.status === "success") {
        SetPassWord("")
        SetNewPassWord("")
        SetConfirmPassWord("")
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const Thayavatar = async () => {
    try {
      const access_token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("file", image);
      const response = await axios.post(
        `http://127.0.0.1:5000/api/v1/picture/avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "multipart/form-data", // Đảm bảo set header 'Content-Type' là 'multipart/form-data'
          },
        }
      );

      if (response.data.message.status === "success") {
        setImage(null)
        window.location.reload();
        
        // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);

      console.log("Dữ liệu đã được gửi thành công:", response.data);
    } catch (error) {
      // Xử lý lỗi ở đây nếu cần.

      console.error("Lỗi khi gửi dữ liệu:", error);
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

        <UserInfoContainer>
          <UserName>{data.name_user}</UserName>
          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              
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
                    fontFamily: "Arial, sans-serif"
                  }}
                >
                  Hồ Sơ Của Tôi
                </h2>
                <p style={{ marginLeft: "25px", fontSize: "16px", marginTop: '5px' }}>
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
                <ContainerProfileB3>
                <AddAnh2>
                {" "}
                {image ? (
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="Selected Image"
                  />
                ) : (
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-photo-filled"
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
                      d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </AddAnh2>
              <AddAnh3>
                {" "}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </AddAnh3>
              <AddAnh4>
                <ButtonAdd onClick={Thayavatar}>Thay avatar</ButtonAdd>
              </AddAnh4>

                </ContainerProfileB3>
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

export default Profile;
