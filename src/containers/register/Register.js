import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {LoginLink,
    Body, Container,FormTitle,MainUserInfo, UserInput,UserInputBox, UserInputLabel, GenderLabel, GenderCategory, GenderTitle, FormSubmitButton, SubmitInput
  } from './registerStyle'
import 'react-datepicker/dist/react-datepicker.css';
import { hover } from '@testing-library/user-event/dist/hover';
import Modal from "../../modal";


  
const RegisterForm = () => {
    const history = useHistory();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPush, setPush] = useState(false);

    const [modalMessage, setModalMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
        gender: 'male', 
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    useEffect(() => {
        // Kiểm tra xem trong localStorage có user không
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          history.push('/main');
        }
      }, [history]);
    const handleRegister = () => {
        const requestData = {
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            gender: formData.gender,
        };

        // Gọi API /register và gửi dữ liệu requestData lên server
        axios.post('http://127.0.0.1:5000/api/v1/user/register', formData)
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
        history.push('/login');
      }

  };


    return (
        <Body>
        <Container>
            <FormTitle >Register Account</FormTitle>
            <MainUserInfo>
            <UserInputBox>
                <UserInputLabel htmlFor="fullName">Full Name</UserInputLabel>
                <UserInput
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
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
                value={formData.phoneNumber}
                onChange={handleInputChange}

                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="email">Email</UserInputLabel>
                <UserInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                value={formData.email}
                onChange={handleInputChange}

                />
            </UserInputBox>
           
            <UserInputBox>
                <UserInputLabel htmlFor="address">Address</UserInputLabel>
                <UserInput
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                required
                value={formData.address}
                onChange={handleInputChange}

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
                value={formData.password}
                onChange={handleInputChange}
                />
            </UserInputBox>
            <UserInputBox>
                <UserInputLabel htmlFor="confirmPassword">Confirm Password</UserInputLabel>
                <UserInput
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                />
            </UserInputBox>
            {/* Thêm các UserInputBox khác tại đây */}
            </MainUserInfo>
            <GenderTitle>Gender</GenderTitle>
            <GenderCategory>
                <GenderLabel>
                    <input type="radio" name="gender" id="male" required 
                    value="male" 
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}/>
                    Male
                </GenderLabel>
                <GenderLabel>
                    <input type="radio" name="gender" id="female" required 
                    value="female" 
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}/>
                    Female
                </GenderLabel>
           
            </GenderCategory>
            <FormSubmitButton style={{}}>
            <SubmitInput type="submit" value="Register" onClick={handleRegister} />
            </FormSubmitButton>
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'white' }}>
                    Already have an account? <Link to="/login" style={{color: 'red', textDecoration: 'none',
                        transition: 'color 0.3s'}} onMouseOver={(e) => {e.target.style.color = 'red'; e.target.style.fontSize = '18px';}}
                        onMouseOut={(e) => {e.target.style.color = 'darkred';e.target.style.fontSize = '16px';}} >Login</Link>
                </p>
            </div>
        </Container>
        <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
        </Body>
    );
  };
  
  export default RegisterForm;