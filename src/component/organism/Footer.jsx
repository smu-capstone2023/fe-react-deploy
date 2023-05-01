import styled from "styled-components";

export const Footer = () => {
    const Logo = () => {
        return(<img src="../../img/logo.svg" 
        style={{width:"3.7rem", marginTop:".2rem"}} />)};
    const Info = () => {
        return(
        <FooterInfo>
            <h1 style={{fontFamily:"nexon-regular"}}>상명대학교 자체 커뮤니티</h1>
            <br/>
            <p style={{fontFamily:"nexon-regular"}}>개인정보처리방침 &gt;</p>
            <p style={{fontFamily:"nexon-regular"}}>서비스 이용약관</p>
            <p>대표 관리자 | 백종원</p>
            <p>이메일 | ❗❗@sangmyung.kr</p>
            <p>주소 | 상명대학교 제 1공학관 어디선가</p>
        </FooterInfo>)
    }
    return(
     <FooterLayout>
        <Logo/>
        <Info/>
     </FooterLayout>
    )
}

const FooterLayout = styled.div`
    background: F6F6F6;
    padding: 1rem;
    border: 1px solid #898989;
    width: 100%; 
`
const FooterInfo = styled.div`
    font-size: .6em;
    padding-top: .3rem;
    font-family: "nexon-bold";

    @media screen and (max-width: 768px) {
        font-size: .55em;
      }
`

export default Footer;