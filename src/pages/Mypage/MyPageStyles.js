import styled from 'styled-components';
import { COLORS } from '../../color';
export const MyPageLayout = styled.div`
    display: flex;
    justify-content: center;
`;

export const MyPageContainer = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 5px;
    border: solid 0.5px gray;
    max-width: 25em;
    text-align: center;
    padding: 2em;
`;

export const ProfileImageLayout = styled.div`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    border: solid 0.1px rgba(128, 128, 128, 0.4);
    border-radius: 10px;
    max-width: 25em;
    text-align: center;
    height: 15em;
`;

export const ProfileImageFrame = styled.img`
    object-fit: fill;
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export const UserNameField = styled.h2``;

export const UserEmailField = styled.p`
    font-size: 1.2rem;
    color: gray;
`;

export const TogoBoardListWidget = styled.div`
    font-size: 1rem;
    border-bottom: solid 0.5px gray;
    padding: 1em;
    text-align: left;
`;

export const LogoutButtonLayout = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    border-radius: 5px;
    background: ${COLORS.logo};
    color: white;
    padding: 1em 0;
    margin: 0 0.2em 0 0;
`;

export const UserSettingLayout = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 1em 0;
`;

export const SettingButtonLayout = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    border-radius: 5px;
    background: ${COLORS.gray_button};
    color: white;
    padding: 1em 0;
    margin: 0 0 0 0.2em;
`;

//설정 페이지
export const SettingsLink = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    border-radius: 5px;
    background: ${COLORS.gray_button};
    color: white;
    padding: 1em 0;
    margin: 0 0 0 0.2em;
`;

export const CertificateButton = styled.div`
    background: ${COLORS.logo};
    padding: 0.5em 0;
    border-radius: 5px;
    color: white;
`;

//설정변경 페이지
export const ChangeInfoButton = styled.div`
    background: ${COLORS.logo};
    padding: 0.5em 0;
    border-radius: 5px;
    color: white;

    margin-top: 10px;
`;
