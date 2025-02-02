import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

export type ModalProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  btnConfirmText: string;
  btnCancelText: string;
  handleConfirm: () => void;
  handleCancel: () => void;
  width: number;
  height: number;
};

const Modal = ({
  open,
  btnConfirmText,
  btnCancelText,
  handleConfirm,
  handleCancel,
  width,
  height,
  ...props
}: ModalProps) => {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div
            className={styles.dialog}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div>{props.children}</div>
            <div className={styles['dialog__buttons']}>
              <Button
                variant="rounded"
                colors="white"
                onClick={handleCancel}
                width={205}
                height={51}
              >
                {btnCancelText}
              </Button>
              <Button
                variant="rounded"
                colors="orange"
                onClick={handleConfirm}
                width={110}
                height={51}
              >
                {btnConfirmText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
