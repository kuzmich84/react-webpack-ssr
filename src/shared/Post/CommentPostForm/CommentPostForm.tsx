import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from 'react';
import styles from './commentpostform.scss';
import {commentContext} from "../../context/commentContext";

export function CommentPostForm() {
    const {value, onChange} = useContext(commentContext);


    function handleSubmit(evt: FormEvent) {
        evt.preventDefault();
    }

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
       onChange(evt.target.value);

    }

    return (
        <form className={styles.commentPost} onSubmit={handleSubmit}>
            <textarea name="comment" placeholder="Оставьте ваш комментарий" value={value} onChange={handleChange}/>
            <div className={styles.footer}>
                <div className={styles.icons}/>
                <button type="submit" className={['btn', styles.btnComment].join(' ')}>Комментировать</button>
            </div>

        </form>
    );
}
