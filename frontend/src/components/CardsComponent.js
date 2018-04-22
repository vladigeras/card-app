import React from 'react';
import {CardComponent} from "./CardComponent";
import {Card} from "../model/Card";

let cardData: Card[] = [];
cardData.push(new Card(0, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(1, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(2, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(3, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(4, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(5, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(6, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(7, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(8, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(9, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(10, "dvev", "wegwg", "wegweg", "wegweg"));
cardData.push(new Card(11, "dvev", "wegwg", "wegweg", "wegweg"));

export let CardsComponent = () => {
    return (
        <div className="row">
            {
                cardData.map((c) => <CardComponent key={c.id} title={c.title} description={c.description} img={c.img} link={c.link}/>)
            }
        </div>
    );
};
