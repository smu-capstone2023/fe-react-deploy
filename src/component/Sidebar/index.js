import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarStyles';
const Sidebar = ({ isOpen, toggle, setIsOpen }) => {
    const logout = () => {
        localStorage.clear();
    };

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
                                <SidebarLink to='board/3' onClick={() => setIsOpen(false)}>
                                    학교게시판
                                </SidebarLink>
                                <SidebarLink to='board/2' onClick={() => setIsOpen(false)}>
                                    학과게시판
                                </SidebarLink>
                                <SidebarLink to='feedback' onClick={() => setIsOpen(false)}>
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
                                        window.location.href = '/';
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
