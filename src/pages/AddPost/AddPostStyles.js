import styled from 'styled-components';
import { COLORS } from '../../color';

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
    width: 3rem;
    height: 3rem;
    margin: 0.2rem;
    float: left;
`;

export const FileUploadNumberLayout = styled.p`
    
`;

export const AddPostFileLayout = styled.input`
    
`;

export const AnonymousContentContainer = styled.p`
    color: gray;
    font-size: large;
    float: left;
    margin-top: 0.4em;
    margin-left: 0.5em;
`;

export const AnonymousCheckButtonContainer = styled.input`
    zoom: 1.5;
    border-radius: 5px;
    border: solid 0.5px gray;
    margin-top: 0.5em;
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

export const AddFileButtonImgLayout = styled.img`
    //background: lightgray;
    border-radius: 0.5rem;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.1rem;
    margin-right: 3rem;
    padding: 0.5rem;
    border: solid 1px lightgray;
`;

export const AddFileButtonLayout = styled.div`
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

export const WritePostUserLayout = styled.div`
    border-radius: 5px;
    // border: solid 0.5px gray;
    height: 4em;
    color: gray;
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
`;

export const WritePostDateLayout = styled.p`
    color: gray;
    padding-left: 4.6em;
    font-size: 14px;
`;

export const WritePostNameInputText = styled.input`
    width: 100%;
    border-radius: 5px;
    border: solid 0.5px lightgray;
    height: 4em;
    padding: 1em;
    font-weight: bold;
`;

export const WritePostContentInputText = styled.textarea`
    border-radius: 5px;
    border: solid 0.5px lightgray;
    height: 25em;
    padding: 1em;
    overflow: auto;
    resize: none;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
    &::-focus {
        outline: 1px solid gray;
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
    border-radius: 5px;
    color: white;
`;

export const Blank1em = styled.div`
    padding: 0.5em 0;
`;
