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
  Header, AvatarImagebuton,
  Navbar,
  Container,
  LoginSection,
  Button,
  ButtonContainer,
  Item,
  TextItem,
} from "./fixStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import image_put from "./pen.png";
import image_change from "./change.png";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Modal from '../../../modal';







function Fix() {
  const location = useLocation();
  
  const cau_do_id = location.state.cau_do_id
  const list_id = [cau_do_id];
  const [name_user, setUserData] = useState(null);
  const [dap_an_cau_do, setDapAn] = useState('');
  const [de_bai_cau_do, setDeBai] = useState('');
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [user_id, setUserDataId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const history = useHistory();
  const getProductName = () => {
    const access_token = localStorage.getItem("accessToken");
    
    // Tạo header Authorization
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
  
    // Tạo config object với các headers
    const config = {
      headers: headers,
    };
  
    // Gọi API GET để lấy tên sản phẩm
    axios
      .get(`http://127.0.0.1:5000/api/v1/cau_do/${cau_do_id}`, config)
      .then((response) => {
        if( response.data.message.status === 'success'){
          setDapAn(response.data.data.dap_an)
          setDeBai(response.data.data.de_bai)
        }
      })
      .catch((error) => {
        // Xử lý khi request thất bại
        console.error('Lỗi khi lấy tên sản phẩm:', error);
      });
  };
  useEffect(() => {
    getProductName();
    // Lấy userData từ localStorage khi component được tạo
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      setUserData(userDataFromLocalStorage.name_user);
      setUserDataId(userDataFromLocalStorage.id);
      
    } else {
      history.push("/login"); // Điều hướng đến màn hình đăng nhập
    }
    
  }, []); // Sử dụng [] để đảm bảo useEffect chỉ chạy một lần khi component được 
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/admin/login";
  };
  
  const avatar = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const anh_cau_do = `http://127.0.0.1:5000/api/v1/picture/${cau_do_id}`;

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
        .put(`http://127.0.0.1:5000/api/v1/picture/${cau_do_id}`, formData, config)
        .then((response) => {
          // Xử lý khi request thành công
          if( response.data.message.status === 'success'){
            window.location.reload();
          }
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        })
        .catch((error) => {
          // Xử lý khi request thất bại
          console.error('Upload ảnh avatar thất bại:', error);
        });
    } else {
      console.error('Chưa chọn file ảnh.');
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [isEditing, setIsEditing] = useState(false); // State để theo dõi trạng thái chỉnh sửa
  const [editedCauDo, setEditedCauDo] = useState('');
  const startEditing = () => {
    setIsEditing(true);
    setEditedCauDo(dap_an_cau_do);
  };
  
  const finishEditing = async () => {
    setIsEditing(false);

    try {
      const access_token = localStorage.getItem("accessToken");

      const response = await axios.put(`http://127.0.0.1:5000/api/v1/cau_do/${cau_do_id}`, { dap_an: editedCauDo }, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data.message)
      if (response.data.message.status === "success") {
        setDapAn(response.data.data.dap_an);
        setDeBai(response.data.data.de_bai)
        setModalMessage(response.data.message.text);
        setModalOpen(true);
      }
    } catch (error) {
      // Xử lý lỗi (nếu có)
      console.error('Error updating user data:', error);
    
  };
}

  // Render tên dựa vào trạng thái chỉnh sửa
  const renderName = () => {
    if (isEditing) {
      const inputStyle = {
        fontSize: '40px', 
        color: 'red'
      };
      return (
        <input
          type="text"
          value={editedCauDo}
          onChange={(e) => setEditedCauDo(e.target.value)}
          onBlur={finishEditing}
          autoFocus
          style={inputStyle} 
        />
      );
    } else {
      return <span>{dap_an_cau_do}</span>;
    }
  };

  
  const handleChangepass = async () =>{
    history.push(`/changepass`, { });
  };

  const handleChangeButtonClick = async () => {
    const access_token = localStorage.getItem("accessToken");
    try {
      const response = await axios.put(
        'http://127.0.0.1:5000/api/v1/cau_do',
        { list_id: list_id },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.data.message.status === "success") {
        getProductName()
        setModalMessage(response.data.message.text);
        setModalOpen(true);
        // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
      } else if (response.data.message.status === "error") {
        setModalMessage(response.data.message.text);
        setModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi gửi yêu cầu thay đổi');
    }
  }

  return (
    <div>
      <Header>
        <Navbar>
          <a href="/admin/main">
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
      <Container>
        <LoginSection>
        <ButtonContainer>
        {showSelectedImage ? (
        <div>
          <CloseButtonStyled onClick={handleRemoveImage}>X</CloseButtonStyled>
          <AvatarImageSet src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
        </div>
        ) : (
          <AvatarImageSet src={anh_cau_do} alt="Avatar" />
        )}
        <div><input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange}/></div>
        <Button onClick={setAvatarImage}>Đổi ảnh</Button>

        </ButtonContainer> 
        </LoginSection>
        <Item>
          <div>
          <TextItem><span style={{ color: 'blue', fontSize: '50px' }}>Đáp Án: </span>{renderName()}</TextItem>
          <AvatarImagebuton src={image_put} alt="change" onClick={startEditing}/>
          </div>
          <div>
          <TextItem><span style={{ color: 'blue', fontSize: '50px' }}>Đề bài: </span>{de_bai_cau_do}</TextItem>
          <AvatarImagebuton src={image_change} alt="change" onClick={handleChangeButtonClick}/>
          </div>
        </Item>
      </Container>
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />

    </div>
  );
}

export default Fix;
