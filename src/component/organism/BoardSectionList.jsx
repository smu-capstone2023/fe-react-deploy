import React from 'react';
import styled from 'styled-components';
import SectionListHeader from '../molecule/SectionListHeader';
import PreviewListItem from '../molecule/PreviewListItem';

/**
 * @param title : 헤더의 제목
 * @param headerOnClick : 헤더를 클릭했을 때 실행되는 함수 
 * @param previewList : { title, onClick, commentCount, likeCount}[]  뿌려줄 데이터 리스트
 * @returns
 */



export const BoardSectionList = ({ title, headerOnClick, previewList }) => {
  return (
      <BoardSectionListLayout>
          <SectionListHeader title={title} onClick={headerOnClick} font="nexon-regular" />
          {previewList && previewList.map((previewItem, index) => ( //이부분 입니다.
              <PreviewListItem
                  key={index}
                  title={previewItem.title}
                  onClick={previewItem.onClick}
                  commentCount={previewItem.commentCount}
                  likeCount={previewItem.likeCount}
              />
          ))}
      </BoardSectionListLayout>
  );
};

const BoardSectionListLayout = styled.div`
  border-bottom: 1px solid #ddd;
`;

export default BoardSectionList;
