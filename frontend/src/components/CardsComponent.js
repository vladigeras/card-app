import React from 'react';
import {CardComponent} from "./CardComponent";
import {Card} from "../model/Card";
import {ReadCardModalComponent} from "./ReadCardModalComponent";
import $ from "jquery";

export class CardsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [],
            activeCard: null,
            error: null
        };

        this.getCards();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.cardData.map((card, i) => {
                        return (<CardComponent key={i} openCard={() => this.openCard(card.id)}>{card}</CardComponent>)
                    })
                }
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
                this.setState({cardData: cardData});
            })
            .catch(error => {
                this.setState({error: "Произошла ошибка при получении данных"});
                console.error(error);
            });
    }

    openCard(id) {
        fetch("/api/card/" + id)
            .then(response => response.json())
            .then(card => {
                this.setState({activeCard: card});

                $("#card-modal").modal('open');
            })
            .catch(error => {
                console.error(error);
            });
    };
}

