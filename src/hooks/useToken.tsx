import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setToken} from "../store/store";

export default function useToken() {

    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== "undefined") {
            dispatch(setToken(token))
        } else if (window.__token__) {
            dispatch(setToken(window.__token__));
            localStorage.setItem('token', window.__token__);
        }

    }, [dispatch]);

};

