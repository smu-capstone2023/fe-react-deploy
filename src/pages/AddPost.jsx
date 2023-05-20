import React, { useState, useEffect } from "react";
import AddPostView from "../component/template/AddPostView";

const AddPost = () => {
    const [boardInfo, setBoardInfo] = useState({ majorName: "", boardName: "" });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageList, setImageList] = useState([]);

    const onAddImageList = (imageUrl) => {
        setImageList([...imageList].push(imageUrl));
    };

    const onDeleteImage = (index) => {
        //imageList의 해당 index에 있는 요소를 삭제한 것을 setImageList를 해주세요.
        //useState를 사용할 때 주의할 점은 imageList를 직접 수정하면 안됩니다. imageList 복사본을 만들어서 그 복사본의 값을 변경해주시고, 그 복사본을 setImageList해주셔야 합니다.
    };

    const onClickSavePost = () => {
        /**
         * 1. 만약 url값의 post_id값이 'null'이면 아래와 같은 액션이 이루어져야 합니다.
         * api/Post/createPost를 이용해서 return false이면 alert로 네트워크 문제! 잠시 후에 다시 시도해주세요 문구를 띄워줍니다.
         * 만약 false가 아닌 postId 숫자가 반환된다면, 해당 postId의 viewpost로 넘어가게 구현해주세요.
         * 임시로 is_anonymous 값은 true로 요청을 보냅니다. board_id는 url값의 숫자를 사용합니다.
         * 임시로 imageUrl값은 ""값으로 요청을 보냅니다.
         */
        /**
         * 2. 만약 url값의 post_id값에 숫자가 온다면, 아래와 같은 액션이 이루어져야 합니다.
         * api/Post/updatePost를 이용해서 return이 false면 alert로 네트워크 문제! 잠시 후에 다시 시도해주세요 문구를 띄워줍니다.
         * 만약 true면 url의 값의 post_id값을 이용해서 해당 postId의 viewpost로 넘어가게 구현해주세요.
         * 임시로 is_anonymous 값은 true로 요청을 보냅니다. board_id는 url값의 숫자를 사용합니다.
         * 임시로 imageUrl값은 ""값으로 요청을 보냅니다.
         */
    };

    useEffect(() => {
        /**
         * 1.  여기에서 setBoardInfo를 해줍니다.
         * api/board/getBoardDetailInfo.js api를 사용해서 major_name, board_name의 값을 set해줍니다.
         */
        /**
         * 2. url값의 post_id값이 'null'이 아닌 다른 숫자가 온다면,
         * api/Post/getDetailPost.js 의 api함수를 이용해서 setTitle, setContent를 하여 초기로 값을 설정해줍니다.
         * 이미지는 요청하는 로직이 아직 미완성이라, 그 부분이 완성되면 구현할 예정이니, setImageList는 안해주셔도 됩니다.
         */
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
