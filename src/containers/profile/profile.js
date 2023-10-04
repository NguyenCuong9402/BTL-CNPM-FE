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
import image_user from "./user.png";
import image_man from "./men.png";
import image_woman from "./women.png";
import image_address from "./address.png";
import image_phone from "./phone.png";






function Profile() {
  const [name_user, setUserData] = useState(null);
  const [phone_user, setPhoneUser] = useState('');
  const [address_user, setAddressUser] = useState('');
  const [gender, setGender] = useState(0);
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
      setPhoneUser(userDataFromLocalStorage.phone_number);
      setAddressUser(userDataFromLocalStorage.address);
      setGender(userDataFromLocalStorage.gender);
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

  const setAvatarImage = () => {
    // Lấy reference đến input type="file"
    const fileInput = fileInputRef.current;
  
    // Đảm bảo rằng người dùng đã chọn một file
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
  
      // Tạo một FormData để gửi file
      const formData = new FormData();
      formData.append('file', file);
      const access_token = localStorage.getItem("accessToken");
      // Tạo header Authorization
      const headers = {
        Authorization: `Bearer ${access_token}`,
      };
        const config = {
        headers: headers,
      };
        axios
        .post('http://127.0.0.1:5000/api/v1/picture/avatar', formData, config)
        .then((response) => {
          // Xử lý khi request thành công
          console.log('Upload ảnh avatar thành công.');
          window.location.reload();
        })
        .catch((error) => {
          // Xử lý khi request thất bại
          console.error('Upload ảnh avatar thất bại:', error);
        });
    } else {
      console.error('Chưa chọn file ảnh.');
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
        <div><input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange}/></div>
        <Button onClick={setAvatarImage}>avatar</Button>

        </ButtonContainer> 
        </LoginSection>
        <Item>
          <div>
          <AvatarImage src={image_user} alt="Avatar" />
          <TextItem>{name_user}</TextItem>
          </div>
          <div>
            <AvatarImage src={image_address} alt="Địa chỉ" />
            <TextItem>{address_user}</TextItem>
          </div>
          <div>
            <AvatarImage src={image_phone} alt="Số điện thoại" />
            <TextItem>{phone_user}</TextItem>
          </div>
            {gender === 1 ? (
              <div>
              <AvatarImage src={image_man} alt="Man" />
              <TextItem>Nam</TextItem>
              </div>
            ) : (
              <div>
              <AvatarImage src={image_woman} alt="woMan" />
              <TextItem>Nữ</TextItem>
              </div>
            )}
        </Item>
      </Container>
    </div>
  );
}

export default Profile;
