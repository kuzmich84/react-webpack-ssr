import React, {useState} from "react";
import {hot} from "react-hot-loader/root";
import './main.global.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import useToken from "./hooks/useToken";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";


function AppComponent() {
    useToken();
    return (
            <UserContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <PostsContextProvider>
                            <CardList/>
                        </PostsContextProvider>
                    </Content>
                </Layout>
            </UserContextProvider>
    )
}

export const App = hot(() => <AppComponent/>)