import React, {useEffect} from 'react';
import styles from './layout.scss';
import {useDispatch} from "react-redux";
import useToken from "../../hooks/useToken";
import {setToken} from "../../store/store";

interface ILayoutProps {
    children?: React.ReactNode
}

export function Layout({children}: ILayoutProps) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__))
        }
    }, [dispatch]);
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}
