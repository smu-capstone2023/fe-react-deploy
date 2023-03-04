import React from 'react';
import {
    LogoutButtonLayout,
    TogoBoardListWidget,
    MyPageLayout,
    ProfileImageLayout,
    MyPageContainer,
    UserNameField,
    UserEmailField,
    UserSettingLayout,
    SettingButtonLayout,
} from './MyPageStyles';
const Mypage = () => {
    const logout = () => {
        localStorage.clear();
    };
    const majorList = JSON.parse(localStorage.getItem('majorList'));
    const nickName = localStorage.getItem('nickname');
    const email = localStorage.getItem('email');
    return (
        <>
            <MyPageLayout>
                <MyPageContainer>
                    <ProfileImageLayout></ProfileImageLayout>
                    <UserNameField>{nickName}</UserNameField>
                    <UserEmailField>{email}</UserEmailField>
                    {majorList.map((major) => {
                        return <TogoBoardListWidget>{major.majorName}</TogoBoardListWidget>;
                    })}
                    <UserSettingLayout>
                        <LogoutButtonLayout
                            onClick={(e) => {
                                logout();
                            }}
                        >
                            로그아웃
                        </LogoutButtonLayout>
                        <SettingButtonLayout>설정</SettingButtonLayout>
                    </UserSettingLayout>
                </MyPageContainer>
            </MyPageLayout>
        </>
    );
};

export default Mypage;
