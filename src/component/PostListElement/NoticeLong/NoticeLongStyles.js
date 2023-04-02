import styled from "styled-components"
import {Link} from 'react-router-dom';


export const NoticeElementLayout = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 1.2em 0;
    // border-bottom: solid 0.3px gray;



`;

// export const MobileVersionBatch = styled.div`
//     @media screen and (max-width: 970px) {
//         flex: 1;
//     }
    
// `;

export const NoticeElementLink = styled(Link)` 
    text-decoration: none;

    @media screen and (max-width: 800px) {
        font-size: .7rem;
    }

    @media screen and (max-width: 460px) {
        font-size: .5rem;
    }
`;

export const NoticeBasicInfoField = styled.div`
    font-size: 0.7rem;
    width:85%;
    text-indent: 35px;

    @media screen and (max-width: 1000px) {
        text-indent: 5px;
    }
    @media screen and (max-width: 460px) {
        text-indent: 5px;
    }
`;


export const NoticeTitle = styled.a`
    color: black;
`;

export const NoticeNumberOfComment = styled.a`
    margin:0 0.5em;
    color: red;
`;

export const CreateDateField = styled.div`

    font-size: 0.6rem;
    width: 10em;
    text-align: center;
    justify-content:center;

    @media screen and (max-width: 800px) {
        font-size: .6rem;
    }

    @media screen and (max-width: 460px) {
        font-size: .5rem;
    }
`;


export const NumberOfViewsField = styled.div`
    width: 8em;
    font-size: 0.8rem;
    width: 6em;
    text-align: center;
    justify-content:center;

    @media screen and (max-width: 800px) {
        font-size: .7rem;
    }

    @media screen and (max-width: 460px) {
        font-size: .6rem;
    }
`;


export const WriterNameField = styled.div`
    font-size: 0.8em;
    width: 10em;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: .7rem;
    }

    @media screen and (max-width: 460px) {
        font-size: .5rem;
    }
`;