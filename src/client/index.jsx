import React from "react";
import ReactDOM from "react-dom";
import {App} from "../App";
import requireAll from "./sprite";
import {AppWrapper} from "../AppWrapper";

requireAll(require.context('../img/sprite/', true, /\.svg$/));

window.addEventListener('load', () => {
    ReactDOM.hydrate(<AppWrapper/>, document.getElementById("root"))
})