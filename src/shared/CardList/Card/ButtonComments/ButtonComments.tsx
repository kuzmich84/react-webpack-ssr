import React from 'react';
import styles from './buttoncomments.scss';

export function ButtonComments() {
    return (
        <div className={styles.comments_wrapper}>
            <button type="button" className={["btn", styles.btn_comments].join(' ')}>
                <span className="visually-hidden">Показать комментарии</span>
                <svg className={styles.icon_comments} width="14.17" height="14.17">
                    <use xlinkHref="#icon-comments"/>
                </svg>
            </button>
            <p className={styles.comments_count}><span>14</span><span>Комментарий</span></p>
        </div>
    );
}
