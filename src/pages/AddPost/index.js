import React, { useState } from 'react';
import {
    Blank1em,
    CompletePostButtonContainer,
    HideWriterAndCompleteButtonLayout,
    WritePostContainer,
    AddPostLayout,
    WritePostNameInputText,
    WritePostContentInputText,
    AddFileButtonContainer,
    AddFileButtonLayout,
    AnonymousCheckButtonContainer,
    AnonymousContentContainer,
    AddPostFileLayout,
    AddFileButtonContainerContent,
    ImageContainer,
    ImageContainerLayout,
    ImageContainerDelteLayout,
    AddFileButtonImgLayout,
    AddPostBackgroundContainer,
    WritePostMajorContent,
    WritePostBoardContent,
    WritePostBoardContentLayout,
} from './AddPostStyles';
import { useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useParams } from 'react-router-dom';

const WriteBoardInfoField = ({ boardName, majorName }) => {
    return (
        <WritePostBoardContentLayout>
            <WritePostMajorContent>{majorName}</WritePostMajorContent>
            <WritePostBoardContent>{boardName} 글 쓰기</WritePostBoardContent>
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

const AnonymousCheckButton = ({ setPostAnonymous, postAnonymous }) => {
    const handleAnonymousChange = () => {
        setPostAnonymous(!postAnonymous);
        console.log(postAnonymous);
    };
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

const uploadImageToServer = (formData) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => console.log(response));
};

const AddFileButton = ({ setImageList, imageList }) => {
    const handleAddFiles = (e) => {
        const imageFile = e.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        if (imageList.length >= 5) {
            alert('이미지 업로드 가능 개수는 5개입니다.');
            return;
        }
        uploadImageToServer(formData)
            .then((response) => {
                console.log(response);
                setImageList([response.imageUrl, ...imageList]);
            })
            .catch((response) => {
                alert('이미지를 불러오는데 실패했습니다. 다시 시도해주세요.');
            });
    };

    const handleDeleteImage = (id) => {
        imageList.splice(id, 1);
        setImageList([...imageList]);
    };

    return (
        <>
            <AddFileButtonContainer>
                <AddFileButtonLayout>
                    <AddFileButtonContainerContent htmlFor='input-file'>
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

                {imageList.map((image, id) => (
                    <ImageContainer key={id}>
                        <ImageContainerLayout src={image} alt={`${image}-${id}`} />
                        <ImageContainerDelteLayout
                            src='/img/x.png'
                            onClick={() => {
                                handleDeleteImage(id);
                            }}
                        ></ImageContainerDelteLayout>
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
    const [postDetailInfo, setPostDetailInfo] = useState({});
    const { board_id } = useParams();

    const savePostInServer = async () => {
        axios
            .post(
                `${process.env.REACT_APP_SERVER_URL}/board/create`,
                {
                    title: postTitle,
                    content: postContent,
                    board_id: board_id,
                    is_anonymous: postAnonymous,
                    image_url_list: postAddFile,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                }
            )
            .then((response) => {
                alert('게시물이 업로드되었습니다.');
                window.history.back(2);
                console.log(response);
            })

            .catch((response) => {
                console.log(response);
            });
    };

    const getPostDetailInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/board/info/${board_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setPostDetailInfo(response.data);
                console.log(response.data);
            })
            .catch((response) => {
                console.log(response);
            });
    };

    useEffect(() => {
        getPostDetailInfo();
    }, []);

    return (
        <>
            <AddPostBackgroundContainer>
                <AddPostLayout>
                    <WritePostContainer>
                        <WriteBoardInfoField
                            boardName={postDetailInfo.board_name}
                            majorName={postDetailInfo.major_name}
                        ></WriteBoardInfoField>
                        <div>
                            {/* <SelectHashtagField setPostHashtag={setPostHashtag}></SelectHashtagField> */}
                            <WritePostNameField setPostTitle={setPostTitle} />
                        </div>
                        <Blank1em />
                        <WritePostContentField setPostContent={setPostContent} />
                        <Blank1em />
                        <div>
                            {postDetailInfo.is_can_anonymous ? (
                                <AnonymousCheckButton
                                    setPostAnonymous={setPostAnonymous}
                                    postAnonymous={postAnonymous}
                                ></AnonymousCheckButton>
                            ) : (
                                <></>
                            )}
                            <HideWriterAndCompleteButtonLayout>
                                <CompletePostButton savePostInServer={savePostInServer} boardId={board_id} />
                            </HideWriterAndCompleteButtonLayout>
                            <AddFileButton setImageList={setPostAddFile} imageList={postAddFile}></AddFileButton>
                        </div>
                    </WritePostContainer>
                </AddPostLayout>
            </AddPostBackgroundContainer>
        </>
    );
};

export default AddPost;
