import {
    NoticeDepartmentName,
    NoticeElementLink,
    NoticeNumberOfCommnet,
    NoticeTitle,
    CreateDateField,
    NoticeElementLayout,
    NoticeBasicInfoField,
} from './NoticeStyles';
const Notice = ({ /*departmentName,*/ title, createDate, numberOfComment, postId }) => {
    const limitedTitle =  title.length > 20 ? title.slice(0,18) +"..." : title;
    const detailCreatDate = createDate.slice(5,7)+'/' + createDate.slice(8,10)+'/' + createDate.slice(11,16)
    return (
        <>
            <NoticeElementLayout>
                <NoticeBasicInfoField>
                    <NoticeElementLink to={'/viewpost/' + postId}>
                        {/* TODO: 필요성 의문
                        <NoticeDepartmentName>[{departmentName}]</NoticeDepartmentName> */}
                        <NoticeTitle>{limitedTitle}</NoticeTitle>
                        <NoticeNumberOfCommnet>[{numberOfComment}]</NoticeNumberOfCommnet>
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <CreateDateField>{detailCreatDate}</CreateDateField>
            </NoticeElementLayout>
        </>
    );
};

export default Notice;
