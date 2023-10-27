import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  AvatarImage,
  AvatarContainer,
  Body,
  PaginationButton,
  PaginationButtonPage,
  PaginationInfo,
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
  AddAnh2,
  AddAnh3,
  AddAnh4,
  Image,
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
  FixColumnCell,
  StyledButtonSave,
  ColumnProfileT8,
  ColumnProfile8,
  ContainerProfile2B1,
  ContainerProfile2B2,
  ColumnProfileB1,
  ColumnProfileB2,
  ColumnProfileB2ChuaButtonSave,
  ForgotPasswordLink,
  SanPham1,
  SanPham2,
  SanPham3,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  InnerContainer1,
  InnerContainer2,
  InnerContainer3,
  SelectLoaiQuanAo,
  TableHeader,
  SanPham6,
  SanPham7,
  ButtonColumn,
  Checkbox,
  ProductColumn,
  PhanLoaiColumn,
  QuantityColumn,
  TotalColumn,
  PriceColumn,
  FixColumn,
  TableCell,
  ProductColumnCell,
  LeftContainerProduct,
  RightContainerProduct,
  PhanLoaiColumnCell,
  PriceColumnCell,
  TotalColumnCell,
  QuantityColumnCell,
  ContainerSp1,
  ContainerSp2,
  DeleteButton,
  ButtonAdd,
  Phan2,
  Phan3,
} from "./mainStyled";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import cart from "./trolley.png";
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

  const [order_by, SetOrderBy] = useState("created_date");
  const [data, setData] = useState({});
  console.log(data)
  const [data_sanpham, setDataSanPham] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  const [tinh, SetTinh] = useState("");
  const [huyen, SetHuyen] = useState("");
  const [xa, SetXa] = useState("");

  const [DsTinh, SetDsTinh] = useState([]);
  const [DsHuyen, SetDsHuyen] = useState([]);
  const [DsXa, SetDsXa] = useState([]);

  const [listPage, setListPage] = useState([]);

  const [phanloai, SetType] = useState([]);
  const [phan_loai_id, setPhan_loai_id] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setpageSize] = useState(20);
  const [khoangtien, Setkhoangtien] = useState({
    start: null,
    end: null,
  });
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  const [email_nv, SetEmailNV] = useState("");
  const [sdt_nv, Setsdtnv] = useState("");
  const [ten_nv, set_ten_nv] = useState("");

  const handleSelectAllClick = () => {
    if (selectAll) {
      // If all rows are currently selected, deselect all.
      setSelectedRows([]);
      setIsDeleteButtonVisible(false);
    } else {
      // If not all rows are selected, select all.
      const allRowIds = fullProduct.map((item) => item.id);
      setSelectedRows(allRowIds);
      setIsDeleteButtonVisible(true);
    }
    // Toggle the selectAll state.
    setSelectAll(!selectAll);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };


  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setCurrentPage(1);
    setpageSize(newSize);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };

  const handleChangeSort = async (event) => {
    const selectedValue = event.target.value;
    setSortDirection(selectedValue);
  };

  const handleChangeSapXep = async (event) => {
    const selectedValue = event.target.value;
    SetOrderBy(selectedValue);
  };
  const handlePageClick = async (page) => {
    setCurrentPage(page);
  };

  const handleChangePhanLoai = async (event) => {
    const selectedValue = event.target.value;
    setPhan_loai_id(selectedValue);
  };
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
    fetchDataNguoiDung();
  }, []);

  const CreateNV = async () => {
    try {
      const access_token = localStorage.getItem("accessToken"); // Get access token from local storage
      const response = await axios.post(
        `http://127.0.0.1:5000/api/v1/user/created-admin`,
        {
          name_user: ten_nv,
          email: email_nv,
          phone_number: sdt_nv,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.message.status === "success") {
        SetEmailNV("");
        Setsdtnv("");
        set_ten_nv("");
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  useEffect(() => {
    fetchData(
      currentPage,
      pageSize,
      order_by,
      sortDirection,
      phan_loai_id,
      text_search,
      khoangtien
    );
    getType();
    setIsDeleteButtonVisible(selectedRows.length > 0);

  }, [
    currentPage,
    pageSize,
    order_by,
    sortDirection,
    phan_loai_id,
    text_search,
    khoangtien,
    selectedRows
  ]);

  // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };
  const fetchDataNguoiDung = async () => {
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
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputNameChange = (newName) => {
    setNameUser(newName);
  };

  const handleInputAddressChange = (newAddress) => {
    setAddressUser(newAddress);
  };

  const handleEditClick = (itemId) => {
    history.push(`/admin/fix/${itemId}`);
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

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

  if (file) {
    setImage(file);
  } else {
    setImage(null); // Đặt `image` thành null nếu không có file được chọn
  }
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
  const MoveAddItem = () => {
    history.push(`/admin/add`, {});
  };

  const MoveDonHang = () => {
    history.push(`/admin/order`, {});
  };

  const MoveKhachHang = () => {
    history.push(`/admin/user`, {});
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
  const [fullProduct, setFullProduct] = useState([])
  const fetchData = async (
    page,
    pSize,
    order_by,
    sortDirection,
    phan_loai_id,
    text_search,
    khoangtien
  ) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/v1/product/get-item?page=${page}&page_size=${pSize}&order_by=${order_by}&order=${sortDirection}&phan_loai_id=${phan_loai_id}&type=&text_search=${text_search}`,
        { khoang_tien: khoangtien }
      );

      if (response.data.code === 200) {
        const formattedData = response.data.data.items.map((item) => ({
          ...item,
          created_date: formatDate(item.created_date), // Format the timestamp
        }));
        setDataSanPham(formattedData);
        const formattedData1 = response.data.data.all_product.map((item) => ({
          ...item,
        }));
        setFullProduct(formattedData1)
        setTotalPages(response.data.data.total_pages);
        const countpage = response.data.data.total_pages;
        if (page - 1 === 0) {
          if (countpage - 1 === 0) {
            setListPage([page]);
          } else {
            setListPage([page, page + 1]);
            if (page + 1 < countpage) {
              // Nếu trang sau trang hiện tại không vượt quá tổng số trang
              setListPage([page, page + 1, page + 2]);
            }
          }
        } else {
          setListPage([page - 1, page]);
          if (page < countpage) {
            // Nếu trang hiện tại không vượt quá tổng số trang
            setListPage((prevList) => [...prevList, page + 1]);
          } else {
            if (page - 2 > 0) {
              setListPage((prevList) => [page - 2, ...prevList]);
            }
          }
        }
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
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

  const handleDeleteButtonClick = async () => {
    const access_token = localStorage.getItem("accessToken");
    try {
      const response = await axios.delete(
        "http://127.0.0.1:5000/api/v1/product",
        {
          data: { list_id: selectedRows },
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

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
      alert("Có lỗi xảy ra khi gửi yêu cầu xóa");
    }
  };

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
  const avatarSrc = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`
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
          <a href="/admin/main" style={{ fontSize: "30px" }}>
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
          </React.Fragment>
        )}
        <UserInfoContainer>
          <UserName>{data.name_user}</UserName>
          <AvatarContainer>
            <AvatarImage src={avatarSrc} alt="Avatar" />
          </AvatarContainer>
          <CartImage src={logout} alt="logout" onClick={handleLogout} />
        </UserInfoContainer>
      </Header>
      <Container>
        <Container1>
          <Container3>
            <AvatarContainer3 src={avatarSrc} />
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
                onClick={MoveDonHang}
              >
                Đơn hàng
              </ButtonContainer6>
              <ButtonContainer6
                onClick={MoveKhachHang}
              >
                Khách hàng
              </ButtonContainer6>
            </Ct3>
            <Ct4>
              <ButtonContainer6 onClick={MoveAddItem}>
                Thêm sản phẩm
              </ButtonContainer6>
            </Ct4>
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
                <SanPham1>
                  <TableHeader>
                    <ButtonColumn>
                      <Checkbox
                        type="checkbox"
                        onChange={() => handleSelectAllClick()}
                      />
                    </ButtonColumn>
                    <ProductColumn>Sản phẩm</ProductColumn>
                    <PhanLoaiColumn>Mô tả</PhanLoaiColumn>
                    <QuantityColumn>Giảm giá (%)</QuantityColumn>
                    <PriceColumn>Đơn giá</PriceColumn>
                    <TotalColumn>Ngày tạo</TotalColumn>
                    <FixColumn> Sửa</FixColumn>
                  </TableHeader>
                  <SanPham6>
                    {data_sanpham.map((item) => (
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
                              src={`http://127.0.0.1:5000/api/v1/picture/${item.id}`}
                              alt="Hình ảnh"
                            />
                          </LeftContainerProduct>
                          <RightContainerProduct>
                            <span>{item.name}</span>
                          </RightContainerProduct>
                        </ProductColumnCell>
                        <PhanLoaiColumnCell>{item.describe}</PhanLoaiColumnCell>
                        <QuantityColumnCell>
                          {item.giam_gia}%
                        </QuantityColumnCell>
                        <PriceColumnCell>{item.price}$</PriceColumnCell>
                        <TotalColumnCell>{item.created_date}</TotalColumnCell>
                        <FixColumnCell>
                          <svg
                            onClick={() => handleEditClick(item.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
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
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                            <path d="M16 5l3 3"></path>
                          </svg>{" "}
                        </FixColumnCell>
                      </TableCell>
                    ))}
                  </SanPham6>
                  <SanPham7>
                    <ContainerSp1>
                      {isDeleteButtonVisible && (
                        <DeleteButton onClick={handleDeleteButtonClick}>
                          Xóa
                        </DeleteButton>
                      )}
                    </ContainerSp1>
                    <ContainerSp2>
                      <div>
                        <label
                          htmlFor="pageSizeSelect"
                          style={{ fontWeight: "bold", color: "green" }}
                        >
                          PageSize:{" "}
                        </label>
                        <select
                          id="pageSizeSelect"
                          value={pageSize}
                          onChange={handlePageSizeChange}
                        >
                          <option value={4}>4</option>
                          <option value={12}>12</option>
                          <option value={20}>20</option>
                          <option value={28}>28</option>
                          <option value={40}>40</option>
                        </select>
                      </div>

                      <PaginationButton
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                      >
                        ←
                      </PaginationButton>
                      {listPage.map((page) => (
                        <PaginationButtonPage
                          key={page}
                          onClick={() => handlePageClick(page)}
                          className={page === currentPage ? "active" : ""}
                        >
                          {page}
                        </PaginationButtonPage>
                      ))}
                      <PaginationButton
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      >
                        →
                      </PaginationButton>
                      <PaginationInfo>
                        Page {currentPage} of {totalPages}
                      </PaginationInfo>
                    </ContainerSp2>
                  </SanPham7>
                </SanPham1>
                <SanPham2>
                  <SanPham3>
                    <InnerContainer1>
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          marginRight: "22px",
                        }}
                      >
                        Phân loại
                      </div>
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
                    </InnerContainer1>

                    <InnerContainer1>
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          marginRight: "30px",
                        }}
                      >
                        Sắp xếp
                      </div>
                      <SelectLoaiQuanAo
                        onChange={handleChangeSapXep}
                        value={order_by}
                      >
                        <option key={"created_date"} value={"created_date"}>
                          Ngày
                        </option>
                        <option key={"price"} value={"price"}>
                          Giá
                        </option>
                        <option key={"name"} value={"name"}>
                          Tên
                        </option>
                      </SelectLoaiQuanAo>
                    </InnerContainer1>
                    <InnerContainer2>
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          marginRight: "22px",
                        }}
                      >
                        Xếp theo
                      </div>
                      <SelectLoaiQuanAo
                        onChange={handleChangeSort}
                        value={sortDirection}
                      >
                        <option key={"desc"} value={"desc"}>
                          Giảm dần
                        </option>
                        <option key={"asc"} value={"asc"}>
                          Tăng dần
                        </option>
                      </SelectLoaiQuanAo>
                    </InnerContainer2>
                    <InnerContainer3>
                      <input
                        type="text"
                        placeholder="Giá đầu"
                        onChange={(e) => {
                          const numericValue = parseInt(
                            e.target.value.replace(/\D/g, ""),
                            10
                          ); // Lọc giá trị để chỉ giữ lại các ký tự số
                          Setkhoangtien({ ...khoangtien, start: numericValue });
                        }}
                        style={{
                          marginRight: "10px", // Khoảng cách giữa ô input và ô kế tiếp
                          padding: "8px", // Để làm cho ô input dễ đọc hơn
                          width: "120px",
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Giá cuối"
                        onChange={(e) => {
                          const numericValue = parseInt(
                            e.target.value.replace(/\D/g, ""),
                            10
                          ); // Lọc giá trị để chỉ giữ lại các ký tự số
                          Setkhoangtien({ ...khoangtien, end: numericValue });
                        }}
                        style={{
                          padding: "8px", // Để làm cho ô input dễ đọc hơn
                          width: "120px",
                        }}
                      />
                    </InnerContainer3>
                  </SanPham3>
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
                        width: "50%", // Đặt chiều rộng của ô Input
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
                        width: "50%", // Đặt chiều rộng của ô Input
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
                        width: "50%",
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
                  <Phan2>
                    <AddAnh2>
                      {" "}
                      {image ? (
                        <Image
                          src={URL.createObjectURL(image)}
                          alt="Selected Image"
                        />
                      ) : (
                        <svg
                          style={{ width: "1000%", height: "100%" }}
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
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
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
                  </Phan2>
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
          {activeButton === 5 && (
            <React.Fragment>
              <div>NGười dùng</div>
              <div>NGười dùng</div>
            </React.Fragment>
          )}

          {activeButton === 6 && (
            <React.Fragment>
              <ContainerProfileA>
                <h2
                  style={{
                    marginLeft: "25px",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  Tạo tài khoản cho nhân viên!
                </h2>
                <p style={{ marginLeft: "25px", fontSize: "16px" }}></p>
              </ContainerProfileA>
              <ContainerProfileB>
                <ContainerProfile2B1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Email nhân viên:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Số điện thoại:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1>
                    <p style={{ fontSize: "20px", marginRight: "15px" }}>
                      Tên nhân viên:
                    </p>
                  </ColumnProfileB1>
                  <ColumnProfileB1></ColumnProfileB1>
                  <ColumnProfileB1></ColumnProfileB1>
                </ContainerProfile2B1>
                <ContainerProfile2B1>
                  <ColumnProfileB2>
                    <input
                      type="email"
                      value={email_nv}
                      onChange={(e) => SetEmailNV(e.target.value)}
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
                      type="text"
                      value={sdt_nv}
                      onChange={(e) => Setsdtnv(e.target.value)}
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
                      type="text"
                      value={ten_nv}
                      onChange={(e) => set_ten_nv(e.target.value)}
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
                    <StyledButtonSave onClick={() => CreateNV()}>
                      Tạo
                    </StyledButtonSave>
                  </ColumnProfileB2ChuaButtonSave>
                  <ColumnProfileB2></ColumnProfileB2>
                </ContainerProfile2B1>
                <ContainerProfile2B2></ContainerProfile2B2>
              </ContainerProfileB>
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
