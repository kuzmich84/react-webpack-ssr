import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";
import {useSelector} from "react-redux";
import {RootState} from "../store";

interface IUserData {
    [index: number]: {};
}

const usePostsData = () => {
    const [data, setData] = useState<IUserData>([]);
    const token: string = useSelector<RootState, string>(state => state.token);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best',
            {
                headers: {Authorization: `bearer ${token}`}
            }
        )
            .then((resp) => {
                const postsData: any = resp.data;
                setData(postsData.data.children)
            })
            .catch(console.log)
    }, [token])

    return [data]
}

export default usePostsData;