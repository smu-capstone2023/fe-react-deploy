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
    AddFileButtonLayout,
    AnonymousCheckButtonContainer,
    AnonymousContentContainer,
    WritePostUserImageLayout,
    WritePostUserNameLayout,
    WritePostDateLayout,
    AddPostFileLayout,
    AddFileButtonContainerContent,
    FileUploadNumberLayout,
    ImageContainer,
    ImageContainerLayout,
    ImageContainerDelteLayout,
    AddFileButtonImgLayout,
} from './AddPostStyles';
import axios from 'axios';
import Select from 'react-select';
import { AiFillCamera } from 'react-icons/ai';
import makeAnimated from 'react-select/animated';
import { Navigate, useParams } from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload';
import { display } from '@mui/system';

const WriteUserField = ({ setPostDate }) => {
    const userName = localStorage.nickname;
    let date = new Date();
    const year = date.toLocaleString('ko-KR', { year: 'numeric' });
    const month = date.toLocaleString('ko-KR', { month: 'long' });
    const day = date.toLocaleString('ko-KR', { day: '2-digit' });
    const hours = date.getHours();
    const minute = date.getMinutes();

    return (
        <WritePostUserLayout>
            <WritePostUserImageLayout src='https://media.istockphoto.com/id/1197796372/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EB%9E%8C-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=O4BhlKJtKHevLMEJqMIim3IKseu5lEYXBOm3uI8r_vk='></WritePostUserImageLayout>
            <WritePostUserNameLayout>{userName}</WritePostUserNameLayout>
            <WritePostDateLayout>
                {year} {month} {day} {hours}:{minute}
            </WritePostDateLayout>
        </WritePostUserLayout>
    );
};

const SelectHashtagField = ({ setPostHashtag }) => {
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
        container: (styles) => ({ ...styles, width: 300, height: 50 }),
    };

    return (
        <Select
            style={{ width: '20%' }}
            options={HashtagOption}
            placeholder='#해시태그를 선택해주세요'
            value={selectedOptions}
            onChange={(e) => setPostHashtag(e.target.value)}
            isSearchable={true}
            styles={SelectHashtagLayout}
        />
    );
};

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

const AnonymousCheckButton = ({ setPostAnonymous }) => {
    return (
        <>
            <AnonymousCheckButtonContainer
                type='Checkbox'
                onChange={(e) => {
                    setPostAnonymous(false);
                }}
            ></AnonymousCheckButtonContainer>
            <AnonymousContentContainer>익명</AnonymousContentContainer>
        </>
    );
};

const HideWriterNameToggle = ({ setHideWriterName, hideWriterName }) => {
    const userName = localStorage.nickname;
    return <></>;
};

const AddFileButton = ({ setPostAddFile }) => {
    const [uploadNumber, setUploadNumber] = useState(0);
    const [showImages, setShowImages] = useState([]);

    const handleAddFiles = (e) => {
        const imageList = e.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageList.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageList[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 5) {
            imageUrlLists = imageUrlLists.slice(0, 5);
        }

        setShowImages(imageUrlLists);
        setPostAddFile(showImages);
    };

    const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
    };

    return (
        <>
            <AddFileButtonContainer>
                <AddFileButtonLayout>
                    <AddFileButtonContainerContent htmlFor='input-file'>
                        {/* <AddFileButtonImgLayout src="/img/camera.png"></AddFileButtonImgLayout> */}
                        <AddFileButtonImgLayout size='40' color='#486EF7'></AddFileButtonImgLayout>
                    </AddFileButtonContainerContent>
                    <AddPostFileLayout
                        type='file'
                        id='input-file'
                        multiple
                        style={{
                            display: 'none',
                        }}
                        onChange={handleAddFiles}
                    ></AddPostFileLayout>
                </AddFileButtonLayout>

                {showImages.map((image, id) => (
                    <ImageContainer key={id}>
                        <ImageContainerLayout src={image} alt={`${image}-${id}`} />
                        <ImageContainerDelteLayout src='/img/x.png' onClick={() => handleDeleteImage(id)}></ImageContainerDelteLayout>
                    </ImageContainer>
                ))}
            </AddFileButtonContainer>
        </>
    );
};

const CompletePostButton = ({ savePostInServer }) => {
    return (
        <>
            <CompletePostButtonContainer
                type='submit'
                onClick={() => {
                    savePostInServer();
                    //alert('게시물이 업로드되었습니다.');
                }}
            >
                게시하기
            </CompletePostButtonContainer>
        </>
    );
};

const AddPost = () => {
    const [postDate, setPostDate] = useState('');
    const [postHashtag, setPostHashtag] = useState('');
    const [postAnonymous, setPostAnonymous] = useState();
    const [postAddFile, setPostAddFile] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const { board_id } = useParams();

    const savePostInServer = async () => {
        console.log(board_id);
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}:8001/board/create`,
                {
                    title: postTitle,
                    content: postContent,
                    board_id: board_id,
                    is_anonymous: postAnonymous,
                    // file: postAddFile,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                }
            )
            .then((response) => {
                alert('게시물이 업로드되었습니다.');
                window.history.back();
                console.log(response);
            })

            .catch((response) => {
                console.log(response);
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
                        <AnonymousCheckButton setPostAnonymous={setPostAnonymous} postAnonymous={postAnonymous}></AnonymousCheckButton>
                        <HideWriterAndCompleteButtonLayout>
                            <CompletePostButton savePostInServer={savePostInServer} boardId={board_id} />
                        </HideWriterAndCompleteButtonLayout>
                        <AddFileButton setPostAddFile={setPostAddFile}></AddFileButton>
                    </div>
                </WritePostContainer>
            </AddPostLayout>
        </>
    );
};

export default AddPost;
