/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getUserActivity } from "api/User/getUserActivity";
import { getDetailPost } from "api/Post/getDetailPost";
import PostListElement from "component/molecule/PostListElement";

interface UserPostListType {
    post_id: number;
    board_id: number;
}

interface ActivityPostPreview {
    board_id: number;
    post_id: number;
    username: string;
    title: string;
    preview: string;
    comments: number;
    views: number;
    likes: number;
    created_time: string;
    updated_time: string;
}

export default function UserPost() {
    const [userPostList, setUserPostList] = useState<UserPostListType[] | null>(null);
    const [postListData, setPostListData] = useState<ActivityPostPreview[]>([]);

    const getUserPostList = () => {
        getUserActivity().then((response)=>{
            if (response && response.user_post) {
                setUserPostList(response.user_post);
            } else {
                setUserPostList(null);
            }
        }) 
    }

    const getUserPostDetailInfo = async () => {
        if (userPostList) {
            for (const item of userPostList) {
                try {
                    const response = await getDetailPost(item.post_id);
                    if (response) {
                        setPostListData((prevData) => [
                            ...prevData,
                            {
                                board_id: item.board_id,
                                post_id: response.post_id,
                                username: response.username,
                                title: response.title,
                                preview: response.content.slice(0, 40),
                                comments: response.comments?.length || 0,
                                views: response.view,
                                likes: response.likes,
                                created_time: response.created_time,
                                updated_time: response.updated_time || "",
                            },
                        ]);
                    }
                } catch (error) {
                    console.log(error);
                }
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
        }
    };

    const onClickPost = (postId: number | string, boardId: number | string) => {
        window.location.href = `/viewpost/${boardId}/${postId}`;
    };

    useEffect(()=>{
        getUserPostList();
    }, []);

    useEffect(()=>{
        if (userPostList) {
            getUserPostDetailInfo();
        }
    }, [userPostList]);

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
                >내가 쓴 글</p>
                {userPostList?.length !== 0 ? 
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
                    >아직 작성한 게시물이 없습니다. 🥲
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