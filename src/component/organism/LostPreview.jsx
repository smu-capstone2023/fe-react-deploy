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
                            // 만약 localStorage에 school_id값이 없다면 로그인이 필요한 기능이라고 aler를 띄워주세요.
                            // 만약 있다면,
                            // .env값 중에 lost board id, lost major id값을 이용해서 board게시판으로 이동할 수 있도록 로직 작성해주세요.
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
                                            // 만약 localStorage에 school_id값이 없다면 로그인이 필요한 기능이라고 aler를 띄워주세요.
                                            // 만약 있다면,
                                            //item.post_id값을 이용해서 viewpost페이지로 이동할 수 있도록 작성해주세요.
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
