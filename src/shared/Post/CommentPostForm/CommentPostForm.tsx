import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentpostform.scss';

type Props = {
    value: string,
    onChange: (evt: ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (evt: FormEvent) => void
}

export function CommentPostForm({value, onChange, onSubmit}: Props) {
    return (
        <form className={styles.commentPost} onSubmit={onSubmit}>
            <textarea name="comment" placeholder="Оставьте ваш комментарий" value={value} onChange={onChange}/>
            <div className={styles.footer}>
                <div className={styles.icons}/>
                <button type="submit" className={['btn', styles.btnComment].join(' ')}>Комментировать</button>
            </div>
        </form>
    );
}
