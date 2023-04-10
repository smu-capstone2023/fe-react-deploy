import styled from 'styled-components';

export const NoticeElementLayout = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 1.2em 0;
    border-bottom: solid 0.3px whitesmoke;

`;

export const NoticeElementLink = styled.div`
    text-decoration: none;
    color: black;

    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 460px) {
        font-size: 0.7rem;
    }
`;

export const NoticeBasicInfoField = styled.div`
    font-size: 0.8rem;
    width: 70%;
    // border-right: solid 1px whitesmoke;

    @media screen and (max-width: 300px) {
        width: 60%;
        
    }
`;

export const Infofield = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding .3em;
    font-size: 0.7rem;
    margin-left: 2em;
    flow-direction: column;


    @media screen and (max-width: 970px) {

        margin-left: -.5em;
        font-size: 0.6rem;
        width: 40%;  
    }

    @media screen and (max-width: 800px) {
        font-size: 0.6rem;
        flex-direction: column;
        align-items: end;
    }




`;

export const NoticeTitle = styled.a`
    color: black;
`;

export const NoticeNumberOfComment = styled.span`

    font-size: 0.7rem;
`;

export const CreateDateField = styled.div`
    flex: 1;
    font-size: 0.6rem;
    margin-left: 0.5rem;
    // margin-bottom: 0.5em;


    @media screen and (max-width: 800px) {
        font-size: 0.6rem;
    }

    @media screen and (max-width: 460px) {
        font-size: 0.5rem;
    }
`;

export const NumberOfViewsField = styled.div`
    flex: 1;
    display:flex;
    font-size: 0.7rem;
    justify-content: center;

    @media screen and (max-width: 800px) {
        font-size: 0.6rem;
    }
`;

export const WriterNameField = styled.div`
    font-size: 1em;
    font-weight: bold;
    width: 10em;
    justify-content: center;
    padding-bottom: 0.5em;

    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 460px) {
        font-size: 0.7rem;
    }
`;


export const CommentField = styled.div`
    flex: 1;
    diplay: flex;
    // padding .3em;
    color:#87CEFA;
    font-size: 0.7rem;
    text-align: start;

`;
