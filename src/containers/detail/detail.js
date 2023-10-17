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
import "./style.css"






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
  const handleProfile = async () =>{
    history.push(`/profile`, { });
  };
  const avatar = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;

  const handleChangepass = async () =>{
    history.push(`/changepass`, { });
  };

  return (
    <div>
      <Header>
        <Navbar>
          <a href="/index"  style={{ fontSize: '20px' }}>
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
        <UserInfoContainer>
          <UserName>{name_user}</UserName>

          <AvatarContainer>
            <AvatarImage src={avatar} alt="Avatar" />
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
    <main>
    <article>


      <section class="section product" aria-label="product">
      <div class="container">

        <div class="product-slides">

          <div class="slider-banner" data-slider>
            <img src={`http://127.0.0.1:5000/api/v1/picture/${id}`} style={{ width: '500px', height: '400px' }}/>
          </div>

          {/* <button class="slide-btn prev" aria-label="Previous image" data-prev>
            <ion-icon name="chevron-back" aria-hidden="true"></ion-icon>
          </button>

          <button class="slide-btn next" aria-label="Next image" data-next>
            <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
          </button> */}

        </div>

        <div class="product-content">

          {/* <p class="product-subtitle">Nike Company</p> */}

          <h1 class="h1 product-title">{product_data.name}</h1>

          <p class="product-text">{product_data.describe}</p>

          <div class="wrapper">

            <span class="price" data-total-price>${product_data.price}</span>

            <span class="badge">{product_data.giam_gia}%</span>

            <del class="del">${product_data.old_price}</del>

          </div>

          <div class="btn-group">

            <div class="counter-wrapper">

              <button class="counter-btn" data-qty-minus>
                <ion-icon name="remove-outline"></ion-icon>
              </button>

              <span class="span" data-qty>1</span>

              <button class="counter-btn" data-qty-plus>
                <ion-icon name="add-outline"></ion-icon>
              </button>

            </div>

            <button class="cart-btn">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

              <span class="span">Add to cart</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  </article>
  </main>
    </div>
  );
}

export default Detail;
