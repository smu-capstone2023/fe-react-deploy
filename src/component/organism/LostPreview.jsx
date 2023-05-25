import React from "react";
import SectionListHeader from "../../component/molecule/SectionListHeader";
import LostPreviewElement from "../../component/molecule/LostPreviewElement";

/**
 * @param previewList : { title , post_id }[]  뿌려줄 데이터 리스트
 * @returns
 */

export const LostPreview = ({ previewList }) => {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        padding: "0.1rem",
                    }}
                >
                    <SectionListHeader
                        onClick={() => {
                            localStorage.getItem("school_id")
                                ? (window.location.href = `/board/${process.env.REACT_APP_LOST_BOARD_ID}/${process.env.REACT_APP_LOST_MAJOR_ID}`)
                                : alert("로그인이 필요한 기능입니다.");
                        }}
                        title={"분실물 게시판"}
                    ></SectionListHeader>
                </div>

                <div
                    style={{
                        display: "flex",
                        padding: "0.7rem",
                        overflow: "auto",
                    }}
                >
                    {previewList &&
                        previewList.map((data, i) => {
                            return (
                                <>
                                    <div style={{ padding: "0.2rem" }}></div>
                                    <LostPreviewElement
                                        onClick={() => {
                                            localStorage.getItem("school_id")
                                                ? (window.location.href = `/viewpost/${data.post_id}`)
                                                : alert("로그인이 필요한 기능입니다.");
                                        }}
                                        content={data.title}
                                    ></LostPreviewElement>
                                </>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default LostPreview;
