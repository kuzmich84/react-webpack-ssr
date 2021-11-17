import React, {useEffect, useRef, useState} from 'react';
import styles from './cardlist.scss';
import {Card} from './Card';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import axios from "axios";

export function CardList() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState('');
    const token: string = useSelector<RootState, string>(state => state.token);

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!token) return;

        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                // @ts-ignore
                const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/best',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10,
                            after: nextAfter
                        }
                    }
                );

                setNextAfter(after);
                setPosts(prevChildren => prevChildren.concat(...children));

            } catch (e) {
                setErrorLoading(String(e))
            }
            setLoading(false);
        }

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                load();
            }

        }, {rootMargin: '100px'});

        if (bottomOfList.current) observer.observe(bottomOfList.current);

        return () => {
            if (bottomOfList.current) observer.unobserve(bottomOfList.current);
        }

    }, [bottomOfList.current, token, nextAfter]);

    return (
        <section className={styles.cards}>
            <ul className={styles.list}>

                {posts.length === 0 && !loading && !errorLoading && (
                    <div style={{textAlign: 'center'}}>
                        Нет ни одного поста
                    </div>
                )}
                {posts.map((post) => <Card key={post.data.id} postData={post.data}/>)}

                <div ref={bottomOfList}/>

                {loading && <div style={{textAlign: 'center'}}>
                    Загрузка...
                </div>}
                {errorLoading && (
                    <div role="alert" style={{textAlign: 'center'}}>
                        {errorLoading}
                    </div>
                )}
            </ul>
        </section>
    );
}
