import React from 'react';
import $ from 'jquery'

export class ReadCardModalComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $("#card-modal").modal();           //initial a modal
    }

    render() {
        {
            if (this.props.children != null) {
                return (
                    <div id="card-modal" className="modal modal-fixed-footer">
                        <div className="modal-content">
                            <h4>Card view: {this.props.children.title}</h4>

                            <div className="row">
                                <div className="col">
                                    <img alt={this.props.children.title}
                                         src={"data:image/jpg;base64, " + this.props.children.img}/>
                                </div>
                                <div className="col">
                                    <p>ID: {this.props.children.id}</p>
                                    <p>Title: {this.props.children.title}</p>
                                    <p>Description: {this.props.children.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div id="card-modal" className="modal modal-fixed-footer">
                        <div className="modal-content">
                            No information
                        </div>
                        <div className="modal-footer">
                            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>

                );
            }
        }
    }
}

