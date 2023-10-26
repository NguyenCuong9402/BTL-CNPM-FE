import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialIcon = styled.div`
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc nếu cần */
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.5s ease;
  text-decoration: none; /* Loại bỏ gạch chân trên các liên kết */
`;

export const SocialIconItem = styled.i`
  display: flex;
`;

export const SocialIconItemHover = styled(SocialIconItem)`
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Item1Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 58%;
  height: 100%;
  color: #fff;
  background: transparent;
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled.h2`
  font-size: 36px;
  color: #ff69b4;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.5);
  background: linear-gradient(
    to right,
    #56ccf2,
    #2f80ed
  ); /* Thay đổi màu nền ở đây */
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  
  left: 0;
  width: 100%;
  padding: 25px 13%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Navbar = styled.nav`
  a {
    position: relative;
    font-size: 16px;
    color: #fff;
    margin-right: 30px;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      bottom: -5px;
      border-radius: 5px;
      transform: translateY(10px);
      opacity: 0;
      transition: .5s ease;
    }

    &:hover::after {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

