import styled from 'styled-components';
import { useState } from 'react';
import Logo from '../atom/Logo';
import { RxHamburgerMenu } from 'react-icons/rx'

export const Header = () => {
    const [title] = useState(['학교게시판','학과게시판','학사일정','문의하기']);
    const [login] = useState(['로그아웃','로그인']);
    const Hamberger = () => {
        return(
            <HambergerLayout>
                <RxHamburgerMenu fontSize={"1.3rem"}/>
            </HambergerLayout>
        )
    } 
    return(
    <HeaderLayout>
            <EmptyBox/>
            <LogoWrapper>
                <Logo width={"5"} />
            </LogoWrapper>
            {title.map((title)=>(
                <HeaderElement title={title}>{title}</HeaderElement>
            ))}
            <HeaderElement>{login[0]}</HeaderElement>
            <Hamberger></Hamberger>
        </HeaderLayout>
    )
}

const EmptyBox = styled.div`
    display: none;
  
    @media screen and (max-width: 768px) {
        display: flex;
        flex: 1;
      }  
`
const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    flex: 1;
    margin-right: 0;
    justify-content: center;
  }
`;
const HeaderLayout = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    flex-direction: row;
    font-size: 1em;
    justify-content: flex-end;

    @media (max-width: 1300px) {
        font-size: 0.8em;
      }
    @media (max-width: 1000px) {
        justify-content: center;
        font-size: .7em;
      }
`
const HeaderElement = styled.div`
    padding: .1rem;
    padding-left: .6rem;
    
    @media (max-width: 768px) {
        display:none;
    }
`
const HambergerLayout = styled.div`
    display:none;
    // justify-content: center; 
    @media (max-width: 768px) {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
     }   
`
export default Header;