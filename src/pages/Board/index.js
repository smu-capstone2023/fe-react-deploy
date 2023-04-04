import {
    Boardline,
    BoardUtilsButtonsLayout,
    BoardUtilsButton,
    BoardTitle,
    BoardListLayout,
    BoardLayout,
    ToggleBox,
    TitleAndToggle,
    Line,
    SearchBarWrapper,
    SearchInput,
} from './BoardStyles';
import NoticeLong from '../../component/PostListElement/NoticeLong';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { COLORS } from '../../color';
import ChangeBoardBox from './ChangeBoardBox';
import '../../App.css';

const BoardList = ({ boardList }) => {
    return (
        <>
            <BoardListLayout>
                {/* <BoardTableSchema>
                    <TableTitleSchema>제목</TableTitleSchema>
                    <TableSchemaElement>작성자</TableSchemaElement>
                    <TableSchemaElement>작성일</TableSchemaElement>
                    <TableSchemaElement>조회수</TableSchemaElement>
                </BoardTableSchema> */}

                {boardList.map((boardElement) => (
                    <NoticeLong
                        key={boardElement.post_id}
                        writerName={boardElement.username}
                        title={boardElement.title}
                        numberOfComment={boardElement.comments}
                        createDate={boardElement.created_time.split('T')[0]}
                        postId={boardElement.post_id}
                        numberOfViews={boardElement.views}
                    />
                ))}
            </BoardListLayout>
        </>
    );
};

const BoardUtilsButtons = ({ boardId, isActive, setIsActive, BoardList_sortByRecommendation }) => {
    return (
        <BoardUtilsButtonsLayout>
            <BoardUtilsButton
                style={{ borderColor: `${COLORS.gray_button}` }}
                onClick={() => (window.location.href = `/addpost/${boardId}`)}
            >
                글쓰기
            </BoardUtilsButton>

            {/*보류- 필요성 문제 의문
                 <BoardUtilsButton>최신순</BoardUtilsButton> */}

            <BoardUtilsButton
                onClick={() => {
                    BoardList_sortByRecommendation();
                    setIsActive(!isActive);
                }}
                style={{
                    // fontWeight: isActive ? 'bold' : 'normal' ,
                    background: isActive ? `${COLORS.color_button}` : '',
                }}
                //TODO_hyun: 활성화된 배경색 구림, 변경 필요함
            >
                인기순
            </BoardUtilsButton>
        </BoardUtilsButtonsLayout>
    );
};

const BoardToggle = ({ majorName, majorOptions }) => {
    const major_Name = majorName;
    const animatedComponents = makeAnimated();
    return (
        <ToggleBox>
            <Select
                styles={{
                    // Select 기본 적용되는 테두리랑 온클릭 함수 없애는 기능
                    control: (base, state) => ({
                        ...base,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        boxShadow: state.isFocused ? null : null, // optional: remove box shadow on focus
                        '&:hover': {
                            borderColor: 'transparent',
                        },
                    }),
                    placeholder: (base) => ({
                        ...base,
                        color: 'black',
                        fontWeight: '500',
                        textAlign: 'center',
                    }),
                }}
                key={major_Name}
                placeholder={major_Name}
                options={majorOptions}
                components={animatedComponents}
                onChange={(selectedOptions) => {
                    window.location.href = `../${selectedOptions.value}/${selectedOptions.freeBoard}`;
                }}
            />
        </ToggleBox>
    );
};

const Search = () => {
    const handleSearch = (event) => {
        console.log(event.target.value);
    };

    return (
        <SearchBarWrapper>
            <SearchInput type='search' placeholder=' 검색하기' onChange={handleSearch} />
        </SearchBarWrapper>
    );
};

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [boardName, setBoardName] = useState('');
    const [majorName, setMajorName] = useState('');
    const { major_id, board_id } = useParams();
    const [fade, setFade] = useState('');

    const [boardListByRecommendation, setBoardListbyReco] = useState([]);
    const [isActive, setIsActive] = useState(false);
    // -----------------------------------------------------------
    // 인기순 보드리스트

    const BoardList_sortByRecommendation = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${board_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                    sorting: localStorage.getItem('likes'),
                },
            })
            .then((response) => {
                setBoardListbyReco(response.data.posts);
            });
    };

    // -----------------------------------------------------------
    // 기본 보드리스트
    // const setBoardListFromServer = () => {
    //     axios
    //         .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/post_list/${board_id}`, {
    //             headers: {
    //                 Authorization: localStorage.getItem('access_token'),
    //             },
    //         })
    //         .then((response) => {
    //             setBoardList(response.data.posts);
    //             setBoardName(response.data.board_name);
    //             setMajorName(response.data.major_name);
    //         })
    //         .catch((response) => {
    //             alert('접근 불가능한 페이지입니다.');
    //             window.history.back();
    //         });
    // };


    // 페이징==============================
    const per_page = (10);
    const [last_id, setLast_id] = useState(0);
    const [total_page, setTotal_page] = useState();



    const setBoardListFromServer = () => {


        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/cursor?board_id=${board_id}&last_id=${last_id}&per_page=${per_page}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                // console.log(response.data);
                setBoardList(response.data.posts);
                setBoardName(response.data.board_name);
                setMajorName(response.data.major_name);
                setTotal_page(response.data.total_page);



            })
            .catch((response) => {
                alert('접근 불가능한 페이지입니다.');
                window.history.back();
            });
    };



    useEffect(() => {
        if (board_id) {
            setBoardListFromServer();
            setTimeout(() => {
                setFade('HomeEnd');
            }, 100);
            return () => {
                setFade('');
            };
        }
    }, [board_id, boardList.length, isActive]);

    return (
        <BoardLayout className={`HomeStart ${fade}`}>
            <Boardline>
                <TitleAndToggle>
                    <BoardTitle>{boardName}</BoardTitle>
                    <BoardToggle majorName={majorName} majorOptions={JSON.parse(localStorage.getItem('major_options'))} />
                </TitleAndToggle>
                <ChangeBoardBox majorId={major_id} />
                {/* <Line /> */}
                <Search />
                <BoardUtilsButtons
                    boardId={board_id}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    BoardList_sortByRecommendation={BoardList_sortByRecommendation}
                />
                <Line />
                <BoardList boardList={isActive ? boardListByRecommendation : boardList} />
            </Boardline>
        </BoardLayout>
    );
};

export default Board;
