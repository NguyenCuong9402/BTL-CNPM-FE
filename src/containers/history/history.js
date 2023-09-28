import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName, TableCell, TableHeader, CustomTable,
  Background, TableBodyContainer, TableContainer, TableHeaderContainer,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  Header, PaginationContainer, PaginationButton, PaginationInfo,
  Navbar, 
  Container,
} from "./historyStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import arrowIcon from "./arrow.png";
import WordSearch from "./wordsearch.png";
import Table from 'react-bootstrap/Table';

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


function History() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setpageSize] = useState(15);

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      setUserData(userDataFromLocalStorage.name_user);
      setUserDataId(userDataFromLocalStorage.id);
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

  

  const fetchData = async (page) => {
    try {
      const access_token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/luot_choi/get-lich-su?page=${page}&page_size=${pageSize}&order=${sortDirection}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
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

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, sortDirection]);

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
  
  return (
    <div>
      <Header>
        <Navbar>
          <a href="/main">
            <i className="bx bxl-xing"></i>Word Scamble
          </a>
        </Navbar>
        <UserInfoContainer>
          <UserName>{name_user}</UserName>

          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem>Cài Đặt</DropdownItem>
              <DropdownItem>Tài Khoản</DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <img src={logout} alt="Logout" />
              </DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      <Container>

      <TableContainer>   
        <TableHeaderContainer>
          <CustomTable striped bordered hover>
            <thead>
              <tr>
                <TableHeader>STT</TableHeader>
                <TableHeader>Số câu đúng</TableHeader>
                <TableHeader>Tổng số câu</TableHeader>   
                <TableHeader>
                  Thời gian chơi{' '}
                  <span
                    onClick={toggleSortDirection}
                    style={{ cursor: 'pointer' }}
                    className={`sort-icon ${sortDirection === 'asc' ? 'asc' : 'desc'}`}
                  >
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                </TableHeader>
              </tr>
            </thead>
          </CustomTable>
        </TableHeaderContainer>
        <TableBodyContainer>
          <CustomTable striped bordered hover>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <TableCell>{(currentPage-1)*pageSize+index + 1}</TableCell>
                  <TableCell>{item.so_cau_dung}</TableCell>
                  <TableCell>{item.so_cau}</TableCell>
                  <TableCell>{item.created_date}</TableCell>
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </TableBodyContainer>
      </TableContainer>

    <PaginationContainer>  
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
  </div>
  );
}

export default History;
