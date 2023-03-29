import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../color';

export const SignCheckBoxTitle = styled.label`
    padding: 5px;
    font-size: 0.9em;
`;

export const DefaultText = styled.p`
    padding: 5px;
    font-size: 0.9em;
`;

export const SmallText = styled.p`
    padding: 5px;
    color: #646464;
    font-size: 13px;
`;

export const SignLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid 0.5px gray;
    border-radius: 8px;
    width: 25em;
    padding: 2em 0;
    margin-top: 2em;
    @media screen and (max-width: 25em) {
        width: 95%;
    }
`;

export const SignTitle = styled.h1`
    color: ${COLORS.logo};
`;

export const StepBox = styled.div`
    display: flex;
    border-bottom: solid 0.5px gray;
    padding: 1em;
`;

export const NumberBtn = styled.div`
    display: flex;
    margin: 0 0.5em;
    border-radius: 10px;
    background: ${COLORS.logo};
    width: 3em;
    height: 3em;
    color: white;
    align-items: center;
    justify-content: center;
`;

export const SignInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 0.5px gray;
    width: 80%;
    height: 70%;
    padding: 1em;
`;

export const TosBox = styled.div`
    border: solid 0.5px gray;
    overflow: scroll;
    width: auto;
    max-height: 350px;
    padding: 10px;
    font-size: 0.9rem;
`;

export const SignCheckBox = styled.input`
    background-color: white;
    float: left;
`;

export const SignInputText = styled.input`
    padding: 15px;
    border: solid 0.5px gray;
    margin: 5px 0 10px 0;
`;

export const SignButton = styled.div`
    padding: 15px;
    width: 80%;
    background: ${COLORS.color_button};
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    text-align: center;
`;


export const Line = styled.div`
    width: 90%;
    border-bottom: solid 0.5px gray;
`;

export const ProfileImage = styled.div`
    width: 80%;
    height: 130px;
    border: solid 1px black;
    margin: 0.2rem;
`;



export const SignupTitleLayout = styled.div`
    padding: 3em 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SignupAgreeLayout = styled.div`
    padding: 1em 0 0 0;
    display: flex;
    flex-direction: row;
`;

export const CertificationLink = styled(Link)`
padding: 15px;
width: 80%;
background: ${COLORS.gray_button};
margin-top: 20px;
border-radius: 5px;
color: black;
text-align: center;
text-decoration: none;
`;