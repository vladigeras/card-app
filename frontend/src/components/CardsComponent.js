import React from 'react';
import toastr from 'toastr'
import {CardComponent} from "./CardComponent";
import {Card} from "../model/Card";

export class CardsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [],
            error: null
        };

        this.getCards();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.cardData.map((c) => <CardComponent key={c.id} title={c.title} description={c.description}
                                                       img={c.img} link={c.link}/>)
                }
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
                    cardData.push(new Card(c.id, c.title, c.description, c.img, c.link))
                });
                this.setState({cardData: cardData});
                this.props.blockUIStop();
            })
            .catch(error => {
                this.setState({error: "Произошла ошибка при получении данных"});
                console.error(error);
                this.props.blockUIStop();
            });
    }
}

