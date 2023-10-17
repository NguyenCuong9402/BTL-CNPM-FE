import React, { useState, useEffect, useRef  } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  Background,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  Header, 
  Navbar,
  
} from "./detailStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { useParams } from 'react-router-dom';







function Detail() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const { id } = useParams();
  const [product_data, setProductData] = useState({})
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/product/${id}`
      );

      if (response.data.message.status === "success") {
        setProductData(response.data.data)
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  console.log(product_data)
  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      setUserData(userDataFromLocalStorage.name_user);
      setUserDataId(userDataFromLocalStorage.id);
      
    } else {
      history.push("/login"); // Điều hướng đến màn hình đăng nhập
    }
    fetchData(id)
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/login";
  };
  
  const avatar = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;

  const handleChangepass = async () =>{
    history.push(`/changepass`, { });
  };

  return (
    <div>
      <Header>
        <Navbar>
          <a href="/index">
            <i className="bx bxl-xing"></i>Word Scamble
          </a>
        </Navbar>
        <UserInfoContainer>
          <UserName>{name_user}</UserName>

          <AvatarContainer>
            <AvatarImage src={avatar} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem onClick={handleChangepass}>Đổi mật khẩu</DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <img src={logout} alt="Logout" />
              </DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      
    </div>
  );
}

export default Detail;
