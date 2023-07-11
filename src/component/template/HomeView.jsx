import React from "react";
import MyInfo from "../../component/organism/MyInfo";
import HomeIconButtonList from "../../component/organism/HomeIconButtonList";
import LostPreview from "../../component/organism/LostPreview";
import BoardSectionList from "../../component/organism/BoardSectionList";
import styled from "styled-components";
/**
 * @param userInfo: {nickname, major, shoolId, mbti}
 * @param hotPreviewList : {title, post_id, commens, likeCount}[]
 * @param majorInfo: {majorName, majorId}
 * @param majorPreviewList: {title, post_id, comments, likeCount}[]
 * @param lostPreviewList: {title , post_id}[]
 * @returns
 */

export const HomeView = ({ userInfo, hotPreviewList, majorInfo, majorPreviewList, lostPreviewList }) => {
    const { majorName, majorId, freeBoardId } = majorInfo;

    return (
        <>
            <div style={{ flex: 1, padding: "1em", gap: 20, display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, gap: 10, display: "flex" }}>
                    <HideResponsableView style={{ flex: 1 }}>
                        <MyInfo userInfo={{ ...userInfo, majorId: majorId, freeBoardId: freeBoardId }} />
                    </HideResponsableView>
                    <HomeBanner />
                </div>
                <RowToColumnResponsableView style={{ flex: 1, gap: 10 }}>
                    <HomeIconButtonListLayout>
                        <HomeIconButtonList fontSize="0.8rem" />
                    </HomeIconButtonListLayout>
                    <div style={{ flex: 3 }}>
                        <LostPreview previewList={lostPreviewList} />
                    </div>
                </RowToColumnResponsableView>
                <div style={{ flex: 1, display: "flex", gap: 10 }}>
                    <HideResponsableView style={{ flex: 1, minWidth: "20em", cursor: "pointer" }} />
                    <RowToColumnResponsableView style={{ flex: 3, gap: 10 }}>
                        <BoardSectionList
                            title="HOT 게시판"
                            previewList={hotPreviewList}
                            headerOnClick={() => (window.location.href = `/board/1/1`)}
                        />
                        {majorName && (
                            <BoardSectionList
                                title={majorName}
                                previewList={majorPreviewList}
                                headerOnClick={() => (window.location.href = `/board/${majorId}/${freeBoardId}`)}
                            />
                        )}
                    </RowToColumnResponsableView>
                </div>
            </div>
        </>
    );
};

export default HomeView;

const RowToColumnResponsableView = styled.div`
    display: flex;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const HideResponsableView = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
`;

const HomeIconButtonListLayout = styled.div`
    flex: 1;
    margin: auto 0;
    min-width: 300px;

    @media (max-width: 780px) {
        margin: 0 auto;
    }
`;

const HomeBanner = styled.div`
    background: no-repeat center/80% url("./img/BannerWeb.png") #ebf0ff;
    background-position: bottom;
    background-size: contain;
    flex: 3;
    min-height: 10em;
    cursor: pointer;

    @media (max-width: 780px) {
        background: no-repeat center/80% url("./img/BannerMobile.png") #ebf0ff;
        background-position: bottom;
        background-size: contain;
    }
`;
