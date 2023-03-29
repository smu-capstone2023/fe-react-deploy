import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    SchoolBoardButtonIcon,
    SchoolBoardTitle,
    SmallBoardLayout,
    SchoolBoardButtonLayout,
    DetailBoardTitleWithMoreLayout,
    DetailBoardTitle,
    ToggleBox,
} from './MajorSmallBoard';
import { TiArrowForward } from 'react-icons/ti';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsFillChatFill } from 'react-icons/bs';
import Common from '../../PostListElement/Common';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const ArrowDown = (e) => {
    return (
        <MdKeyboardArrowDown
            class='asd'
            color='white'
            size={'1.3em'}
            style={{  margin: '.2em' }}
            onClick={(e) => {
                e.stopPropagation();
                alert('ㅇ');
            }}
        />
    );
};

const BoardBannerButton = ({ title, boardId, backgroundColor }) => {
    return (
        <>
            <SchoolBoardButtonLayout
                backgroundColor={backgroundColor}
                onClick={() => {
                    window.location.href = `/board/${boardId}`;
                }}
            >
                <SchoolBoardButtonIcon>
                    <TiArrowForward size={'1.5em'} />
                </SchoolBoardButtonIcon>
                <SchoolBoardTitle>{title}</SchoolBoardTitle>
                <ArrowDown />
            </SchoolBoardButtonLayout>
        </>
    );
};

const DetailBoardTitleWithMore = ({ boardIcon, boardTitle }) => {
    return (
        <DetailBoardTitleWithMoreLayout>
            <DetailBoardTitle>
                {boardTitle}
                {boardIcon}
            </DetailBoardTitle>
        </DetailBoardTitleWithMoreLayout>
    );
};

const BoardToggle = ({ title, majorOptions }) => {
    const animatedComponents = makeAnimated();
    console.log('BoardToggle', majorOptions);
    return (
        <ToggleBox>
            <Select
                styles={{
                    control: (base, state) => ({
                        ...base,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        boxShadow: state.isFocused ? null : null,
                        '&:hover': {
                            borderColor: 'transparent',
                        },
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: 'white',
                        fontWeight: '500',
                        textAlign: 'center',
                    }),
                }}
                //key={majorOptions.value}
                options={majorOptions}
                placeholder={title}
                components={animatedComponents}
                onChange={(major) => {
                    window.location.href = `/board/${major.value}`;
                }}
            />
        </ToggleBox>
    );
};

const MajorBoardSmall = ({ title, boardId, majorOptions }) => {
    const [preview, setPreview] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/preview?board_id=${boardId}&limit_post_num=5`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                setPreview(response.data);
            })
            .catch((response) => console.log(response));
    }, [preview.length]);

    return (
        <>
            <SmallBoardLayout>
                <BoardToggle title={title} majorOptions={majorOptions}></BoardToggle>
                <DetailBoardTitleWithMore boardIcon={<BsFillChatFill size={'1em'} />} boardTitle='최근 게시글 ' />
                {preview.map((postElement) => {
                    return (
                        <Common
                            key={postElement.post_id}
                            title={postElement.title}
                            numberOfComment={postElement.comments}
                            createDate={postElement.created_time}
                            postId={postElement.post_id}
                        />
                    );
                })}
            </SmallBoardLayout>
        </>
    );
};

export default MajorBoardSmall;
