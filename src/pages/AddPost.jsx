import React, { useState, useEffect } from "react";
import AddPostView from "../component/template/AddPostView";
import { createPost } from "../api/Post/createPost";
import { updatePost } from "../api/Post/updatePost";
import { getBoardDetailInfo } from "../api/board/getBoardDetailInfo";
import { getDetailPost } from "../api/Post/getDetailPost";
import { getBoardDetailInfoByPostId } from "../api/BoardApi/getBoardDetailInfoByPostId";

const AddPost = () => {
    const [boardInfo, setBoardInfo] = useState({ majorName: "", boardName: "" });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageList, setImageList] = useState([]);
    const [boardId, setBoardId] = useState("");
    const url = window.location.href;
    const postId = url.split("/")[4];

    const onAddImageList = (imageUrl) => {
        setImageList([...imageList].push(imageUrl));
    };

    const onDeleteImage = (index) => {
        //imageList의 해당 index에 있는 요소를 삭제한 것을 setImageList를 해주세요.
        //useState를 사용할 때 주의할 점은 imageList를 직접 수정하면 안됩니다. imageList 복사본을 만들어서 그 복사본의 값을 변경해주시고, 그 복사본을 setImageList해주셔야 합니다.
    };

    const onClickSavePost = () => {
        if (postId === "null") {
            createPost(title, content, boardId, true, "").then((response) => {
                console.log(response);
                if (response) {
                    window.location.href = `${process.env.REACT_APP_SERVER_URL}/viewPost/${response}`;
                } else {
                    alert("네트워크 문제! 잠시 후에 다시 시도해주세요.");
                }
            })
        }
        else {
            updatePost(title, content, postId, true, "").then((response) => {
                if (response) {
                    window.location.href = `${process.env.REACT_APP_SERVER_URL}/viewPost/${postId}`;
                } else (
                    alert("네트워크 문제! 잠시 후에 다시 시도해주세요.")
                )
            })
        }
    };

    useEffect(() => {
        getBoardDetailInfoByPostId(postId).then((response) => {
            if(response) {
                setBoardId(response.board_id);
                console.log(response.board_id);
            } else {
                console.log(response);
            }
        })
        getBoardDetailInfo(boardId).then((response) => {
            if (response) {
                setBoardInfo({
                    majorName: response.major_name,
                    boardName: response.board_name,
                })
            } else {
                alert("네트워크 문제! 잠시 후에 다시 시도해주세요.")
            }
        })
        if (postId != "null") {
            getDetailPost(postId).then((response) => {
                if (response) {
                    setTitle(response.title);
                    setContent(response.content);
                } else {
                    alert("네트워크 문제! 잠시 후에 다시 시도해주세요.")
                }
            })
        }
    }, []);

    return (
        <AddPostView
            title={title}
            content={content}
            onAddImageList={onAddImageList}
            onClickSavePost={onClickSavePost}
            boardInfo={boardInfo}
            onChangeTitle={setTitle}
            onChangeContent={setContent}
            imageList={imageList}
            onDeleteImage={onDeleteImage}
        />
    );
};

export default AddPost;
