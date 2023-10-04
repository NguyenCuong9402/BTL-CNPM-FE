import React, { useState, useEffect} from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,  FormTitle, UserInputBox, UserInputLabel, UserInput,
  UserName,Body,
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


function Changepass() {
  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
  const history = useHistory();

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

    window.location.href = "/login";
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

    const handleChangepass =()=> {
        
    }
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
            <SubmitInput type="submit" value="Register" onClick={handleChangepass} />
            </FormSubmitButton>
        </Container>
        {/* <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} /> */}
    </Body>
    </div>
  );
}

export default Changepass;
