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
    MoreListButton,
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



const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [boardName, setBoardName] = useState('');
    const [majorName, setMajorName] = useState('');
    const { major_id, board_id } = useParams();
    const [fade, setFade] = useState('');
    const [boardListByRecommendation, setBoardListbyReco] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [boardListSearch, setBoardListSearch] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const BoardList_sortByRecommendation = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/board/post_list/${board_id}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                    sorting: localStorage.getItem('likes'),
                },
            })
            .then((response) => {
                setBoardListbyReco(response.data.posts);
            });
    };
// ---------------페이징
const [per_page, setPer_page] = useState(60);
const [last_id, setLast_id] = useState(0);



    const BoardList_FromServer = () => {
        axios
        .get(
            `${process.env.REACT_APP_SERVER_URL}/board/cursor?board_id=${board_id}&last_id=${last_id}&per_page=${per_page}`,
             {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            })
            .then((response) => {
                console.log('posts', response.data);
                setBoardList((prevList) => [...prevList, ...response.data.posts]);
                setBoardName(response.data.board_name);
                setMajorName(response.data.major_name);
                setLast_id(response.data.posts[response.data.posts.length - 1].post_id);
                
              })
            .catch((response) => {
                alert('접근 불가능한 페이지입니다.');
                window.history.back();
            });
    };


    useEffect(() => {
        if (searchKeyword.length == 0) {
            BoardList_FromServer();
        }


    }, [board_id, per_page, searchKeyword]);

    useEffect(() => {
        if (board_id) {
            setTimeout(() => {
                setFade('End');
            }, 100);
            return () => {
                setFade('');
            };
        }
    }, [board_id, isActive]);


    useEffect(() => {
        if (searchKeyword) {
            axios
                .get(`${process.env.REACT_APP_SERVER_URL}/board/search?keyword=${searchKeyword}`, {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    console.log((response.data) == 0);
                    setBoardListSearch(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }, [searchKeyword, ]);

    const handleSearchInputChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const MoreButton =  () => {
        console.log(console.log(last_id));
        if (last_id <= per_page) {
            return(<>이 게시판의 마지막에 도달했습니다.</>)
        }
        else {
            return(
        
                <MoreListButton onClick={() => setPer_page(per_page+1)}>
                더보기
                </MoreListButton>
            )
        }

}

    return (
        <BoardLayout className={`Start ${fade}`}>
            <Boardline>
                <TitleAndToggle>
                    <BoardTitle>{boardName}</BoardTitle>
                    <BoardToggle majorName={majorName} majorOptions={JSON.parse(localStorage.getItem('major_options'))} />
                </TitleAndToggle>
                <ChangeBoardBox majorId={major_id} />

                <SearchBarWrapper>
                    <SearchInput type="search" placeholder="검색하기" value={searchKeyword} onChange={handleSearchInputChange} />
                </SearchBarWrapper>

                <BoardUtilsButtons boardId={board_id} isActive={isActive} setIsActive={setIsActive} BoardList_sortByRecommendation={BoardList_sortByRecommendation} />
                <Line />
                <BoardList boardList={isActive ? 
                //TODO: 검색 키워드를 지워도 값이 남음(렌더링 문제인듯?..)
                    (boardListSearch.length > 0 ? boardListSearch : boardListByRecommendation) 
                    : (boardListSearch.length > 0 ? boardListSearch : boardList)
                    } />
                <MoreButton/>
                
            </Boardline>
        </BoardLayout>
    );
};




export default Board;