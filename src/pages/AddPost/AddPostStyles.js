import styled from 'styled-components';
import { COLORS } from '../../color';
import { AiFillCamera } from "react-icons/ai";

export const AddPostBackgroundContainer = styled.div`
    background-color: ${COLORS.background_color};
`;

export const ImageContainerDelteLayout = styled.img`
    width: 0.8rem;
    height: 0.8rem;
`;


export const ImageContainer = styled.div`
    //border: solid 1px gray;
    width: 5rem;
    height: 5rem;
    float: left;
`;

export const ImageContainerLayout = styled.img`
    border: solid 0.1em lightgray;
    border-radius: 0.5em;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.2rem;
    float: left;
`;

export const FileUploadNumberLayout = styled.p`
    
`;

export const AddPostFileLayout = styled.input`
    
`;

export const AnonymousContentContainer = styled.p`
    color: gray;
    font-size: 0.8em;
    float: left;
    margin-top: 0.6em;
    margin-left: 0.5em;
    padding: 0;
    font-family: "NOTOSANSKR-REGULAR";
`;

export const AnonymousCheckButtonContainer = styled.input`
    zoom: 1.2;
    border-radius: 5px;
    border: solid 0.5px lightgray;
    margin-top: 0.7em;
    float: left;
`;

export const AddFileButtonContainer = styled.div`
    border-top: solid 0.1em lightgray;
    // border-radius: 5px;
    //border: solid 0.5px lightgray;
    width: 100%;
    height: 10rem;
    margin-top: 1rem;
    padding-top: 1rem;
    float: left;
    // overflow: hidden;
    resize: none;
`;


export const AddFileButtonImgLayout = styled(AiFillCamera)`
    size: 40;
    color: #486EF7;
    margin-top: 0.5rem;
    margin-right: 3rem;
    
`;

export const AddFileButtonLayout = styled.div`
    height: 30rem;
    margin-right: 0.5rem;
    float: left;
`;

export const AddFileButtonContainerContent = styled.label`
`;

// export const SelectHashtegLayout = styled.select`
//     width: 30%;
//     border-radius: 5px;
//     border: solid 0.5px gray;
//     height: 3.4em;
//     padding: 1em;
//     margin-right: 1em;
//     float: left;
// `;

export const WritePostBoardContentLayout = styled.div`
    border-radius: 5px;
    // border: solid 0.5px gray;
    color: gray;

`;

export const WritePostMajorContent = styled.p`
    color: #433b45;
    font-weight: 600;
    font-size: 1.8em;
    padding: 0.2em;
    @media (max-width: 700px) {
        font-size: 1.5em
    }
`;

export const WritePostBoardContent = styled.p`
    color: #433b45;
    font-weight: 100;
    font-size: 1.15em;
    margin-left: 0.5em;
    margin-bottom: 1.8em;
    @media (max-width: 700px) {
        font-size: 0.9em
    }
`;

export const WritePostUserImageLayout = styled.img`
    width: 3em;
    height: 3em;
    border: solid 0.3px lightgray;
    border-radius: 70%;
    overflow: hidden;
    object-fit: cover;
    float: left;
`;

export const WritePostUserNameLayout = styled.p`
    color: gray;
    padding-bottom: 0.3em;
    padding-left: 4em;
    font-family: "NOTOSANSKR-REGULAR";
`;

export const WritePostDateLayout = styled.p`
    color: gray;
    padding-left: 4.6em;
    font-size: 14px;
    font-family: "NOTOSANSKR-REGULAR";
`;

export const WritePostNameInputText = styled.input`
    width: 100%;
    border: solid 0.5px lightgray;
    border-radius: 5px;
    height: 4em;
    padding: 1em;
    font-weight: bold;
    font-family: "NOTOSANSKR-REGULAR";
    :focus {
        outline: none;
    }
    @media (max-width: 430px) {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: solid 0.5px lightgray;
    }
`;

export const WritePostContentInputText = styled.textarea`
    border: solid 0.5px lightgray;
    border-radius: 5px;
    height: 25em;
    padding: 1em;
    overflow: auto;
    resize: none;
    font-family: "NOTOSANSKR-REGULAR";
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
    :focus {
        outline: none;
    }
    @media (max-width: 430px) {
        border: none;
    }
`;

export const AddPostLayout = styled.div`
    display: flex;
    justify-content: center;
`;

export const WritePostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    margin-top: 3em;
`;

export const HideWriterAndCompleteButtonLayout = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CompletePostButtonContainer = styled.button`
    min-width: 5em;
    width: 10em;
    height: 3em;
    background: ${COLORS.logo};
    border: none;
    border-radius: 2em;
    color: white;
    font-family: "NOTOSANSKR-REGULAR";
    @media (max-width: 430px) {
        width: 6em;
        height: 3em;
        font-size: 0.7em;
    }
`;

export const Blank1em = styled.div`
    padding: 0.5em 0;
`;
