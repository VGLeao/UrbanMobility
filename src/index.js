import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Mappage from './Mappage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
       <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/About" component={About} />
            <Route path="/Mappage" component={Mappage} />
        </Switch>
    </BrowserRouter>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
