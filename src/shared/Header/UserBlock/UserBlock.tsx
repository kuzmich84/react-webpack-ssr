import React from 'react';
import styles from './userblock.scss';
import NoAuthIcon from "../../Icons/NoAuthIcon";

interface IUserBlock {
    avatarSrc?: string,
    username?: string,
}

export function UserBlock({avatarSrc, username}: IUserBlock) {
    const TYPE = `code`;
    const RANDOM_STRING = `dima`;
    const URI = `http://localhost:3000/auth`;
    const DURATION = `permanent`;
    const SCOPE_STRING = `read submit identity`

    return (
        <a className={styles.link} target="_self"
           href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=${DURATION}&scope=${SCOPE_STRING}`}
        >
            <div className={styles.avatar}>
                {avatarSrc
                    ? <img
                        src={avatarSrc}
                        alt="Аваторка"/>
                    : <NoAuthIcon />

                }
                <p>{username || 'Аноним'}</p>
            </div>
        </a>
    );
}
