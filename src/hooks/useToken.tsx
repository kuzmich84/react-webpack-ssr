import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setToken} from "../store";

export default function useToken() {
    const token = ''
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__))
        }
    }, [dispatch]);

    return [token];
};

