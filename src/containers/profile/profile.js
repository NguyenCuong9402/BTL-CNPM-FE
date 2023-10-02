import React, { useState, useEffect, useRef  } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  Background, CloseButtonStyled,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem, AvatarImageSet,
  FlashingImage,
  Header,
  Navbar,
  Container,
  LoginSection,
  Button,
  ButtonContainer,
  Item,
  SocialIcon, AvatarContainerSet,
  TextItem,
} from "./profileStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import WordSearch from "./wordsearch.png";

function Profile() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const history = useHistory();
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
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/login";
  };
  const [TurnAndCauDo, setData] = useState({});
  const [lichSu, setLichSu] = useState({});

  const handlePlayClick = async () => {
    try {
      const access_token = localStorage.getItem("accessToken");
      // Thực hiện yêu cầu POST đến API để lấy danh sách 5 id
      const response = await axios.get(
        "http://127.0.0.1:5000/api/v1/luot_choi",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
        {}
      );
      const respon = response.data.data;
      setData(respon);

      history.push(`/playgame`, { TurnAndCauDo: respon });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const avatar = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const previewUrl = e.target.result;
        setSelectedImage(file); // Lưu ảnh đã chọn để có thể xóa nó nếu cần
        setShowSelectedImage(true); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null); // Xóa ảnh đã chọn bằng cách đặt trạng thái về null
    setShowSelectedImage(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Đặt giá trị của input file về null
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
            <AvatarImage src={avatar} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem>Cài Đặt</DropdownItem>
              <DropdownItem onClick={handleLogout}>
                <img src={logout} alt="Logout" />
              </DropdownItem>
            </DropdownMenu>
          </AvatarContainer>
        </UserInfoContainer>
      </Header>
      <Background></Background>
      <Container>
        <LoginSection>
        <ButtonContainer>
        {showSelectedImage ? (
        <div>
          <CloseButtonStyled onClick={handleRemoveImage}>X</CloseButtonStyled>
          <AvatarImageSet src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
        </div>
      ) : (
        <AvatarImageSet src={avatar} alt="Avatar" />
      )}
      <div>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange}
      />
      </div>
        </ButtonContainer> 
        </LoginSection>
        <Item>
          
        
        </Item>
      </Container>
    </div>
  );
}

export default Profile;
