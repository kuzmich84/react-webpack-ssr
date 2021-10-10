import React from 'react';
import styles from './header.scss';
import {SortMenu} from "./SortMenu";
import {SearchBlock} from "./SearchBlock";
import {MessageStatus} from "./MessageStatus";
import {UserBlock} from "./UserBlock";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <UserBlock/>
                    <SearchBlock/>
                    <MessageStatus/>
                </div>
                <h1>Личный кабинет</h1>
            </div>

            <SortMenu/>

        </header>

    );
}
