import React, { useState } from "react";
import AddPostView from "../component/template/AddPostView";

const AddPost = () => {
    const boardInfo = { majorName: "상명대학교", boardName: "자유게시판" };
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageList, setImageList] = useState([
        "https://pdfimages.wondershare.com/pdfelement/7-guide/batch-process.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKbLZczInVdx3nBBarJZ2mDrUxSq9nITeCg&usqp=CAU",
    ]);
    return (
        <AddPostView
            boardInfo={boardInfo}
            onChangeTitle={setTitle}
            onChangeContent={setContent}
            imageList={imageList}
            onChangeImageList={setImageList}
        />
    );
};

export default AddPost;
