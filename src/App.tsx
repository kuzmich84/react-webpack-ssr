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
import {Text} from "./shared/Text";

function AppComponent() {
    return (
        <Layout>
            <Header/>
            <Content>
               <CardList/>
                <br/>
                <Text size={28} mobileSize={28}>Label1</Text>
                <Text size={20} As={'h2'}>Label2</Text>
                <Text size={16} mobileSize={28}>Label3</Text>

            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent)