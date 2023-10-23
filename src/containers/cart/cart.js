import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  Container1,
  Container2, Container3, Container5,
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
  SearchInput, Checkbox, Container6, LeftContainerProduct,RightContainerProduct,
  SearchButton, QuantityColumnCell, TotalColumnCell, PriceColumnCell, ProductColumnCell, ButtonColumnCell, TableCell,
  Container, TotalColumn, QuantityColumn, PriceColumn, ProductColumn, ButtonColumn, TableRow, TableHeader, TableContainer
} from "./cartSyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";

import Modal from "../../modal";


function Cart() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [online, SetOnline] = useState(false)
  const [text_search, setTextSearch] = useState("");
  const [text_search1, setTextSearch1] = useState("");

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
        SetOnline(true)
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
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/cart_items?text_search=${text_search}`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
      );
    console.log(response)
      if (response.data.message.status === 'success') {
        const formattedData = response.data.data.map((item) => ({
          ...item,
        }));
        setData(formattedData);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  console.log(data)
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
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
    const handleSelectAllClick = () => {
    if (selectAll) {
        // If all rows are currently selected, deselect all.
        setSelectedRows([]);
        setIsDeleteButtonVisible(false);
    } else {
        // If not all rows are selected, select all.
        const allRowIds = data.map((item) => item.id);
        setSelectedRows(allRowIds);
        setIsDeleteButtonVisible(true);
    }
    // Toggle the selectAll state.
    setSelectAll(!selectAll);
    
    };

    const handleRowSelect = (itemId) => {
        // Check if the row is already selected
        if (selectedRows.includes(itemId)) {
          // If selected, remove it from the selectedRows array
          setSelectedRows(selectedRows.filter(id => id !== itemId));
        } else {
          // If not selected, add it to the selectedRows array
          setSelectedRows([...selectedRows, itemId]);
        }
        
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
                marginTop: "30px",
                marginBottom: "10px",
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
                <ButtonColumn><Checkbox
                        type="checkbox"
                        onChange={() => handleSelectAllClick()}
                        /></ButtonColumn>
                <ProductColumn>Sản phẩm</ProductColumn>
                <QuantityColumn>Số lượng</QuantityColumn>
                <PriceColumn>Đơn giá</PriceColumn>
                <TotalColumn>Số tiền</TotalColumn>
                </TableRow>
            </TableHeader>
            <Container5></Container5>
            <tbody>
                {data.map((item) => (
                <TableCell>
                    <ButtonColumn>
                        <Checkbox
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                        />
                    </ButtonColumn>
                    <ProductColumnCell>
                        <LeftContainerProduct>
                            <img src={`http://127.0.0.1:5000/api/v1/picture/${item.product_id}`} alt="Hình ảnh" />

                        </LeftContainerProduct>
                        <RightContainerProduct>
                            <span>{item.name_product}</span>
                        </RightContainerProduct>
                    </ProductColumnCell>
                    <QuantityColumnCell>{item.quantity}</QuantityColumnCell>
                    <PriceColumnCell>{item.price}$</PriceColumnCell>
                    <TotalColumnCell>{item.total}$</TotalColumnCell>
                </TableCell>
                ))}
            </tbody>
            </TableContainer>
            <Container6><span>Oke</span></Container6>
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
