import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import {
    Body, Container,FormTitle,MainUserInfo, UserInput,UserInputBox, UserInputLabel, GenderLabel, GenderCategory, GenderTitle, FormSubmitButton, SubmitInput
  } from './registerStyle'
import 'react-datepicker/dist/react-datepicker.css';


  
const RegisterForm = () => {
    const [birthdate, setBirthdate] = useState(null);

    const handleBirthdateChange = (date) => {
        setBirthdate(date);
    };

    return (
        <Body>
        <Container>
            <FormTitle>Register Account</FormTitle>
            <MainUserInfo>
            <UserInputBox>
                <UserInputLabel htmlFor="fullName">Full Name</UserInputLabel>
                <UserInput
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                required
                />
            </UserInputBox>
            
            <UserInputBox>
                <UserInputLabel htmlFor="Email">Email</UserInputLabel>
                <UserInput
                type="email"
                id="Email"
                name="Email"
                placeholder="Enter Email"
                required

                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="phoneNumber">Phone Number</UserInputLabel>
                <UserInput
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                required

                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="address">Address</UserInputLabel>
                <UserInput
                type="text"
                id="address"
                name="address"
                placeholder="Enter User Name"
                required

                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="userName">User Name</UserInputLabel>
                <UserInput
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter User Name"
                required

                />
            </UserInputBox>
            <UserInputBox>
                    <UserInputLabel htmlFor="year">BirthDay</UserInputLabel>
                    <DatePicker // Thay thế <DatePicker /> bằng component StyledComponents
                        id="year"
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        placeholderText="Select Year Of Birth"
                        required
                        showYearDropdown
                        scrollableYearDropdown
                    />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="password">Enter Password</UserInputLabel>
                <UserInput
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="repassword">Confirm Password</UserInputLabel>
                <UserInput
                type="text"
                id="repassword"
                name="repassword"
                placeholder="Enter Confirm Password"
                required
                />
            </UserInputBox>
            {/* Thêm các UserInputBox khác tại đây */}
            </MainUserInfo>
            <GenderTitle>Gender</GenderTitle>
            <GenderCategory>
                <GenderLabel>
                    <input type="radio" name="gender" id="male" required />
                    Male
                </GenderLabel>
                <GenderLabel>
                    <input type="radio" name="gender" id="female" required />
                    Female
                </GenderLabel>
           
            </GenderCategory>
            <FormSubmitButton>
            <SubmitInput type="submit" value="Register" />
            </FormSubmitButton>
            <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'white' }}>
                    Already have an account? <Link to="/login" style={{color:'red'}} >Login</Link>
                </p>
            </div>
        </Container>
        </Body>
    );
  };
  
  export default RegisterForm;