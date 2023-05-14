import MypageView from "../component/template/MypageView ";

const Mypage = () =>{

    const onClickRevoke = () => {alert('준비중(탈퇴하기)')}
    const onClickLogout = () => {alert('준비중(로그아웃)')}


    return(
    <MypageView onClickRevoke={onClickRevoke} onClickLogout={onClickLogout} />
    )}
    
    export default Mypage;