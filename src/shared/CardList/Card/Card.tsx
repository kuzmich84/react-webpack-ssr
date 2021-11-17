import React from 'react';
import styles from './card.scss';
import {HeaderCard} from "./HeaderCard";
import {FooterCard} from "./FooterCard";


interface ICard {
    postData: {
        author: string,
        url: string,
        title: string,
        created: number,
        num_comments: number,
        score: number
    };
}

export function Card({postData}: ICard) {
    const {author, url, title, created, num_comments, score} = postData;
    return (
        <li className={styles.card}>
            <div className={styles.content}>
                <HeaderCard author={author} title={title} created={created}/>
                <img className={styles.image}
                     src={url}
                     alt="Картинка 1"/>
                <FooterCard countComments={num_comments} score={score}/>
            </div>
        </li>
    );
}
