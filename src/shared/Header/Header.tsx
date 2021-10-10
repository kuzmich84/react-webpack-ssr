import React from 'react';
import styles from './header.scss';
import {SortMenu} from "./SortMenu";
import {SearchBlock} from "./SearchBlock";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.avator}>
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                            alt="Аваторка"/>
                        <p>Константин</p>
                    </div>
                    <SearchBlock/>
                    <div className={styles.message_status}>
                        <div className={styles.message_count}>
                            <span>4</span>
                        </div>
                        <svg width="12.77" height="10.21">
                            <use xlinkHref="#icon-mail"/>
                        </svg>
                    </div>
                </div>
                <h1>Личный кабинет</h1>
            </div>

            <SortMenu/>

        </header>

    );
}
