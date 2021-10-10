import React from 'react';
import styles from './buttonlike.scss';

export function ButtonLike() {
    return (
        <div className={styles.wrapper_like}>
            <button type="button" className={["btn", styles.button_like].join(' ')}>
                <span className="visually-hidden">Like</span>
                <svg width="19" height="10">
                    <use xlinkHref="#icon-like"/>
                </svg>
            </button>
            <p className={styles.likes_count }>101</p>
            <button type="button" className={["btn", styles.button_like].join(' ')}>
                <span className="visually-hidden">Dislike</span>
                <svg width="19" height="10">
                    <use xlinkHref="#icon-dislike "/>
                </svg>
            </button>
        </div>
    );
}
