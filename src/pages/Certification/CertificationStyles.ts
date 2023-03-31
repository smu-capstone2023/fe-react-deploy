import styled from 'styled-components';
import { COLORS } from '../../color';

export const CertificationLayout = styled.div`
    display: flex;
    justify-content: center;
`;

export const CertificationContainer = styled.div`
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

export const CertificationImageContainer = styled.div`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: solid 0.5px gray;
    max-width: 25em;
    text-align: center;
    height: 15em;
`;

export const CertificationImageFrame = styled.img`
    object-fit: fill;
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;
export const CertificationTitle = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
`;

export const UploadButton = styled.form`
    background: ${COLORS.logo};
    border-radius: 5px;
`;

export const UploadButtonLabel = styled.label`
    font-size: 1rem;
    background: ${COLORS.logo};
    color: white;
`;

export const UploadInput = styled.input`
    display: none;
`;

export const CertificationTextInput = styled.input`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: solid 0.5px gray;
    max-width: 25em;
    padding: 1em;
    height: 5em;
`;

export const SubmitButton = styled.div`
    margin: 1em 0;
    background: ${COLORS.logo};
    border-radius: 5px;
    padding: 0.5em;
`;
export const SubmitButtonLabel = styled.label`
    font-size: 1rem;
    background: ${COLORS.logo};
    color: white;
`;
