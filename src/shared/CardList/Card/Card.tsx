import React from 'react';
import styles from './card.scss';
import {HeaderCard} from "./HeaderCard";
import {FooterCard} from "./FooterCard";
import EmtyImageIcon from "../../Icons/EmtyImageIcon";


interface ICard {
    postData: {
        author: string,
        url: string,
        title: string,
        created: number,
        num_comments: number,
        score: number,
        preview: object
    };
}

export function Card({postData}: ICard) {
    const {author, url, title, created, num_comments, score, preview} = postData;
    return (
        <li className={styles.card}>
            <div className={styles.content}>
                <HeaderCard author={author} title={title} created={created}/>
                {preview
                    ? <img className={styles.image}
                           src={url}
                           alt="Картинка 1"/>
                    : <div className={styles.svg}><EmtyImageIcon/></div>
                }

                <FooterCard countComments={num_comments} score={score}/>
            </div>
        </li>
    );
}
