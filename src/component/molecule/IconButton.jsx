import styled from 'styled-components';


export const IconButton = ({width, icon, title, onClick, fontStyles, iconSize}) => {
    
    return(
        <IconButtonLayout width={width} onClick={onClick}>
            <p style={{fontSize:`${iconSize}em`}}>{icon}</p> 
            <p style={fontStyles}>{title}</p> 
        </IconButtonLayout>
    )

} 

const IconButtonLayout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: .3rem;
    cursor: pointer;
`;

export default IconButton;