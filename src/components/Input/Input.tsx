import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './Input.module.scss';

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText?: string;
  labelId?: string;
  width?: number;
  height?: number;
  icon?: string;
  iconPosition?: 'right' | 'left';
  iconSize?: number;
  handleClickIcon?: () => void;
};

const Input = ({
  labelText,
  labelId,
  width,
  height,
  icon,
  iconPosition = 'left',
  iconSize = 24,
  handleClickIcon,
  ...props
}: InputProps) => {
  const paddingIcon =
    iconPosition === 'left'
      ? `0px 18.216px 0px ${iconSize + 18}px`
      : `0px ${iconSize + 18}px 0px 18.042px`;

  return (
    <div
      className={`${props.className} ${styles['container-input']}`}
      style={{ width: width ? `${width}px` : '100%' }}
    >
      {labelText && <label htmlFor={labelId}>{labelText}</label>}
      <div style={{ height: height ? `${height}px` : '60px' }}>
        {icon && (
          <img
            src={icon}
            alt="icon"
            onClick={handleClickIcon}
            style={{
              [iconPosition]: '16px',
              width: `${iconSize}px`,
              height: 'auto',
            }}
          />
        )}
        <input
          {...props}
          id={labelId}
          style={{
            height: height ? `${height}px` : '60px',
            padding: icon ? paddingIcon : '0px 18.216px 0px 18.042px',
          }}
        />
      </div>
    </div>
  );
};

export default Input;
