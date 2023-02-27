import styled from "styled-components";
import {COLORS} from '../../color';

export const DefaultText = styled.p`
    padding: 5px;
    color: #323232;
    font-size: 15px;
`;

export const SmallText = styled.p`
    padding: 5px;
    color: #646464;
    font-size: 13px;
`;

export const SignLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    min-width: 300px;
`;

export const SignContainer = styled.div`
    display:flex;
    flex-direction: column;
    border: solid 0.5px gray;
    border-radius: 8px;
    max-width: 400px;
    min-width: 350px;
    width: 80%;
    padding: 30px;
    margin: 100px 0 0 0;
    align-items: center;
    
`;


export const SignTitle = styled.h1`
    color: ${COLORS.logo};
`;

export const StepBox = styled.div`
    display: flex;
    flex-dicrection: column;
    border-bottom: solid 0.5px gray;
    max-width: 280px;
    width: 100%;
    padding 20px;
    margin: 10px 0 0 0;

`;

export const NumberBtn = styled.div`
    // display: flex;
    flex-dicrection: column;
    border-radius: 10px 10px 10px 10px;
    max-width: 100px;
    width: 50%;
    padding 10px;
    margin: 0 20px 0 20px;
    background: ${COLORS.logo};
    color: white;
    align-item: center;
    text-align: center;
`;

export const SignInnerBox = styled.div`
    // display: flex;
    // flex-directtion: column;
    
    border: solid 0.5px gray;
    max-width: 280px;
    width: 100%;
    height: 400px;
    margin: 20px 0 0 0;
    padding: 20px;
`;

export const TosBox = styled.div`
    display: flex;
    flex-directtion: column;
    border: solid 0.5px gray;
    overflow: scroll;
    max-width: 280px;
    width: 100%;
    height: 90%;
    padding: 10px;
    font-size: 14px;
    float: bottom;
`;

export const SignDropDown = styled.button`
    padding: 20px;
    width: 90%;
    border: solid 0.5px gray;
    margin: 5px 0 10px 0;
`;

export const SignCheckBox = styled.input`
    margin: 10px;
    background-color: white;
    border: 2px solid ${COLORS.logo};
    float: left;
`;

export const SignInputText = styled.input`
    padding: 15px;
    width: 90%;
    border: solid 0.5px gray;
    margin: 5px 0 10px 0;
    
`;

export const SignButton = styled.div`
    padding:15px;
    width: 80%; 
    background: ${COLORS.color_button};
    margin-top:20px;
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
    border: solid 1px black
    
    
`;