import React from 'react';
import styles from './comments.scss';

export function Comments() {
    return (
        <div className={styles.comments}>
            <div className={styles.header}>
                <div className={styles.user}>
                    <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                        alt="Аваторка"/>
                    <p>Константин Кодов</p>
                </div>
                <button className={['btn', styles.btn_close].join(' ')}><span className="visually-hidden">Закыть комментарии</span>
                </button>
            </div>
            <p className={styles.content}>
                Банальные, но неопровержимые выводы, а также многие известные личности лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Таким образом, постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью прогресса профессионального сообщества.
            </p>
        </div>
    );
}
