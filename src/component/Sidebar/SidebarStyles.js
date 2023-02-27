import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    background-color: #fff;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color:#000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1f;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat()(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    curser: pointer;

    &:hover{
        color:#5377F7;
        transition: 0.2s ease-in-out;
    }
`