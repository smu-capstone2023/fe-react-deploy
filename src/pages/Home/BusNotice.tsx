/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { foldingCss } from "../../pages/MyPage/utils";

const SectionContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export default function BusNotice() {
    const [isOpenSchedule, setIsOpenSchedule] = useState<boolean | null>(null);

    return (
        <>
            <SectionContainer
                css={css`
                    flex-direction: row;
                    justify-content: space-between;
                `}
            >
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 16px;
                    `}
                >
                    오늘의 버스 우회 정보
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f3f3f3;
                    border-radius: 8px;
                    animation: ${isOpenSchedule !== null ? (isOpenSchedule ? "fade-in 1s" : "fade-out 1s") : ""};
                    animation-fill-mode: forwards;
                    ${foldingCss};
                `}
            >
                {isOpenSchedule && 
                    <p
                        css={css`
                            font-family: nexon-light;
                            font-size: 16px;
                            text-align: center;
                            color: #7A7A7A;
                        `}
                    >
                        오늘의 버스 우회 정보가
                        <br/>업로드 되지 않았습니다 :)
                    </p>
                }
            </div>
        </>
    );
}