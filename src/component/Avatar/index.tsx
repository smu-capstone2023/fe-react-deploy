import { ReactElement } from 'react';
import { AvatarProps } from './index.d';
import DefaultProfile from '../Avatar/DefaultProfile.svg'
export default function Avatar(props: AvatarProps):ReactElement {
  
  const { 
    src = DefaultProfile,
    size = 'small'
     } = props;

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 5
      case 'medium':
        return 10;
    }
  };

  return (
        <img 
            src={src}
            style={{ 
                width: `${getSizeStyles()}%`,
                background: '#E9E9E9',
                borderRadius: '50%',
              }} />

  );
}
