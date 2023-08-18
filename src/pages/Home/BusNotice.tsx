/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { BusNoticeType } from "../../pages/Home/index";
 
const SectionContainer = styled.div`
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;
`;

interface BusNoticeProps {
    BusNoticeLists: BusNoticeType[] | boolean;
}

export default function BusNotice({BusNoticeLists} :BusNoticeProps) {
    const [toDayBusContent, setTodayBusContent] = useState<string | null>(null);

    const findTodayBusList = () => {
        if (Array.isArray(BusNoticeLists) && BusNoticeLists.length > 0) {
            setTodayBusContent(BusNoticeLists[0].title);
        } else {
            setTodayBusContent(null);
        }
    }

    useEffect(()=>{
        findTodayBusList();
    }, [BusNoticeLists]);

    return (
        <>
            <SectionContainer>
                <p
                    css={css`
                        font-family: nexon-regular;
                        font-size: 16px;
                        font-weight: 700;
                    `}
                >
                    ⚠️ 오늘의 우회정보
                </p>
            </SectionContainer>
            {!toDayBusContent &&
                <div
                    css={css`
                        dislpay: flex;
                        padding: 10px 20px 20px 20px;
                    `}
                >
                    <p
                        css={css`
                            font-family: nexon-regular;
                            font-size: 16px;
                            color: #000000;
                        `}
                    >
                        오늘 예정된 우회 정보가 없습니다! 🥳
                    </p>
                </div>
            }
            {toDayBusContent &&
                <div
                    css={css`
                        display: flex;
                        padding: 0 20px 20px 20px;
                        flex-direction: column;
                    `}
                >
                    <p
                        css={css`
                            display: flex;
                            padding : 10px 0;
                            font-family: nexon-light;
                            font-size: 16px;
                        `}
                    >{toDayBusContent}</p>
                    <button
                        css={css`
                            display: flex;
                            padding: 0 10px;
                            height: 20px;
                            border-radius: 5px;
                            color: #4169E1;
                            margin-left: auto;
                        `}
                        onClick={() => window.open('https://topis.seoul.go.kr/notice/openNoticeList.do', '_blank')}
                    >더 자세히 보러가기 &gt;&gt;</button>
                </div>
            }
        </>
    );
}