import React from 'react';
import styles from './buttonlike.scss';

interface IButtonLikeProps {
    score: number
}

export function ButtonLike({score}:IButtonLikeProps) {
    return (
        <>
            <button type="button" className={["btn", styles.button_like].join(' ')}>
                <span className="visually-hidden">Like</span>
                <svg width="19" height="10">
                    <use xlinkHref="#icon-like"/>
                </svg>
            </button>
            <p className={styles.likes_count }>{score}</p>
            <button type="button" className={["btn", styles.button_dislike].join(' ')}>
                <span className="visually-hidden">Dislike</span>
                <svg width="19" height="10">
                    <use xlinkHref="#icon-dislike "/>
                </svg>
            </button>
        </>
    );
}
