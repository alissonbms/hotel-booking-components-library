import React from 'react';
import styles from './Chip.module.scss';

export type ChipProps = {
  title: string;
  width: number;
  color?: string;
  textColor?: string;
  type?: 'filled' | 'outlined';
};

const Chip = ({ title, width, color, textColor, type }: ChipProps) => {
  const style =
    type === 'filled'
      ? {
          backgroundColor: color,
          color: textColor,
        }
      : { color: color, border: `1px solid ${color}` };

  return (
    <div className={styles.chip} style={{ ...style, width: `${width}px` }}>
      {title}
    </div>
  );
};

export default Chip;
