import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiTwotoneAlert, AiFillEdit } from "react-icons/ai";
import { requestReportPost } from "api/Post/requestReportPost";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

interface DetailFunctionProps {
    size?: number;
    color?: string;
    postId?: string;
    userId?: string;
    isAuthor?: boolean;
}

export default function DetailFunction({ size = 25, color = "#888888", postId, userId, isAuthor }: DetailFunctionProps) {
    const [isDivVisible, setIsDivVisible] = useState<Boolean>(false);

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
                        alert("성공적으로 신고되었습니다.");
                    } else if (response === 400) {
                        alert("이미 신고하신 게시물입니다.");
                    } else {
                        alert("네트워크 오류입니다. 잠시 후에 다시 시도해 주세요.");
                    }
                });
            }
        });
    };

    return (
        <>
            <IoEllipsisVertical size={size} color={color} onClick={onHandleELLipsis} />
            {isDivVisible && (
                <EllipsisItem onClick={isAuthor ? () => alert("수정하기(준비중)") : ReportPost}>
                    {" "}
                    {isAuthor ? (
                        <>
                            수정하기 <AiFillEdit color="#888888" />{" "}
                        </>
                    ) : (
                        <>
                            신고하기 <AiTwotoneAlert color="#888888" />
                        </>
                    )}
                </EllipsisItem>
            )}
        </>
    );
}

const EllipsisItem = styled.div`
    font-family: nexon-regular;
    display: flex;
    font-size: 0.8rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 4rem;
    right: 1rem;
    width: 150px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 20%;
`;
