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
    const token: string = useSelector<RootState, string>(state => state.token);

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!token) return;
        setErrorLoading('');

        async function load() {
            setLoading(true);
            try {
                // @ts-ignore
                const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/best',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10
                        }
                    }
                );
                setPosts(children)

            } catch (e) {
                setErrorLoading(String(e))
            }
            setLoading(false);
        }

        load();

    }, [token])

    useEffect(() => {
    const observer = new IntersectionObserver(()=>{
        console.log('load more');
    });

}, [])
    return (
        <section className={styles.cards}>
            <ul className={styles.list}>

                {posts.length === 0 && !loading && !errorLoading && (
                    <div style={{textAlign: 'center'}}>
                        Нет ни одного поста
                    </div>
                )}
                {posts.map((post) => <Card key={post.data.id} postData={post.data}/>)}

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
