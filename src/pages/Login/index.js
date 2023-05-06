import React, { useState } from 'react';
import axios from 'axios';
import { LoginButton, LoginContainer, LoginInputText, SignupLink, LoginTitle, LoginLayout } from './LoginStyles';
import { setUserMajorListInLocalStorage } from '../../api/auth/usermajors';
import { loginSite } from '../../api/User/LoginSite' ;
import { getUserMajorsInfo } from '../../api/User/GetUserMajorsInfo' ;
import LoginView from '../../component/template/LoginView';


const checkLoginFormat = (schoolId, password) => {
    if (schoolId) {
        if (password) {
            return true;
        } else {
            alert("비밀번호를 입력해주세요.");
            return false;
        }
    } else {
        alert("아이디를 입력해주세요.");
        return false;
    }
};

const setRefreshTokenInLocalStorage = (refreshToken) => {
    localStorage.setItem('refresh_token', refreshToken);
};

const setAccessTokenInLocalStorage = (accessToken) => {
    localStorage.setItem('access_token', accessToken);
};

const setMajorListInLocalStorage = (majorList) => {
    localStorage.setItem('major_list', majorList);
};

const login = (schoolId, password) => {
    if (checkLoginFormat(schoolId, password)) {
        loginSite(schoolId, password).then(response => {
            if (response){
            setAccessTokenInLocalStorage(response.access_token);
            setRefreshTokenInLocalStorage(response.refresh_token);
            
            getUserMajorsInfo().then(response => {
            setMajorListInLocalStorage(response);
            window.location.href='/';
            })}
        })
    }
};

const Login = () => {
    const [school_id, setSchoolId] = useState(''); // setEmail을 setSchoolId로 변경
    const [password, setPassword] = useState('');

    const requestLoginToServer = () => {
        console.log(school_id, password);
        if (school_id === '' || password === '') {
            alert('회원정보를 입력해주세요.');
        } else {
            axios
                .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
                    school_id: school_id,
                    password: password,
                })
                .then((response) => {
                    setUserInfoAtLocalStorage(response.data);
                    setUserMajorListInLocalStorage(response.data.access_token).then((response) => {
                        if (response) {
                            window.location.href = '/';
                        }
                    });
                })
                .catch((response) => {
                    //예외처리
                    if (response && response.status === 401) {
                        alert('API 요청 양식이 틀렸습니다.');
                    } else if (response && response.status === 403) {
                        alert('로그인이 실패했습니다.');
                    } else if (response && response.status === 405) {
                        alert('학교 이메일 인증을 완료하지 않았습니다.');
                    } else {
                        alert('로그인 정보가 없습니다.');
                    }
                });
        }
    };

    const setUserInfoAtLocalStorage = (response) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
    };

    return (
        <>

            <LoginView/>
        </>
    );
};

export default Login;
