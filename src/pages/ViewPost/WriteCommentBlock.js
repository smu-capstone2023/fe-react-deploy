const WriteCommentBlock = ({saveCommentInSever, feedComments, setFeedComments, feedReplyComments, setFeedReplyComments, createDate, writerName}) => {
    const [visible, setVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState('');
    const [is_anonymous, setIs_anonymous] = useState(false);

    const [replyComment, setReplyComment] = useState('');
    const [isVaild, setIsVaild] = useState(false);
    const [isOpen, setMenu] = useState(false);

    const [replyIsOpen, setReplyIsOpen] = useState(false);
    const [replyMenuIsOpen, setReplyMenuIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState();
    const [showReplyMenu, setShowReplyMenu] = useState();
    const [showReply, setShowReply] = useState();
    const [showReplyComment, setShowReplyComment] = useState(false);
    const textRef = useRef();
    const inputRef = useRef([]);
    const userName = localStorage.nickname;

    const post = (e) => {
        const copyFeedComments = [...feedComments];
        copyFeedComments.push({
            id: feedComments.length,
            content: comment,
            is_anonymous: false,
            userId: userId,
            replies: [],
        });
        setFeedComments(copyFeedComments);
        setComment('');
        textRef.current.style.height = 'auto';
    }

    const replyPost = (e) => {
        const copyFeedReplyComments = [...feedReplyComments];
        copyFeedReplyComments.push({
            content: replyComment,          
        });
        setFeedReplyComments(copyFeedReplyComments);
        // setReplyComment('');
        textRef.current.style.height = 'auto';
        console.log(feedReplyComments);
    }

    const handleViewComments = () => {
        setVisible(true);
    }

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    const toggleReplyMenu = () => {
        setReplyMenuIsOpen(replyMenuIsOpen => !replyMenuIsOpen);
    }

    const WriteReplyToggle = () => {
        setReplyIsOpen(replyIsOpen => !replyIsOpen);
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
            }
            else {
                alert("댓글을 작성해주세요.");
            }
        }
    }

    const onRemove = (id) => {
        const updateComments = feedComments.filter((comment) => comment.id !== id)
            .map((comment) => {
                if (comment.id > id) {
                    return {
                        ...comment,
                        id : comment.id - 1
                    };
                } else {
                    return comment;
                }
            });
        setFeedComments(updateComments);
        console.log(updateComments);
    };

    return (
        <>  
        {
                feedComments.map((commentArr, i) => {
                    return (
                        <ViewCommentContainer visible={visible}>
                            <ViewCommentUserImgLayout src="https://media.istockphoto.com/id/1197796372/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EB%9E%8C-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=O4BhlKJtKHevLMEJqMIim3IKseu5lEYXBOm3uI8r_vk="></ViewCommentUserImgLayout>
                            <ViewCommentMenuLayout style={{position: 'relative'}} onClick={() => {toggleMenu(); setShowMenu(i);}}>
                                <p>➕</p>
                                {
                                    (isOpen && (showMenu === i)) &&
                                        <ViewPostMenuUI style={{top: '2rem', left: '-8.5rem'}}>
                                            {
                                                writerName == userName ? 
                                                <>
                                                    {/* <ViewPostMenuContent onClick={handleEdit(i)}>수정</ViewPostMenuContent> */}
                                                    <ViewPostMenuContent onClick={()=>{onRemove(i)}}>삭제</ViewPostMenuContent>
                                                </> :
                                                <>
                                                    <ViewPostMenuContent onClick={()=>{}}>신고</ViewPostMenuContent>
                                                </>
                                            }
                                        </ViewPostMenuUI>
                                }
                            </ViewCommentMenuLayout>
                            <ViewCommentMenuLayout onClick={()=>{
                                WriteReplyToggle();
                                setShowReply(i);
                            }}>
                                <p>✏️</p>
                            </ViewCommentMenuLayout>
                            <ViewCommentMenuLayout onClick={()=>{
                                    alert("추천되었습니다.")
                                }}>
                                <p>👍</p>
                            </ViewCommentMenuLayout>
                            <ViewCommentUserNameLayout>{userName}
                                <CreateDateField>{createDate}</CreateDateField>
                            </ViewCommentUserNameLayout>
                            <ViewCommentLayout rows={1}>{commentArr.content}</ViewCommentLayout>
                            {
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
                            }
                            {
                                (showReplyComment) ? 
                                <>
                                    <ReplyPostContainer>
                                        <ViewCommentUserImgLayout src="https://media.istockphoto.com/id/1197796372/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EB%9E%8C-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=O4BhlKJtKHevLMEJqMIim3IKseu5lEYXBOm3uI8r_vk="></ViewCommentUserImgLayout>
                                        <ViewCommentMenuLayout style={{position: 'relative'}} onClick={() => {toggleReplyMenu(); setShowReplyMenu(i);}}>
                                            <p>➕</p>
                                            {
                                                (replyMenuIsOpen && (showReplyMenu === i)) &&
                                                    <ViewPostMenuUI style={{top: '2rem', left: '-8.5rem'}}>
                                                        {
                                                            writerName == userName ? 
                                                            <>
                                                                <ViewPostMenuContent onClick={()=>{}}>삭제</ViewPostMenuContent>
                                                            </> :
                                                            <>
                                                                <ViewPostMenuContent onClick={alert("대댓글 신고")}>신고</ViewPostMenuContent>
                                                            </>
                                                        }
                                                    </ViewPostMenuUI>
                                            }
                                        </ViewCommentMenuLayout>
                                        <ViewCommentUserNameLayout>{userName}
                                            <CreateDateField>{createDate}</CreateDateField>
                                        </ViewCommentUserNameLayout>
                                        <ReplyPostLayout>{feedReplyComments[i].content}</ReplyPostLayout>
                                </ReplyPostContainer> 
                                </>
                                :
                                <></>
                            }
                        </ViewCommentContainer>
                    )
                })
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
                <UploadCommentLayout onClick={()=>{
                    if (comment.length > 0) {
                        post();
                        console.log("댓글이 작성되었습니다.");
                        console.log(feedComments.content);
                        handleViewComments();
                        saveCommentInSever();
                    }
                    else {
                        alert("댓글을 작성해주세요.");
                    }
                }} disabled={isVaild ? false : true}>작성</UploadCommentLayout>
            </WriteCommentContainer>
        </>
    );
};