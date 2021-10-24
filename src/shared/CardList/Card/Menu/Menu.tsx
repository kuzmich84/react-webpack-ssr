import React from 'react';
import styles from './menu.scss';
import MenuIcon from "../../../Icons/MenuIcon";
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";

export function Menu() {
    return (
        <>
            <Dropdown button={
                <button className={['btn', styles.ellipsis].join(' ')} type="button">
                    <span className="visually-hidden">Вызов меню карточки</span>
                    <MenuIcon/>
                </button>
            }
            >
                <div className={styles.dropdown}>
                    <MenuItemsList postId={'1234'}/>
                    <button className={['btn', styles.closeBtn].join(' ')} type="button">Закрыть</button>
                </div>

            </Dropdown>
        </>

    );
}
