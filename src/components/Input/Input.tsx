import React, { HTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './Input.module.scss';

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelId?: string;
  width?: number;
  height?: number;
  icon?: string;
  iconPosition?: 'right' | 'left';
  iconSize?: number;
};

const Input = ({
  labelText,
  labelId,
  width,
  height,
  icon,
  iconPosition = 'left',
  iconSize = 24,
  ...props
}: InputProps) => {
  const paddingIcon =
    iconPosition === 'left' ? '0px 18.216px 0px 40px' : '0px 40px 0px 18.042px';

  return (
    <div
      className={styles['container-input']}
      style={{ width: width ? `${width}px` : '100%' }}
    >
      {labelText && <label htmlFor={labelId}>{labelText}</label>}
      <div style={{ height: height ? `${height}px` : '60px' }}>
        {icon && (
          <img
            src={icon}
            alt="icon"
            style={{
              [iconPosition]: '16px',
              width: `${iconSize}px`,
              height: 'auto',
            }}
          />
        )}
        <input
          id={labelId}
          type="text"
          {...props}
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
