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

const NoticeLong = ({ title, createDate, numberOfComment, postId, numberOfViews, writerName }) => {
    const limitedTitle = title.length > 20 ? title.slice(0, 23) + '...' : title;
    const detailCreatDate = ' ' + createDate.slice(5, 7) + '/' + createDate.slice(8, 10) + '/' + createDate.slice(11, 16);

    return (
        <>
            <NoticeElementLayout>
                <NoticeBasicInfoField>
                    <NoticeElementLink onClick={() => (window.location.href = '/viewpost/' + postId)}>
                        <WriterNameField>{writerName}</WriterNameField>

                        <NoticeTitle>{limitedTitle}</NoticeTitle>
                        <BsFillChatFill size={'1em'} color={`lightgray`} style={{ marginLeft: '.5rem' }} />
                        <NoticeNumberOfComment>[{numberOfComment}]</NoticeNumberOfComment>
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <CreateDateField>{detailCreatDate}</CreateDateField>
                <NumberOfViewsField>{numberOfViews}</NumberOfViewsField>
            </NoticeElementLayout>
        </>
    );
};

export default NoticeLong;
