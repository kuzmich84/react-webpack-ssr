import React from 'react';
import styles from './card.scss';

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <span className={styles.createdAt}>4 часа назад</span>
                    </div>
                    <h2 className={styles.title}>
                        <a href="#post-url" className={styles.postLink}>
                            Следует отметить, что новая модель организационной деятельности...
                        </a>
                    </h2>
                </div>
            </div>
            <div className={styles.preview}/>
            <div className={styles.menu}/>
            <div className={styles.control}/>


        </li>
    );
}
