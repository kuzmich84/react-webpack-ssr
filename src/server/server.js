import express from "express";
import ReactDOM from "react-dom/server";
import {Header} from "../shared/Header";
import {indexTemplate} from "./indexTemplate";
import {App} from "../App";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`)
})