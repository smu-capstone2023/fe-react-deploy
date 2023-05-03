// import {Navbar} from '../../component/Navbar/index';
import {MyInfo} from '../../component/organism/MyInfo';
import {HomeIconButtonList} from '../../component/organism/HomeIconButtonList';
import {LostPreview} from '../../component/organism/LostPreview';
import {BoardSectionList} from '../../component/organism/BoardSectionList';
import {Footer} from '../../component/organism/Footer';

/**
 * @param userInfo: {nickname, major, shoolId, mbti}
 * @param hotPreviewList : {title, id, commenCount, likeCount}[]
 * @param majorInfo: {majorName, majorId}
 * @param majorPreviewList: {title, id, commentCount, likeCount}[]
 * @returns
 */

export const HomeView = ({userInfo, hotPreviewList, majorInfo, majorPreviewList})=>{
    const {majorName, majorId} = majorInfo;

    return (
        <>
            {/* <Navbar toggle={true}></Navbar> */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '4rem',
            }}>
                <div style={{display: 'flex', width: '100%', marginBottom: '2rem'}}>
                    <MyInfo userInfo={userInfo}></MyInfo>
                    <div style={{
                        display: 'flex', 
                        background: '#E8E8E8', 
                        width: '80%',
                        height: '10rem',
                        marginLeft: '0.5rem',
                        padding: '1rem',
                    }}></div>
                </div>
                
                <div style={{display: 'flex', width: '100%', marginBottom: '2rem', flexWrap: 'wrap'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '20%'}}>
                        <HomeIconButtonList iconProps={2} fontProps={16}></HomeIconButtonList>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '80%'}}>
                        <LostPreview previewList={[{content: '분실ㅇ물 있어요dhchdhdhdhdhdhdhdh', onClick:()=>{}}, {content: '분실ㅇ물 있어요', onClick:()=>{}}]}></LostPreview>
                    </div>
                </div>

                <div style={{display: 'flex', width: '100%', marginBottom: '2rem', flexWrap: 'wrap'}}>
                    <div style={{
                        display: 'flex',
                        background: '#EBF0FF',
                        width: '20rem',
                        height: '30rem',
                        padding: '1rem',
                    }}>
                        <div>스뭉이</div>
                        <div>SMUS OPEN!</div>
                    </div>

                    <div style={{widtn: '100%', padding: '0.5rem'}}>
                        <BoardSectionList title={"HOT 게시판"} headerOnClick={true} previewList={hotPreviewList}></BoardSectionList>
                    </div>
                    <div style={{padding: '0.5rem'}}>
                        <BoardSectionList title={majorName} headerOnClick={true} previewList={majorPreviewList}></BoardSectionList>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </>

    )
};

export default HomeView;