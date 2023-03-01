import styled from 'styled-components';
import { COLORS } from '../../color';
import { Link } from 'react-router-dom';

export const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 0.5px gray;
    border-radius: 8px;
    max-width: 400px;
    width: 80%;
    padding: 30px;
    margin: 100px 0 0 0;
    align-items: center;
`;

export const LoginTitle = styled.h1`
    color: ${COLORS.logo};
`;

export const LoginInputText = styled.input`
    padding: 15px;
    width: 80%;
    border: solid 0.5px gray;
    margin-top: 20px;
`;

export const LoginButton = styled.div`
    padding: 15px;
    width: 80%;
    background: ${COLORS.color_button};
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    text-align: center;
`;

export const SignupLink = styled(Link)`
    padding: 15px;
    width: 80%;
    background: ${COLORS.gray_button};
    margin-top: 20px;
    border-radius: 5px;
    color: black;
    text-align: center;
    text-decoration: none;
`;
