import {createStore} from "redux";
import {rootReducer} from "./store";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import React from "react";
import {App} from "./App";
import useToken from "./hooks/useToken";

export const AppWrapper = () => {
    const store = createStore(rootReducer, composeWithDevTools());


    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
