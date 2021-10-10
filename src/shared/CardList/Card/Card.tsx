import React from 'react';
import styles from './card.scss';
import {ControlBlock} from "./ControlBlock";
import {HeaderCard} from "./HeaderCard";
import {FooterCard} from "./FooterCard";
import {Comments} from "../../Comments";

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.content}>
                <HeaderCard/>
                <img className={styles.image}
                     src="https://images.unsplash.com/photo-1577033226943-58e28a0d65d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                     alt="Картинка 1"/>
                <FooterCard/>
            </div>
        </li>
    );
}
