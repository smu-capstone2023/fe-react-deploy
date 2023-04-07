import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../color";

export const SignCheckBoxTitle = styled.label`
  padding: 5px;
  font-size: 0.9em;
`;

export const DefaultText = styled.p`
  padding: 5px;
  font-size: 0.9em;
`;

export const SmallText = styled.p`
  padding: 5px;
  color: #646464;
  font-size: 13px;
`;

export const SignLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: none;

  @media screen and (max-width: 800px) {
    background-color: white;
  }
`;

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.1);
  border: solid 0.1px rgba(128, 128, 128, 0.3);
  border-radius: 30px;
  width: 23em;
  height: 30em;
  padding: 2em 0;
  margin-top: 2px;

  @media screen and (max-width: 1120px) {
    max-width: 35rem;
  }

  @media screen and (max-width: 970px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 800px) {
    max-width: 25rem;
    max-height: 30rem;
  }

  @media (max-width: 654px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding: 20px;
    width: 90%;
    max-height: 30rem;

    box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0);
    border-radius: none;
    border: none;
  }

  @media screen and (max-width: 460px) {
    box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0);
    width: 100%;
    max-height: 30rem;
    border-radius: none;
    border: none;
  }
`;

/* sign3부턴 다름 */

export const SignContainer3 = styled.div`
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* 수직 방향 정렬을 위해 flex-direction 속성 추가 */
    height: 100%;
    width: 23em;

    box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.1);
    border: solid 0.1px rgba(128, 128, 128, 0.3);
    border-radius: 30px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;


export const SignButton3 = styled.div`
  padding: 15px;
  width: 80%;
  height: 50px;
  background: ${COLORS.color_button};
  margin-top: 10px;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

export const SignInnerBox3 = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 0.1px rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  width: 80%;
  height: 100%;
  padding: 1em;

  @media (max-width: 654px) {
    border-radius: none;
    border: none;
  }
`;

export const SignTitle = styled.h1`
    color: ${COLORS.logo};
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%; /* 높이를 10%로 설정 */
    
    
    @media (max-width: 654px) {
      display: none;

`;

export const StepBox = styled.div`
  display: flex;
  padding: 1em;
  width: 100%;
  height: 0.5em;
  margin-bottom: 10px;
`;

export const NumberBtn = styled.div`
  display: flex;
  margin: 0 0.5em;
  border-radius: 10px;
  background: ${COLORS.logo};
  width: 3em;
  height: 3em;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const SignInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 0.1px rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  width: 80%;
  height: 70%;
  padding: 1em;

  @media (max-width: 654px) {
    border-radius: none;
    border: none;
  }
`;

export const TosBox = styled.div`
  border: solid 0.5px gray;
  overflow: scroll;
  width: auto;
  max-height: 350px;
  padding: 10px;
  font-size: 0.5rem;

  li {
    white-space: pre-wrap;
  }
`;

export const SignCheckBox = styled.input`
  background-color: white;
  float: left;
`;

export const SignInputText = styled.input`
  padding: 15px;
  border: solid 0.1px rgba(128, 128, 128, 0.3);
  border-radius: 10px;
  margin: 5px 0 10px 0;
`;

export const SignButton = styled.div`
  padding: 15px;
  width: 80%;
  height: 50px;
  background: ${COLORS.color_button};
  margin-top: 10px;
  border-radius: 10px;
  color: white;
  text-align: center;
`;

export const Line = styled.div`
  width: 90%;
  border-bottom: solid 0.5px gray;
`;

export const ProfileImage = styled.div`
  width: 80%;
  height: 130px;
  border: solid 1px black;
  margin: 0.2rem;
`;

export const SignupTitleLayout = styled.div`
  padding: 3em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupAgreeLayout = styled.div`
  padding: 1em 0 0 0;
  display: flex;
  flex-direction: row;
`;

export const CertificationLink = styled(Link)`
  padding: 15px;
  width: 80%;
  background: ${COLORS.gray_button};
  margin-top: 20px;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
`;

//"이용약관을 확인해주세요."
export const AgreementTest = styled.div`
  margin-bottom: 10px;
  font-size: 0.8rem;

  @font-face {
    font-family: "GOTHICA1-REGULARR";
    src: url("./font/GOTHICA1-REGULAR.woff") format("woff");
  }
`;

//
export const UploadInput = styled.input``;

export const UploadButton = styled.div`
  background: ${COLORS.logo};
  border-radius: 5px;
  padding: 0.5em;
`;

export const UploadButtonLabel = styled.label`
  font-size: 1rem;
  background: ${COLORS.logo};
  color: white;
`;

//뉴프사
export const ProfileImageFrame = styled.img`
  object-fit: fill;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ProfileImageContainer = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  border: solid 0.1px rgba(128, 128, 128, 0.4);
  border-radius: 10px;
  max-width: 25em;
  text-align: center;
  height: 15em;
`;
