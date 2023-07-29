/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import IconList from "./IconList";
import { getHotBoardPreviewList } from "api/board/getHotBoardPreviewList";
import BoardSectionList from "component/organism/BoardSectionList";
import { UserDto } from "dto/user";
import { getUserInfo } from "api/User/getUserInfo";
import LostPreview from "component/organism/LostPreview";
import { getLostBoardPreviewList } from "api/board/getLostBoardPreviewList";
import { getBoardPostPreview } from "api/BoardApi/getBoardPostPreview";

export default function Home() {
    const [hotPreviewList, setHotPreviewList] = useState([]);
    const [userInfo, setUserInfo] = useState<UserDto>();
    const [lostPreviewList, setLostPreviewList] = useState([]);
    const [majorPreviewList, setMajorPreviewList] = useState([]);
    useEffect(() => {
        getHotBoardPreviewList().then((response) => {
            if (response) {
                setHotPreviewList(response);
            }
        });
        getLostBoardPreviewList().then((res) => {
            setLostPreviewList(res.slice(0, 2));
        });
        if (localStorage.getItem("access_token")) {
            getUserInfo().then((res) => {
                setUserInfo(res);
                if (res.majors.length >= 2) {
                    getBoardPostPreview(res.majors[1].free_board_id, 6).then((res) => {
                        setMajorPreviewList(res);
                    });
                }
            });
        }
    }, []);

    return (
        <div
            css={css`
                display: flex;
                flex: 1;
                flex-direction: column;

                background: white;

                @media (min-width: 500px) {
                    max-width: 500px;
                    margin: 0 auto;
                }
            `}
        >
            <Profile nickname={userInfo?.username} major={userInfo?.majors[1].major_name} mbti={userInfo?.mbti ? userInfo?.mbti : ""} />
            <IconList majors={userInfo?.majors} />
            <LostPreview previewList={lostPreviewList} />
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />
            <BoardSectionList title="HOT 게시판" previewList={hotPreviewList} headerOnClick={() => (window.location.href = `/board/1/1`)} />
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />

            {userInfo?.majors && userInfo?.majors.length >= 2 && (
                <>
                    <BoardSectionList
                        title={`${userInfo?.majors[1].major_name} (자유)`}
                        previewList={majorPreviewList}
                        headerOnClick={() =>
                            (window.location.href = `/board/${userInfo?.majors[1].major_id}/${userInfo?.majors[1].free_board_id}`)
                        }
                    />
                    <div
                        css={css`
                            border-bottom-width: 10px;
                            border-bottom-style: solid;
                            border-bottom-color: #f3f3f3;
                        `}
                    />
                </>
            )}
        </div>
    );
}
