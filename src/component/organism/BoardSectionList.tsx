import React from "react";
import { css } from "@emotion/react";
import SectionListHeader from "../molecule/SectionListHeader";
import PreviewListItem from "../molecule/PreviewListItem";

/**
 * @param title : 헤더의 제목
 * @param headerOnClick : 헤더를 클릭했을 때 실행되는 함수
 * @param previewList : { title, comments, likeCount, post_id}[]  뿌려줄 데이터 리스트
 * @returns
 */

interface Prop {
    title: string;
    headerOnClick: () => void;
    previewList: { title: string; comments: number | string; likeCount: number | string; post_id: number | string }[];
}
export const BoardSectionList = ({ title, headerOnClick, previewList }: Prop) => {
    return (
        <div
            css={css`
                border-bottom: 1px solid #ddd;
                width: 100%;
            `}
        >
            <SectionListHeader title={title} onClick={headerOnClick} />
            {previewList &&
                previewList.map(
                    (
                        previewItem,
                        index //이부분 입니다.
                    ) => (
                        <PreviewListItem
                            key={index}
                            title={previewItem.title}
                            onClick={() => {
                                localStorage.getItem("school_id")
                                    ? (window.location.href = `/viewpost/1/${previewItem.post_id}`)
                                    : alert("로그인이 필요한 기능입니다.");
                            }}
                            commentCount={previewItem.comments}
                            likeCount={previewItem.likeCount}
                        />
                    )
                )}
        </div>
    );
};

export default BoardSectionList;
