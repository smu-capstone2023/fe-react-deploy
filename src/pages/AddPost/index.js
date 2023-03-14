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
    SelectHashtagLayout,
    AddFileButtonContainer,
    AnonymousCheckButtonContainer,
    AnonymousContentContainer,
    WritePostUserImageLayout,
    WritePostUserNameLayout,
    WritePostDateLayout
} from './AddPostStyles';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Navigate, useParams } from 'react-router-dom';


// 작성자 닉네임, 작성 날짜, 선택 해시태그, 첨부파일 데이터 저장


const WriteUserField = ({setPostDate}) => {
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

const SelectHashtagField = ({setPostHashtag}) => {
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
            onChange={(e) => setPostHashtag(e.target.value)}
            isSearchable={true}
            styles={SelectHashtagLayout}
        />
    );
};

// + 입력칸 클릭시 테두리 색 변화 방지
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

const AnonymousCheckButton = ({setPostAnonymous}) => {
    return (
        <>
            <AnonymousCheckButtonContainer type="Checkbox" onChange={(e) => setPostAnonymous(e.target.checked)}></AnonymousCheckButtonContainer>
            <AnonymousContentContainer>익명</AnonymousContentContainer>
        </>
        
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



const CompletePostButton = ({ savePostInServer, majorId, boardId }) => {
    function handleClick(e) {
        window.location.href = "/board/" + majorId + boardId;
    }
    
    return (
        <>
            <CompletePostButtonContainer type='submit' onClick={()=> {
                savePostInServer();
                alert('게시물이 업로드되었습니다.');
                handleClick();
            }}>
                게시하기
            </CompletePostButtonContainer>
        </>
    );
};

const AddPost = () => {
    const [postDate, setPostDate] = useState('');
    const [postHashtag, setPostHashtag] = useState('');
    const [postAnonymous, setPostAnonymous] = useState('');
    const [postAddFile, setPostAddFile] = useState();
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
                //console.log(response);
                if (response.code === 201) {
                    alert(response.message);
                    window.history.back();
                }
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
                        {/* <SelectHashtagField setPostHashtag={setPostHashtag}></SelectHashtagField> */}
                        <WritePostNameField setPostTitle={setPostTitle} />
                    </div>
                    <Blank1em />
                    <WritePostContentField setPostContent={setPostContent} />
                    <Blank1em />
                    <div>
                        <AnonymousCheckButton setPostAnonymous={setPostAnonymous}></AnonymousCheckButton>
                        <AddFileButton></AddFileButton>
                        <HideWriterAndCompleteButtonLayout>
                            <CompletePostButton savePostInServer={savePostInServer} majorId={majorId} boardId={boardId}/>
                        </HideWriterAndCompleteButtonLayout>
                    </div>
                </WritePostContainer>
            </AddPostLayout>
        </>
    );
};

export default AddPost;
