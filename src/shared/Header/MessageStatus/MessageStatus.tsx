import React from 'react';
import styles from './messagestatus.scss';

export function MessageStatus() {
  return (
      <div className={styles.message_status}>
        <div className={styles.message_count}>
          <span>4</span>
        </div>
        <svg width="12.77" height="10.21">
          <use xlinkHref="#icon-mail"/>
        </svg>
      </div>
  );
}
