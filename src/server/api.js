let Express = require('express');
let bodyParser = require('body-parser');

let app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(42069, () => {});

app.get("/", (req, res) => {
    res.send('Hello world');
});