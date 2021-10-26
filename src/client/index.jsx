import React from "react";
import ReactDOM from "react-dom";
import {App} from "../App";
import requireAll from "./sprite";

requireAll(require.context('../img/sprite/', true, /\.svg$/));

window.addEventListener('load', () => {
    ReactDOM.hydrate(<App/>, document.getElementById("root"))
})