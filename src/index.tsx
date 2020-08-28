import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route} from "react-router-dom";
import {PreJunior} from "./Task5/PreJunior/PreJunior";
import {Junior} from "./Task5/Junior/Junior";
import {JuniorPlus} from "./Task5/JuniorPlus/JuniorPlus";
import {Provider} from "react-redux";
import {store} from "./Redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Route exact path={'/'} render={() => <App/>}/>
                <Route path={'/preJunior'} render={() => <PreJunior/>}/>
                <Route path={'/junior'} render={() => <Junior/>}/>
                <Route path={'/juniorPlus'} render={() => <JuniorPlus/>}/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();