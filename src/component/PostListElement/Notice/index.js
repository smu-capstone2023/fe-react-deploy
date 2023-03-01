import {
    NoticeDepartmentName,
    NoticeElementLink,
    NoticeNumberOfCommnet,
    NoticeTitle,
    CreateDateField,
    NoticeElementLayout,
    NoticeBasicInfoField,
} from './NoticeStyles';
const Notice = ({ departmentName, title, createDate, numberOfComment, postId }) => {
    return (
        <>
            <NoticeElementLayout>
                <NoticeBasicInfoField>
                    <NoticeElementLink to={'/viewpost/' + postId}>
                        <NoticeDepartmentName>[{departmentName}]</NoticeDepartmentName>
                        <NoticeTitle>{title}</NoticeTitle>
                        <NoticeNumberOfCommnet>[{numberOfComment}]</NoticeNumberOfCommnet>
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <CreateDateField>{createDate}</CreateDateField>
            </NoticeElementLayout>
        </>
    );
};

export default Notice;
