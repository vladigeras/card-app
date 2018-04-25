import React from 'react';

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
                        <img alt={this.props.children.title} src={"data:image/jpg;base64, " + this.props.children.img}/>
                        <span className="card-title">{this.props.children.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.children.description}</p>
                    </div>
                    <div className="card-action">
                        <a onClick={this.openCardDescription} className="open-card-link">Open</a>
                    </div>
                </div>
            </div>
        );
    }

    openCardDescription() {
        this.props.openCard(this.props.children.id);
    }

}

