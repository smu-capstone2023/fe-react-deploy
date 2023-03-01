import { ViewPostLayout,
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
} from './ViewPostStyles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WriterUserInfoBlock = ({writerName, createDate, profileImageUrl}) =>{
    return(
    <WriterUserInfoLayout>
        <ProfileImageLayout>
            <ProfileImage/>
        </ProfileImageLayout>
        <UserAndPostInfoLayout>
            <UserNameFiled>
                {writerName}
            </UserNameFiled>
            <CreateDateField>
                {createDate}
            </CreateDateField>
        </UserAndPostInfoLayout>
    </WriterUserInfoLayout>
    )
}

const EditPostButton = ({isShow, postId}) => {
    if(isShow){
        return(
            <EditPostButtonField onClick={()=> window.location.href=`../editpost/${postId}`}>
                수정하기
            </EditPostButtonField>
        )
    }
    else{
        return(<></>)
    }
}


const ViewPostContentBlock = ({postTitle, postContent}) => {
    return(
        <ViewPostContentLayout>
            <PostTitleField>
                {postTitle}
            </PostTitleField>
            <PostContentField>
                {postContent}
            </PostContentField>
        </ViewPostContentLayout>
    )
}

const ViewCommentBlock = () => {
    return(
        <ViewCommentLayout/>
    )
}
const ViewPost = () => {
    const {post_id} = useParams();
    const [postInfo, setPostInfo] = useState({});
    const getPostInfo = () => {
        axios.get(`http://api.gwabang.site:8001/board/detail/${post_id}`,{
            headers: {
                'email': 'super@super.com',
            }
        })
        .then(response => {
            setPostInfo(response.data);
        })
        .catch(response => console.log(response))
    }

    useEffect(()=>{
        getPostInfo();
    },[])

    //TODO: 유저가 글쓴이인지 아닌지에 따라서 EditPostButton 숨기기 기능 추가해야함
    return(
        <>
        <ViewPostLayout>
            {postInfo ? 
            (
                <>
                <WriterUserInfoBlock 
                writerName={postInfo.author} 
                createDate={postInfo.createdAt}/>
                <ViewPostContentBlock
                postTitle={postInfo.title}
                postContent={postInfo.content}/>
                </>
            ):(<></>)}
            <EditPostButton isShow={true} postId={post_id} />
            <ViewCommentBlock/>
        </ViewPostLayout>
        </>
    )
}

export default ViewPost;