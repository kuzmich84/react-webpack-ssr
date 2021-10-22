import React from "react";
import {hot} from "react-hot-loader/root";
import './main.global.scss';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {Dropdown} from "./shared/Dropdown";
import {Card} from "./shared/CardList/Card";
import {GenericList} from "./shared/GenericList";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
               <CardList/>
                <Dropdown
                    button={<button className="btn">Test</button>} isOpen={false}
                    onOpen={()=>console.log('opened')}
                    onClose={()=>console.log('closed')}
                >
                    <ul>
                        <li>12</li>
                    </ul>
                </Dropdown>
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent)