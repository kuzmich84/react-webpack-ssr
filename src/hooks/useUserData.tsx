import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {IUserData, meError, meRequest, meRequestAsync, meSuccess} from "../store/me/actions";


const useUserData = () => {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const token: string = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            return;
        }
        dispatch(meRequestAsync());
    }, [token])

    return [data]
};

export default useUserData;