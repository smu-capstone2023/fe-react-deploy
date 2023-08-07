import React from 'react';
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { ButtonProps } from "./index.d";

const StyledButton = styled.button<ButtonProps>`
  padding: ${props => props.size === 'small' ? '0.5rem 1rem' : props.size === 'large' ? '1.5rem 3rem' : '0.75rem 2.5rem'};
  border-radius: ${props => props.borderRadius}px;
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.variant === 'filled' ? props.color : 'transparent'};
  border: ${props => props.variant === 'outlined' ? `2px solid ${props.outlineColor}` : '#d9d9d9'};
`;

export default function Button(props: ButtonProps) {
  const {
    label,
    backgroundColor,
    size = 'medium',
    color,
    clickHandler,
    variant = 'filled',
    borderRadius = 5,
    outlineColor = 'primary',
  } = props;

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      borderRadius={borderRadius}
      onClick={clickHandler}
      variant={variant}
      outlineColor={outlineColor}
      label={label} clickHandler={undefined}    >
      {label}
    </StyledButton>
  );
}
