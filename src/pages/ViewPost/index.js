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
    ViewPostMenuUI,
    ViewPostMenuImgContainer,
    ViewCommentContainer,
    WriteCommentContainer,
    WriteCommentLayout,
    UploadCommentLayout,
    ViewCommentUserImgLayout,
    ViewCommentUserNameLayout,
    ViewCommentMenuLayout,
    EditPostCommentLayout,
    ReplyPostLayout,
    ViewPostBackground,
    PostViewAndLikeContainer,
    PostViewNumberLayout,
    PostLikeNumberLayout,
    PostLikeButtonLayout,
    PostTitleBorderLayout,
    PostViewResponseContent,
    AnonymousCommentCheckButton,
    AnonymousCommentCheckContent,
    CommentLikeIcon,
    CommentReplyIcon,
    CommentMenuIcon,
} from './ViewPostStyles';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import {useRef} from 'react';
import axios from 'axios';
import { colors } from '@mui/material';




const ViewPostMenu = ({writerName, userName, postId, deletePost}) => {
    const [isOpen, setMenu] = useState(false);

    const linkCopy = () => {
        var url = '';
        var textArea = document.createElement("textarea");
        document.body.appendChild(textArea);
        url = window.document.location.href;
        textArea.value = url;
        textArea.select();
        navigator.clipboard.writeText(url);
        document.body.removeChild(textArea);
        alert("링크가 복사되었습니다.");
    }
    const refreshPage = () => {
        window.location.reload();
    }

    const toggleMenu = (e) => {
        setMenu(isOpen => !isOpen);
    }
    
    return (
        <>
            <ViewPostMenuImgContainer>
                <ViewPostMenuImg src='/img/dots.png' onClick={toggleMenu}></ViewPostMenuImg>
                {
                    isOpen &&
                        <ViewPostMenuUI>
                            {
                                writerName == userName ? 
                                <>
                                    <ViewPostMenuContent onClick={() => (window.location.href = `../editpost/${postId}`)}>수정</ViewPostMenuContent>
                                    <ViewPostMenuContent onClick={deletePost}>삭제</ViewPostMenuContent>
                                </> :
                                <>
                                    <ViewPostMenuContent onClick={()=>{}}>신고</ViewPostMenuContent>
                                </>
                            }
                            <ViewPostMenuContent onClick={()=>{linkCopy()}}>링크 복사</ViewPostMenuContent>
                            <ViewPostMenuContent onClick={()=>{refreshPage()}}>새로고침</ViewPostMenuContent>
                        </ViewPostMenuUI>
                }   
            </ViewPostMenuImgContainer>
        </>
    );
};

const WriterUserInfoBlock = ({ writerName, userName, createDate, updateDate, postId, deletePost, profileImageUrl }) => {
    let day = '';
    let time = '';
    if (createDate) {
        day = createDate.slice(0, 10);
        time = createDate.slice(11, 16);
    }
    if (createDate != updateDate) {
        day = updateDate.slice(0, 10);
        time = updateDate.slice(11, 16);
    } 

    return (
        <>
            <WriterUserInfoLayout>
                <ProfileImageLayout>
                    <ProfileImage/>
                </ProfileImageLayout>
                <UserAndPostInfoLayout>
                    <UserNameFiled>{writerName}</UserNameFiled>
                    <CreateDateField>{day} {time}</CreateDateField>
                </UserAndPostInfoLayout>
                <ViewPostMenuContainer>
                    <ViewPostMenu writerName={writerName} userName={userName} postId={postId} deletePost={deletePost}></ViewPostMenu>
                </ViewPostMenuContainer>
            </WriterUserInfoLayout>
        </>

    );
};


const ViewPostContentBlock = ({ postTitle, postContent }) => {
    return (
        <ViewPostContentLayout>
            <PostTitleField>{postTitle}</PostTitleField>
            <PostTitleBorderLayout></PostTitleBorderLayout>
            <PostContentField>{postContent}</PostContentField>
        </ViewPostContentLayout>
    );
};

const ViewPostInfoBlock = ({views, likes, isLiked, likeNumber, setLikeNumber}) => {

    const PlusLikeNumber = () => {
        setLikeNumber(likes+1);
    }

    const handleIsLiked = () => {
        isLiked = !isLiked;
    }

    return (
        <>
            <PostViewAndLikeContainer>
                <PostViewNumberLayout>
                    <PostViewResponseContent>조회수</PostViewResponseContent>
                    {views}
                </PostViewNumberLayout>
                <PostLikeNumberLayout onClick={()=>{
                    if (isLiked) {
                        handleIsLiked();
                        alert("추천이 취소되었습니다.")
                    } else {
                        alert("추천되었습니다.")
                        PlusLikeNumber();
                    }
                    }}>
                    <PostLikeButtonLayout></PostLikeButtonLayout>
                    {likes}
                </PostLikeNumberLayout>
                <div style={{display: "flex", flex: "90"}}/>
            </PostViewAndLikeContainer>
        </>

    )
}

const CommentBlock = ({userName, comments, saveCommentInSever, comment, is_anonymous, setComment, setIs_anonymous, deleteComment}) => {
    const [visible, setVisible] = useState(false);
    const [userId, setUserId] = useState('');
    const [isVaild, setIsVaild] = useState(false);
    const [isOpen, setMenu] = useState(false);
    const [showMenu, setShowMenu] = useState();
    const textRef = useRef();
    const inputRef = useRef([]);
    let day = '';
    let time = '';



    const refreshPage = () => {
        window.location.reload();
    }

    const post = (e) => {
        const copyComment = [...comment];
        copyComment.push(comment);
        setComment(copyComment);
        textRef.current.style.height = 'auto';
    }

    const handleAnonymousChange = () => {
        setIs_anonymous(!is_anonymous);
    }

    const handleViewComments = () => {
        setVisible(true);
    }

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    const handleResizeHeight = () => {
        textRef.current.style.height = 'auto';
        textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    };

    const enterPress = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            return;
        }
        else if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (comment.length > 0) {
                post();
                console.log("댓글이 작성되었습니다.");
                handleViewComments();
                saveCommentInSever();
                setComment('');
            }
            else {
                alert("댓글을 작성해주세요.");
            }
        }
    }

    return (
        <>
            {comments ? 
                <>
                    {
                        comments.map((commentArr, i) => {
                            if (commentArr.created_time) {
                                day = commentArr.created_time.slice(0, 10);
                                time = commentArr.created_time.slice(12, 16);
                            }
                            return (
                                <ViewCommentContainer visible={visible}>
                                    <ViewCommentUserImgLayout></ViewCommentUserImgLayout>
                                        <ViewCommentMenuLayout style={{position: 'relative'}} onClick={() => {toggleMenu(); setShowMenu(i);}}>
                                            <CommentMenuIcon/>
                                            {
                                                (isOpen && (showMenu === i)) &&
                                                    <ViewPostMenuUI style={{top: '2rem', left: '-8.5rem'}}>
                                                        {
                                                            commentArr.username == userName ? 
                                                            <>
                                                                <ViewPostMenuContent onClick={()=>{deleteComment(commentArr.comment_id);}}>삭제</ViewPostMenuContent>
                                                            </> :
                                                            <>
                                                                <ViewPostMenuContent onClick={()=>{}}>신고</ViewPostMenuContent>
                                                            </>
                                                        }
                                                    </ViewPostMenuUI>
                                            }
                                        </ViewCommentMenuLayout>

                                    <ViewCommentMenuLayout onClick={()=>{
                                            // WriteReplyToggle();
                                            // setShowReply(i);
                                    }}>
                                            <CommentReplyIcon/>
                                    </ViewCommentMenuLayout>

                                    <ViewCommentMenuLayout onClick={()=>{
                                                alert("추천되었습니다.")
                                    }}>
                                            <CommentLikeIcon/>
                                    </ViewCommentMenuLayout>

                                    <ViewCommentUserNameLayout>{commentArr.username}
                                            <CreateDateField>{day} {time}</CreateDateField>
                                    </ViewCommentUserNameLayout>
                                    <ViewCommentLayout rows={1}>{commentArr.content}</ViewCommentLayout>

                                        {/*대댓글*/}
                                        {/* {
                                            (replyIsOpen && showReply === i) && 
                                                userName === feedComments[i].userId ?
                                                <>
                                                    <WriteCommentContainer style={{minHeight: '1vh', width: '94%', marginLeft: '3rem'}}>
                                                        <WriteCommentLayout style={{padding: '1rem', width: '70%'}}
                                                        type={'text'} rows={1} placeholder={"댓글을 입력해주세요"}
                                                        onChange={(e)=>{
                                                            setReplyComment(e.target.value);
                                                            console.log(replyComment);
                                                        }}></WriteCommentLayout>
                                                        <UploadCommentLayout style={{height: '4vh', margin: '0.5rem'}}
                                                        onClick={()=>{
                                                            replyPost(i);
                                                            setReplyIsOpen(false); setShowReply(''); setShowReplyComment(true);
                                                            }}>작성</UploadCommentLayout>
                                                    </WriteCommentContainer>
                                                </>
                                                : 
                                                <>
                                                </>
                                        } */}
                                </ViewCommentContainer>
                            )
                        })
                    }
                </>
            : <></>
            }
    
            <WriteCommentContainer>
                    <WriteCommentLayout type={'text'} rows={1} placeholder={"댓글을 입력해주세요"}
                    onKeyDown={enterPress}
                    ref={textRef}
                    onChange={(e)=>{
                        setComment(e.target.value);
                        setUserId(userName);
                        handleResizeHeight();
                    }}
                    onkeyup={(e)=>{
                        e.target.value.length > 0
                            ? setIsVaild(true) : setIsVaild(false);
                    }} value={comment}></WriteCommentLayout>
                    <AnonymousCommentCheckContent>익명</AnonymousCommentCheckContent>
                    <AnonymousCommentCheckButton type={'checkbox'} onChange={(e)=>{handleAnonymousChange()}}></AnonymousCommentCheckButton>
                    <UploadCommentLayout onClick={()=>{
                        if (comment.length > 0) {
                            post();
                            console.log("댓글이 작성되었습니다.");
                            handleViewComments();
                            saveCommentInSever();
                            setComment('');
                        }
                        else {
                            alert("댓글을 작성해주세요.");
                        }
                    }} disabled={isVaild ? false : true}>작성</UploadCommentLayout>
            </WriteCommentContainer>
        
        </>
        
    )
}


const ViewPost = () => {
    const [comment, setComment] = useState('');
    const [is_anonymous, setIs_anonymous] = useState(false);
    const [likeNumber, setLikeNumber] = useState(0);
    const { post_id } = useParams();
    const [postInfo, setPostInfo] = useState({});
    const [userName, setUserName] = useState('');
    // const [feedComments, setFeedComments] = useState([]);
    // const [feedReplyComments, setFeedReplyComments] = useState([]);

    const getUserInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/auth/user_info` , {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setUserName(response.data.username);
            })
            .catch((response) => {
                console.log(response);
            })
    }


    const getPostInfo = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/detail/${post_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setPostInfo(response.data);
                setUserInfoAtLocalStorage(response.data);
                console.log(response.data);
            })
            .catch((response) => console.log(response));
    };

    const saveCommentInSever = () => {
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}:8001/comment/create`, {
                post_id : post_id,
                content: comment,
                is_anonymous: is_anonymous,
            },
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                },
            })
            .then((response)=>{
                if (response.status === 201) {
                    setUserInfoAtLocalStorage(response.data);
                    console.log(response.message);
                    alert("댓글이 작성되었습니다.");
                    window.location.reload();
                }
            })
            .catch((response)=>{
                console.log(response.message);
                console.log(response);
            })
    }

    const deleteComment = (comment_id) => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}:8001/comment/delete/${comment_id}`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            if (response.status == 201) {
                setUserInfoAtLocalStorage(response.data);
                console.log(response.message);
                alert("댓글이 삭제되었습니다.");
                window.location.reload();
            }
        })
        .catch((response) => {
            console.log(response);
            console.log(response.message);
            alert(response.message);
        })
    }

    const deletePost = () => {
        const url = `${process.env.REACT_APP_SERVER_URL}:8001/board/delete/${post_id}`;
        //console.log("deletepost 함수 호출");

        axios.delete(url, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
            .then((response) => {
                if (response.status_code === 200) {
                    setUserInfoAtLocalStorage(response.data);
                    alert(response.message);
                    window.history.back();
                }
                alert("게시물이 삭제되었습니다.");
                window.history.back();
            })
            .catch((response) => {
                if (response.code === 400) {
                    console.log("요청 문법 오류");
                } 
                else if (response.code === 401) {
                    console.log("존재하지 않는 사용자");
                }
                else if (response.code === 402) {
                    console.log("존재하지 않는 게시물");
                }
                else if (response.code === 403) {
                    console.log("게시글 수정 권한 없음");
                }
            });
    };

    const setUserInfoAtLocalStorage = (response) => {
        localStorage.setItem("access token", response.access_token);
        localStorage.setItem("refresh token", response.refresh_token);
    };

    

    useEffect(() => {
        getPostInfo();
        getUserInfo();
    }, []);

    return (
        <>
        <ViewPostBackground>
            <ViewPostLayout>
                {postInfo ? (
                    <>
                        <WriterUserInfoBlock writerName={postInfo.username} userName={userName} createDate={postInfo.created_time} updateDate={postInfo.updated_time} postId={post_id} deletePost={deletePost}></WriterUserInfoBlock>
                        <ViewPostContentBlock postTitle={postInfo.title} postContent={postInfo.content} />
                    </>
                ) : (
                    <></>
                )}
                {/* <ViewCommentBlock /> */}
                {/* <WriteCommentBlock saveCommentInSever={saveCommentInSever} feedComments={feedComments} setFeedComments={setFeedComments} feedReplyComments={feedReplyComments} setFeedReplyComments={setFeedReplyComments} createDate={postInfo.createdAt} writerName={postInfo.author}/> */}
                <ViewPostInfoBlock views={postInfo.views} likes={postInfo.likes} isLiked={postInfo.isLiked}></ViewPostInfoBlock>
                <CommentBlock userName={userName} comments={postInfo.comments} saveCommentInSever={saveCommentInSever} comment={comment} is_anonymous={is_anonymous} setComment={setComment} setIs_anonymous={setIs_anonymous} deleteComment={deleteComment}></CommentBlock>
            </ViewPostLayout>
        </ViewPostBackground>
 
        </>
    );
};

export default ViewPost;