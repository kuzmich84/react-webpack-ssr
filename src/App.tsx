import React, {useState} from "react";
import {hot} from "react-hot-loader/root";
import './main.global.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import useToken from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {commentContext} from "./shared/context/commentContext";
import {ActionCreator, AnyAction, createStore, Reducer} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./store";



const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    const [token] = useToken();
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider;

    return (
        <Provider store={store}>
            <CommentProvider value={{
                value: commentValue,
                onChange: setCommentValue,
            }}>
                <tokenContext.Provider value={token}>
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
                </tokenContext.Provider>
            </CommentProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)