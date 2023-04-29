import {IconButtonLayout} from './IconButton'


export const IconButton = ({icon, title, onClick, fontStyles, iconSize}) => {
    
    return(
        <IconButtonLayout onClick={onClick}>
            <div size={iconSize}>{icon}</div> 
            <p styles={fontStyles}>{title}</p> 
        </IconButtonLayout>
    )

} 