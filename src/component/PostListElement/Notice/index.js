import {
    NoticeElementLink,
    NoticeNumberOfCommnet,
    NoticeTitle,
    CreateDateField,
    NoticeElementLayout,
    NoticeBasicInfoField,
} from './NoticeStyles';
const Notice = ({ title, createDate, numberOfComment, postId, isNotice = false }) => {
    const limitedTitle = title.length > 20 ? title.slice(0, 18) + '...' : title;
    const detailCreatDate = createDate.slice(5, 7) + '/' + createDate.slice(8, 10) + '/' + createDate.slice(11, 16);
    return (
        <>
            <NoticeElementLayout>
                <NoticeBasicInfoField>
                    <NoticeElementLink
                        onClick={() => {
                            if (isNotice) {
                                window.location.href = `https://www.smu.ac.kr/lounge/notice/notice.do?mode=view&articleNo=${postId}`;
                            } else {
                                window.location.href = '/viewpost/' + postId;
                            }
                        }}
                    >
                        <NoticeTitle>{limitedTitle}</NoticeTitle>
                        {numberOfComment && <NoticeNumberOfCommnet>[{numberOfComment}]</NoticeNumberOfCommnet>}
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <CreateDateField>{detailCreatDate}</CreateDateField>
            </NoticeElementLayout>
        </>
    );
};

export default Notice;
