
let express = require('express');
let app = express();
let port = process.env.PORT || 5050;

let Card = require('./model/Card');

app.get('/api/cards', (request, response) => {
    let cards = [];

    cards.push(new Card(1, "sdg", "dsg", "dsh", "wh"));
    cards.push(new Card(2, "sdg", "dsg", "dsh", "wh"));
    cards.push(new Card(3, "sdg", "dsg", "dsh", "wh"));
    cards.push(new Card(4, "sdg", "dsg", "dsh", "wh"));
    cards.push(new Card(5, "sdg", "dsg", "dsh", "wh"));
    cards.push(new Card(6, "sdg", "dsg", "dsh", "wh"));

    response.setHeader('Content-Type', 'application/json');
    response.send({items: cards});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
