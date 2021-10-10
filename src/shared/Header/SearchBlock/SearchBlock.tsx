import React from 'react';
import styles from './searchblock.scss';

export function SearchBlock() {
  return (
      <label className={styles.search}>
        <input type="text" placeholder="Поиск"/>
      </label>
  );
}
