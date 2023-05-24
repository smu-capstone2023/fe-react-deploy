import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AddPostView from "../component/template/AddPostView";
import { createPost } from "../api/Post/createPost";
import { updatePost } from "../api/Post/updatePost";
import { getBoardDetailInfo } from "../api/board/getBoardDetailInfo";
import { getDetailPost } from "../api/Post/getDetailPost";

const AddPost = () => {
    const [boardInfo, setBoardInfo] = useState({ majorName: "", boardName: "" });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageList, setImageList] = useState([]);
    const image_url_list = "";
    const is_anonymous = true;
    let { board_id, post_id } = useParams();

    const onAddImageList = (imageUrl) => {
        setImageList([...imageList].push(imageUrl));
    };

    const onDeleteImage = (index) => {
        //imageList의 해당 index에 있는 요소를 삭제한 것을 setImageList를 해주세요.
        //useState를 사용할 때 주의할 점은 imageList를 직접 수정하면 안됩니다. imageList 복사본을 만들어서 그 복사본의 값을 변경해주시고, 그 복사본을 setImageList해주셔야 합니다.
    };

    const onClickSavePost = () => {
        if (post_id === "null") {
            createPost(title, content, board_id, is_anonymous, image_url_list).then((response) => {
                if (response === false) {
                    alert("네트워크 문제! 잠시 후에 다시 시도해주세요.");
                } else {
                    window.location.href = `/viewpost/${response}`;
                }
            })
        }
        else {
            updatePost(title, content, post_id, is_anonymous, image_url_list).then((response) => {
                if (response === false) {
                    alert("네트워크 문제! 잠시 후에 다시 시도해주세요.")
                } else {
                    window.location.href = `/viewpost/${post_id}`;
                }
            })
        }
    };

    useEffect(() => {
        getBoardDetailInfo(board_id).then((response) => {
            if (response) {
                setBoardInfo({
                    majorName: response.major_name,
                    boardName: response.board_name,
                })
            } else {
                alert("네트워크 문제! 잠시 후에 다시 시도해주세요.")
            }
        })
        if (post_id !== "null") {
            getDetailPost(post_id).then((response) => {
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
