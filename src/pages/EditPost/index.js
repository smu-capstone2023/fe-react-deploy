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
    WritePostDateLayout,
    AddFileButtonLayout,
    AddFileButtonContainerContent,
    AddFileButtonImgLayout,
    AddPostFileLayout,
    ImageContainer,
    ImageContainerLayout,
    ImageContainerDelteLayout,
} from '../AddPost/AddPostStyles';
import {
    EditPostBackgroundContainer,
    EditPostBoardContentLayout,
    EditPostMajorContent,
    EditPostBoardContent,
} from '../EditPost/EditPostStyles';
import axios from 'axios';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const WriteUserField = ({majorName, boardName}) => {
    return (
        <EditPostBoardContentLayout>
            <EditPostMajorContent>{majorName}</EditPostMajorContent>
            <EditPostBoardContent>{boardName} 글 수정</EditPostBoardContent>
        </EditPostBoardContentLayout>
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


//addpost와 달리 get 해와야 함.
const AddFileButton = ({setPostAddFile}) => {
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
    const [postDetailInfo, setPostDetailInfo] = useState();

    useEffect(() => {
        getPostInfo();
    }, []);

    const getPostInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/board/detail/${post_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setPostTitle(response.data.title);
                setPostContent(response.data.content);
            })
            .catch((response) => console.log(response));
    };

    const editPostInServer = () => {
        axios
            .patch(
                `${process.env.REACT_APP_SERVER_URL}/board/update/${post_id}`,
                {
                    title: postTitle,
                    content: postContent,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                }
            )
            .then((response) => {
                console.log(response);
                alert("게시물이 수정되었습니다");
                window.location.href = `/viewpost/${post_id}`;
            })
            .catch((response) => {
                console.log(response);
            });
    };

    const getPostDetailInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/board/info_by_postid/${post_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setPostDetailInfo(response.data);
                console.log(postDetailInfo);
            })
            .catch((response) => {
                console.log(response);
            })
    }
    
    useEffect(() => {
        getPostDetailInfo();
    }, []);

    return (
        <>
            <EditPostBackgroundContainer>
                <AddPostLayout>
                    <WritePostContainer>
                        {
                            postDetailInfo ?  <WriteUserField majorName={postDetailInfo.major_name} boardName={postDetailInfo.board_name}></WriteUserField> : <></>
                        }
                        <div>
                            {/* <SelectHashtagField></SelectHashtagField> */}
                            <WritePostNameField setPostTitle={setPostTitle} value={postTitle} />
                        </div>
                        <Blank1em />
                        <WritePostContentField setPostContent={setPostContent} value={postContent} />
                        <Blank1em />
                        <div>
                            <AnonymousCheckButton></AnonymousCheckButton>
                            <HideWriterAndCompleteButtonLayout>
                                <CompletePostButton editPostInServer={editPostInServer} post_id={post_id}/>
                            </HideWriterAndCompleteButtonLayout>
                            <AddFileButton></AddFileButton>
                        </div>
                    </WritePostContainer>
                </AddPostLayout>
            </EditPostBackgroundContainer>
        </>
    );
};

export default EditPost;
