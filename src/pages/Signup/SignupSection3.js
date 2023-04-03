import React, { useState } from 'react';
import axios from 'axios';

import { ProfileImageFrame, ProfileImageContainer, Line, CertificationLink, SignContainer, SignInputText, SignInnerBox, SignButton, DefaultText, SmallText } from './SignupStyles.js';

const SignupSection3 = ({ userSignupInfo }) => {
    const [nickname, setNickname] = useState('');
    const [profileImgUrl, setProfileImgUrl] = useState(null);

    //프로필사진 설정
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!profileImgUrl) {
            alert('프로필 사진을 선택해주세요');
            return;
        }
    };
    
    //닉네임 설정
    const checkAllOfSignUpInfo = () => {
        if (nickname === '') {
            alert('닉네임을 입력해주세요');
            return false;
        } else {
            userSignupInfo.nickname = nickname;
            return true;
        }
    };

    const handleFileChange = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}:8001/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log(response.data); // 업로드된 이미지의 URL 출력
                setProfileImgUrl(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    

    const saveUserInfoAtServer = () => {
        const data = {
            school_id: userSignupInfo.school_id,
            nickname: userSignupInfo.nickname,
            password: userSignupInfo.password,
            profile_image_url: profileImgUrl,
        };
        console.log(data);
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}:8001/auth/join`, data)
            .then((response) => {
                console.log(response);
                window.location.href = '/login';
            })
            .catch((response) => console.log(response));
    };
    

    return (
        <SignContainer>
            <SignInnerBox>
            <DefaultText>사용하실 닉네임을 입력하세요</DefaultText>
                <SmallText>닉네임은 설정 후 30일 이후에 변경 가능합니다.</SmallText>
                <SignInputText onChange={(e) => setNickname(e.target.value)} placeholder='닉네임 입력'></SignInputText>
                <Line></Line>
            <DefaultText>프로필 사진을 첨부해주세요.</DefaultText>
            <ProfileImageContainer>
            {profileImgUrl && <ProfileImageFrame src={profileImgUrl} />}
            </ProfileImageContainer>
                    {/* {profileImgUrl ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%' }}>
                            <img src={profileImgUrl} alt='프로필 이미지' style={{ maxWidth: '80%', maxHeight: '80%' }} />
                        </div>
                    ) : (
                        <ProfileImage style={{ margin: '30px' }} />
                    )} */}
                    <form onSubmit={handleSubmit}>
                        <label className='signup-profileImg-label' htmlFor='profileImg'>
                            사진 첨부하기
                        </label>
                        {/* profileImgUrl이 존재하면 img 태그를 사용해 업로드한 이미지를 출력, 존재하지 않을 경우 기본 이미지. */}
                        <input className='signup-profileImg-input' type='file' accept='image/*' id='profileImg' style={{ display: 'none' }} onChange={handleFileChange} />
                    </form>
                </SignInnerBox>
                <SignButton
                    onClick={() => {
                        if (checkAllOfSignUpInfo()) saveUserInfoAtServer();
                    }}
                >
                    회원가입 완료
                </SignButton>
                <SmallText>학과인증을 통해 더 다양한 권한을 가질 수 있습니다.</SmallText>
                <CertificationLink to='../certification'>학과인증하기</CertificationLink>
                </SignContainer>
        
        );
    };
    
export default SignupSection3;