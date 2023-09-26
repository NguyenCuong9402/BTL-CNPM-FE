import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import {
  UserInfoContainer,
  UserName, HintImageContainer, HintImage,
  Background, QuickTipImage,AnhVuiImage, Note, HeaderText,
  AvatarImage, TextContainer, TextAnswer, ClickableText,
  AvatarContainer,
  DropdownMenu,
  DropdownItem,
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
import quicktip from "./quicktip.png";
import anhvui from "./anhvui.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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

    if (currentAnswer.length < currentQuestion.de_bai.length){
      setCurrentAnswer((prev) => (prev += text));
    }
  };

  const handleClickTextAnswer = (index) => {
    setCurrentAnswer((prev) => {
      const newText = setCharAt(prev, index, "");
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
          <QuickTipImage src={quicktip} alt="Gợi í"/>

          <HintImageContainer>
            <HintImage
            src={`http://127.0.0.1:5000/api/v1/picture/${currentQuestion.id}`}
            alt="Gợi í"
            />
          </HintImageContainer>
        </ButtonContainer>
        </LoginSection>
        <Item>
          <HeaderText>Spelling Word Scramble</HeaderText>   
          <AnhVuiImage src={anhvui} alt="Anh Vui" />
          <TextContainer>
            {currentQuestion.de_bai.map((text) => (
              <ClickableText key={text} onClick={() => handleClickText(text)}>{text}</ClickableText>))}
          </TextContainer>
          <TextContainer>
            {currentQuestion.de_bai.map((_, index) => (
              <TextAnswer key={index} onClick={() => handleClickTextAnswer(index)}>{currentAnswer[index]}</TextAnswer>
            ))}
          </TextContainer>
          <Note>* Use the letters to spell the Word</Note>
        </Item>
      </Container>
    </div>
  );
}

export default PlayGame;
