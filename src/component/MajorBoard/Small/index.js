import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SchoolBoardButtonIcon, SchoolBoardTitle, SmallBoardLayout, SchoolBoardButtonLayout
,DetailBoardTitleWithMoreLayout, DetailBoardTitle, ToggleBox } from './MajorSmallBoard';
import { TiArrowForward } from 'react-icons/ti';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsFillChatFill } from 'react-icons/bs';
import Common from '../../../component/PostListElement/Common';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const ArrowDown = (e) => {


    return(
        <MdKeyboardArrowDown class='asd' color='white' size={'1.3em'} style={{margin: ".2em"}}
        onClick={(e)=>{
            e.stopPropagation();
            alert('ㅇ')


        }}
        
        
        />
    )
}


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
                <ArrowDown/>
            </SchoolBoardButtonLayout>
        </>
    );
};

const DetailBoardTitleWithMore = ({ boardIcon, boardTitle}) => {
    return (
        <DetailBoardTitleWithMoreLayout>
            <DetailBoardTitle>
                {boardTitle}{boardIcon}
            </DetailBoardTitle>
        </DetailBoardTitleWithMoreLayout>
    );
};

const BoardToggle = ({ title }) => {
    const animatedComponents = makeAnimated();
   
//     const major_Name = majorName;
// const majorOptions = [
//   { label: '컴퓨터과학과', value: '컴퓨터과학과', link: '/board/001001' },
//   { label: '휴먼지능정보공학전공', value: '휴먼지능정보공학전공', link: '/board/002001' },
//   { label: '경제학과', value: '경제학과', link: '/board/003001' },
// ];
  
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
          
        //   key={major_Name}
        //   options={majorOptions}
          placeholder={title}
          components={animatedComponents}
          onChange={(selectedOptions) => {
            window.location.href = `${selectedOptions.link}`;
          }}
        />
      </ToggleBox>
    );
  };





const MajorBoardSmall = ({ title, boardId }) => {

    const [preview, setPreview] = useState([]);


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/preview?board_id=${boardId}&limit_post_num=5`,
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                }
            })
            .then((response) => {
                setPreview(response.data);
                console.log(response.data);
            })
            .catch((response) => console.log(response));
    }, [preview.length]);

    return (
        <>
            <SmallBoardLayout>
                {/* <BoardBannerButton title={title} backgroundColor={'#90A8FF'} boardId={boardId} /> */}

           <BoardToggle title={title}></BoardToggle>


                <>
                <DetailBoardTitleWithMore boardIcon={<BsFillChatFill size={'1em'}/>} boardTitle='최근 게시글 ' />
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
                </>
            </SmallBoardLayout>
        </>
    );
};

export default MajorBoardSmall;
