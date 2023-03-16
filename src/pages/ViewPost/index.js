import {
    ViewPostLayout,
    WriterUserInfoLayout,
    ProfileImageLayout,
    UserAndPostInfoLayout,
    UserNameFiled,
    CreateDateField,
    ProfileImage,
    PostContentField,
    PostTitleField,
    ViewPostContentLayout,
    ViewCommentLayout,
    EditPostButtonField,
    ReplyPostContainer,
    ViewPostMenuImg,
    ViewPostMenuContainer,
    ViewPostMenuLayout,
    ViewPostMenuContent,
} from './ViewPostStyles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPostMenu = ({writerName}) => {
    const {selected, setSelected} = useState(true);
    const userName = localStorage.nickname;

    return (
        <>
            <ViewPostMenuLayout>
                <ViewPostMenuContent>콘텐츠1</ViewPostMenuContent>
                <ViewPostMenuContent>콘텐츠2</ViewPostMenuContent>
                <ViewPostMenuContent>콘텐츠3</ViewPostMenuContent>
            </ViewPostMenuLayout>  
            <ViewPostMenuImg src='/img/dots.png' onClick={()=>{
                if (writerName == userName) {
                    //이 게시물의 작성자라면
                    //이 메뉴를 보여주자
                    //console.log('작성자임')
                    
                    
                }
                else {
                    //이 게시물의 작성자가 아니라면
                    //이 메뉴를 보여주자
                    //console.log('작성자 아님')
                }
            }}></ViewPostMenuImg>
            
            
        </>

    );
};

const WriterUserInfoBlock = ({ writerName, createDate, profileImageUrl }) => {
    return (
        <>
            <WriterUserInfoLayout>
                <ProfileImageLayout>
                    <ProfileImage src='https://media.istockphoto.com/id/1197796372/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EB%9E%8C-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=O4BhlKJtKHevLMEJqMIim3IKseu5lEYXBOm3uI8r_vk='/>
                </ProfileImageLayout>
                <UserAndPostInfoLayout>
                    <UserNameFiled>{writerName}</UserNameFiled>
                    <CreateDateField>{createDate}</CreateDateField>
                </UserAndPostInfoLayout>
                <ViewPostMenuContainer>
                    <ViewPostMenu writerName={writerName}></ViewPostMenu>
                </ViewPostMenuContainer>
            </WriterUserInfoLayout>


        </>

    );
};

const EditPostButton = ({ isShow, postId, writerName}) => {
    const userName = localStorage.nickname;
    if (isShow && (writerName == userName)) {
        return <EditPostButtonField onClick={() => (window.location.href = `../editpost/${postId}`)}>수정하기</EditPostButtonField>;
    } else {
        return <></>;
    }
};

const ViewPostContentBlock = ({ postTitle, postContent }) => {
    return (
        <ViewPostContentLayout>
            <PostTitleField>{postTitle}</PostTitleField>
            <PostContentField>{postContent}</PostContentField>
        </ViewPostContentLayout>
    );
};

const ViewCommentBlock = () => {
    return <ViewCommentLayout />;
};
const ViewPost = () => {
    const { post_id } = useParams();
    const [postInfo, setPostInfo] = useState({});
    const getPostInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/detail/${post_id}`, {
                headers: {
                    email: localStorage.getItem('email'),
                },
            })
            .then((response) => {
                setPostInfo(response.data);
            })
            .catch((response) => console.log(response));
    };

    useEffect(() => {
        getPostInfo();
    }, []);

    return (
        <>
            <ViewPostLayout>
                {postInfo ? (
                    <>
                        <WriterUserInfoBlock writerName={postInfo.author} createDate={postInfo.createdAt} />
                        <ViewPostContentBlock postTitle={postInfo.title} postContent={postInfo.content} />
                    </>
                ) : (
                    <></>
                )}
                <EditPostButton isShow={true} postId={post_id} writerName={postInfo.author}/>
                <ViewCommentBlock />
                <ReplyPostContainer></ReplyPostContainer>
            </ViewPostLayout>
        </>
    );
};

export default ViewPost;

//merge