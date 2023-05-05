import React from 'react';
import SectionListHeader from '../../component/molecule/SectionListHeader';
import LostPreviewElement from '../../component/molecule/LostPreviewElement';

/**
 * @param previewList : { content , onClick }[]  뿌려줄 데이터 리스트
 * @returns
 */

export const LostPreview =({previewList}) => {
    const {content, onClick} = previewList;
    const title = '분실물 게시판';

    return (
        <>
            <div>
                <div style={{
                    display: 'flex',
                    padding: '0.1rem',
                    minWidth: '15rem',
                }}>
                    <SectionListHeader onClick={()=>{}} title={title}></SectionListHeader>
                </div>

                <div style={{
                    display: 'flex', 
                    padding: '0.7rem',
                }}>
                { previewList.map((data, i)=>{
                    return (
                        <>
                            <div style={{padding: '0.2rem'}}></div>
                            <LostPreviewElement onClick={data.onClick} content={data.content}></LostPreviewElement>
                        </>
                    )
                })}
                </div>
            </div>
        </>
    )
};

export default LostPreview;