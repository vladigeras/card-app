import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/toastr/build/toastr.css'
import '../node_modules/toastr/build/toastr.min.js'
import 'react-block-ui/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {CardsComponent} from "./components/CardsComponent";
import {MenuComponent} from "./components/MenuComponent";
import {FooterComponent} from "./components/FooterComponent";
import BlockUi from 'react-block-ui';
import {TableComponent} from "./components/TableComponent";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.blockUIStart = this.blockUIStart.bind(this);
        this.blockUIStop = this.blockUIStop.bind(this);

        this.state = {
            blocking: false
        };
    }

    render() {
        return (
            <div>
                <BlockUi tag="div" blocking={this.state.blocking} message="Please wait" keepInView="true">
                    <MenuComponent/>

                    <div className="container main-container">
                        <CardsComponent blockUIStart={this.blockUIStart} blockUIStop={this.blockUIStop}/>
                        <TableComponent blockUIStart={this.blockUIStart} blockUIStop={this.blockUIStop}/>
                    </div>

                    <FooterComponent/>
                </BlockUi>
            </div>
        );
    }

    blockUIStart() {
        if (!this.state.blocking) {
            this.setState({blocking: true});
        }
    }
    blockUIStop() {
        if (this.state.blocking) {
            setTimeout(() => this.setState({blocking: false}), 1800)
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
