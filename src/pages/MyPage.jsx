import MypageView from "../component/template/MypageView ";
import {revoke} from "../api/User/revoke"

const Mypage = () => {
    const onClickRevoke = () => {
        revoke().then((response) => {
            if (response === true) {
                alert('성공적으로 탈퇴되었습니다');
                localStorage.clear();
                window.location.href = ('/');}
            else {
                alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');}
            }
    )};
    const onClickLogout = () => {
        localStorage.clear();
        window.location.href = ('/');
    };

    return <MypageView onClickRevoke={onClickRevoke} onClickLogout={onClickLogout} />;
};

export default Mypage;