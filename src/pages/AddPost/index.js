import React, { useState } from 'react';
import {
    Blank1em,
    CompletePostButtonContainer,
    HideWriterAndCompleteButtonLayout,
    WritePostContainer,
    AddPostLayout,
    WritePostNameInputText,
    WritePostContentInputText,
} from './AddPostStyles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WritePostNameField = ({ setPostTitle }) => {
    return (
        <>
            <WritePostNameInputText placeholder='제목' onChange={(e) => setPostTitle(e.target.value)} type='text' />
        </>
    );
};

const WritePostContentField = ({ setPostContent }) => {
    return (
        <>
            <WritePostContentInputText placeholder='내용을 입력해주세요' onChange={(e) => setPostContent(e.target.value)} />
        </>
    );
};

const HideWriterNameToggle = ({ setHideWriterName, hideWriterName }) => {
    return <></>;
};

const CompletePostButton = ({ savePostInServer }) => {
    return (
        <>
            <CompletePostButtonContainer type='submit' onClick={savePostInServer}>
                저장하기
            </CompletePostButtonContainer>
        </>
    );
};

const AddPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const { board_id } = useParams();
    const majorId = board_id.slice(0, 3);
    const boardId = board_id.slice(3, 6);

    const savePostInServer = () => {
        axios
            .post(
                'http://api.gwabang.site:8001/board/create',
                {
                    title: postTitle,
                    content: postContent,
                    majorId: majorId,
                    boardId: boardId,
                    Anonymouse: true,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        email: localStorage.getItem('email'),
                    },
                }
            )
            .then((response) => {
                console.log(response);
                window.history.back();
            })
            .catch((response) => {
                console.log('Error!');
            });
    };

    return (
        <>
            <AddPostLayout>
                <WritePostContainer>
                    <WritePostNameField setPostTitle={setPostTitle} />
                    <Blank1em />
                    <WritePostContentField setPostContent={setPostContent} />
                    <Blank1em />
                    <HideWriterAndCompleteButtonLayout>
                        <CompletePostButton savePostInServer={savePostInServer} />
                    </HideWriterAndCompleteButtonLayout>
                </WritePostContainer>
            </AddPostLayout>
        </>
    );
};

export default AddPost;
