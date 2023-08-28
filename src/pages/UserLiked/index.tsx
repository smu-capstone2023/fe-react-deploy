/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getUserActivity } from "api/User/getUserActivity";
import PostListElement from "component/molecule/PostListElement";

interface ActivityPostPreview {
    board_id: number;
    post_id: number;
    title: string;
    preview: string;
    comments: number;
    views: number;
    likes: number;
    created_time: string;
    updated_time: string;
}

export default function UserPost() {
    const [postListData, setPostListData] = useState<ActivityPostPreview[]>([]);

    const getUserPostDetailInfo = () => {
        getUserActivity().then((response)=>{
            if (response && response.liked_post) {
                response.liked_post.map((item, index)=>{
                    setPostListData((prevData)=>[
                        ...prevData,
                        {
                            board_id: item.board_id,
                            post_id: item.id,
                            title: item.title,
                            preview: item.content.slice(0, 40),
                            comments: item.number_of_comments || 0,
                            views: item.views,
                            likes: item.likes,
                            created_time: item.createdAt,
                            updated_time: item.updatedAt || "",
                        }
                    ])
                })
            }
        })
    }

    const onClickPost = (postId: number | string, boardId: number | string) => {
        window.location.href = `/viewpost/${boardId}/${postId}`;
    };

    useEffect(()=>{
        getUserPostDetailInfo();
    }, []);

    return (
        <div
            css={css`
                display: flex;
                flex: 1;
            `}
        >
            <div
                css={css`
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    padding: 0 10px;
                    background: white;
                    z-index: 0;
                    position: relative;

                    @media (min-width: 500px) {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                `}
            >
                <p
                    css={css`
                        display: flex;
                        width: 80%;
                        height: 50px;
                        padding: 15px;
                        align-items: center;
                        font-family: nexon-bold;
                        font-size: 18px;
                    `}
                >내가 좋아요한 글</p>
                {postListData?.length !== 0 ? 
                    <BoardLayout>
                        {postListData &&
                            postListData.map((postData, index) => (
                                <PostListElement
                                    key={index}
                                    onClick={() => onClickPost(postData.post_id, postData.board_id)}
                                    commentCount={postData.comments}
                                    likeCount={postData.likes}
                                    title={postData.title}
                                    content={postData.preview}
                                    createdDate={postData.created_time}
                                />
                            ))}
                    </BoardLayout>
                    :
                    <p
                        css={css`
                            display: flex;
                            padding: 15px;
                        `}
                    >아직 좋아한 게시물이 없습니다. 🥲
                    </p>
                }
            </div>
        </div>
    );
}

const BoardLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 1rem;
`;