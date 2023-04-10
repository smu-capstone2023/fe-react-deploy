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
    CommentField,
    Infofield,
} from './NoticeLongStyles';
import { BsFillChatFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
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
                    </NoticeElementLink>
                </NoticeBasicInfoField>
                <Infofield>
                <CommentField>
                <BsFillChatFill size={'1em'} color={`#87CEFA`} style={{ marginLeft: '.5rem', marginRight: '.2rem',}} />
                {numberOfComment && <NoticeNumberOfComment>{numberOfComment}</NoticeNumberOfComment>}
                </CommentField>
                <NumberOfViewsField><AiOutlineEye size={'1.5em'} color='gray'style={{ marginRight: '.2rem'}}/>{numberOfViews} </NumberOfViewsField>
                <CreateDateField>{detailCreatDate}</CreateDateField>

                </Infofield>
            </NoticeElementLayout>
        </>
    );
};

export default NoticeLong;
