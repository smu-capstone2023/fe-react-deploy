import {
    CommonElementLink,
    CommonNumberOfCommnet,
    CommonTitle,
    CreateDateField,
    CommonElementLayout,
    CommonBasicInfoField,
} from './CommonStyels';
const Common = ({ title, createDate, numberOfComment, postId }) => {
    return (
        <>
            <CommonElementLayout>
                <CommonBasicInfoField>
                    <CommonElementLink to={'/viewpost/' + postId}>
                        <CommonTitle>{title}</CommonTitle>
                        <CommonNumberOfCommnet>[{numberOfComment}]</CommonNumberOfCommnet>
                    </CommonElementLink>
                </CommonBasicInfoField>
                <CreateDateField>{createDate}</CreateDateField>
            </CommonElementLayout>
        </>
    );
};

export default Common;
