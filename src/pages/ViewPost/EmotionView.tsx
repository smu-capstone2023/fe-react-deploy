/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getSmungEmoticonUrl } from "api/Post/getSmungEmoticonUrl";
import { css } from "@emotion/react";

interface Prop {
    onChange: (url: string | null) => void;
}
const EmoticonView = ({ onChange }: Prop) => {
    const [smungImgUrl, setSmungImgUrl] = useState<string[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        getSmungEmoticonUrl().then((response) => {
            setSmungImgUrl(response);
        });
    }, []);

    const handleEmoticonClick = (id: number) => {
        if (selectedId === id) {
            setSelectedId(null);
            onChange(null);
        } else {
            setSelectedId(id);
            onChange(smungImgUrl[id]);
        }
    };

    return (
        <EmoticonContainer>
            <EmoticonLayout>
                {smungImgUrl.map((url, index) => {
                    return (
                        <EmoticonImgView
                            key={index}
                            onClick={() => {
                                handleEmoticonClick(index);
                            }}
                            css={css`
                                ${selectedId === index ? "background-color: #e8e8e8" : "white"}
                            `}
                        >
                            <EmoticonImg src={url}></EmoticonImg>
                        </EmoticonImgView>
                    );
                })}
            </EmoticonLayout>
        </EmoticonContainer>
    );
};

const EmoticonContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    max-height: 10rem;
    background-color: white;
`;

const EmoticonLayout = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    flex-wrap: wrap;
    overflow: scroll;
`;

const EmoticonImgView = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
`;

const EmoticonImg = styled.img`
    display: flex;
`;

export default EmoticonView;
