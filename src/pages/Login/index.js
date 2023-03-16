import React, { useState } from 'react';
import axios from 'axios';
import { LoginButton, LoginContainer, LoginInputText, SignupLink, LoginTitle, LoginLayout } from './LoginStyles';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const requestLoginToServer = () => {
        if (email === '' || password === '') {
            alert('회원정보를 입력해주세요.');
        } else {
            axios
                .post(`${process.env.REACT_APP_SERVER_URL}:8001/auth/login`, {
                    email: email,
                    password: password,
                })
                .then((response) => {
                    console.log(response);
                    setUserInfoAtLocalStorage(response.data);
                    window.location.href = '/';
                })
                .catch((response) => {
                    console.log(response);
                    alert('로그인 정보가 없습니다.');
                });
        }
    };

    const setUserInfoAtLocalStorage = (response) => {
        localStorage.setItem('email', response.email);
        localStorage.setItem('nickname', response.nickname);
        localStorage.setItem('majorList', JSON.stringify(response.majorlist));
    };

    return (
        <>
            <LoginLayout>
                <LoginContainer>
                    <LoginTitle>LOGIN</LoginTitle>
                    <LoginInputText onChange={(e) => setEmail(e.target.value)} placeholder='학교이메일 입력' />
                    <LoginInputText onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호 입력' />
                    <LoginButton onClick={() => requestLoginToServer()}>로그인</LoginButton>
                    <SignupLink to='../signup'>회원가입하기</SignupLink>
                </LoginContainer>
            </LoginLayout>
        </>
    );
};

export default Login;
