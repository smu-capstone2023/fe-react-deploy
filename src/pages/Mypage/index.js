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
    SettingsLink,
} from './MyPageStyles';
const Mypage = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    const [nickname, setNickname] = useState('');
    const [schoolId, setSchoolId] = useState('');

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
            });
    }, []);

    const majorList = JSON.parse(localStorage.getItem('major_options'));

    return (
        <>
            <MyPageLayout>
                <MyPageContainer>
                    <ProfileImageLayout></ProfileImageLayout>
                    <UserNameField>{nickname}</UserNameField>
                    <UserEmailField>{schoolId}@sangmyung.kr</UserEmailField>
                    {majorList.map((major) => {
                        return (
                            <TogoBoardListWidget onClick={() => (window.location.href = `../board/${major.value}`)}>
                                {major.label}
                            </TogoBoardListWidget>
                        );
                    })}
                    <CertificateButton onClick={() => (window.location.href = '../certification')}>학과 인증</CertificateButton>
                    <UserSettingLayout>
                        <LogoutButtonLayout
                            onClick={(e) => {
                                logout();
                            }}
                        >
                            로그아웃
                        </LogoutButtonLayout>
                        <SettingsLink to='../MyPage/MyPageSettings'>설정</SettingsLink>
                    </UserSettingLayout>
                </MyPageContainer>
            </MyPageLayout>
        </>
    );
};

export default Mypage;
