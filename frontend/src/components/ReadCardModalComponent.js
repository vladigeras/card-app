import React from 'react';

export class ReadCardModalComponent extends React.Component {

    render() {
        return (
            <div>
                <div id="card-modal" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        );
    }
}

