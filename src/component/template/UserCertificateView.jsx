import React from "react";
import styled from "styled-components";
import Button from "../molecule/Button";


/**
 * @param onClickCompleteButton: () => {}
 * @returns
 */

const UserCertificateView = ({
    onClickCompleteButton,
    }) => {

    return (
    <>
      <SignupViewLayout style={{display: "flex"}}>       
        <SignUpContainer style={{ flex: 1}}>

        <SignUpImage src={"../img/signimg2.png"} alt="signup" />
        <Title>회원 가입 절차</Title>

        {/* 주의글 */}
          <Title1> <span style={{color: "#4169E1"}}>(주의!)</span> 인증을 완료해야 로그인을 하실 수 있으니</Title1>
          <Title2> 아래 절차를 꼭 진행해주세요!</Title2>

        {/*절차 박스*/}
          <Box>
            <BoxText>1. <span style={{color: "#4169E1"}}>office365</span>에서 상명대학교 계정으로 로그인을 합니다</BoxText>
            <BoxText>2. <span style={{color: "#4169E1"}}>인증 메일</span>을 확인해주세요!</BoxText>
            <BoxText>3. 메일로 온, <span style={{color: "#4169E1"}}>링크를 클릭</span>해주시면 인증이 완료됩니다! </BoxText>
          </Box>

        {/* 스펨메일함 글 */}
          <Title1> 만약 메일이 오지 않았다면, </Title1>
          <Title2> <span style={{color: "#4169E1"}}>스펨 메일함</span>을 확인해주세요!</Title2>
            <div style={{ width: 'inherit', margin: '15px 0 100px' }}>
            <Button
              title="네! 확인했습니다"
              onClick={onClickCompleteButton}
              style={{ marginTop: '50px', width: 'inherit' }}
            />
            </div>
        </SignUpContainer>
        <ImageContainer style={{ flex: 2 }}/>
      </SignupViewLayout>

      </>
    );
  };

//박스
const Box = styled.div`
  margin-top: 30px;
  width: 350px;
  min-height: 150px;
  border: 0.5px dashed #606060;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxText = styled.div`
  margin-right: auto;
  margin-top: 13px;
  font-family: 'NEXON Lv1 Gothic';
  font-style: normal;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 760px) {
    margin-top: 5px;
    font-size: 13px;
    padding: 10px;
  }

  span {
    color: #4169E1;
    font-size: 13px;
    margin-right: auto;
  }
`;



//글씨, title
const Title =  styled.div`
  font-family: 'NEXON Lv1 Gothic';
  font-style: normal;
  font-size: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 760px) {
    font-size: 15px;
  }

`;

const Title1 =  styled.div`
margin-top: 30px;
font-family: 'NEXON Lv1 Gothic';
font-style: normal;
font-size: 15px;
display: flex;
align-items: center;
color: #000000;

@media (max-width: 760px) {
  margin-top: 20px;
  font-size: 11px;
}

span {
  font-family: 'NEXON-Bold';
  color: #4169E1;
}

`;

const Title2 =  styled.div`
font-family: 'NEXON Lv1 Gothic';
font-style: normal;
font-size: 15px;
display: flex;
align-items: center;
color: #000000;

span {
  font-family: 'NEXON-Bold';
  color: #4169E1;
}
@media (max-width: 760px) {
  font-size: 11px;
}

`;

const SignUpImage = styled.img`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 164.21px;

  @media (max-width: 760px) {
    width: 100px;
    height: 144.21px;
    margin-top: 0px;
  }

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


export default UserCertificateView;

