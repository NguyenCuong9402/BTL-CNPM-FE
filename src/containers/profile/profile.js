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
  FlashingImage, NoFontButton,
  Header, AvatarImagebuton,
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
import image_put from "./pen.png";







function Profile() {
  const [name_user, setUserData] = useState(null);
  const [phone_user, setPhoneUser] = useState('');
  const [address_user, setAddressUser] = useState('');
  const [gender, setGender] = useState(0);
  const [objDataUser, setobjDataUser] = useState({});
  const [user_id, setUserDataId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const history = useHistory();
  useEffect(() => {
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      setobjDataUser(userDataFromLocalStorage)
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

  const [isEditing, setIsEditing] = useState(false); // State để theo dõi trạng thái chỉnh sửa
  const [editedName, setEditedName] = useState('');
  const startEditing = () => {
    setIsEditing(true);
    setEditedName(name_user); // Đặt giá trị chỉnh sửa ban đầu là tên hiện tại
  };
  
  const finishEditing = async () => {
    setIsEditing(false);

    try {
      const access_token = localStorage.getItem("accessToken");

      const response = await axios.put('http://127.0.0.1:5000/api/v1/user/update', { name_user: editedName }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data.message)
      if (response.data.message.status === "success") {
        const updatedObjDataUser = { ...objDataUser, name_user: editedName };
        localStorage.setItem('user', JSON.stringify(updatedObjDataUser));
        setobjDataUser(updatedObjDataUser);
        setPhoneUser(editedName);
        // window.location.reload();

      }
    } catch (error) {
      // Xử lý lỗi (nếu có)
      console.error('Error updating user data:', error);
    
  };
}

  // Render tên dựa vào trạng thái chỉnh sửa
  const renderName = () => {
    if (isEditing) {
      return (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onBlur={finishEditing}
          autoFocus
        />
      );
    } else {
      return <span>{name_user}</span>;
    }
  };

  /*edit address*/
  const [isEditingadress, setIsEditingAdress] = useState(false); // State để theo dõi trạng thái chỉnh sửa
  const [editedAdress, setEditedAdress] = useState('');
  const startEditingAdress = () => {
    setIsEditingAdress(true);
    setEditedAdress(address_user); // Đặt giá trị chỉnh sửa ban đầu là tên hiện tại
  };
  
  const finishEditingAdress = async () => {
    setIsEditingAdress(false);

    try {
      const access_token = localStorage.getItem("accessToken");

      const response = await axios.put('http://127.0.0.1:5000/api/v1/user/update', { address: editedAdress }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data.message)
      if (response.data.message.status === "success") {
        const updatedObjDataUser = { ...objDataUser, address: editedAdress };
        localStorage.setItem('user', JSON.stringify(updatedObjDataUser));
        setobjDataUser(updatedObjDataUser);
        setAddressUser(editedAdress);

      }
    } catch (error) {
      console.error('Error updating user data:', error);
    
  };
  }

  const renderAdress = () => {
    if (isEditingadress) {
      return (
        <input
          type="text"
          value={editedAdress}
          onChange={(e) => setEditedAdress(e.target.value)}
          onBlur={finishEditingAdress}
          autoFocus
        />
      );
    } else {
      return <span>{address_user}</span>;
    }
  };

  /*edit Phone*/

  const [isEditingPhone, setIsEditingPhone] = useState(false); // State để theo dõi trạng thái chỉnh sửa
  const [editedPhone, setEditedPhone] = useState('');
  const startEditingPhone = () => {
    setIsEditingPhone(true);
    setEditedPhone(phone_user); // Đặt giá trị chỉnh sửa ban đầu là tên hiện tại
  };
  
  const finishEditingPhone = async () => {
    setIsEditingPhone(false);

    try {
      const access_token = localStorage.getItem("accessToken");

      const response = await axios.put('http://127.0.0.1:5000/api/v1/user/update', { phone_number: editedPhone }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data.message)
      if (response.data.message.status === "success") {
        const updatedObjDataUser = { ...objDataUser, phone_number: editedPhone };
        localStorage.setItem('user', JSON.stringify(updatedObjDataUser));
        setobjDataUser(updatedObjDataUser);
        setPhoneUser(editedPhone);

      }
    } catch (error) {
      console.error('Error updating user data:', error);
    
  };
  }

  const renderPhone = () => {
    if (isEditingPhone) {
      return (
        <input
          type="text"
          value={editedPhone}
          onChange={(e) => setEditedPhone(e.target.value)}
          onBlur={finishEditingPhone}
          autoFocus
        />
      );
    } else {
      return <span>{phone_user}</span>;
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
              <DropdownItem>Đổi mật khẩu</DropdownItem>
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
          <TextItem>{renderName()}</TextItem>
          <AvatarImagebuton src={image_put} alt="change" onClick={startEditing}/>
          </div>
          <div>
            <AvatarImage src={image_address} alt="Địa chỉ" />
            <TextItem>{renderAdress()}</TextItem>
            <AvatarImagebuton src={image_put} alt="change" onClick={startEditingAdress}/>
          </div>
          <div>
            <AvatarImage src={image_phone} alt="Số điện thoại" />
            <TextItem>{renderPhone()}</TextItem>
            <AvatarImagebuton src={image_put} alt="change" onClick={startEditingPhone}/>
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
