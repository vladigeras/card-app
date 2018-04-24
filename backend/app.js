let express = require('express');
let app = express();
let port = process.env.PORT || 5050;

let cards = require('./model/init');

app.get('/api/cards', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({items: cards});
});

app.get('/api/card/:id', (req, res) => {
    let id = req.params.id;
    let result = cards.find(function (element) {
            if (element.id == id) {
                return element;
            }
        }
    );
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
