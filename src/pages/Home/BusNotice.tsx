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
    const [toDayBusNumber, setTodayBusNumber] = useState<string[] | null>(null);

    const findTodayBusList = () => {
        if (Array.isArray(BusNoticeLists) && BusNoticeLists.length > 0) {
            setTodayBusContent(BusNoticeLists[0].title);
            setTodayBusNumber(BusNoticeLists[0].bus_list);
        } else {
            setTodayBusContent(null);
            setTodayBusNumber(null);
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
                    ⚠️ 버스 우회 정보
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
                        이번주 예정된 우회 정보가 없습니다! 🥳
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
                {(toDayBusNumber && toDayBusNumber.length > 0) &&
                    <div
                        css={css`
                            display: flex;
                            flex-direction: row;
                            padding : 10px 0 0 0;
                            align-items: center;
                            font-family: nexon-light;
                            font-size: 16px;
                        `}
                    >이번주에&nbsp;
                    {toDayBusNumber.map((item, index)=>
                        <p
                            css={css`
                                display: flex;
                                font-family: nexon-bold;
                                font-size: 16px;
                            `}
                        >{item}&nbsp;
                        </p>
                    )}
                버스 우회 일정이 있어요!
                </div>   
                }
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