import React, {useContext} from 'react';
import styles from './header.scss';
import {SortMenu} from "./SortMenu";
import {SearchBlock} from "./SearchBlock";
import {MessageStatus} from "./MessageStatus";
import {UserBlock} from "./UserBlock";
import useUserData from "../../hooks/useUserData";
import {userContext} from "../context/userContext";

export function Header() {
   const {iconImg, name} = useContext(userContext);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <UserBlock avatarSrc={iconImg} username={name}/>
                    <SearchBlock/>
                    <MessageStatus/>
                </div>
                <h1>Личный кабинет</h1>
            </div>
            <SortMenu/>
        </header>

    );
}
