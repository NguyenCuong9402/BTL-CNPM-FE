import React, { useState, useEffect} from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,  FormTitle, UserInputBox, UserInputLabel, UserInput,
  UserName,Body, Body1,
  Background,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  Header, FormSubmitButton, SubmitInput,
  Navbar,
  Container,
} from "./changepassStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../modal";


function Changepass() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPush, setPush] = useState(false);

  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({
    new_password: '',
    confirm_password: '',
     
});
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

    history.push('/login');
};
  
  const avatar = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
 
  const handleProfile = ()=>{
    history.push(`/profile`, { });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};



    const handleChangepass = () => {
        const requestData = {
            new_password: formData.new_password,
            confirm_password: formData.confirm_password,
        };
        const access_token = localStorage.getItem("accessToken");
        // Gọi API /register và gửi dữ liệu requestData lên server
        axios.put('http://127.0.0.1:5000/api/v1/user/change-password', formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
              }
        })
      .then(function (response) {
        if (response.data.message.status === "success") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
          setPush(true)
        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }

      })
      .catch(function (error) {
        console.error(error);
        alert('Error');
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isPush === true) {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        history.push('/login');
      }

  };
  return (
    <div>
      <Body1>
      <Header>
        <Navbar>
          <a href="/index">
            <i className="bx bxl-xing"></i>Home
          </a>
        </Navbar>
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
        </UserInfoContainer>
      </Header>
      <Background></Background>
      <Body>
      <Container>
            <FormTitle >Change password Account</FormTitle>  
            <UserInputBox>
                <UserInputLabel htmlFor="new_password">New PassWord</UserInputLabel>
                <UserInput
                type="password" 
                id="new_password"
                name="new_password"
                placeholder="Enter newpassword"
                required
                value={formData.new_password}
                onChange={handleInputChange}
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="confirm_password">Confirm PassWord</UserInputLabel>
                <UserInput
                type="password" 
                id="confirm_password"
                name="confirm_password"
                placeholder="Enter confirmpassword"
                required
                value={formData.confirm_password}
                onChange={handleInputChange}
                />
            </UserInputBox>       
            <FormSubmitButton>  
            <SubmitInput type="submit" value="Đổi Mật Khẩu" onClick={handleChangepass} />
            </FormSubmitButton>
        </Container>
        <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
    </Body>
    </Body1>
    </div>
  );
}

export default Changepass;
