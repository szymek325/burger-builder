import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import Checkout from "./containers/Checkout/Checkout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/checkout/" component={Checkout}/>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Checkout/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;