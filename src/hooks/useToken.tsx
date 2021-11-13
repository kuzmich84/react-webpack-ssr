import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setToken} from "../store";

export default function useToken() {
    let token = '';
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__))
        }
    }, [dispatch]);

    return [token];
};

