import React, {useEffect, useRef} from 'react';
import styles from './post.scss';
import {ButtonLike} from "../CardList/Card/ButtonLike";
import {UserMeta} from "../CardList/Card/UserMeta";
import {Title} from "../CardList/Card/TextContent/Title";
import ReactDOM from "react-dom";
import {CommentPostForm} from "./CommentPostForm";

interface IPostProps {
    score: number;
    author: string;
    created: number;
    title: string;
    onClose?: () => void;
}


export function Post({score, author, created, title, onClose}: IPostProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.();
            }

        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.post} ref={ref}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.buttonLike}>
                        <ButtonLike score={score}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Title title={title}/>
                        <div className={styles.userMeta}>
                            <UserMeta author={author} created={created}/>
                        </div>
                    </div>
                </header>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dolor dolorem eius eveniet fugit
                        in incidunt molestiae molestias nam nostrum officiis reiciendis repudiandae sequi temporibus
                        totam, voluptatibus. Nesciunt, sit!</p>
                </div>
                <CommentPostForm />
            </div>
        </div>
    ), node);
}
