
let express = require('express');
let app = express();
let port = process.env.PORT || 5050;

let cards = require('./model/init');

app.get('/api/cards', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send({items: cards});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
