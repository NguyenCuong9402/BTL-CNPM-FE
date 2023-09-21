import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Body, Container,FormTitle,MainUserInfo, UserInput,UserInputBox, UserInputLabel, GenderLabel, GenderCategory, GenderTitle, FormSubmitButton, SubmitInput
  } from './registerStyle'

const RegisterForm = () => {
    return (
        <Body>
        <Container>
            <FormTitle>Registration</FormTitle>
            <MainUserInfo>
            <UserInputBox>
                <UserInputLabel htmlFor="fullName">Full Name</UserInputLabel>
                <UserInput
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="userName">User Name</UserInputLabel>
                <UserInput
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter User Name"
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="Email">Email</UserInputLabel>
                <UserInput
                type="text"
                id="Email"
                name="Email"
                placeholder="Enter Email"
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="phoneNumber">Phone Number</UserInputLabel>
                <UserInput
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="password">Enter Password</UserInputLabel>
                <UserInput
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="repassword">Confirm Password</UserInputLabel>
                <UserInput
                type="text"
                id="repassword"
                name="repassword"
                placeholder="Enter Confirm Password"
                />
            </UserInputBox>
            {/* Thêm các UserInputBox khác tại đây */}
            </MainUserInfo>
            <GenderTitle>Gender</GenderTitle>
            <GenderCategory>
            <GenderLabel>
                <input type="radio" name="gender" id="male" />
                Male
            </GenderLabel>
            <GenderLabel>
                <input type="radio" name="gender" id="female" />
                Female
            </GenderLabel>
            <GenderLabel>
                <input type="radio" name="gender" id="other" />
                Other
            </GenderLabel>
            </GenderCategory>
            <FormSubmitButton>
            <SubmitInput type="submit" value="Register" />
            </FormSubmitButton>
        </Container>
        </Body>
    );
  };
  
  export default RegisterForm;