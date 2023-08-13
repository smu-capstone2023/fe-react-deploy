/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Profile from "pages/Home/Profile";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import Separator from "./Separator";
import { app_info_list, my_util_list, setting_list } from "./data";
import ListItem from "./ListItem";
import PasswordChangeModal from "./PasswordChangeModal";
import MbtiChangeModal from "./MbtiChangeModal";
import { foldingCss, onClickLogout, onClickRevoke } from "./utils";

const SectionContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
export default function MyPage() {
    const userInfoData = useSelector((state: any) => state.user);
    const [changeMbtiModalOpen, setChangeMbtiModalOpen] = useState(false);
    const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
    const [isOpenSchedule, setIsOpenSchedule] = useState<boolean | null>(null);

    const handleOnClickModifyProfile = () => {
        //TODO: 프로필 수정하기 기능 여기다가
    };

    const handleOnClickSettingItem = (item: string) => {
        switch (item) {
            case "학과인증":
                window.location.href = "/major-certification";
                break;
            case "MBTI 변경":
                setChangeMbtiModalOpen(true);
                break;
            case "비밀번호 변경":
                setChangePasswordModalOpen(true);
                break;
            case "로그아웃":
                onClickLogout();
                break;
            case "탈퇴하기":
                onClickRevoke();
        }
    };

    const handleOnClickAppInfoItem = (item: string) => {
        //TODO: 앱 정보 기능 추가되면 여기다가.
    };

    const handleOnClickMyUtilItem = (item: string) => {
        //TODO: 내 유틸 기능 추가되면 여기다가.
    };

    const handleOnClickScheduleItem = () => {
        //TODO: 내 시간표 보기 기능 여기다가.
    };
    return (
        <div
            css={css`
                display: flex;
                flex: 1;
            `}
        >
            {changeMbtiModalOpen && <MbtiChangeModal setModalOpen={setChangeMbtiModalOpen} />}
            {changePasswordModalOpen && <PasswordChangeModal setModalOpen={setChangePasswordModalOpen}></PasswordChangeModal>}
            <div
                css={css`
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    background: white;
                    z-index: 0;
                    position: relative;

                    @media (min-width: 500px) {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                `}
            >
                <Profile
                    nickname={userInfoData.username}
                    major={
                        userInfoData.majors && userInfoData.majors.length >= 2 ? userInfoData.majors[1].major_name : "학과인증을 해주세요"
                    }
                    mbti={userInfoData.mbti}
                />
                <SectionContainer
                    css={css`
                        flex-direction: row;
                        justify-content: space-between;
                    `}
                >
                    <p
                        css={css`
                            font-family: nexon-regular;
                            font-size: 18px;
                        `}
                    >
                        내 시간표
                    </p>
                    <div
                        css={css`
                            transition: transform 1s;
                            ${isOpenSchedule && "transform: rotate(90deg)"}
                            ${!isOpenSchedule && "transform: rotate(-90deg)"}
                        `}
                        onClick={() => {
                            if (!isOpenSchedule) setIsOpenSchedule(true);
                            else setIsOpenSchedule(false);
                        }}
                    >
                        <AiOutlineRight size={24} color="#C0C0C0" />
                    </div>
                </SectionContainer>
                <div
                    css={css`
                        background-color: #f3f3f3;
                        border-radius: 8px;
                        animation: ${isOpenSchedule !== null ? (isOpenSchedule ? "fade-in 1s" : "fade-out 1s") : ""};
                        animation-fill-mode: forwards;
                        ${foldingCss};
                    `}
                ></div>
                <Separator />
                <SectionContainer>
                    {my_util_list.map((item) => {
                        return <ListItem title={item} key={item} />;
                    })}
                </SectionContainer>
                <Separator />
                <SectionContainer>
                    {setting_list.map((item) => {
                        return <ListItem title={item} key={item} onClick={() => handleOnClickSettingItem(item)} />;
                    })}
                </SectionContainer>
                <Separator />
                <SectionContainer>
                    <p
                        css={css`
                            color: #747474;
                            font-size: 18px;
                            font-family: nexon;
                        `}
                    >
                        앱 정보
                    </p>
                    {app_info_list.map((item) => {
                        return <ListItem title={item} key={item} />;
                    })}
                </SectionContainer>
            </div>
        </div>
    );
}
