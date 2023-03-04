import {WriterNameField, NoticeElementLink, NoticeNumberOfComment, NoticeTitle, CreateDateField, NoticeElementLayout, NoticeBasicInfoField, NumberOfViewsField} from './NoticeLongStyles';
const NoticeLong = ({title, createDate, numberOfComment, postId, numberOfViews, writerName}) => {
    return (
        <>
            <NoticeElementLayout>
                    <NoticeBasicInfoField>
                        <NoticeElementLink to={"/viewpost/"+postId}>
                            <NoticeTitle>
                                {title}
                            </NoticeTitle>
                            <NoticeNumberOfComment>
                                [{numberOfComment}]
                            </NoticeNumberOfComment>
                        </NoticeElementLink>
                    </NoticeBasicInfoField>
                        <WriterNameField>
                            {writerName}
                        </WriterNameField>
                        <CreateDateField>
                            {createDate}
                        </CreateDateField>
                        <NumberOfViewsField>
                            {numberOfViews}
                        </NumberOfViewsField>
            </NoticeElementLayout>
        </>
    )
}


export default NoticeLong;