import {WriterNameField, NoticeElementLink, NoticeNumberOfComment, NoticeTitle, CreateDateField, NoticeElementLayout, NoticeBasicInfoField, NumberOfViewsField} from './NoticeLongStyles';
const NoticeLong = ({title, createDate, numberOfComment, postId, numberOfViews, writerName}) => {
    const limitedTitle =  title.length > 20 ? title.slice(0,20) +"..." : title;
    console.log(title)
    return (
        <>
            <NoticeElementLayout>
                    <NoticeBasicInfoField>
                        <NoticeElementLink to={"/viewpost/"+postId}>
                            <NoticeTitle>
                                {limitedTitle}
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