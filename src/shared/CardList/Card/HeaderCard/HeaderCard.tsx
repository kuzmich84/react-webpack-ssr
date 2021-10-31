import React from 'react';
import styles from './headercard.scss';
import {Menu} from "../Menu";
import {setDateToString} from "../../../../utils/js/setDateToString";
import {Title} from "../TextContent/Title";
import {UserMeta} from "../UserMeta";

interface IHeaderCardProps {
    author: string,
    title: string,
    created: number
}

export function HeaderCard({author, title, created}: IHeaderCardProps) {
    return (
        <div className={styles.header_wrapper}>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <UserMeta author={author} created={created}/>
                </div>
                <Menu/>
            </header>
            <Title title={title}/>
        </div>
    );
}
