import React from "react";
import styled from "styled-components";
import SectionListHeader from "../molecule/SectionListHeader";
import PreviewListItem from "../molecule/PreviewListItem";

/**
 * @param title : 헤더의 제목
 * @param headerOnClick : 헤더를 클릭했을 때 실행되는 함수
 * @param previewList : { title, comments, likeCount, post_id}[]  뿌려줄 데이터 리스트
 * @returns
 */

export const BoardSectionList = ({ title, headerOnClick, previewList }) => {
    return (
        <BoardSectionListLayout>
            <SectionListHeader title={title} onClick={headerOnClick} font="nexon-regular" />
            {previewList &&
                previewList.map(
                    (
                        previewItem,
                        index //이부분 입니다.
                    ) => (
                        <PreviewListItem
                            postId={previewItem.post_id}
                            key={index}
                            title={previewItem.title}
                            onClick={() => {
                                localStorage.getItem("school_id")
                                    ? (window.location.href = `/viewpost/${previewItem.post_id}`)
                                    : alert("로그인이 필요한 기능입니다.");
                            }}
                            commentCount={previewItem.comments}
                            likeCount={previewItem.likes}
                        />
                    )
                )}
        </BoardSectionListLayout>
    );
};

const BoardSectionListLayout = styled.div`
    border-bottom: 1px solid #ddd;
    width: 100%;
`;

export default BoardSectionList;
