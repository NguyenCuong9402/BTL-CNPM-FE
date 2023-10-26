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
  Add1,
  Add2,
  ContainerProfileA,
  ContainerProfileB,
  AddProDuct1,
  AddProDuct2,
  CAdd1, SelectLoaiQuanAo
} from "./add_itemStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import user from "./user.png";
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

function Add_item() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [user_id, setUserDataId] = useState(null);
  const [user_name, setUserName] = useState("");
  const [name, SetName] = useState("");
  const history = useHistory();
  const [data, setData] = useState({});
  const [old_price, setOlde_Price] = useState(0);
  const [giam_gia, setGiam_gia] = useState(0)
  const [describe, setdescribe] = useState("");
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
  }, []);
  const [phan_loai_id, setPhan_loai_id] = useState("");

  const [phanloai, SetType] = useState([]);
  const handleChangePhanLoai = async (event) => {
    const selectedValue = event.target.value;
    setPhan_loai_id(selectedValue);
  };
  useEffect(() => {
    getType();
  }, []);

  // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  const getType = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/product/get-type`
      );

      if (response.data.message.status === "success") {
        SetType(response.data.data);
      } else {
        console.error("Error fetching history data type.");
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
              Thêm sản phẩm mới.
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
            <AddProDuct1>
              <Add1>
                <CAdd1>Tên sản phẩm:</CAdd1>
                <CAdd1>Mô tả sản phẩm: </CAdd1>
                <CAdd1>Giá sản phẩm</CAdd1>
                <CAdd1>Loại sản phẩm</CAdd1>
                <CAdd1>Chọn màu:</CAdd1>
                <CAdd1></CAdd1>
                <CAdd1></CAdd1>
              </Add1>
              <Add2>
                <CAdd1>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    style={{
                      width: "300px", // Đặt chiều rộng của ô Input
                      padding: "10px", // Thêm padding để làm cho nó lớn hơn
                      border: "1px solid #ccc", // Định dạng đường viền
                      borderRadius: "5px", // Định dạng góc bo tròn
                      fontSize: "16px", // Đặt kích thước chữ
                    }}
                  />
                </CAdd1>
                <CAdd1>
                  <input
                    type="text"
                    value={describe}
                    onChange={(e) => setdescribe(e.target.value)}
                    style={{
                      width: "300px", // Đặt chiều rộng của ô Input
                      padding: "10px", // Thêm padding để làm cho nó lớn hơn
                      border: "1px solid #ccc", // Định dạng đường viền
                      borderRadius: "5px", // Định dạng góc bo tròn
                      fontSize: "16px", // Đặt kích thước chữ
                    }}
                  />
                </CAdd1>
                <CAdd1>
                  <input
                    type="text"
                    onChange={(e) => {
                      const numericValue = parseInt(
                        e.target.value.replace(/\D/g, ""),
                        10
                      ); // Lọc giá trị để chỉ giữ lại các ký tự số
                      setOlde_Price(numericValue);
                    }}
                    style={{
                      width: "150px", // Đặt chiều rộng của ô Input
                      padding: "10px", // Thêm padding để làm cho nó lớn hơn
                      border: "1px solid #ccc", // Định dạng đường viền
                      borderRadius: "5px", // Định dạng góc bo tròn
                      fontSize: "16px", // Đặt kích thước chữ
                      marginRight:"10px"

                    }}
                  />
                  <p>Giảm giá:</p>
                  <input
                    type="text"
                    onChange={(e) => {
                      const numericValue = parseInt(
                        e.target.value.replace(/\D/g, ""),
                        10
                      ); // Lọc giá trị để chỉ giữ lại các ký tự số
                      setGiam_gia(numericValue);
                    }}
                    style={{
                      width: "50px", // Đặt chiều rộng của ô Input
                      padding: "10px", // Thêm padding để làm cho nó lớn hơn
                      border: "1px solid #ccc", // Định dạng đường viền
                      borderRadius: "5px", // Định dạng góc bo tròn
                      fontSize: "16px", // Đặt kích thước chữ
                      marginLeft:"10px"
                    }}
                  />
                </CAdd1>
                <CAdd1>
                <SelectLoaiQuanAo
                onChange={handleChangePhanLoai}
                value={phan_loai_id}
              >
                {phanloai.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </SelectLoaiQuanAo>
                </CAdd1>
                <CAdd1>Chọn màu:</CAdd1>
                <CAdd1></CAdd1>
                <CAdd1></CAdd1>
              </Add2>
            </AddProDuct1>
            <AddProDuct2></AddProDuct2>
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

export default Add_item;
