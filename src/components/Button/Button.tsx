import React, { HTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './Button.module.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width: number;
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
      className={`${styles[variant]} ${styles[colors]}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    >
      {children || 'Click'}
    </button>
  );
};

export default Button;
