import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarStyles';
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/'>학교게시판</SidebarLink>
                        <SidebarLink to='major'>학과게시판</SidebarLink>
                        <SidebarLink to='feedback'>피드백게시판</SidebarLink>
                        <SidebarLink to='mypage'>마이페이지</SidebarLink>
                        <SidebarLink to='login'>로그인</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
