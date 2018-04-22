import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {CardsComponent} from "./components/CardsComponent";
import {MenuComponent} from "./components/MenuComponent";
import {FooterComponent} from "./components/FooterComponent";

let App = () => {
    return (
        <div>
            <MenuComponent/>

            <div className="container main-container">
                <CardsComponent/>
            </div>

            <FooterComponent/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
