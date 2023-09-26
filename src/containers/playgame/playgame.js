import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName,
  Background,
  AvatarImage,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
  FlashingImage,
  Header,
  Navbar,
  Container,
  LoginSection,
  Button,
  ButtonContainer,
  Item,
  SocialIcon,
  TextItem,
} from "./playgameStyle";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logout from "./logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import arrowIcon from "./arrow.png";
import WordSearch from "./wordsearch.png";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function PlayGame() {
  

  const [name_user, setUserData] = useState(null);
  const [user_id, setUserDataId] = useState(null);
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
  const avatarUrl = `http://127.0.0.1:5000/api/v1/picture/avatar/${user_id}`;
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = "/login";
  };
  const location = useLocation();

  const { de_bai, turn_id } = location.state.TurnAndCauDo;
  const [listQuestions, setListQuestions] = useState(de_bai);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [currentAnswer, setCurrentAnswer] = useState("");
  const handleClickText = (text) => {
    setCurrentAnswer((prev) => (prev += text));
  };

  const handleClickTextAnswer = (index) => {
    setCurrentAnswer((prev) => {
      const newText = setCharAt(prev, index, "");
      console.log(prev, index, newText);
      return newText;
    });
  };

  const currentQuestion = listQuestions[currentQuestionIndex];

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
            <AvatarImage src={avatarUrl} alt="Avatar" />
            <DropdownMenu>
              <DropdownItem>Cài Đặt</DropdownItem>
              <DropdownItem>Tài Khoản</DropdownItem>
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
            <FlashingImage src={arrowIcon} alt="Mũi tên" width="50" />
          </ButtonContainer>
        </LoginSection>
        <Item>
          <div
            style={{display: "flex",gap: 10,}}>
            {currentQuestion.de_bai.map((text) => (
              <span style={{display: "inline-block",padding: "10px",background: "red",borderRadius: 5,}}
                onClick={() => handleClickText(text)}>{text}</span>
            ))}</div>
            <div style={{display: "flex",gap: 10,}}>
            {currentQuestion.de_bai.map((_, index) => {
              const currentText = currentAnswer[index];

              return (
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    background: "blue",
                    borderRadius: 5,
                  }}
                  onClick={() => handleClickTextAnswer(index)}
                >
                  {currentText}
                </span>
              );
            })}
          </div>
          <TextItem>
            
          </TextItem>
        </Item>
      </Container>
    </div>
  );
}

export default PlayGame;
