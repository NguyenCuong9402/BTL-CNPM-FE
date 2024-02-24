import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  Container1,
  PaginationButtonPage,
  DiscountTag,
  UserName,
  Container2,
  Container3,
  InnerContainer,
  InnerContainer2,
  Background,
  Image,
  SoldCount,
  Price,
  ItemInfo,
  ItemInfo1,
  AvatarImage,
  CartImage,
  DollarSign,
  NameProduct,
  AvatarContainer,
  Body,
  SelectLoaiQuanAo,
  InnerContainer1,
  DropdownMenu,
  InnerContainer3,
  DropdownItem,
  Header,
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
  Navbar,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  Container,
  GridContainer,
  GridItem, 
} from "./homeStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import logout from "./logout.png";
import cart from "./trolley.png";

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

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [order_by, SetOrderBy] = useState("created_date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setpageSize] = useState(18);
  const [text_search, setTextSearch] = useState("");
  const [text_search1, setTextSearch1] = useState("");
  const [online, SetOnline] = useState(false);
  const [listPage, setListPage] = useState([]);

  const [phanloai, SetType] = useState([]);
  const [phan_loai_id, setPhan_loai_id] = useState("");

  const [khoangtien, Setkhoangtien] = useState({
    start: null,
    end: null,
  });

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
        SetOnline(true);
      } else {
        window.location.href = "/admin/main";

      }
    }
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
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

  const fetchData = async (page, pSize, order_by, sortDirection, phan_loai_id, text_search, khoangtien) => {
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
        setData(formattedData);
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
  // Call fetchData when the component mounts
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
  }, [
    currentPage,
    pageSize,
    order_by,
    sortDirection,
    phan_loai_id,
    text_search,
    khoangtien,
  ]);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };
  const handleProfile = async () => {
    history.push(`/profile`, {});
  };
  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setCurrentPage(1);
    setpageSize(newSize);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDetailClick = async (id) => {
    history.push(`/detail/${id}`);
  };

  const handleSearch = () => {
    setTextSearch(text_search1);
    setTextSearch1("");
  };

  const handlePageClick = async (page) => {
    setCurrentPage(page);
  };
  const handleChangePhanLoai = async (event) => {
    const selectedValue = event.target.value;
    setPhan_loai_id(selectedValue);
  };
  const handleChangeSapXep = async (event) => {
    const selectedValue = event.target.value;
    SetOrderBy(selectedValue);
  };

  const handleChangeSort = async (event) => {
    const selectedValue = event.target.value;
    setSortDirection(selectedValue);
  };

  const SangGioHang = () => {
    history.push(`/cart`, {});
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

          {online ? (
            <UserInfoContainer>
              <UserName>{name_user}</UserName>
              <AvatarContainer>
                <AvatarImage src={avatarUrl} alt="Avatar" />
                <DropdownMenu>
                  <DropdownItem onClick={handleProfile}>Tài Khoản</DropdownItem>
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
          ) : (
            <Navbar>
              <a href="/login" style={{ fontSize: "30px" }}>
                Đăng Nhập
              </a>
            </Navbar>
          )}
        </Header>
        <Background></Background>
        <Container>
          <Container2>
            <InnerContainer1 style={{marginTop:"70px"}}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginRight: "20px",
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
              <SelectLoaiQuanAo onChange={handleChangeSapXep} value={order_by}>
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
                  width:"150px"
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
                  padding: "8px", 
                  width:"150px"

                }}
              />
            </InnerContainer3>
          </Container2>
          <Container1>
            <Container3>
              <GridContainer>
                {data.map((item) => (
                  <GridItem
                    key={item.id}
                    onClick={() => handleDetailClick(item.id)}
                  >
                    <img
                      src={`http://127.0.0.1:5000/api/v1/picture/${item.id}`}
                      alt="Hình ảnh"
                    />
                    {item.giam_gia > 0 && (
                      <DiscountTag>-{item.giam_gia}%</DiscountTag>
                    )}
                    <ItemInfo>
                      <NameProduct>{item.name}</NameProduct>
                      <ItemInfo1>
                        <Price>
                          <DollarSign>$</DollarSign>
                          {item.price}
                        </Price>
                        <SoldCount>đã bán: {item.sold_count}</SoldCount>
                      </ItemInfo1>
                    </ItemInfo>
                  </GridItem>
                ))}
              </GridContainer>
            </Container3>
            <PaginationContainer>
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
                  <option value={18}>18</option>
                  <option value={36}>36</option>
                  <option value={72}>72</option>
                </select>
              </div>

              <PaginationButton
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
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
                Next
              </PaginationButton>
              <PaginationInfo>
                Page {currentPage} of {totalPages}
              </PaginationInfo>
            </PaginationContainer>
          </Container1>
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

export default Home;
