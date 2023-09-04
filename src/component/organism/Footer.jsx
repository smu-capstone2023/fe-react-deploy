import styled from "styled-components";
import Logo from "../atom/Logo";
import { useToast } from "@chakra-ui/react";

export const Footer = () => {
    const toast = useToast();
    const Info = () => {
        return (
            <FooterInfo>
                <h1 style={{ fontFamily: "nexon-regular" }}>상명대학교 자체 커뮤니티</h1>
                <br />
                <p
                    onClick={() => {
                        toast({ title: "준비 중입니다.(개인정보처리방침)", position: "top", isClosable: true, variant: "subtle" });
                    }}
                    style={{ fontFamily: "nexon-regular", cursor: "pointer" }}
                >
                    개인정보처리 방침 &gt;
                </p>
                <p
                    onClick={() => {
                        toast({ title: "준비 중입니다.(서비스 이용약관)", position: "top", isClosable: true, variant: "subtle" });
                    }}
                    style={{ fontFamily: "nexon-regular", cursor: "pointer" }}
                >
                    서비스 이용약관
                </p>
                <p>대표 관리자 | 최민주</p>
                <p>이메일 | 201710993@sangmyung.kr</p>
                <p>주소 | 상명대학교 제 1공학관 G209</p>
            </FooterInfo>
        );
    };
    return (
        <FooterLayout>
            <Logo width={"3.7"} />
            <Info />
        </FooterLayout>
    );
};

const FooterLayout = styled.footer`
    position: absolute;
    bottom: 0;
    background: #f6f6f6;
    padding: 1rem;
    border-top: 1px solid #898989;
    width: 100%;
`;
const FooterInfo = styled.div`
    font-size: 0.8em;
    padding-top: 0.3rem;
    font-family: "nexon-bold";
`;

export default Footer;
