import React, { HTMLAttributes } from 'react';
import styles from './Modal.module.scss';

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  width: number;
  height: number;
};

const Modal = ({ open, width, height, ...props }: ModalProps) => {
  return (
    <>
      {open && (
        <div className={`${props.className} ${styles.container}`}>
          <div
            className={styles.dialog}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div>{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
