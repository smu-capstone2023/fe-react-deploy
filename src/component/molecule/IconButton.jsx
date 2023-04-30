import styled from 'styled-components';


export const IconButton = ({icon, title, onClick, fontStyles, iconSize}) => {
    
    return(
        <IconButtonLayout onClick={onClick}>
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
