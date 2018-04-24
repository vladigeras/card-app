import React from 'react';
import toastr from 'toastr'
import {Card} from "../model/Card";

export class TableComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tableData: [],
            error: null
        };

        this.getCards();
    }

    render() {
        return (
            <div className="row">
                <table className="highlight responsive-table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Picture</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.tableData.map(d =>
                            <tr>
                                <td>{d.id}</td>
                                <td><img alt={d.title} src={"data:image/jpg;base64, " + d.img}/></td>
                                <td>{d.title}</td>
                                <td>{d.description}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

                <h4>{this.state.error}</h4>
            </div>
        );
    }

    getCards() {
        this.props.blockUIStart();
        fetch("/api/cards")
            .then(response => response.json())
            .then(data => data.items)
            .then(cards => {
                let cardData = [];
                cards.forEach(c => {
                    cardData.push(new Card(c.id, c.title, c.description, c.img))
                });
                this.setState({tableData: cardData});
                this.props.blockUIStop();
            })
            .catch(error => {
                this.setState({error: "Произошла ошибка при получении данных"});
                console.error(error);
                this.props.blockUIStop();
            });
    }
}

