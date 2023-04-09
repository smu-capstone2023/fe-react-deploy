import {
    MobileVersionBatch,
    WriterNameField,
    NoticeElementLink,
    NoticeNumberOfComment,
    NoticeTitle,
    CreateDateField,
    NoticeElementLayout,
    NoticeBasicInfoField,
    NumberOfViewsField,
} from './NoticeLongStyles';
import { BsFillChatFill } from 'react-icons/bs';
import { COLORS } from '../../../color';

const NoticeLong = ({ title, createDate, numberOfComment, postId, numberOfViews, writerName, isNotice = false }) => {
    const limitedTitle = title.length > 20 ? title.slice(0, 23) + '...' : title;
    const detailCreatDate = ' ' + createDate.slice(5, 7) + '/' + createDate.slice(8, 10) + '/' + createDate.slice(11, 16);

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
                        <WriterNameField>{writerName}</WriterNameField>
                        <NoticeTitle>{limitedTitle}</NoticeTitle>
                        <BsFillChatFill size={'1em'} color={`lightgray`} style={{ marginLeft: '.5rem' }} />
                        {numberOfComment && <NoticeNumberOfComment>[{numberOfComment}]</NoticeNumberOfComment>}
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <CreateDateField>{detailCreatDate}</CreateDateField>
                <NumberOfViewsField>{numberOfViews}</NumberOfViewsField>
            </NoticeElementLayout>
        </>
    );
};

export default NoticeLong;
