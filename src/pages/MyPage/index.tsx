/** @jsxImportSource @emotion/react */
import styled, { css } from "@emotion/react";
import Profile from "pages/Home/Profile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";
import Separator from "./Separator";
import { app_info_list, my_util_list, setting_list } from "./data";
import ListItem from "./ListItem";
import PasswordChangeModal from "./PasswordChangeModal";
export default function MyPage() {
    const userInfoData = useSelector((state: any) => state.user);
    const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(true);

    return (
        <>
            {changePasswordModalOpen && <PasswordChangeModal setModalOpen={setChangePasswordModalOpen}></PasswordChangeModal>}
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
                    nickname={userInfoData.username}
                    major={
                        userInfoData.majors && userInfoData.majors.length >= 2 ? userInfoData.majors[1].major_name : "학과인증을 해주세요"
                    }
                    mbti={userInfoData.mbti}
                />
                <div
                    css={css`
                        padding: 20px;
                        display: flex;
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
                    <AiOutlineRight size={24} color="#C0C0C0" />
                </div>
                <Separator />
                <div
                    css={css`
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                    `}
                >
                    {my_util_list.map((item) => {
                        return <ListItem title={item} key={item} />;
                    })}
                </div>
                <Separator />
                <div
                    css={css`
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                    `}
                >
                    {setting_list.map((item) => {
                        return <ListItem title={item} key={item} />;
                    })}
                </div>
                <Separator />
                <div
                    css={css`
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                    `}
                >
                    {" "}
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
                </div>
            </div>
        </>
    );
}
