import React, { useState } from 'react';
import {
    Blank1em,
    CompletePostButtonContainer,
    HideWriterAndCompleteButtonLayout,
    WritePostContainer,
    AddPostLayout,
    WritePostNameInputText,
    WritePostContentInputText,
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
    AddPostBackgroundContainer,
    WritePostMajorContent,
    WritePostBoardContent,
    WritePostBoardContentLayout,
} from './AddPostStyles';
import axios from 'axios';
import Select from 'react-select';
import { AiFillCamera } from 'react-icons/ai';
import makeAnimated from 'react-select/animated';
import { Navigate, useParams } from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload';
import { display } from '@mui/system';

const WriteBoardInfoField = ({ setPostDate }) => {
    // const userName = localStorage.nickname;
    // let date = new Date();
    // const year = date.toLocaleString('ko-KR', { year: 'numeric' });
    // const month = date.toLocaleString('ko-KR', { month: 'long' });
    // const day = date.toLocaleString('ko-KR', { day: '2-digit' });
    // const hours = date.getHours();
    // const minute = date.getMinutes();

    return (
        <WritePostBoardContentLayout>
            <WritePostMajorContent>컴퓨터공학과</WritePostMajorContent>
            <WritePostBoardContent>자유게시판 글 쓰기</WritePostBoardContent>
        </WritePostBoardContentLayout>
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

const AnonymousCheckButton = ({ setPostAnonymous, postAnonymous}) => {
    const handleAnonymousChange = () => {
        setPostAnonymous(!postAnonymous);
        console.log(postAnonymous);
    }
    return (
        <>
            <AnonymousCheckButtonContainer
                type='Checkbox'
                onChange={(e) => {
                    handleAnonymousChange();
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

const uploadImageToServer = (formData) => {
    return axios
    .post(`${process.env.REACT_APP_SERVER_URL}:8001/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then((response) => {
        console.log(response);
        return response.data;
    })
    .catch((response) => console.log(response));
}



const AddFileButton = ({ setPostAddFile }) => {
    const [uploadNumber, setUploadNumber] = useState(0);
    const [showImages, setShowImages] = useState([]);
    const [formDataArray, setFormDataArray] = useState([]);
    // const formDataArray = [];


    const handleAddFiles = (e) => {
        const imageList = e.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageList.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageList[i]);
            imageUrlLists.push(currentImageUrl);

            const formData = new FormData();
            formData.append('image', imageList[i]);
            formDataArray.push(formData);
        }

        console.log(formDataArray);

        for (let i = 0; i < formDataArray.length; i++) {
            const formData = formDataArray[i];
            uploadImageToServer(formData)
            .then((response)=> {
                console.log(response);
                console.log('good');
            })
            .catch((response) => {
                console.log(response);
                console.log('bad');
            });
        }

        if (imageUrlLists.length > 5) {
            imageUrlLists = imageUrlLists.slice(0, 5);
        }

        setShowImages(imageUrlLists);
        setPostAddFile(showImages);
    };

    const uploadFile = () => {
        console.log('a');
        console.log(formDataArray.length);
        console.log('b');
    }

    const handleDeleteImage = (id) => {
        handleAddFiles({target : {files:[]}});
        setFormDataArray(formDataArray.filter((_, index) => index !== id));
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
                        <ImageContainerLayout src={image} alt={`${image}-${id}`}/>
                        <ImageContainerDelteLayout src='/img/x.png' onClick={() => {handleDeleteImage(id)}}></ImageContainerDelteLayout>
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
    const [postAnonymous, setPostAnonymous] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postAddFile, setPostAddFile] = useState([]);
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
                //window.history.back();
                console.log(response);
            })

            .catch((response) => {
                console.log(response);
            });
    };

    return (
        <>
            <AddPostBackgroundContainer>
                <AddPostLayout>
                    <WritePostContainer>
                        <WriteBoardInfoField></WriteBoardInfoField>
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
            </AddPostBackgroundContainer>
        </>
    );
};

export default AddPost;
