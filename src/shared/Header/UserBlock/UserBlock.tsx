import React from 'react';
import styles from './userblock.scss';

export function UserBlock() {
  return (
      <div className={styles.avator}>
        <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
            alt="Аваторка"/>
        <p>Константин</p>
      </div>
  );
}
