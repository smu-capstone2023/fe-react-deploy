/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Avatar from "component/Avatar";
import { useSelector } from "react-redux";
import { changeProfileImage } from "../../api/User/changeProfileImage";

interface ProfileProp {
    nickname?: string;
    mbti?: string;
    major?: string;
}
export default function Profile({ nickname, mbti, major}: ProfileProp) {
    const userInfoData = useSelector((state: any) => state.user);
    const [userProfileSrc, setUserProfileSrc] = useState<string>('');
    const [newUserProfileSrc, setNewProfileSrc] = useState<string>('');
    const [profileEditSelected, setProfileEditSelected] = useState<boolean>(false);

    const userProfileImageUpload = (imageUrls :string) => {
        changeProfileImage(imageUrls).then((response :any)=>{
            if (response) {
                alert("프로필이 변경되었습니다");
                window.location.reload();
            } else {
                alert("프로필 변경에 실패했습니다. 다시 시도해주세요.");
                window.location.reload();
            }
        })
    }

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
                        profileEdit={profileEditSelected} 
                        onNewProfileImageSelected={setNewProfileSrc}/>
                    }
                    {userProfileSrc && <Avatar 
                        src={userProfileSrc} 
                        size={100} 
                        profileEdit={profileEditSelected} 
                        onNewProfileImageSelected={setNewProfileSrc}/>
                    }
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
                                setProfileEditSelected(!profileEditSelected);
                                if (profileEditSelected && newUserProfileSrc) {
                                    userProfileImageUpload(newUserProfileSrc);
                                } else if (profileEditSelected && !newUserProfileSrc) {
                                    userProfileImageUpload(userProfileSrc);
                                }
                            }}
                        >{profileEditSelected ? '프로필 저장하기' : '프로필 수정하기'}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <Avatar size={100} />
                    <p>로그인을 해주세요!</p>
                </>
            )}
        </div>
    );
}
