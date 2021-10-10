import React from 'react';
import styles from './footercard.scss';
import {ControlBlock} from "../ControlBlock";
import {ButtonLike} from "../ButtonLike";
import {ButtonComments} from "../ButtonComments";

export function FooterCard() {
    return (
        <footer className={styles.footer}>
            <ButtonLike/>
            <ButtonComments/>
            <ControlBlock/>
        </footer>

    );
}
