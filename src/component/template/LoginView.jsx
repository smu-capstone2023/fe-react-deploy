import React from "react";
import styled from "styled-components";

import InputBox from "../molecule/InputBox";
import Logo from "../atom/Logo";
import Footer from "../organism/Footer";
import LoginImage from "../atom/LoginImage";
import Button from "../molecule/Button";

/**
 * @param onChangeId: () => {}
 * @param onChnagePassword: () => {}
 * @param onClickLoginButton: () => {}
 * @param onClickFindAccount: () => {}
 * @param onClickSignUp: () => {} //임의로 정했습니다!
 * @returns
 */

const LoginView = ({ onChangeId, onChangePassword, onClickLoginButton, onClickFindAccount, onClickSignUp }) => {
    return (
        <>
            <LoginVeiwLayout style={{ display: "flex", backgroundColor: "white" }}>
                <LoginContainer style={{ flex: 1 }}>
                    <Logo width="7" />
                    <InputBoxContainer style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "10px" }}>
                        <InputBox placeholder="학번" onChange={onChangeId} />
                        <InputBox type="password" placeholder="비밀번호" onChange={onChangePassword} />
                    </InputBoxContainer>
                    <Button onClick={onClickLoginButton} title="로그인"></Button>
                    <FindAccountButton onClick={onClickFindAccount}>비밀번호 찾기</FindAccountButton>
                    <SignUpButton onClick={onClickSignUp}>
                        아직&nbsp;<span style={{ color: "#4169E1" }}> SMUS 회원</span>이 아니신가요?
                    </SignUpButton>
                </LoginContainer>
                <ImageContainer style={{ flex: 2 }} />
            </LoginVeiwLayout>
        </>
    );
};

const LoginVeiwLayout = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: row;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin: left;

    @media (max-width: 760px) {
        width: 100%;
        margin: 0;
    }
`;

const InputBoxContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    font-family: nexon-regular;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #b6b6b6;

    @media (max-width: 760px) {
        margin-top: 50px;
    }
`;

const LoginButton = styled.button`
    background-color: #4169e1;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
`;

const FindAccountButton = styled.button`
    margin-left: auto;
    height: 35px;

    font-family: nexon-regular;
    font-style: normal;
    font-size: 13px;
    display: flex;
    align-items: center;
    color: #8a8a8a;
`;

const SignUpButton = styled.button`
    height: 35px;
    margin-top: 10px;
    font-family: nexon-regular;
    font-size: 15px;
    display: flex;
    align-items: center;
    color: #8a8a8a;

    //클릭->색상바뀜
    &:hover {
        color: #4169e1;
    }
`;

const ImageContainer = styled.div`
    background-image: url("../../img/loginframe.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 760px) {
        display: none;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-height: 100%;
    overflow: hidden;
`;

export default LoginView;
