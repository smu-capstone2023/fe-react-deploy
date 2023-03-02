import React, { useState } from 'react';
import {
    Blank1em,
    CompletePostButtonContainer,
    HideWriterAndCompleteButtonLayout,
    WritePostContainer,
    AddPostLayout,
    WritePostNameInputText,
    WritePostContentInputText,
} from '../AddPost/AddPostStyles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const WritePostNameField = ({ setPostTitle, value }) => {
    return (
        <>
            <WritePostNameInputText placeholder='제목' onChange={(e) => setPostTitle(e.target.value)} type='text' defaultValue={value} />
        </>
    );
};

const WritePostContentField = ({ setPostContent, value }) => {
    return (
        <>
            <WritePostContentInputText placeholder='내용을 입력해주세요' onChange={(e) => setPostContent(e.target.value)} value={value} />
        </>
    );
};

const HideWriterNameToggle = ({ setHideWriterName, hideWriterName }) => {
    return <></>;
};

const CompletePostButton = ({ editPostInServer }) => {
    return (
        <>
            <CompletePostButtonContainer type='submit' onClick={editPostInServer}>
                저장하기
            </CompletePostButtonContainer>
        </>
    );
};

const EditPost = () => {
    const { post_id } = useParams();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        getPostInfo();
        console.log('render');
    }, []);

    const getPostInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/detail/${post_id}`, {
                headers: {
                    email: localStorage.getItem('email'),
                },
            })
            .then((response) => {
                console.log(response.data.title);
                setPostTitle(response.data.title);
                setPostContent(response.data.content);
            })
            .catch((response) => console.log(response));
    };

    const editPostInServer = () => {
        axios
            .patch(
                `${process.env.REACT_APP_SERVER_URL}:8001/board/update/${post_id}`,
                {
                    title: postTitle,
                    content: postContent,
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
                    <WritePostNameField setPostTitle={setPostTitle} value={postTitle} />
                    <Blank1em />
                    <WritePostContentField setPostContent={setPostContent} value={postContent} />
                    <Blank1em />
                    <HideWriterAndCompleteButtonLayout>
                        <CompletePostButton editPostInServer={editPostInServer} />
                    </HideWriterAndCompleteButtonLayout>
                </WritePostContainer>
            </AddPostLayout>
        </>
    );
};

export default EditPost;
