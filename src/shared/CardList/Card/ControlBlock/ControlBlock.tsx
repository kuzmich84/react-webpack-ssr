import React from 'react';
import styles from './controlblock.scss';

export function ControlBlock() {
    return (
        <div className={styles.control}>
            <button type="button" className="btn btn-statistics">
                <span className="visually-hidden">Показать статистику</span>
                <svg width="20" height="20">
                    <use xlinkHref="#icon-statistics"/>
                </svg>
            </button>
            <button type="button" className={['btn', styles.btn_shared].join(' ')}>
                <span className="visually-hidden">Поделиться</span>
                <svg width="20" height="20">
                    <use xlinkHref="#icon-shared"/>
                </svg>
            </button>
            <button type="button" className="btn btn-delete">
                <span className="visually-hidden">Удалить</span>
                <svg width="20" height="20">
                    <use xlinkHref="#icon-delete"/>
                </svg>
            </button>
        </div>
    );
}
