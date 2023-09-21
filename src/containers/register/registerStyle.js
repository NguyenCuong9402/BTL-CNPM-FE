// RegisterForm.js
import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw; 
  background: url();
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  background: rgba(0, 0, 0, 0.5);
  padding: 28px;
  margin: 0 28px;
  border-radius: 10px;
  box-shadow: inset -2px 2px 2px white;
`;

export const FormTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 6px;
  color: white;
  text-shadow: 2px 2px 2px black;
  border-bottom: solid 1px white;
`;

export const MainUserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
`;

export const UserInputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-bottom: 15px;
`;

export const UserInputLabel = styled.label`
  width: 95%;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0;
`;

export const UserInput = styled.input`
  height: 40px;
  width: 95%;
  border-radius: 7px;
  outline: none;
  border: 1px solid grey;
  padding: 0 10px;
`;

export const GenderTitle = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid white;
`;

export const GenderCategory = styled.div`
  margin: 15px 0;
  color: white;
`;

export const GenderLabel = styled.label`
  padding: 0 20px 0 5px;
`;

export const FormSubmitButton = styled.div`
  margin-top: 40px;
`;

export const SubmitInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  color: rgb(209, 209, 209);
  background: rgba(63, 114, 76, 0.7);
  cursor: pointer;
`;

export const SubmitInputHover = styled(SubmitInput)`
  &:hover {
    background: rgba(56, 204, 93, 0.7);
    color: rgb(255, 255, 255);
  }
`;