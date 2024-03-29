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
  Navbar, Body, Body1,Body2
  
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

  const dat_hang = () => {
    try {
      if (online === false) {
        setModalMessage('Bạn chưa đăng nhập, vui lòng đăng nhập để đặt hàng!');
        setModalOpen(true);
      } 
      const access_token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };
      axios
      .post(`http://127.0.0.1:5000/api/v1/cart_items/${product_id}`, { color: color, size: size, quantity : sl}, config)
      .then((response) => {
        setModalMessage(response.data.message.text);
        setModalOpen(true);
      })
      .catch((error) => {
        console.error('Error calling API:', error);
  });
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const SangGioHang = ()=>{
    history.push(`/cart`, {});

  }
  return (
< Body>

<Body1>
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
          <DropdownItem onClick={handleProfile}>Tài Khoản</DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <img src={logout} alt="Logout" />
          </DropdownItem>
        </DropdownMenu>
        </AvatarContainer>
        <CartImage src={cart} alt="Cart" className="cart"  onClick={SangGioHang}/>
        </UserInfoContainer>
        ) : (
          <Navbar>
          <a href="/login"  style={{ fontSize: '20px' }}>Login</a>
          </Navbar>

        )}
      </Header>
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
          <div class="h4 product-title">
            <h4 style={{fontFamily: "Arial, sans-serif"}}>{product_data.name}</h4>
          </div>
          <p class="product-text">{product_data.describe}</p>
          <div class="wrapper">
            <span class="price" data-total-price>${product_data.price}</span>
            <span class="badge">-{product_data.giam_gia}%</span>
            <del class="del">${product_data.old_price}</del>
          </div>
          <select class="select-color" onChange={handleColorChange}>
          <option value="">Chọn màu</option>
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
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>

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
    </Body1>
    <Body2>
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

    </Body2>
  
  <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
  </Body>
  );
}

export default Detail;
