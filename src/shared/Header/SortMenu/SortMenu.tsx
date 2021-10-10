import React from 'react';
import styles from './sortmenu.scss';

export function SortMenu() {
  return (
      <nav className={styles.menu}>
        <button className={styles.toggle} type="button"/>
        <ul className={styles.list}>
          <li>
            <svg width="12" height="8">
              <use xlinkHref="#icon-looked"/>
            </svg>
            <a className={styles.link} href="#">Просмотренное</a></li>
          <li>
            <svg width="10" height="10">
              <use xlinkHref="#icon-saved"/>
            </svg>
            <a className={styles.link} href="#">Сохраненное</a></li>
          <li>
            <svg width="10" height="10">
              <use xlinkHref="#icon-my-posts"/>
            </svg>
            <a className={styles.link} href="#">Мои посты</a></li>
          <li>
            <svg width="10" height="10">
              <use xlinkHref="#icon-commented"/>
            </svg>
            <a className={[styles.link, styles.active].join(' ')} href="#">Прокомментированное</a></li>
        </ul>
        <button className={[styles.btn, styles.btn_close].join(' ')} type="button">Закрыть</button>
      </nav>

  );
}
