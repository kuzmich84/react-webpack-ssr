import React from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';

export function CardList() {
    return (
        <section className={styles.cards}>
            <ul className={styles.list}>
                <Card/>
            </ul>
        </section>
    );
}
