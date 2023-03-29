import styled from 'styled-components';
import { COLORS } from '../../color';

export const EditPostBackgroundContainer = styled.div`
    background-color: ${COLORS.background_color};
`;

export const EditPostBoardContentLayout = styled.div`
    border-radius: 5px;
    // border: solid 0.5px gray;
    color: gray;
`;

export const EditPostMajorContent = styled.p`
    color: #433b45;
    font-weight: 600;
    font-size: 1.8em;
    padding: 0.2em;
`;

export const EditPostBoardContent = styled.p`
    color: #433b45;
    font-weight: 100;
    font-size: 1.15em;
    margin-left: 0.5em;
    margin-bottom: 1.8em;
`;