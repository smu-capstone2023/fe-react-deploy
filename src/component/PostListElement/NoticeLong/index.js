import {MobileVersionBatch, WriterNameField, NoticeElementLink, NoticeNumberOfComment, NoticeTitle, CreateDateField, NoticeElementLayout, NoticeBasicInfoField, NumberOfViewsField} from './NoticeLongStyles';
const NoticeLong = ({ title, createDate, numberOfComment, postId, numberOfViews, writerName}) => {
    const limitedTitle =  title.length > 20 ? title.slice(0,20) +"..." : title;
    const detailCreatDate = createDate.slice(5,7)+'/' + createDate.slice(8,10)+'/' + createDate.slice(11,16)

    return (
        <>
            <NoticeElementLayout>
                {/* <MobileVersionBatch> */}
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
                {/* </MobileVersionBatch> */}
                        <CreateDateField>
                            {detailCreatDate}
                        </CreateDateField>
                        <NumberOfViewsField>
                            {numberOfViews}
                        </NumberOfViewsField>
            </NoticeElementLayout>
        </>
    )
}


export default NoticeLong;