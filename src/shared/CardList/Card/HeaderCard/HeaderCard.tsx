import React from 'react';
import styles from './headercard.scss';
import {Comments} from "../../../Comments";

export function HeaderCard() {
    return (
        <div className={styles.header_wrapper}>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                        alt="Аваторка карточки"/>
                    <object><p className={styles.name}><a href="#user_link">Виктор Пылёв</a></p></object>
                    <time className={styles.time} dateTime="2001-05-15 19:00">
                        <span>опубликовано&nbsp;</span>8 часов назад
                    </time>
                </div>
                <button className={['btn', styles.ellipsis].join(' ')} type="button">
                    <span className="visually-hidden">Вызов меню карточки</span>
                    <svg width="20" height="5">
                        <use xlinkHref="#icon-menu-card"/>
                    </svg>
                </button>
            </header>
            <object>
                <h2 className={styles.title}>
                    <a href="#title_card" className={styles.postLink}>Реплицированные с зарубежных источников возможности.</a>
                </h2>
            </object>
        </div>
    );
}
