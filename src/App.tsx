import React  from "react";
import {hot} from "react-hot-loader/root";
import './main.global.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {UserContextProvider} from "./shared/context/userContext";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./store/store";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    return (
        <Provider store={store}>
            <UserContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <CardList/>
                    </Content>
                </Layout>
            </UserContextProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)