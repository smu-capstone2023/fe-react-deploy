/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Avatar from "component/Avatar";

interface ProfileProp {
    nickname?: string;
    mbti?: string;
    major?: string;
}
export default function Profile({ nickname, mbti, major }: ProfileProp) {
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
                    <Avatar size={100} />
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
                            `}
                        >
                            {major ? major : "학과인증을 해주세요"}
                        </p>
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
