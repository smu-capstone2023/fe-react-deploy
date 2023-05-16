import React, { useState } from "react";
import LoginView from "../component/template/LoginView";
import { loginSite } from "../api/User/LoginSite";
import { getUserInfo } from "../api/User/getUserInfo";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    //아이디/비밀번호 찾기
    const onClickFindAccount = () => {
        alert("준비중입니다");
    };
    //회원가입
    const onClickSignUp = () => {
        window.location.href = "/signup";
    };

    const setUserInfoInLocalStorage = (userName, schoolId, profileImageUrl, majorList) => {
        localStorage.setItem("user_name", userName);
        localStorage.setItem("shool_id", schoolId);
        localStorage.setItem("profile_img_url", profileImageUrl);
        localStorage.setItem("majorList", JSON.stringify(majorList));
    };
    const setUserTokenInLocalStorage = (userId, accessToken, refreshToken) => {
        localStorage.setItem("user_id", userId); //TODO: 수정필요
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    };

    const onClickLoginButton = () => {
        loginSite(id, password).then((response) => {
            if (response.access_token) {
                const { access_token, refresh_token } = response;
                setUserTokenInLocalStorage(id, access_token, refresh_token);

                getUserInfo().then((userInfoResponse) => {
                    console.log(userInfoResponse);
                    if (userInfoResponse === {}) {
                        alert("네트워크 문제! 잠시 다시 시도해주세요");
                    } else {
                        const { username, school_id, profile_img_url, majors } = userInfoResponse;
                        setUserInfoInLocalStorage(username, school_id, profile_img_url, majors);
                        window.location.href = "/";
                    }
                });
            } else {
                alert("로그인 정보가 없습니다. 다시 시도해주세요! ");
            }
        });
    };

    return (
        <LoginView
            onChangeId={setId}
            onChangePassword={setPassword}
            onClickFindAccount={onClickFindAccount}
            onClickSignUp={onClickSignUp}
            onClickLoginButton={onClickLoginButton}
        />
    );
};

export default Login;
