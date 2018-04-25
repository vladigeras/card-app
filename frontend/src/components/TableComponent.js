import React from 'react';
import {Card} from "../model/Card";
import {ReadCardModalComponent} from "./ReadCardModalComponent";
import $ from "jquery";

export class TableComponent extends React.Component {

    constructor(props) {
        super(props);

        this.openCardDescription = this.openCardDescription.bind(this);
        this.state = {
            tableData: [],
            activeCard: null,
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
                        this.state.tableData.map((elem, i) =>
                            <tr key={i} onClick={() => this.openCardDescription(elem.id)}>
                                <td>{elem.id}</td>
                                <td><img alt={elem.title} className="circle"
                                         src={"data:image/jpg;base64, " + elem.img}/>
                                </td>
                                <td>{elem.title}</td>
                                <td>{elem.description}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

                <h4>{this.state.error}</h4>

                <ReadCardModalComponent>{this.state.activeCard}</ReadCardModalComponent>
            </div>
        );
    }

    getCards() {
        fetch("/api/cards")
            .then(response => response.json())
            .then(data => data.items)
            .then(cards => {
                let cardData = [];
                cards.forEach(c => {
                    cardData.push(new Card(c.id, c.title, c.description, c.img))
                });
                this.setState({tableData: cardData});
            })
            .catch(error => {
                this.setState({error: "Произошла ошибка при получении данных"});
                console.error(error);
            });
    }

    openCardDescription(id) {
        fetch("/api/card/" + id)
            .then(response => response.json())
            .then(card => {
                this.setState({activeCard: card});
                $("#card-modal").modal('open')      //open the modal
            })
            .catch(error => {
                console.error(error);
            });
    }
}


