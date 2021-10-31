import React from "react";
import usePostsData from "../../hooks/usePostsData";


interface IPostsContextData{
    [index: number]: object;
}

export const postsContext = React.createContext<IPostsContextData>([]);

export function PostsContextProvider({children}:{children:React.ReactNode}) {
    const [data] = usePostsData();
    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    )

}