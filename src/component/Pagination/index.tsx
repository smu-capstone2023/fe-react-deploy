/** @jsxImportSource @emotion/react */
import { PaginationProps } from "./index.d";
import { css } from "@emotion/react";
import PaginationItem from "./PaginationItem";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

export default function Pagination(props: PaginationProps) {
    const {
        color = "primary",
        count = 10,
        hideArrowButton = false,
        onChange,
        shape = "circular",
        size = "medium",
        sx,
        siblingCount = 5,
    } = props;

    const [page, setPage] = useState<number>(1);

    //TODO: 더 이쁘게 짤 수 있을 것 같은데 로직 더 생각해봐야 할 것 같습니다.
    const pageList = [...Array.from({ length: count }, (_, i) => 1 + i)];
    const PaginationList = () => {
        let answer: number[] = [];
        let rightLength = siblingCount;
        let addLeftArray: number[] = [];

        pageList.forEach((item, i) => {
            if (item > page - siblingCount && item <= page) answer.push(item);
        });

        if (answer.length < siblingCount) {
            rightLength += siblingCount - answer.length;
        }

        pageList.forEach((item, i) => {
            if (item < page + rightLength && item > page) answer.push(item);
        });

        if (answer.length < siblingCount * 2 - 1) {
            let addLeftLength = siblingCount * 2 - 1 - answer.length;
            addLeftArray = [...pageList].slice(page - siblingCount - addLeftLength, page - siblingCount);
            answer = [...addLeftArray, ...answer];
        }
        return answer;
    };

    return (
        <nav style={sx}>
            <ul
                css={css`
                    gap: 5px;
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                `}
            >
                <BiChevronLeft
                    size={size === "small" ? 20 : 30}
                    css={css`
                        margin: auto 0;
                        ${hideArrowButton ? "display:none" : ""}
                        &:hover {
                            opacity: 0.5;
                        }
                    `}
                    onClick={() => {
                        if (page !== 1) {
                            onChange(page - 1);
                            setPage(page - 1);
                        }
                    }}
                />

                {PaginationList().map((key, i) => {
                    return (
                        <PaginationItem
                            size={size}
                            shape={shape}
                            color={color}
                            key={`item_${i}`}
                            selected={page === key}
                            page={key}
                            onClick={() => {
                                onChange(key);
                                setPage(key);
                            }}
                        />
                    );
                })}
                <BiChevronRight
                    size={size === "small" ? 20 : 30}
                    css={css`
                        margin: auto 0;
                        ${hideArrowButton ? "display:none" : ""}
                        &:hover {
                            opacity: 0.5;
                        }
                    `}
                    onClick={() => {
                        if (page !== count) {
                            onChange(page + 1);
                            setPage(page + 1);
                        }
                    }}
                />
            </ul>
        </nav>
    );
}
