import MypageView from "../component/template/MypageView ";
import { revoke } from "../api/User/revoke";
import { changeNickname } from "../api/User/changeNickname";
import Swal from "sweetalert2";
import { changePassword } from "../api/User/changePassword";

const Mypage = () => {
    const onChangeNickname = (newNickname) => {
        changeNickname(newNickname).then((response) => {
            if (response) {
                Swal.fire(`닉네임이 ${newNickname}로 바뀌었습니다!!`);
            } else {
                Swal.fire("네트워크 오류!", "잠시후 다시 시도해주세요!", "error");
            }
        });
    };

    const onChangePassword = (newPassword, oldPassword) => {
        changePassword(oldPassword, newPassword).then((response) => {
            if (response) {
                Swal.fire(`비밀번호가 변경되었습니다.!!`);
            } else {
                Swal.fire("네트워크 오류!", "잠시후 다시 시도해주세요!", "error");
            }
        });
    };

    const onClickRevoke = () => {
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
    const onClickLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <MypageView
            onClickRevoke={onClickRevoke}
            onClickLogout={onClickLogout}
            changeNickname={onChangeNickname}
            changePassword={onChangePassword}
        />
    );
};

export default Mypage;
