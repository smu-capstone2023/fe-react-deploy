import styled from 'styled-components';
import { COLORS } from '../../color';

export const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.2);
    border: solid 0.1px rgba(128, 128, 128, 0.3);
    border-radius: 30px;
    max-width: 400px;
    width: 80%;
    padding: 30px;
    margin: 100px 0 0 0;
    align-items: center;

    /* 반응형 스타일링 */

    //아이폰 13
    @media (max-width: 755px) {
        box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0);
        border-radius: none;
        border: none;
    }
`;

export const LoginTitle = styled.h1`
    color: ${COLORS.logo};
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 1px;

    @font-face {
        font-family: 'NOTOSANSKR-REGULAR';
        src: url('./font/NOTOSANSKR-REGULAR.woff') format('woff');
    }

    @media (max-width: 755px) {
        font-size: 30px;
    }
`;

export const LoginInputText = styled.input`
    padding: 15px;
    width: 80%;
    border: none;
    border-bottom: solid 0.1px rgba(128, 128, 128, 0.5);
    margin-top: 20px;

    @font-face {
        font-family: 'NOTOSANSKR-REGULAR';
        src: url('./font/NOTOSANSKR-REGULAR.woff') format('woff');
    }

    @media (max-width: 755px) {
        width: 90%;
        font-size: 7px;
    }
`;

export const LoginButton = styled.div`
    padding: 15px;
    width: 80%;
    height: 50px;
    background: ${COLORS.color_button};
    margin-top: 30px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    text-align: center;

    @media (max-width: 755px) {
        width: 90%;
        font-size: 15px;
    }
`;

export const SignupLink = styled.div`
    padding: 15px;
    width: 80%;
    height: 50px;
    background: ${COLORS.gray_button};
    margin-top: 20px;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    @media (max-width: 755px) {
        width: 90%;
        font-size: 15px;
    }
`;
