let express = require('express');

let app = express();
let port = process.env.PORT || 5050;

app.get('/api', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));