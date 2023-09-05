import { useState } from "react";
import { IoEllipsisVertical, IoTrashBin } from "react-icons/io5";
import { AiTwotoneAlert, AiFillEdit } from "react-icons/ai";
import { requestReportPost } from "api/Post/requestReportPost";
import { deletePost } from "api/Post/deletePost";
import { deleteComment } from "api/Comment/deleteComment";
import { reportComment } from "api/Comment/reportComment";
import { useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

interface DetailFunctionProps {
    size?: number;
    color?: string;
    boardId?: string;
    postId?: string;
    isAuthor?: boolean;
    commentId?: number;
}

export default function DetailFunction({ size = 25, color = "#888888", boardId, postId, isAuthor, commentId }: DetailFunctionProps) {
    const [isDivVisible, setIsDivVisible] = useState<Boolean>(false);
    const toast = useToast();

    const onHandleELLipsis = () => {
        setIsDivVisible(!isDivVisible);
    };

    const ReportPost = () => {
        Swal.fire({
            title: "해당 글을 신고하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed && postId) {
                requestReportPost(postId).then((response: number) => {
                    if (response === 201) {
                        toast({ title: "성공적으로 신고되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else if (response === 400) {
                        toast({ title: "이미 신고하신 게시물입니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else {
                        toast({ title: "네트워크 오류입니다. 잠시 후에 다시 시도해 주세요.", position: "top", isClosable: true, variant: "subtle" });
                    }
                });
            }
        });
    };

    const DeletePost = () => {
        Swal.fire({
            title: "해당 글을 삭제하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed && postId) {
                deletePost(postId).then((response: boolean) => {
                    if (response) {
                        toast({ title: "성공적으로 삭제되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                        window.history.back();
                    } else {
                        toast({ title: "네트워크 오류입니다. 잠시 후에 다시 시도해 주세요.", position: "top", isClosable: true, variant: "subtle" });
                    }
                });
            }
        });
    };

    const UpdatePost = () => (window.location.href = `/addpost/${boardId}/${postId}`);

    const ReportComment = () => {
        Swal.fire({
            title: "댓글을 신고하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed && commentId) {
                reportComment(commentId).then((response: number) => {
                    if (response === 201) {
                        toast({ title: "성공적으로 신고되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else if (response === 400) {
                        toast({ title: "이미 신고하신 댓글입니다.", position: "top", isClosable: true, variant: "subtle" });
                    } else {
                        toast({ title: "네트워크 오류입니다. 잠시 후에 다시 시도해 주세요.", position: "top", isClosable: true, variant: "subtle" });
                    }
                });
            }
        });
    };

    const DeleteComment = () => {
        Swal.fire({
            title: "댓글을 삭제하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
        }).then((result) => {
            if (result.isConfirmed && commentId) {
                deleteComment(commentId).then((response: boolean) => {
                    if (response) {
                        toast({ title: "성공적으로 삭제되었습니다.", position: "top", isClosable: true, variant: "subtle" });
                        window.location.reload();
                    } else {
                        toast({ title: "네트워크 오류입니다. 잠시 후에 다시 시도해 주세요.", position: "top", isClosable: true, variant: "subtle" });
                    }
                });
            }
        });
    };

    const UpdateComment = () => {
        toast({ title: "준비중", position: "top", isClosable: true, variant: "subtle" });
    };

    return (
        <div>
            <IoEllipsisVertical size={size} color={color} onClick={onHandleELLipsis} />
            {!commentId ? (
                <>
                    {isDivVisible && (
                        <EllipsisItem>
                            {isAuthor ? (
                                <>
                                    <Items onClick={UpdatePost}>
                                        수정하기 <AiFillEdit color="#888888" />
                                    </Items>
                                    <Items onClick={DeletePost}>
                                        삭제하기 <IoTrashBin color="#888888" />
                                    </Items>
                                </>
                            ) : (
                                <Items onClick={ReportPost}>
                                    신고하기 <AiTwotoneAlert color="#888888" />
                                </Items>
                            )}
                        </EllipsisItem>
                    )}
                </>
            ) : (
                <>
                    {isDivVisible && (
                        <EllipsisItem>
                            {isAuthor ? (
                                <>
                                    {/* <Items onClick={UpdateComment}>
                              수정하기 <AiFillEdit color="#888888" />
                          </Items> */}
                                    <Items onClick={DeleteComment}>
                                        삭제하기 <IoTrashBin color="#888888" />
                                    </Items>
                                </>
                            ) : (
                                <>
                                    <Items onClick={ReportComment}>
                                        신고하기 <AiTwotoneAlert color="#888888" />
                                    </Items>
                                </>
                            )}
                        </EllipsisItem>
                    )}
                </>
            )}
        </div>
    );
}
const EllipsisItem = styled.div`
    flex-direction: column;
    font-size: 0.8rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 0;
    top: 25px;
    width: 140px;
    padding: 0.7rem;
`;

const Items = styled.div`
    font-family: nexon-regular;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30%;
    margin-bottom: 5px;
`;
