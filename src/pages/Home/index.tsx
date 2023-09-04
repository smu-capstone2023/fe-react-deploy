/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import IconList from "./IconList";
import BusNotice from "./BusNotice";
import { getHotBoardPreviewList } from "api/board/getHotBoardPreviewList";
import BoardSectionList from "component/organism/BoardSectionList";
import { UserDto } from "dto/user";
import { getUserInfo } from "api/User/getUserInfo";
import LostPreview from "component/organism/LostPreview";
import { getLostBoardPreviewList } from "api/board/getLostBoardPreviewList";
import { getBoardPostPreview } from "api/board/getBoardPostPreview";
import { getBusNotice } from "api/utils/getBusNotice";
import { useToast } from "@chakra-ui/react";

export interface IPreview {
    post_id: number;
    title: string;
    comments: number;
    created_time: string;
    likes: number;
}
export interface BusNoticeType {
    post_id: string;
    created_time: string;
    updated_time: string;
    title: string;
    imageUrls: string[];
    content: string;
    bus_list: string[];
}
export default function Home() {
    const [hotPreviewList, setHotPreviewList] = useState<IPreview[]>([]);
    const [userInfo, setUserInfo] = useState<UserDto>();
    const [lostPreviewList, setLostPreviewList] = useState<IPreview[]>([]);
    const [majorPreviewList, setMajorPreviewList] = useState<IPreview[]>([]);
    const [BusNoticeList, setBusNoticeList] = useState<BusNoticeType[] | boolean>([]);
    const toast = useToast();
    
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

        getBusNotice().then((res: BusNoticeType[] | boolean) => {
            if (res) {
                setBusNoticeList(res);
            }
        });
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
            <Profile
                nickname={userInfo?.username}
                major={userInfo?.majors && userInfo?.majors.length >= 2 ? userInfo?.majors[1].major_name : "학과인증을 해주세요"}
                mbti={userInfo?.mbti ? userInfo?.mbti : ""}
            />
            <IconList majors={userInfo?.majors} />
            <BusNotice BusNoticeLists={BusNoticeList} />
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />
            <LostPreview previewList={lostPreviewList} />
            <div
                css={css`
                    border-bottom-width: 10px;
                    border-bottom-style: solid;
                    border-bottom-color: #f3f3f3;
                `}
            />
            <BoardSectionList
                title="HOT 게시판"
                previewList={hotPreviewList}
                headerOnClick={() => {
                    localStorage.getItem("access_token") ? (window.location.href = `/board/1/1`) : toast({ title: "로그인이 필요한 기능입니다.", position: "top", isClosable: true, variant: "subtle" });
                }}
            />
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
