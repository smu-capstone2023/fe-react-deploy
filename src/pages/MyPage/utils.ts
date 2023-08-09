import { changeNickname } from "api/User/changeNickname";
import { changePassword } from "api/User/changePassword";
import { changeMbti } from "api/User/changeMbti";
import { revoke } from "api/User/revoke";
import Swal from "sweetalert2";
import { css } from "@emotion/react";

export const foldingCss = css`
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(-20px);
            height: 0px;
            margin: 0px;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            height: 200px;
            margin: 20px;
        }
    }
    @keyframes fade-out {
        from {
            opacity: 1;
            transform: translateY(0);
            height: 200px;
            margin: 20px;
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
            height: 0px;
            margin: 0px;
        }
    }
`;

export const onChangeMbti = (newMbti: string) => {
    changeMbti(newMbti).then((response)=>{
        if (response) {
            Swal.fire(`MBTI가 ${newMbti}로 바뀌었습니다!!`);
            localStorage.setItem("mbti", newMbti);
        } else {
            Swal.fire("네트워크 오류!", "잠시후 다시 시도해주세요!", "error");
        }
    })
};

export const onChangeNickname = (newNickname: string) => {
    changeNickname(newNickname).then((response) => {
        if (response) {
            Swal.fire(`닉네임이 ${newNickname}로 바뀌었습니다!!`);
            localStorage.setItem("user_name", newNickname);
        } else {
            Swal.fire("네트워크 오류!", "잠시후 다시 시도해주세요!", "error");
        }
    });
};

export const onChangePassword = (newPassword: string, oldPassword: string) => {
    changePassword(oldPassword, newPassword).then((response) => {
        if (response) {
            Swal.fire(`비밀번호가 변경되었습니다.!!`);
        } else {
            Swal.fire("네트워크 오류!", "잠시후 다시 시도해주세요!", "error");
        }
    });
};

export const onClickRevoke = () => {
    revoke().then((response) => {
        if (response === true) {
            alert("성공적으로 탈퇴되었습니다");
            localStorage.clear();
            window.location.href = "/";
        } else {
            alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    });
};

export const onClickLogout = () => {
    localStorage.clear();
    window.location.href = "/";
};
