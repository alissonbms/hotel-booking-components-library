import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import '../../styles/global.scss';
import styles from './Button.module.scss';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width?: number;
  height?: number;
};

const Button = ({
  variant,
  colors,
  width,
  height = 60,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{ width: width ? `${width}px` : '100%', height: `${height}px` }}
      className={`${props.className} ${styles[variant]} ${styles[colors]}`}
    >
      {children || 'Click'}
    </button>
  );
};

export default Button;
