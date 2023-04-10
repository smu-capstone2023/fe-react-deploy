import {
    CommonElementLink,
    CommonNumberOfCommnet,
    CommonTitle,
    CreateDateField,
    CommonElementLayout,
    CommonBasicInfoField,
} from './CommonStyels';
const Common = ({ title, createDate, numberOfComment, postId }) => {
    const limitedTitle = title.length > 20 ? title.slice(0, 20) + '...' : title;
    const detailCreatDate = createDate.slice(5, 7) + '/' + createDate.slice(8, 10) + '/' + createDate.slice(11, 16);
    return (
        <>
            <CommonElementLayout>
                <CommonBasicInfoField>
                    <CommonElementLink onClick={() => (window.location.href = '/viewpost/' + postId)}>
                        <CommonTitle>{limitedTitle}</CommonTitle>
                        <CommonNumberOfCommnet>[{numberOfComment}]</CommonNumberOfCommnet>
                    </CommonElementLink>
                </CommonBasicInfoField>
                <CreateDateField>{detailCreatDate}</CreateDateField>
            </CommonElementLayout>
        </>
    );
};

export default Common;
