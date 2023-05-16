import React, { useState } from "react";
import LoginView from "../component/template/LoginView";
import { loginSite } from "../api/User/LoginSite";
import { getUserInfo } from "../api/User/GetUserInfo";

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

    const setUserInfoInLocalStorage = (userId, accessToken, refreshToken, userName, schoolId, profileImageUrl, majorList) => {
        localStorage.setItem("user_id", userId);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("user_name", userName);
        localStorage.setItem("shool_id", schoolId);
        localStorage.setItem("profile_img_url", profileImageUrl);
        localStorage.setItem("majorList", JSON.stringify(majorList));
    };
    //로그인
        // 1. getUserInfo()함수를 이용해서 user의 정보를 가져옵니다.
        // - 만약 getUserInfo의 response가 빈 객체 {}이면 alert로 '네트워크 문제! 잠시 다시 시도해주세요'라는 문구를 출력해줍니다.
        // - 정상적으로 가져왔으면, setUserInfoLocalStorage를 통해서 localStorage에 값을 저장합니다.
        // - loginSite의 output값을 postman에서 확인하시고 같은 setUserInfoLocalStorage을 통해서 localStorage에 값을 저장합니다.
    const onClickLoginButton = () => {
        loginSite(id, password).then((response) => {
            if (response.access_token) {
            getUserInfo()
            .then((userInfoResponse) => {
              if (Object.keys(userInfoResponse).length === 0) { //빈{}
                alert("네트워크 문제! 잠시 다시 시도해주세요");
              } 
              else {
                const { userId, accessToken, refreshToken, userName, schoolId, profileImageUrl, majorList } = response;
                setUserInfoInLocalStorage(userId, accessToken, refreshToken, userName, schoolId, profileImageUrl, majorList);
              }
            })
                window.location.href = "/";
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
