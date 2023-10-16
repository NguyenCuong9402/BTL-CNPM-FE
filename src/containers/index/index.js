import React, { useState, useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer, Container1,
  UserName,
  Background,Image,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  Header, PaginationContainer, PaginationButton, PaginationInfo,
  Navbar, 
  Container, GridContainer, GridItem
} from "./indexStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import {Button } from "bootstrap";
import Modal from '../../modal';

function formatDate(created_date) {
  // Convert timestamp (in seconds) to milliseconds
  const createdDate = new Date(created_date * 1000);
  const hours = createdDate.getHours().toString().padStart(2, '0');
  const minutes = createdDate.getMinutes().toString().padStart(2, '0');
  const seconds = createdDate.getSeconds().toString().padStart(2, '0');
  const day = createdDate.getDate().toString().padStart(2, '0');
  const month = (createdDate.getMonth() + 1).toString().padStart(2, '0'); // Cộng 1 vì tháng được đếm từ 0 đến 11
  const year = createdDate.getFullYear();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const formattedDate = `${day}/${month}/${year}`;
  const formattedCreatedDate = `${formattedTime} ${formattedDate}`;
  return formattedCreatedDate;
}


function Index() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setpageSize] = useState(9);
  const [text_search, setTextSearch] = useState('');

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
      } else {
      }
    } else {
      history.push("/login"); // Điều hướng đến màn hình đăng nhập
    }
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  
  const fetchData = async (page, pSize, sortDirection, text_search) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/product?page=${page}&page_size=${pSize}&order=${sortDirection}&text_search=${text_search}`
      );

      if (response.data.code === 200) {
        const formattedData = response.data.data.items.map((item) => ({
          ...item,
          created_date: formatDate(item.created_date), // Format the timestamp
        }));
        setData(formattedData);
        setTotalPages(response.data.data.total_pages);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData(currentPage, pageSize, sortDirection, text_search);

    setIsDeleteButtonVisible(selectedRows.length > 0);

  }, [currentPage, pageSize, sortDirection,text_search, selectedRows]);

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
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
  const handleProfile = async () =>{
    history.push(`/profile`, { });
  };
  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setpageSize(newSize);
    // You may also want to reset the current page to 1 here
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  /* Tạo select Row */
/*Delete*/

// Function to handle row selection
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

const handleDeleteButtonClick = async () => {
  const access_token = localStorage.getItem("accessToken");
  try {
    const response = await axios.delete('http://127.0.0.1:5000/api/v1/cau_do', {
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
      fetchData(currentPage, pageSize, sortDirection, text_search);
      setSelectedRows([]); // Đặt lại selectedRows sau khi xóa
      setSelectAll(false); // Đặt lại selectAll sau khi xóa
    } else if (response.data.message.status === "error") {
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    }
  } catch (error) {
    console.error(error);
    alert('Có lỗi xảy ra khi gửi yêu cầu xóa');
  }
};


const handleFixClick = async(id) => {
  history.push(`/admin/fix`, { cau_do_id: id });
}


  const handleChangepass = async () =>{
    history.push(`/changepass`, { });
  };

  return (
    <div>
      <Header>
        <Navbar>
          <a href="/index">
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
        <form action="" className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={text_search}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button><i className='bx bx-search'></i></button>
        </form>
        <UserInfoContainer>
          <UserName>{name_user}</UserName>

          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
            <DropdownItem onClick={handleChangepass}>Đổi mật khẩu</DropdownItem>
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
      <GridContainer>
      {data.map(item => (
        <GridItem key={item.id} onClick={() => handleFixClick(item.id)}>
          <Image src={`http://127.0.0.1:5000/api/v1/picture/${item.id}`} alt="Hình ảnh" />
          <h3>{item.price}</h3>
          <p>{item.name}</p>
        </GridItem>
      ))}
    </GridContainer>
    </Container1>
    <PaginationContainer>
    <div>
      <label htmlFor="pageSizeSelect" style={{ fontWeight: 'bold', color: 'green' }}>PageSize: </label>
          <select
            id="pageSizeSelect"
            value={pageSize}
            onChange={handlePageSizeChange}
          > 
            <option value={3}>3</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
          </select>
        </div>
       
      <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <PaginationInfo>
        Page {currentPage} of {totalPages}
      </PaginationInfo>
      <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </PaginationButton>
    </PaginationContainer>
    </Container>
    <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />

  </div>
  );
}

export default Index;
