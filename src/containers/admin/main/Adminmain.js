import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer, ImageInTableCell, Container1, FileInputContainer,
  UserName, TableCell, TableHeader, CustomTable,
  Background, TableBodyContainer, TableContainer, TableHeaderContainer,
  AvatarImage, ButtonClose, ImagePreview,
  AvatarContainer,PaginationContainer1, DeleteButton,
  DropdownMenu,
  DropdownItem,
  Header, PaginationContainer, PaginationButton, PaginationInfo,
  Navbar, 
  Container,FormSubmitButton, UserInput, UserInputBox, FormTitle , UserInputLabel, SubmitInput

} from "./adminMainStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import additem from "./additem.png";
import fixitem from "./fixitem.png";

import addpicture from "./add_picture.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import {Button } from "bootstrap";
import Modal from '../../../modal';

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


function AdminMain() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setpageSize] = useState(15);
  const [text_search, setTextSearch] = useState('');

  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 1) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
      } else {
        history.push("/main"); // Điều hướng đến màn hình đăng nhập
      }
    } else {
      history.push("/admin/login"); // Điều hướng đến màn hình đăng nhập
    }
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/admin/login";
  };

  
  const fetchData = async (page, pSize, sortDirection, text_search) => {
    try {
      const access_token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/cau_do?page=${page}&page_size=${pSize}&order=${sortDirection}&text_search=${text_search}`,
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

const handleChangeButtonClick = async () => {
  const access_token = localStorage.getItem("accessToken");
  try {
    const response = await axios.put(
      'http://127.0.0.1:5000/api/v1/cau_do',
      { list_id: selectedRows },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.message.status === "success") {
      setModalMessage(response.data.message.text);
      setModalOpen(true);
      // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
      fetchData(currentPage, pageSize, sortDirection);
      setSelectedRows([]); 
      setSelectAll(false); 
    } else if (response.data.message.status === "error") {
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    }
  } catch (error) {
    console.error(error);
    alert('Có lỗi xảy ra khi gửi yêu cầu thay đổi');
  }
}

const handleFixClick = async(id) => {
  history.push(`/admin/fix`, { cau_do_id: id });
}

/* code thêm sản phẩm*/
  const [isTableVisible, setTableVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const openTable = () => {
    setTableVisible(true);
  };

  const closeTable = () => {
    setTableVisible(false);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const access_token = localStorage.getItem("accessToken"); // Get access token from local storage

    const formData = new FormData();
    formData.append('file', selectedImage); // Add the selected image to the form data
    formData.append('dap_an', inputValue); // Add the input value as 'dap_an' to the form data

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/cau_do', formData, {
        headers: {
          Authorization: `Bearer ${access_token}`, // Set the access token in the headers
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });
      if (response.data.message.status === 'success'){
        setSelectedImage(null);
        setInputValue("");
      }
      setModalMessage(response.data.message.text);
      setModalOpen(true);
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <Header>
        <Navbar>
          <a href="/admin/main">
            <i className="bx bxl-xing"></i>Word Scamble
          </a>
        </Navbar>
        {!isTableVisible && (
        <form action="" className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={text_search}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button><i className='bx bx-search'></i></button>
        </form>
        )}
        <UserInfoContainer>
          <UserName>{name_user}</UserName>

          <AvatarContainer>
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem>Đổi mật khẩu</DropdownItem>
              <DropdownItem onClick={handleProfile}>Tài Khoản</DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <img src={logout} alt="Logout" />
              </DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      {isTableVisible ? (
        <Container1>
          <FormTitle >Thêm Câu Đố</FormTitle>
          {selectedImage ? (
            <ImagePreview src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
          ) : (
            <ImagePreview src={addpicture} alt="Add Item" />
          )}
             <FileInputContainer>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            </FileInputContainer>

            <UserInputBox>
                <UserInputLabel htmlFor="dap_an"></UserInputLabel>
                <UserInput
                  type="text"
                  id="dap_an"
                  name="dap_an"
                  placeholder="Điền đáp án"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                />
            </UserInputBox>
            <FormSubmitButton>  
            <SubmitInput type="submit" value="Thêm" onClick={handleSubmit}/>
            <ButtonClose onClick={closeTable}>Close</ButtonClose>
            </FormSubmitButton>
        </Container1>
      ):(
      <Container>

      <TableContainer>   
        <TableHeaderContainer>
          <CustomTable striped bordered hover>
            <thead>
              <tr>
               
                <TableHeader>STT</TableHeader>
                <TableHeader>Đề</TableHeader>   

                <TableHeader>Đáp án đúng</TableHeader>
                <TableHeader>Hình Ảnh</TableHeader>   
                <TableHeader>
                  Thời gian{' '}
                  <span
                    onClick={toggleSortDirection}
                    style={{ cursor: 'pointer',
                    fontSize: '30px', // Đặt kích thước của biểu tượng
                    margin: '0 4px', // Khoảng cách giữa biểu tượng và văn bản
                    lineHeight: '1', // Để căn giữa biểu tượng theo chiều dọc
                   }}
                    className={`sort-icon ${sortDirection === 'asc' ? 'asc' : 'desc'}`}
                  >
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                </TableHeader>
                <TableHeader><img src={additem} alt="additem" style={{
                  maxWidth: '30%', 
                  maxHeight: '100%', 
                  display: 'block', 
                  margin: '0 auto',
                }}  onClick={openTable} /></TableHeader>
                <TableHeader> 
                  <button style={{
                    backgroundColor: '#f72d7a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }} onClick={() => handleSelectAllClick()}>Select All</button>
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
                  <TableCell>{item.de_bai}</TableCell>

                  <TableCell>{item.dap_an}</TableCell>
                  <TableCell><ImageInTableCell src={`http://127.0.0.1:5000/api/v1/picture/${item.id}`} alt="Gợi í" /></TableCell>
                  <TableCell>{item.created_date}</TableCell>

                  <TableCell>
                    <ImageInTableCell onClick={() => handleFixClick(item.id)} src={fixitem} alt="fixitem" />
                  </TableCell>
                  <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />

                  </TableCell>  
                </tr>
              ))}
            </tbody>
          </CustomTable>
        </TableBodyContainer>
      </TableContainer>
    <PaginationContainer>
    <div>
      <label htmlFor="pageSizeSelect" style={{ fontWeight: 'bold', color: 'green' }}>PageSize: </label>
          <select
            id="pageSizeSelect"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
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
    <PaginationContainer1>
      {isDeleteButtonVisible && (
        <DeleteButton onClick={handleChangeButtonClick}>Thay đổi đề</DeleteButton>
      )}
      {isDeleteButtonVisible && (
        <DeleteButton onClick={handleDeleteButtonClick}>Delete</DeleteButton>
      )}
    </PaginationContainer1>
    
  </Container>
    )}
    <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />

  </div>
  );
}

export default AdminMain;
