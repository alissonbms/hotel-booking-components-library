import React from 'react';
import Button from '../Button/Button';
import CautionIcon from '../icons/CautionIcon';
import SuccessIcon from '../icons/SuccessIcon';
import styles from './ConfirmDialog.module.scss';

export type ConfirmDialogProps = {
  open: boolean;
  type: 'error' | 'success';
  title: string;
  description: string;
  btnConfirmText: string;
  btnCancelText: string;
  handleConfirm: () => void;
  handleCancel: () => void;
};

const ConfirmDialog = ({
  open,
  type,
  title,
  description,
  btnConfirmText,
  btnCancelText,
  handleConfirm,
  handleCancel,
}: ConfirmDialogProps) => {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.dialog}>
            <div className={styles.icon}>
              {type === 'success' ? <SuccessIcon /> : <CautionIcon />}
            </div>
            <strong>{title}</strong>
            <p>{description}</p>

            <div className={styles['dialog__buttons']}>
              <Button
                variant="normal"
                colors="orange"
                onClick={handleCancel}
                width={140}
              >
                {btnCancelText}
              </Button>
              <Button
                variant="normal"
                colors="orange__outline"
                onClick={handleConfirm}
                width={190}
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

export default ConfirmDialog;
