import React from "react";
import styled from "styled-components";
import InputBox from "../molecule/InputBox";


/**
 * @param onChangeId: () => {}
 * @param onChangePassword: () => {}
 * @param onChangeRePassword: () => {}
 * @param onClickSignupButton: () => {}
 * @returns
 */

const SignUpView = ({
    onChangeId,
    onChangePassword,
    onChangeRePassword,
    onClickSignupButton,
    }) => {

    return (
    <>
      <SignupViewLayout style={{display: "flex"}}>       
        <SignUpContainer style={{ flex: 1}}>
                  
        <SignUpImage src={`${process.env.PUBLIC_URL}/img/signimg2.png`} alt="signup" />
        <Title>회원 가입 절차</Title>
       
       {/* 학번입력 */}
        <Title1> <span style={{color: "#4169E1"}}>SMUS</span>인증을 위한</Title1>
        <Title2> 학번을 입력해주세요!</Title2>

          <InputBoxContainer style={{ display: "flex", flexDirection: "column" }}>
            <InputBox placeholder="@sangmyung.kr" onChange={onChangeId}/>
          </InputBoxContainer>

      {/* 비번 입력 */}
        <Title1> <span style={{color: "#4169E1"}}>SMUS</span> 에서 사용할 </Title1>
        <Title2> 비밀번호를 입력해주세요!</Title2>

          <InputBoxContainer style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InputBox placeholder="password" onChange={onChangePassword}/>
            <InputBox placeholder="re-password" onChange={onChangeRePassword}/>
          </InputBoxContainer>


            <SignUpButton onClick={onClickSignupButton}>다음</SignUpButton>
        </SignUpContainer>

        <ImageContainer style={{ flex: 2 }}/>
      </SignupViewLayout>

      </>
    );
  };



  //글씨, title
  const Title =  styled.div`
  font-family: 'NEXON Lv1 Gothic';
  font-style: normal;
  font-size: 20px;
  display: flex;
  align-items: center;

`;

const Title1 =  styled.div`
margin-top: 50px;
font-family: 'NEXON Lv1 Gothic';
font-style: normal;
font-size: 13px;
display: flex;
margin-right: auto;
align-items: center;
color: #747474;

`;

const Title2 =  styled.div`
font-family: 'NEXON Lv1 Gothic';
font-style: normal;
font-size: 17px;
display: flex;
margin-right: auto;
align-items: center;
color: #747474;

`;

const SignUpImage = styled.img`
  width: 100%;
  height: 100%;
`;


  const SignupViewLayout = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: row;

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
  font-family: 'NEXON Lv1 Gothic';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #B6B6B6;

`;


const SignUpButton = styled.button`
  background-color: #4169E1;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
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

