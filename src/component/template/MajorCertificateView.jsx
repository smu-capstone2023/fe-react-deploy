import React from "react";
import styled from "styled-components";
import Footer from "../organism/Footer"

/**
 * @param onClickImageUploadButton: () => {}
 * @param onClickDeleteImageButton: () => {}
 * @param onChangeContent: () => {}
 * @param onClickCompleteButton: () => {}
 * @returns
 */

const MajorCertificateView = () => {

    return(
        <>
            <MCVLayout>
                <div style={{display: 'flex', flex: 2 ,justifyContent:'center', fontFamily:'nexon-regular' }}>학과 인증 절차</div>

                <div style={{flex: 5 }}>
                    <p style={{fontFamily:'nexon-regular'}}>학과를 인증할 수 있는 이미지를 첨부해주세요.</p>
                    <p style={{fontFamily:'nexon-regular'}}>사진을 기준으로 학과가 추가됩니다.</p>
                    <p style={{fontFamily:'nexon-regular'}}>(사진엔 학번도 들어가있어야 합니다!)</p>
                </div>

                <div style={{ flex: 5 }}>사진</div>

                <div style={{flex: 1}}>
                    <p style={{fontFamily:'nexon-regular'}}>인증 절차에 필요한 기타 말씀해주실 것을 적어주세요!</p>
                    <p style={{fontFamily:'nexon-regular'}}>(선택)</p>
                </div>
            
                <div style={{flex: 1}}>입력란</div>

                <div style={{flex: 1, fontFamily:'nexon-regular'}}>학과 인증 요청하기</div>
            </MCVLayout>
            <Footer></Footer>
        </>
        )
}

const MCVLayout =  styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 0 auto;
    background: red;
    height: 100%;
`



export default MajorCertificateView;