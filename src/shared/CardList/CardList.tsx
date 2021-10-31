import React, {useContext} from 'react';
import styles from './cardlist.scss';
import {Card} from './Card';
import {postsContext} from "../context/postsContext";

interface IPostsContextData {
    [x: string]: any;
}

export function CardList() {
    const posts: IPostsContextData = useContext(postsContext);
    return (
        <section className={styles.cards}>
            <ul className={styles.list}>
                {posts.map((post:any) => <Card key={post.data.id}  postData={post.data}/>)}
            </ul>
        </section>
    );
}
