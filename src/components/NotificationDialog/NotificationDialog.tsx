import React from 'react';
import ArrowBackIcon from '../icons/ArrowBackIcon';
import CautionIcon from '../icons/CautionIcon';
import SuccessIcon from '../icons/SuccessIcon';
import styles from './NotificationDialog.module.scss';

export type NotificationDialogProps = {
  open: boolean;
  type: 'error' | 'success';
  title: string;
  description: string;
  actionText?: string;
  handleClose?: () => void;
  handleNextLocation?: () => void;
};

const NotificationDialog = ({
  open,
  type,
  title,
  description,
  actionText,
  handleClose,
  handleNextLocation,
}: NotificationDialogProps) => {
  const handleNavigate = () => {
    if (handleClose) handleClose();

    if (handleNextLocation) handleNextLocation();
  };
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

            {(handleNextLocation || handleClose) && (
              <div className={styles['next-location']}>
                <ArrowBackIcon />
                <a href="#" onClick={handleNavigate}>
                  {actionText}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationDialog;
