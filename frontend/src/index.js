import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import CardComponent from "./CardComponent";


const App = () => (
    <CardComponent/>
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
