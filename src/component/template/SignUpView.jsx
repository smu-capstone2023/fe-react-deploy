import React from "react";
import styled from "styled-components";
import InputBox from "../molecule/InputBox";
import Button from "../molecule/Button";

/**
 * @param onChangeId: (value: string) => {}
 * @param onChangeNickname: (value: string) => {}
 * @param onChangePassword: (value: string) => {}
 * @param onChangeRePassword: (value: string) => {}
 * @param onClickSignupButton: () => {}
 * @returns
 */

const SignUpView = ({ onChangeId, onChangePassword, onChangeRePassword, onClickSignupButton, onChangeNickname }) => {
    return (
        <>
            <SignupViewLayout>
                <SignUpContainer style={{ flex: 1 }}>
                    <SignUpImage src={"../img/signimg2.png"} alt="signup" />
                    <Title>회원가입 절차</Title>

                    {/* 학번입력 */}
                    <Title1>
                        {" "}
                        <BoldText>SMUS</BoldText>&nbsp;인증을 위한
                    </Title1>
                    <Title2> 학번을 입력해 주세요!</Title2>
                    <InputBoxContainer style={{ display: "flex", flexDirection: "column" }}>
                        <InputBox placeholder="ex) 202312345 (9자리)" onChange={onChangeId} />
                    </InputBoxContainer>

                    {/* 닉넴입력 */}
                    <Title2 style={{ marginTop: "5px" }}>닉네임을 입력해 주세요!</Title2>
                    <InputBoxContainer style={{ display: "flex", flexDirection: "column" }}>
                        <InputBox placeholder="nickname" onChange={onChangeNickname} />
                    </InputBoxContainer>

                    {/* 비번 입력 */}
                    <Title1>
                        {" "}
                        <BoldText>SMUS</BoldText>에서 사용할{" "}
                    </Title1>
                    <Title2> 비밀번호를 입력해 주세요!</Title2>
                    <InputBoxContainer style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <InputBox placeholder="password" onChange={onChangePassword} type="password" />
                        <Title2 style={{ color: "red", fontSize: "0.8rem" }}>
                            {" "}
                            * 비밀번호: 8~16자리 영문, 숫자를 조합해 주세요. (특수문자 허용){" "}
                        </Title2>
                        <InputBox placeholder="re-password" onChange={onChangeRePassword} type="password" />
                    </InputBoxContainer>
                    <div style={{ width: "inherit", margin: "50px 0 100px" }}>
                        <Button title="다음" onClick={onClickSignupButton} style={{ marginTop: "50px", width: "inherit" }} />
                    </div>
                </SignUpContainer>
                <ImageContainer style={{ flex: 2 }} />
            </SignupViewLayout>
        </>
    );
};

//글씨, title
const Title = styled.p`
    font-family: nexon-regular;
    font-size: 20px;
    @media (max-width: 760px) {
        font-size: 15px;
    }
`;
const BoldText = styled.b`
    display: inline-block;
    font-family: nexon-bold;
    color: #4169e1;
`;

const Title1 = styled.p`
    margin-top: 40px;
    font-family: nexon-regular;
    font-size: 13px;
    margin-right: auto;
    color: #747474;

    @media (max-width: 760px) {
        margin-top: 20px;
        font-size: 11px;
    }
`;

const Title2 = styled.p`
    font-family: nexon-regular;
    font-size: 17px;
    margin-right: auto;
    color: #747474;

    @media (max-width: 760px) {
        font-size: 13px;
    }
`;

const SignUpImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 164.21px;

    @media (max-width: 760px) {
        width: 100px;
        height: 144.21px;
    }
`;
const SignupViewLayout = styled.div`
    display: flex;
    width: 100%;
    min-height: 90vh;
    flex-direction: row;
    background-color: white;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const SignUpContainer = styled.div`
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
    width: 100%;
    font-family: "nexon-regular";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #b6b6b6;

    @media (max-width: 760px) {
        margin-top: 1px;
    }
`;
const ImageContainer = styled.div`
    background-image: url("../../img/signupframe.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 760px) {
        display: none;
    }
`;

export default SignUpView;
