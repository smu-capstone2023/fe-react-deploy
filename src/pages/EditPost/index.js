import React, { useState } from 'react';
import {
    Blank1em,
    CompletePostButtonContainer,
    HideWriterAndCompleteButtonLayout,
    WritePostContainer,
    AddPostLayout,
    WritePostNameInputText,
    WritePostContentInputText,
    WritePostUserLayout,
    AddFileButtonContainer,
    AnonymousCheckButtonContainer,
    AnonymousContentContainer,
    WritePostUserImageLayout,
    WritePostUserNameLayout,
    WritePostDateLayout
} from '../AddPost/AddPostStyles';
import axios from 'axios';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const WriteUserField = ({setPostDate, setPostNickname}) => {
    const userName = localStorage.nickname;
    let date = new Date();
    const year = date.toLocaleString('ko-KR', {year: "numeric"});
    const month = date.toLocaleString('ko-KR', {month: 'long'});
    const day = date.toLocaleString('ko-KR', {day: '2-digit'});
    const hours = date.getHours();
    const minute = date.getMinutes();
    return (
        <WritePostUserLayout>
            <WritePostUserImageLayout src='https://media.istockphoto.com/id/1197796372/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EB%9E%8C-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=O4BhlKJtKHevLMEJqMIim3IKseu5lEYXBOm3uI8r_vk='></WritePostUserImageLayout>
            <WritePostUserNameLayout>{userName}</WritePostUserNameLayout>
            <WritePostDateLayout>{year} {month} {day}  {hours}:{minute}</WritePostDateLayout>
        </WritePostUserLayout>
    );
};

const SelectHashtagField = ({setPosthashtag}) => {
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    const [selectedOptions, setSelectedOptions] = useState();
    const HashtagOption = [
        { label: '진로', value: '진로' },
        { label: '학교생활', value: '학교생활' },
        { label: '과제', value: '과제' },
        { label: '선택 안함', value: '선택 안함' },
    ];

    const SelectHashtagLayout = {
        container: styles => ({...styles, width: 300, height: 50})
    }

    return (
        <Select style={{width:'20%'}}
            options={HashtagOption}
            placeholder="#해시태그를 선택해주세요"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={SelectHashtagLayout}
        />
    );
};

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

const AnonymousCheckButton = ({setPostAnonymous}) => {
    return (
        <div>
            <AnonymousCheckButtonContainer type="Checkbox"></AnonymousCheckButtonContainer>
            <AnonymousContentContainer>익명</AnonymousContentContainer>
        </div>
        
    );
};

const AddFileButton = ({setPostAddFile}) => {
    return (
        <>
            <AddFileButtonContainer>
                첨부파일
            </AddFileButtonContainer>
        </>
    );
};

const HideWriterNameToggle = ({ setHideWriterName, hideWriterName }) => {
    return <></>;
};


const CompletePostButton = ({ editPostInServer, post_id}) => {
    function handleClick(e) {
        window.location.href = "/viewpost/" + post_id;
    }
    return (
        <>
            <CompletePostButtonContainer type='submit' onClick={()=>{
                editPostInServer();
                alert('게시물이 수정되었습니다.');
                handleClick();
            }}>
                수정하기
            </CompletePostButtonContainer>
        </>
    );
};

const EditPost = () => {
    const { post_id } = useParams();
    const [postDate, setPostDate] = useState('');
    const [postHashtag, setPosthashtag] = useState('');
    const [postAnonymous, setPostAnonymous] = useState('');
    const [postAddFile, setPostAddFile] = useState();
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
                    <WriteUserField></WriteUserField>
                    <div>
                        {/* <SelectHashtagField></SelectHashtagField> */}
                        <WritePostNameField setPostTitle={setPostTitle} value={postTitle} />
                    </div>
                    <Blank1em />
                    <WritePostContentField setPostContent={setPostContent} value={postContent} />
                    <Blank1em />
                    <div>
                        <AnonymousCheckButton></AnonymousCheckButton>
                        <AddFileButton></AddFileButton>
                        <HideWriterAndCompleteButtonLayout>
                            <CompletePostButton editPostInServer={editPostInServer} post_id={post_id}/>
                        </HideWriterAndCompleteButtonLayout>
                    </div>
                </WritePostContainer>
            </AddPostLayout>
        </>
    );
};

export default EditPost;
