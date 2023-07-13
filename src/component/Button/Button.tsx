import { ButtonProps } from './Button.types';


  const Button = ({ children, onClick, disabled, type }: ButtonProps) => {

    const handleClick = () => { //button onClick 내용 작성
        if (onClick) {
          onClick();
        }
      };

      return (
        <button
          onClick={handleClick}
          disabled={disabled}
          type={type ? type : "button"} //button으로 type 지정
        >
          {children}
        </button>
      );
  }
  
  export default Button;
//
  