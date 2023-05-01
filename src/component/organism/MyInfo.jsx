/**
 * @param userInfo : { nickname: string, major: string, schoolId: string, mbti:string }
 * @returns
 */

export const MyInfo = ({userInfo}) => {
    const {nickname, major, mbti} = userInfo;
    let schoolId = '';
    if (userInfo.schoolId) {
        schoolId = userInfo.schoolId.toString().substr(2, 2);
    } 

    const NameFontStyles = {
        color: '#4168E1',
        fontFamily: 'nexon-bold',
        fontSize: '18px',
        padding: '0.5rem',
    };

    const ContentFontStyles = {
        color: '#666666',
        fontFamily: 'nexon-regular',
        padding: '0.3rem',
    };

    return (
        <>
            <div style={{
                display: 'flex',
                width: '20%',
                minWidth: '20rem',
                flexDirection: 'column',
                background: '#E8EDFF',
                border: 'solid 1px #4169E1',
                borderRadius: '10px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottom: 'solid 1px #4169E1',
                    padding: '1rem',
                }}>
                    {
                        schoolId ? 
                        <>
                            <h5 style={NameFontStyles}>{nickname}</h5>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <p style={ContentFontStyles}>{major}</p>
                                <p style={ContentFontStyles}>{schoolId}</p>
                                <p style={ContentFontStyles}>{mbti}</p>
                            </div>
                        </> : 
                        <>
                            <div style={{padding: '1rem'}}>
                                <h5 style={NameFontStyles}>로그인을 해주세요!</h5>
                            </div>
                        </>
                    }

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '0.7rem',
                }}>

                    {
                        schoolId ? 
                        <>
                            <p style={ContentFontStyles} onClick={()=>{alert("내 학과")}}>내 학과</p>
                            <p style={ContentFontStyles} onClick={()=>{alert("내가 쓴 글")}}>내가 쓴 글</p>
                            <p style={ContentFontStyles} onClick={()=>{alert("마이페이지")}}>마이페이지</p>
                        </> : 
                        <>
                            <div style={{padding: '1rem'}}></div>
                        </>
                    }
                
                </div>
            </div>
        </>
    )
};

export default MyInfo;