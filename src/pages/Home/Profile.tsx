/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { useSelector } from "react-redux";
import { changeProfileImage } from "../../api/User/changeProfileImage";
import { useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

interface ProfileProp {
    nickname?: string;
    mbti?: string;
    major?: string;
    newProfileUrl? :string;
    profileEditSelected?: boolean;
    setProfileEditSelected?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Profile({ nickname, mbti, major, newProfileUrl, profileEditSelected, setProfileEditSelected }: ProfileProp) {
    const location = useLocation();
    const userInfoData = useSelector((state: any) => state.user);
    const [userProfileSrc, setUserProfileSrc] = useState<string>('');
    const toast = useToast();

    const userProfileImageUpload = (imageUrls :string) => {
        changeProfileImage(imageUrls).then((response :any)=>{
            if (response) {
                toast({ title: "프로필이 변경되었습니다", position: "top", isClosable: true, variant: "subtle" });
                window.location.reload();
            } else {
                toast({ title: "프로필 변경에 실패했습니다. 다시 시도해주세요.", position: "top", isClosable: true, variant: "subtle" });
                window.location.reload();
            }
        })
    }

    useEffect(()=>{
        if (newProfileUrl) {
            setUserProfileSrc(newProfileUrl);
        }
    }, [newProfileUrl]);

    useEffect(() => {
        if (userInfoData.profile_img_url) {
            setUserProfileSrc(userInfoData.profile_img_url);
        } else {
            setUserProfileSrc('');
        }
    }, [userInfoData]);

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 0;
                gap: 20px;
                border-bottom-width: 10px;
                border-bottom-style: solid;
                border-bottom-color: #f3f3f3;
            `}
        >
            {nickname ? (
                <>
                    {!userProfileSrc && <Avatar
                        size={100}
                        profileUrl={userProfileSrc}
                    />}
                    {userProfileSrc && <Avatar
                        src={userProfileSrc} 
                        size={100}
                    />}
                    <div
                        css={css`
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 5px;
                        `}
                    >
                        <p
                            css={css`
                                font-size: 18px;
                                font-family: nexon-regular;
                            `}
                        >
                            {nickname}
                        </p>
                        <p
                            css={css`
                                font-size: 15px;
                                font-family: nexon-regular;
                                text-align: center;
                                color: #8b8b8b;
                            `}
                        >
                            {mbti ? mbti : "MBTI를 설정하고 다양한 기능을 사용해보세요!"}
                        </p>
                        <p
                            css={css`
                                font-size: 16px;
                                font-family: nexon-regular;
                                &:hover {
                                    text-decoration-line : underline;
                                }
                            `}
                            onClick={()=>{
                                window.location.href="/major-certification";
                            }}
                        >
                            {major ? major : "학과인증을 해주세요"}
                        </p>
                        {(location.pathname === "/mypage") &&
                            <button
                                css={css`
                                    display: flex;
                                    height: 40px;
                                    padding: 10px 30px;
                                    justify-content: center;
                                    align-items: center;
                                    margin-top: 10px;
                                    border: solid 1px #4169E1;
                                    border-radius: 5px;
                                    color: #4169E1;
                                `}
                                onClick={()=>{
                                    if (setProfileEditSelected) {
                                        setProfileEditSelected(!profileEditSelected);
                                    }
                                    if (profileEditSelected && newProfileUrl) {
                                        userProfileImageUpload(newProfileUrl);
                                    } else if (profileEditSelected && !newProfileUrl) {
                                        userProfileImageUpload(userProfileSrc);
                                    }
                                }}
                            >{profileEditSelected ? '프로필 저장하기' : '프로필 수정하기'}
                            </button>
                        }
                    </div>
                </>
            ) : (
                <>
                    <Avatar size={100} />
                    <a style={{cursor:"pointer", borderBottom: "1px solid #E8E8E8" }} href="/login">로그인을 해주세요!</a>
                </>
            )}
        </div>
    );
}
