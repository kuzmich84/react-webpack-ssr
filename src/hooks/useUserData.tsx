import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";


interface IUserData {
    name?: string,
    iconImg?: string
}

const useUserData = () => {
    const [data, setData] = useState<IUserData>({});
    const token:string = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me',
            {
                headers: {Authorization: `bearer ${token}`}
            }
        )
            .then((resp) => {
                const userData = resp.data;
                // @ts-ignore
                setData({name: userData.name, iconImg: userData.icon_img})
            })
            .catch(console.log)
    }, [token])

    return [data]
};

export default useUserData;