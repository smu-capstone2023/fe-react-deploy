import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarStyles';
const Sidebar = ({ isOpen, toggle, setIsOpen }) => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    const majorList = JSON.parse(localStorage.getItem('major_options'));
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        {localStorage.getItem('access_token') && (
                            <>
                                <SidebarLink to='board/1/3' onClick={() => setIsOpen(false)}>
                                    학교게시판
                                </SidebarLink>
                                {majorList && majorList[1] && (
                                    <SidebarLink
                                        to={`board/${majorList[1].value}/${majorList[1].freeBoard}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        학과게시판
                                    </SidebarLink>
                                )}
                                <SidebarLink to='board/1/17' onClick={() => setIsOpen(false)}>
                                    피드백게시판
                                </SidebarLink>
                                <SidebarLink to='mypage' onClick={() => setIsOpen(false)}>
                                    마이페이지
                                </SidebarLink>
                            </>
                        )}
                        {localStorage.getItem('access_token') ? (
                            <>
                                <SidebarLink
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                >
                                    로그아웃
                                </SidebarLink>
                            </>
                        ) : (
                            <>
                                <SidebarLink to='login' onClick={() => setIsOpen(false)}>
                                    로그인
                                </SidebarLink>
                            </>
                        )}
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
