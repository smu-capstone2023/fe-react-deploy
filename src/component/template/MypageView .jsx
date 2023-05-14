import React from "react";
import Footer from "../organism/Footer" 
import SectionListHeader from "../molecule/SectionListHeader";
import styled from "styled-components";

/**
 * @param onClickRevoke: () => {}
 * @param onClickLogout: () => {}
 * @returns
 */

const MypageView = ( { onClickRevoke, onClickLogout } ) => {

    return(
        <>
        <SectionListLayout>
            <SectionList_1>
                <SectionListHeader title={'학과인증'} onClick={() => window.location.href = '/major-certification'}></SectionListHeader>
                <SectionListHeader title={'닉네임 설정'} onClick={() => alert('준비중(닉네임 설정)')}></SectionListHeader>
                <SectionListHeader title={'프로필 이미지 변경'} onClick={() => alert('준비중(프로필 이미지 변경)')}></SectionListHeader>
                <SectionListHeader title={'비밀번호 변경'} onClick={() => alert('준비중(비밀번호 변경)')}></SectionListHeader>
                <SectionListHeader title={'로그아웃'} onClick={onClickLogout}></SectionListHeader>
                <SectionListHeader title={'탈퇴하기'} onClick={onClickRevoke}></SectionListHeader>
            </SectionList_1>

            <SectionList_2>
                <p style={{ color:'gray',fontFamily: 'nexon-regular' }}>앱 정보</p>
                <SectionListHeader title={'개인정보 처리방침'} onClick={() => window.location.href = '/privacy'}></SectionListHeader>
                <SectionListHeader title={'앱 버전'} onClick={() => window.location.href = '/app'}></SectionListHeader>
            </SectionList_2>
        
        
        </SectionListLayout>
        <Footer/>
        </>
    )
}


const SectionListLayout = styled.div`
    display: flex;
    gap: 2rem;
    padding: 2rem;
    padding-bottom: 10rem;
    font-size: 1em;

    @media (max-width: 768px) {
        display: block;   
        font-size: .8em; 
      }
`
const SectionList_1 = styled.div`
    flex: 1;    

    @media (max-width: 768px) {
        padding-bottom: 3rem;
      }
`
const SectionList_2 = styled.div`
    flex: 1;    
`

export default MypageView;