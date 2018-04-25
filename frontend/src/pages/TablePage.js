import React from 'react'
import {MenuComponent} from "../components/MenuComponent";
import BlockUi from "react-block-ui";
import {FooterComponent} from "../components/FooterComponent";
import {TableComponent} from "../components/TableComponent";
import {ReadCardModalComponent} from "../components/ReadCardModalComponent";


export class TablePage extends React.Component {
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
                        <TableComponent blockUIStart={this.blockUIStart} blockUIStop={this.blockUIStop}/>
                    </div>

                    <FooterComponent/>
                </BlockUi>
            </div>
        )
    }

    blockUIStart() {
        if (!this.state.blocking) {
            this.setState({blocking: true});
        }
    }
    blockUIStop() {
        if (this.state.blocking) {
            setTimeout(() => this.setState({blocking: false}), 1000)
        }
    }
}