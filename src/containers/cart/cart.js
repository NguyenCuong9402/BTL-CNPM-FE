import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  Container1,
  Container2, Container3,
  UserName,
  Background,
  AvatarImage,
  AvatarContainer,
  Body,
  DropdownMenu,
  DropdownItem,
  Header,
  Navbar,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  Container, TotalColumn, QuantityColumn, PriceColumn, ProductColumn, ButtonColumn, TableCell, TableRow, TableHeader, TableContainer
} from "./cartSyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";

import Modal from "../../modal";

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

function Cart() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);

  const [text_search, setTextSearch] = useState("");
  const [text_search1, setTextSearch1] = useState("");

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
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
  const fetchData = async (text_search) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/product/get-item?text_search=${text_search}`
      );

      if (response.data.code === 200) {
        const formattedData = response.data.data.items.map((item) => ({
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
  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData(text_search);
  }, [text_search]);
  const handleProfile = async () => {
    history.push(`/profile`, {});
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleDetailClick = async (id) => {
    history.push(`/detail/${id}`);
  };

  const handleChangepass = async () => {
    history.push(`/changepass`, {});
  };

  const handleSearch = () => {
    setTextSearch(text_search1);
    setTextSearch1("");
  };

  return (
    <div>
      <Body>
        <Header>
          <Navbar>
            <a href="/index" style={{ fontSize: "40px" }}>
              <i className="bx bxl-xing"></i>Home
            </a>
          </Navbar>
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

          <UserInfoContainer>
            <UserName>{name_user}</UserName>
            <AvatarContainer>
              <AvatarImage src={avatarUrl} alt="Avatar" />
              <DropdownMenu>
                <DropdownItem onClick={handleChangepass}>
                  Đổi mật khẩu
                </DropdownItem>
                <DropdownItem onClick={handleProfile}>Tài Khoản</DropdownItem>
                <DropdownItem onClick={handleLogout}>
                  <img src={logout} alt="Logout" />
                </DropdownItem>
              </DropdownMenu>
            </AvatarContainer>
          </UserInfoContainer>
        </Header>
        <Background></Background>
        <Container>
          <Container1>
            <h2
              style={{
                color: "#FF5722",
                fontSize: "40px",
                marginTop: "100px",
                fontFamily: "Arial",
              }}
            >
              Giỏ Hàng
            </h2>
          </Container1>
          <Container2>
            <TableContainer>
            <TableHeader>
                <TableRow>
                <ButtonColumn>Chọn</ButtonColumn>
                <ProductColumn>Sản phẩm</ProductColumn>
                <QuantityColumn>Số lượng</QuantityColumn>
                <PriceColumn>Đơn giá</PriceColumn>
                <TotalColumn>Số tiền</TotalColumn>
                </TableRow>
            </TableHeader>
            <tbody>
                {data.map((item) => (
                <TableRow
                    key={item.id}
                    // isSelected={selectedRow === item.id}
                    // onClick={() => setSelectedRow(item.id)}
                >
                    <ButtonColumn>{item.selected ? 'X' : ''}</ButtonColumn>
                    <ProductColumn>{item.name_product}</ProductColumn>
                    <QuantityColumn>{item.quantity}</QuantityColumn>
                    <PriceColumn>{item.price}</PriceColumn>
                    <TotalColumn>{item.total}</TotalColumn>
                </TableRow>
                ))}
            </tbody>
            </TableContainer>
          </Container2>
        </Container>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      </Body>
    </div>
  );
}

export default Cart;
