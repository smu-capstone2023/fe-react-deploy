import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    LogoutButtonLayout,
    TogoBoardListWidget,
    MyPageLayout,
    ProfileImageLayout,
    MyPageContainer,
    UserNameField,
    UserEmailField,
    UserSettingLayout,
    CertificateButton,
    ChangeInfoButton,
} from './MyPageStyles';
import { revoke } from '../../api/auth/revoke';
const Mypage = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    const [nickname, setNickname] = useState('');
    const [schoolId, setSchoolId] = useState('');
    //프로필 이미지 받아오기
    const [profileImgUrl, setProfileImgUrl] = useState('');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/auth/user_info`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setNickname(response.data.username);
                setSchoolId(response.data.school_id);

                setProfileImgUrl(response.data.imageUrl);
            });
    }, []);

    const majorList = JSON.parse(localStorage.getItem('major_options'));

    return (
        <>
            <MyPageLayout>
                <MyPageContainer>
                    <ProfileImageLayout>이미지파일 받아오기</ProfileImageLayout>
                    <UserNameField>{nickname}</UserNameField>
                    <UserEmailField>{schoolId}@sangmyung.kr</UserEmailField>
                    {majorList.map((major, index) => {
                        return (
                            <TogoBoardListWidget key={index} onClick={() => (window.location.href = `/board/${major.value}`)}>
                                {major.label}
                            </TogoBoardListWidget>
                        );
                    })}
                    <CertificateButton onClick={() => (window.location.href = '/certification')}>학과 인증</CertificateButton>
                    {/* 닉변 페이지로 이동 */}
                    {/* <ChangeInfoButton onClick={() => (window.location.href = '../mypagechangeinfo')}>설정 변경</ChangeInfoButton> */}
                    <UserSettingLayout>
                        <LogoutButtonLayout
                            onClick={(e) => {
                                logout();
                            }}
                        >
                            로그아웃
                        </LogoutButtonLayout>
                        {/* <SettingsLink to='../MyPage/MyPageSettings'>설정</SettingsLink> */}
                        <LogoutButtonLayout
                            onClick={(e) => {
                                revoke(schoolId, localStorage.getItem('access_token')).then((response) => {
                                    if (response) {
                                        alert('정상적으로 탈퇴되었습니다.');
                                        localStorage.clear();
                                        window.글location.href = '/';
                                    } else {
                                        alert('탈퇴하기가 실패했습니다. 잠시 후 시도해주세요.');
                                    }
                                });
                            }}
                        >
                            탈퇴하기
                        </LogoutButtonLayout>
                    </UserSettingLayout>
                </MyPageContainer>
            </MyPageLayout>
        </>
    );
};

export default Mypage;
