import React from 'react';
import styles from './usermeta.scss';
import {setDateToString} from "../../../../utils/js/setDateToString";

interface IUserMeta {
    author: string;
    created: number;
}

export function UserMeta({author, created}: IUserMeta) {
    return (
        <>
            <img className={styles.userMetaImg}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                alt="Аваторка карточки"/>
            <p className={styles.name}><a href="#user_link">{author}</a></p>
            <time className={styles.time} dateTime="2001-05-15 19:00">
                <span>опубликовано&nbsp;</span>{setDateToString(created)}
            </time>
        </>
    );
}
