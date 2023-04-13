import React from 'react';
import { COLORS } from '../../color';

const COLOR_KIND = {
    BLACK: 'black',
    GRAY: 'gray',
    BLUE: 'blue',
};
Object.freeze(COLOR_KIND);

const SIZE_KIND = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};
Object.freeze(SIZE_KIND);
/**
 *
 * @param color 'black', 'gray', 'blue'
 * @param size 'large', 'medium', 'small'
 * @param bold 'bold'
 * @returns
 */
const Text = ({ children, color = 'black', size = 'medium', bold, onClick }) => {
    let styles = { fontSize: '1em', color: `${COLORS.logo}`, fontWeight: 'normal' };
    switch (color) {
        case COLOR_KIND.BLACK:
            styles.color = 'black';
            break;
        case COLOR_KIND.BLUE:
            styles.color = `${COLORS.logo}`;
            break;
        case COLOR_KIND.GRAY:
            styles.color = 'gray';
            break;
    }

    switch (size) {
        case SIZE_KIND.LARGE:
            styles.fontSize = '1.4em';
            break;
        case SIZE_KIND.MEDIUM:
            styles.fontSize = '1.1em';
            break;
        case SIZE_KIND.SMALL:
            styles.fontSize = '0.8em';
            break;
    }
    return (
        <p onClick={onClick} style={styles}>
            {children}
        </p>
    );
};

export default Text;
