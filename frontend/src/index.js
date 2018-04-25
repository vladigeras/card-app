import './index.css';
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/toastr/build/toastr.css'
import '../node_modules/toastr/build/toastr.min.js'
import 'react-block-ui/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {CardsPage} from "./pages/CardsPage";
import {TablePage} from "./pages/TablePage";

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={CardsPage}/>
                    <Route path="/cards" component={CardsPage}/>
                    <Route path="/table" component={TablePage}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
