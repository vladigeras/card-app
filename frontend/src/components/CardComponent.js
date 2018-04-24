import React from 'react';
import * as Helper from "./Helper";

export class CardComponent extends React.Component {

    constructor(props) {
        super(props);

        this.openCardDescription = this.openCardDescription.bind(this);
    }

    render() {
        return (
            <div className="col s6 m4 l3">
                <div className="card">
                    <div className="card-image">
                        <img alt={this.props.title} src={"data:image/jpg;base64, " + this.props.img}/>
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="card-action">
                        <a onClick={this.openCardDescription} className="open-card-link">Open</a>
                    </div>
                </div>
            </div>
        );
    }

    openCardDescription() {
        this.props.blockUIStart();
        let id = this.props.id;
        fetch("/api/card/" + id)
            .then(response => response.json())
            .then(card => {
                this.props.blockUIStop();
                Helper.openCardModal(card);
            })
            .catch(error => {
                console.error(error);
                this.props.blockUIStop();
            });
    }

}

