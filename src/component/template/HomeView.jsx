// import {Navbar} from '../../component/Navbar/index';
import React, { useState, useEffect } from "react";
import MyInfo from "../../component/organism/MyInfo";
import HomeIconButtonList from "../../component/organism/HomeIconButtonList";
import LostPreview from "../../component/organism/LostPreview";
import BoardSectionList from "../../component/organism/BoardSectionList";
import Footer from "../../component/organism/Footer";

/**
 * @param userInfo: {nickname, major, shoolId, mbti}
 * @param hotPreviewList : {title, id, commenCount, likeCount}[]
 * @param majorInfo: {majorName, majorId}
 * @param majorPreviewList: {title, id, commentCount, likeCount}[]
 * @param lostPreviewList: {content , onClick}[]
 * @returns
 */

export const HomeView = ({ userInfo, hotPreviewList, majorInfo, majorPreviewList, lostPreviewList }) => {
    const { majorName, majorId } = majorInfo;
    const [resize, setResize] = useState();
    const hotBoardTitle = "HOT 게시판";

    const handleResize = () => {
        setResize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
                <div style={{ display: "flex", width: "100%", margin: "1rem 0", justifyContent: "center" }}>
                    {resize >= 768 ? (
                        <>
                            <MyInfo userInfo={userInfo}></MyInfo>
                            <div
                                style={{
                                    display: "flex",
                                    background: "#E8E8E8",
                                    width: "80%",
                                    height: "10rem",
                                    marginLeft: "0.5rem",
                                    padding: "1rem",
                                }}
                            ></div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    background: "#E8E8E8",
                                    width: "100%",
                                    height: "10rem",
                                    marginLeft: "0.5rem",
                                    padding: "1rem",
                                }}
                            ></div>
                        </>
                    )}
                </div>

                {resize >= 1300 ? (
                    <>
                        <div style={{ display: "flex", width: "100%", margin: "1rem 0", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", alignItems: "center", width: "20%", justifyContent: "center" }}>
                                <HomeIconButtonList iconProps={2} fontProps={14}></HomeIconButtonList>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", width: "80%" }}>
                                <LostPreview previewList={lostPreviewList}></LostPreview>
                            </div>
                        </div>

                        <div style={{ display: "flex", width: "100%", margin: "1rem 0", flexWrap: "wrap" }}>
                            <div
                                style={{
                                    display: "flex",
                                    background: "#EBF0FF",
                                    width: "20%",
                                    height: "18rem",
                                    padding: "1rem",
                                }}
                            >
                                <img
                                    style={{
                                        background: "#4169E1",
                                        display: "flex",
                                        width: "50%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                ></img>
                                <h1
                                    style={{
                                        display: "flex",
                                        width: "50%",
                                        fontFamily: "nexon-bold",
                                        fontSize: "40px",
                                        color: "#4169E1",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    SMUS OPEN!
                                </h1>
                            </div>

                            <div style={{ width: "40%", padding: "0.5rem" }}>
                                <BoardSectionList title={"HOT 게시판"} headerOnClick={true} previewList={hotPreviewList}></BoardSectionList>
                            </div>
                            <div style={{ width: "40%", padding: "0.5rem" }}>
                                <BoardSectionList title={majorName} headerOnClick={true} previewList={majorPreviewList}></BoardSectionList>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: "flex", width: "100%", margin: "1rem 0", flexWrap: "wrap", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
                                <HomeIconButtonList iconProps={2} fontProps={11}></HomeIconButtonList>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", width: "100%", margin: "1rem 0" }}>
                                <LostPreview previewList={lostPreviewList}></LostPreview>
                            </div>
                        </div>

                        <div style={{ display: "flex", width: "100%", margin: "1rem 0", flexWrap: "wrap", flexDirection: "column" }}>
                            <div style={{ width: "100%", padding: "0.5rem" }}>
                                <BoardSectionList
                                    title={hotBoardTitle}
                                    headerOnClick={true}
                                    previewList={hotPreviewList}
                                ></BoardSectionList>
                            </div>
                            <div style={{ width: "100%", padding: "0.5rem" }}>
                                <BoardSectionList title={majorName} headerOnClick={true} previewList={majorPreviewList}></BoardSectionList>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer></Footer>
        </>
    );
};

export default HomeView;
