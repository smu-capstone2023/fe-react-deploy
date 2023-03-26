import React, { useState } from "react";
import axios from "axios";
import {
  LoginButton,
  LoginContainer,
  LoginInputText,
  SignupLink,
  LoginTitle,
  LoginLayout,
} from "./LoginStyles";

const Login = () => {
  const [school_id, setSchoolId] = useState(""); // setEmail을 setSchoolId로 변경
  const [password, setPassword] = useState("");

  const requestLoginToServer = () => {
    if (school_id === "" || password === "") {
      alert("회원정보를 입력해주세요.");
    } else {
      console.log(school_id, "@", password);
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/login`, {
          headers: {
            school_id: school_id,
            password: password,
            'Content-type': 'application/json',
            Accept: 'application/json',
        },
        })
        .then((response) => {
          console.log(response);
          setUserInfoAtLocalStorage(response.data);
          window.location.href = "/";
        })
        .catch((response) => {
          //예외처리
          //response
          console.log(school_id, "@", password);
          console.log(response);
          alert("로그인 정보가 없습니다.");
        });
    }
  };

  const setUserInfoAtLocalStorage = (response) => {
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("refresh_token", response.refresh_token);
  };

  return (
    <>
      <LoginLayout>
        <LoginContainer>
          <LoginTitle>LOGIN</LoginTitle>
          <LoginInputText
            onChange={(e) => setSchoolId(e.target.value)}
            placeholder="학교이메일 입력"
          />
          <LoginInputText
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
          />
          <LoginButton onClick={() => requestLoginToServer()}>
            로그인
          </LoginButton>
          <SignupLink to="../signup">회원가입하기</SignupLink>
        </LoginContainer>
      </LoginLayout>
    </>
  );
};

export default Login;
