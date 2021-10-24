import React from 'react';
import styles from './menuitemslist.scss';
import HiddenIcon from "../../../../Icons/HiddenIcon";
import ComplainIcon from "../../../../Icons/ComplainIcon";

interface IMenuItemsListProps {
    postId: string,
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={()=>console.log(postId)}>
                <HiddenIcon/>
                <button className={['btn', styles.btnItem].join(' ')} type="button" >Скрыть</button>
            </li>
            <li className={styles.menuItem}>
                <ComplainIcon/>
                <button className={['btn', styles.btnItem].join(' ')} type="button">Пожаловаться</button>
            </li>
        </ul>
    );
}
