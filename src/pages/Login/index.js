import React from 'react';
import { LoginButton, LoginContainer, LoginInputText, SignupButton
, LoginTitle, LoginLayout } from './LoginStyles';
const Login = () => {
    return(
        <>
        <LoginLayout>
            <LoginContainer>
                <LoginTitle>
                    LOGIN
                </LoginTitle>
                <LoginInputText placeholder="학교이메일 입력"/>
                <LoginInputText placeholder="비밀번호 입력"/>
                <LoginButton>로그인</LoginButton>
                <SignupButton>회원가입하기</SignupButton>
            </LoginContainer>
        </LoginLayout>
        </>
    )
}

export default Login;