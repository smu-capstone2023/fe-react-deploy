import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddPostView from "../component/template/AddPostView";
import { createPost } from "../api/Post/createPost";
import { updatePost } from "../api/Post/updatePost";
import { getBoardDetailInfo } from "../api/board/getBoardDetailInfo";
import { getDetailPost } from "../api/Post/getDetailPost";
import { useToast } from "@chakra-ui/react";

const AddPost = () => {
    const [boardInfo, setBoardInfo] = useState({ majorName: "", boardName: "" });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageList, setImageList] = useState([]);
    const is_anonymous = true;
    const toast = useToast();
    let { board_id, post_id } = useParams();

    const onAddImageList = (imageUrl) => {
        setImageList([...imageList, imageUrl]);
    };

    const onDeleteImage = (index) => {
        const newImageList = imageList.filter((_, idx) => idx !== index);
        setImageList(newImageList);
    };

    const onClickSavePost = () => {
        if (post_id === "null") {
            createPost(title, content, board_id, is_anonymous, imageList).then((response) => {
                if (typeof response === "number") {
                    window.location.href = `/viewpost/${board_id}/${response}`;
                }
            });
        } else {
            updatePost(title, content, is_anonymous, imageList, post_id).then((response) => {
                if (response === false) {
                    toast({ title: "네트워크 문제! 잠시 후에 다시 시도해주세요.", position: "top", isClosable: true, variant: "subtle" });
                } else {
                    window.location.href = `/viewpost/${board_id}/${post_id}`;
                }
            });
        }
    };

    const getPostImage = (images) => {
        const postImages = images?.split(',') ?? [];
        setImageList(...imageList, postImages);
      };

    useEffect(() => {
        getBoardDetailInfo(board_id).then((response) => {
            if (response) {
                setBoardInfo({
                    majorName: response.major_name,
                    boardName: response.board_name,
                });
            } else {
                toast({ title: "네트워크 문제! 잠시 후에 다시 시도해주세요.", position: "top", isClosable: true, variant: "subtle" });
            }
        });
        if (post_id !== "null") {
            getDetailPost(post_id).then((response) => {
                if (response) {
                    setTitle(response.title);
                    setContent(response.content);
                    getPostImage(response.image_urls);
                } else {
                    toast({ title: "네트워크 문제! 잠시 후에 다시 시도해주세요.", position: "top", isClosable: true, variant: "subtle" });
                }
            });
        }
    }, []);

    return (
        <AddPostView
            title={title}
            content={content}
            onAddImage={onAddImageList}
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
