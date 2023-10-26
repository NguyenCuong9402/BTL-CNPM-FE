import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import {
  LoginLink,
  SelectDiaChi,
  Body,
  Container,
  FormTitle,
  MainUserInfo,
  UserInput,
  UserInputBox,
  UserInputLabel,
  GenderLabel,
  GenderCategory,
  GenderTitle,
  FormSubmitButton,
  SubmitInput, CustomDatePicker
} from "./registerStyle";
import "react-datepicker/dist/react-datepicker.css";
import { hover } from "@testing-library/user-event/dist/hover";
import Modal from "../../modal";

const RegisterForm = () => {
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPush, setPush] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    tinh: "",
    huyen: "",
    xa: "",
    birthday: null,
  });
  const ChooseTinh = (newTinh) => {
    setFormData({
        ...formData,
        tinh: newTinh,
        huyen: "",
        xa:""
      });
    fetchDiaChi(newTinh, "", "");
  };
  const ChooseHuyen = (newHuyen) => {
    setFormData({
        ...formData,
        huyen: newHuyen,
        xa:""
      });
    fetchDiaChi(formData.tinh, newHuyen, "");
  };

  const ChooseXa = (newXa) => {
    setFormData({
        ...formData,
        xa:newXa
      });
    fetchDiaChi(formData.tinh, formData.huyen, newXa);
  };

  const ChooseDate = (date) => {
    setFormData({
        ...formData,
        birthday:date
      });
  };

  const [DsTinh, SetDsTinh] = useState([]);
  const [DsHuyen, SetDsHuyen] = useState([]);
  const [DsXa, SetDsXa] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    // Kiểm tra xem trong localStorage có user không
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      history.push("/index");
    }
    fetchDiaChi(formData.tinh, formData.huyen, formData.xa);
  }, []);
  const handleRegister = () => {
    axios
      .post("http://127.0.0.1:5000/api/v1/user/register", formData)
      .then(function (response) {
        if (response.data.message.status === "success") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
          setPush(true);
        }
        if (response.data.message.status === "error") {
          setModalMessage(response.data.message.text);
          setModalOpen(true);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert("Error");
      });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (isPush === true) {
      history.push("/login");
    }
  };

  const fetchDiaChi = async (tinh, huyen, xa) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/user/tim_dia_chi?tinh=${tinh}&huyen=${huyen}&xa=${xa}`
      );
      if (response.data.message.status === "success") {
        const formattedData = response.data.data;
        SetDsTinh(formattedData.tinh);
        SetDsHuyen(formattedData.huyen);
        SetDsXa(formattedData.xa);
      } else {
        console.error("Error fetching history data.");
      }
    } catch (error) {
      console.error("Error calling history API:", error);
    }
  };
  return (
    <Body>
      <Container>
        <FormTitle>Đăng ký tài khoản</FormTitle>
        <MainUserInfo>
          <UserInputBox>
            <UserInputLabel htmlFor="fullName">Họ tên</UserInputLabel>
            <UserInput
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Điền họ tên"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </UserInputBox>
          <UserInputBox>
            <UserInputLabel htmlFor="phoneNumber">Số điện thoại</UserInputLabel>
            <UserInput
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Điền số điện thoại"
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
              placeholder="Điền email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </UserInputBox>

          <UserInputBox>
            <UserInputLabel>Ngày sinh</UserInputLabel>
            <CustomDatePicker
                selected={formData.birthday}
                onChange={ChooseDate}
                dateFormat="dd/MM/yyyy"
            />
          </UserInputBox>

          <UserInputBox>
            <UserInputLabel>Mật khẩu</UserInputLabel>
            <UserInput
              type="password"
              id="password"
              name="password"
              placeholder="Điền mật khẩu"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </UserInputBox>
          <UserInputBox>
            <UserInputLabel>
              Xác nhận mật khẩu
            </UserInputLabel>
            <UserInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Điền lại mật khẩu"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </UserInputBox>
          <UserInputBox>
          <UserInputLabel>Chọn thành phố/ tỉnh</UserInputLabel>
          <SelectDiaChi
            name="tinh"
            value={formData.tinh}
            onChange={(e) => ChooseTinh(e.target.value)}

          >
            <option value="" disabled selected>
              Thành phố/Tỉnh
            </option>
            {DsTinh.map((tinhItem) => (
              <option key={tinhItem} value={tinhItem}>
                {tinhItem}
              </option>
            ))}
          </SelectDiaChi>
          </UserInputBox>
          <UserInputBox>
          <UserInputLabel>Chọn Quận/ Huyện</UserInputLabel>

          <SelectDiaChi
            name="huyen"
            value={formData.huyen}
            onChange={(e) => ChooseHuyen(e.target.value)}

          >
            <option value="" disabled selected>
              Quận/Huyện
            </option>
            {DsHuyen.map((tinhItem) => (
              <option key={tinhItem} value={tinhItem}>
                {tinhItem}
              </option>
            ))}
          </SelectDiaChi>
          </UserInputBox>
          <UserInputBox>

          <UserInputLabel>Chọn Phường xã</UserInputLabel>

          <SelectDiaChi
            name="xa"
            value={formData.xa}
            onChange={(e) => ChooseXa(e.target.value)}

          >
            <option value="" disabled selected>
              Phường/ Xã
            </option>
            {DsXa.map((tinhItem) => (
              <option key={tinhItem} value={tinhItem}>
                {tinhItem}
              </option>
            ))}
          </SelectDiaChi>
          </UserInputBox>
          <UserInputBox>
            <UserInputLabel>Địa chỉ chi tiết</UserInputLabel>
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

        </MainUserInfo>
        <GenderTitle>Gender</GenderTitle>
        <GenderCategory>
          <GenderLabel>
            <input
              type="radio"
              name="gender"
              id="male"
              required
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}/>
            Nam
          </GenderLabel>
          <GenderLabel>
            <input
              type="radio"
              name="gender"
              id="female"
              required
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            Nữ
          </GenderLabel>
        </GenderCategory>
        <FormSubmitButton style={{}}>
          <SubmitInput
            type="submit"
            value="Register"
            onClick={handleRegister}
          />
        </FormSubmitButton>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "white" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "orange",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "orange";
                e.target.style.fontSize = "18px";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "orange";
                e.target.style.fontSize = "16px";
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </Container>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </Body>
  );
};

export default RegisterForm;
