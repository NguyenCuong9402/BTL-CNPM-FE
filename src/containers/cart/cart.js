import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  Container1,
  Container2,
  Container3,
  Container5,
  DeleteButton,
  UserName,
  Background,
  AvatarImage,
  AvatarContainer,
  BuyButton,
  Body,
  DropdownMenu,
  DropdownItem,
  Header,
  Navbar,
  SearchBarContainer,
  SearchInput,QuantityInput,
  Checkbox,
  Container6,
  LeftContainerProduct,
  RightContainerProduct,
  TBody,
  SearchButton,
  QuantityColumnCell,
  TotalColumnCell,
  PriceColumnCell,
  ProductColumnCell,
  ButtonColumnCell,
  TableCell,
  Container,
  TotalColumn,
  QuantityColumn,
  PriceColumn,
  ProductColumn,
  ButtonColumn,
  TableRow, PhanLoaiColumn, PhanLoaiColumnCell,
  TableHeader,TotalText, TotalAmount,
  TableContainer,
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
  const [online, SetOnline] = useState(false);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [tong_tien, setTongTien] = useState(0)
  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
        SetOnline(true);
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
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/cart_items`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log(response);
      if (response.data.message.status === "success") {
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
  
  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
    tinh_tong()
    setIsDeleteButtonVisible(selectedRows.length > 0);

  }, [selectedRows, tong_tien]);
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
      setSelectedRows(selectedRows.filter((id) => id !== itemId));
    } else {
      // If not selected, add it to the selectedRows array
      setSelectedRows([...selectedRows, itemId]);
    }
  };

  const tinh_tong = async () => {
    const access_token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/cart_items/get-total', {
        list_id: selectedRows, // Truyền dữ liệu trực tiếp
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
  
      if (response.data.message.status === "success") {
        setTongTien(response.data.data);
      } else {
        setModalMessage(response.data.message.text);
        setModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi gửi yêu cầu tính tổng');
    }
  };

  const handleDeleteButtonClick = async () => {
    const access_token = localStorage.getItem("accessToken");
    try {
      const response = await axios.delete('http://127.0.0.1:5000/api/v1/cart_items', {
        data: { list_id: selectedRows },
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.message.status === "success") {
        setModalMessage(response.data.message.text);
        setModalOpen(true);
        // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
        fetchData();
        setSelectedRows([]); // Đặt lại selectedRows sau khi xóa
        setSelectAll(false); // Đặt lại selectAll sau khi xóa
      } else {
        setModalMessage(response.data.message.text);
        setModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi gửi yêu cầu xóa');
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    const access_token = localStorage.getItem("accessToken");
    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/v1/cart_items/${itemId}`, {
        new_quantity: newQuantity, // Sử dụng giá trị newQuantity trực tiếp
      }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.data.message.status === "success"){

        fetchData();
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi gửi yêu cầu thay đổi gì đó');
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
                <ButtonColumn>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleSelectAllClick()}
                  />
                </ButtonColumn>
                <ProductColumn>Sản phẩm</ProductColumn>
                <PhanLoaiColumn></PhanLoaiColumn>
                <QuantityColumn>Số lượng</QuantityColumn>
                <PriceColumn>Đơn giá</PriceColumn>
                <TotalColumn>Số tiền</TotalColumn>
              </TableRow>
            </TableHeader>
            <Container5></Container5>
            <TBody>
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
                      <img
                        src={`http://127.0.0.1:5000/api/v1/picture/${item.product_id}`}
                        alt="Hình ảnh"
                      />
                    </LeftContainerProduct>
                    <RightContainerProduct>
                      <span>{item.name_product}</span>
                    </RightContainerProduct>
                  </ProductColumnCell>
                  <PhanLoaiColumnCell>Loại hàng: {item.color}, {item.size}</PhanLoaiColumnCell>
                  <QuantityColumnCell>
                    <QuantityInput
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const numericValue = parseInt(e.target.value.replace(/\D/g, ''), 10);
                        handleQuantityChange(item.id, numericValue); 
                      }}
                    />
                  </QuantityColumnCell>
                  <PriceColumnCell>{item.price}$</PriceColumnCell>
                  <TotalColumnCell>{item.total}$</TotalColumnCell>
                </TableCell>
              ))}
            </TBody>
          </TableContainer>
        </Container2>
        <Container6>
          {isDeleteButtonVisible && <DeleteButton onClick={handleDeleteButtonClick}>Xóa hàng</DeleteButton>}
          <TotalText>Tổng tiền:</TotalText>
          <TotalAmount>{tong_tien} $ </TotalAmount>
          <BuyButton>Mua hàng</BuyButton>
        </Container6>
      </Container>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </Body>
  );
}

export default Cart;
