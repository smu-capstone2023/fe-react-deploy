import React, {useState} from 'react';
import { Blank1em, CompletePostButtonContainer, HideWriterAndCompleteButtonLayout, WritePostContainer, AddPostLayout, WritePostNameInputText, WritePostContentInputText } from './AddPostStyles';


const WritePostNameField = ({setPostTitle}) =>{
    return(
        <>
            <WritePostNameInputText placeholder="제목" onChange={(e) => setPostTitle(e.target.value)} type="text" />
        </>
    )
}

const WritePostContentField = ({setPostContent}) =>{
    return(
        <>
            <WritePostContentInputText placeholder="내용을 입력해주세요" onChange={(e) => setPostContent(e.target.value)}/>
        </>
    )
}

const HideWriterNameToggle = ({setHideWriterName, hideWriterName}) => {
    return(
        <>
        </>
    )
}

const CompletePostButton = ({savePostInServer}) => {
    return(
        <>
        <CompletePostButtonContainer type='submit' onClick={savePostInServer}>
            저장하기
        </CompletePostButtonContainer>
        </>
    )
}

const AddPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const writerName = "안선정";

    const savePostInServer = () => {

        const completePostContent = {
            postTitle: postTitle,
            postContent: postContent,
            writerName: writerName ? "익명": writerName,
        }

        alert(JSON.stringify(completePostContent));
        //TODO: 서버에 completePostContent올리기
    }

    return(
        <>
            <AddPostLayout>
                <WritePostContainer>
                    <WritePostNameField setPostTitle={setPostTitle}/>
                    <Blank1em/>
                    <WritePostContentField setPostContent={setPostContent}/>
                    <Blank1em/>
                    <HideWriterAndCompleteButtonLayout>
                        <CompletePostButton savePostInServer={savePostInServer}/>
                    </HideWriterAndCompleteButtonLayout>
                </WritePostContainer>
            </AddPostLayout>
        </>        
    )
}

export default AddPost;