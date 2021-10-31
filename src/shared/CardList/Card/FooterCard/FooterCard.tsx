import React from 'react';
import styles from './footercard.scss';
import {ControlBlock} from "../ControlBlock";
import {ButtonLike} from "../ButtonLike";
import {ButtonComments} from "../ButtonComments";

interface IFooterInterface {
    countComments: number;
    score: number;
}

export function FooterCard({countComments, score}:IFooterInterface) {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper_like}>
                <ButtonLike score={score}/>
            </div>
            <ButtonComments countComments={countComments}/>
            <ControlBlock/>
        </footer>

    );
}
