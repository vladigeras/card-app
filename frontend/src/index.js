import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import 'react-block-ui/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {CardsComponent} from "./components/CardsComponent";
import {MenuComponent} from "./components/MenuComponent";
import {FooterComponent} from "./components/FooterComponent";
import BlockUi from 'react-block-ui';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.toggleBlocking = this.toggleBlocking.bind(this);
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
                        <CardsComponent/>
                    </div>

                    <FooterComponent/>
                </BlockUi>

                <button onClick={this.toggleBlocking} color="primary">Toggle Block</button>

            </div>
        );
    }

    toggleBlocking() {
        if (this.state.blocking) {
            setTimeout(() => this.setState({blocking: false}), 1800)
        } else {
            this.setState({blocking: true});
        }
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
