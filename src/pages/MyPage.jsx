import MypageView from "../component/template/MypageView ";

const Mypage = () => {
    const onClickRevoke = () => {
        // api/User/revoke 함수를 이용해서 true를 반환하면, localStorage를 비워주고 home화면으로 이동시킵니다.
        // 만약 false라면 네트워크 오류와 같은 에러 메세지를 alert로 띄워주세요.
    };
    const onClickLogout = () => {
        // localStorage를 비워준 뒤에, home화면으로 이동시켜줍니다.
    };

    return <MypageView onClickRevoke={onClickRevoke} onClickLogout={onClickLogout} />;
};

export default Mypage;
