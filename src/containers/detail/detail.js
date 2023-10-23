import React, { useState, useEffect, useRef  } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,  DiscountTag,DollarSign, NameProduct, ItemInfo, ItemInfo1, Price,
  UserName,GridItem, SoldCount,
  Background, CartImage,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  Header, Container2,
  Navbar,
  
} from "./detailStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { useParams } from 'react-router-dom';
import "./style.css"
import { Ionicon } from 'react-ionicons';
import cart  from "./trolley.png";
import Modal from '../../modal';





function Detail() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const [online, SetOnline] = useState(false)

  const history = useHistory();
  const { id } = useParams();
  const [product_id, setProductID] = useState('')
  const [product_data, setProductData] = useState({})
  const [product_lien_quan, setProductlienquan] = useState([])
  const [cac_mau, SetCacMau] = useState([])

  const [sl, setSL] = useState(1)
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/product/${id}`
      );

      if (response.data.message.status === "success") {
        setProductID(response.data.data.data.id)
        setProductData(response.data.data.data)
        setProductlienquan(response.data.data.lien_quan)
        SetCacMau(response.data.data.data.cac_mau)

      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      if (userDataFromLocalStorage.admin === 0) {
        setUserData(userDataFromLocalStorage.name_user);
        setUserDataId(userDataFromLocalStorage.id);
        SetOnline(true)
      } else {
        
      }
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
  const handlePlus = () => {
    setSL(sl + 1);
  };

  
  // Hàm xử lý giảm giá trị
  const handleMinus = () => {
    if (sl > 1) {
      setSL(sl - 1);
    }
  };

  const handleDetailClick = async (id) =>{
    window.location.href = `/detail/${id}`;
  }

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
  };

  // Function to handle color selection
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
  };

  const dat_hang = async (product_id, color, size, sl) => {
    try {
      if (online === false) {
        setModalMessage('Bạn chưa đăng nhập, vui lòng đăng nhập để đặt hàng!');
        setModalOpen(true);
      } 
      const access_token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append('color', color);
      formData.append('size', size);
      formData.append('quantity', sl);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.post(
        `http://127.0.0.1:5000/api/v1/cart_items/${product_id}`, formData, config
      );

      if (response.data.message.status === "success") {
        
        setModalMessage(response.data.message.text);
        setModalOpen(true);

      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Header>
        <Navbar>
          <a href="/index"  style={{ fontSize: '20px' }}>
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
        
        {online ? (
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
        <CartImage src={cart} alt="Cart" className="cart" />
        </UserInfoContainer>
        ) : (
          <Navbar>
          <a href="/login"  style={{ fontSize: '20px' }}>Login</a>
          </Navbar>

        )}
      </Header>
    <main>
    <article>
      <section class="section product" aria-label="product">
      <div class="container1">

        <div class="product-slides">
          <div class="slider-banner" data-slider>
            <img src={`http://127.0.0.1:5000/api/v1/picture/${id}`} style={{ maxWidth: '400px',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover' }}/>
                    </div>
        </div>
        <div class="product-content">
          {/* <p class="product-subtitle">Nike Company</p> */}
          <h1 class="h1 product-title">{product_data.name}</h1>
          <p class="product-text">{product_data.describe}</p>
          <div class="wrapper">
            <span class="price" data-total-price>${product_data.price}</span>
            <span class="badge">-{product_data.giam_gia}%</span>
            <del class="del">${product_data.old_price}</del>
          </div>
          <select class="select-color" onChange={handleColorChange}>
          {cac_mau.map((item) => (
            <option key={item} value={item}>{item}
            </option>
            ))}
              {/* <option value="">Chọn Màu</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option> */}
            </select>
            <select class="select-size" onChange={handleSizeChange}>
            <option value="">Chọn Size</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>

            </select>
          <div class="btn-group">
            <div class="counter-wrapper">
              <button class="counter-btn" data-qty-minus onClick={handleMinus}>
                <ion-icon name="remove-outline">-</ion-icon>
              </button>
              <span class="span" data-qty>{sl}</span>

              <button class="counter-btn" data-qty-plus onClick={handlePlus}>
                <ion-icon name="add-outline">+</ion-icon>
              </button>
            </div>
            <button class="cart-btn" onClick={dat_hang}>
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

              <span class="span">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </article>
  </main>
  <div style={{
    marginLeft:"40%",
    marginTop: '850px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  }}>Các sản phẩm tương tự</div>
  <Container2>
  {product_lien_quan.map((item) => (
    <GridItem key={item.id} onClick={() => handleDetailClick(item.id)}>
      <img src={`http://127.0.0.1:5000/api/v1/picture/${item.id}`} alt="Hình ảnh" />
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
  </Container2>
  <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
  </div>
  );
}

export default Detail;
