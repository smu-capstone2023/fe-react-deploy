import React from "react";
import SectionListHeader from "../../component/molecule/SectionListHeader";
import LostPreviewElement from "../../component/molecule/LostPreviewElement";
import { useToast } from "@chakra-ui/react";

/**
 * @param previewList : { title , post_id }[]  뿌려줄 데이터 리스트
 * @returns
 */

export const LostPreview = ({ previewList }) => {
    const toast = useToast();
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
                                ? (window.location.href = `/board/1/137`)
                                : toast({ title: "로그인이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                        }}
                        title={"분실물 게시판"}
                    ></SectionListHeader>
                </div>

                <div
                    style={{
                        display: "flex",
                        padding: "0.7rem",
                        overflow: "auto",
                        gap: 10,
                    }}
                >
                    {previewList &&
                        previewList.map((data, i) => {
                            return (
                                <LostPreviewElement
                                    key={i}
                                    onClick={() => {
                                        localStorage.getItem("school_id")
                                            ? (window.location.href = `/viewpost/137/${data.post_id}`)
                                            : toast({ title: "로그인이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                                    }}
                                    content={data.title}
                                ></LostPreviewElement>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default LostPreview;
