import * as React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: any;  //오류로 인해 void에서 any로 변경
    disabled?: boolean;
    type: 'submit'|'button'|'reset'; //지정 가능한 button의 type 3 가지
}