const Express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example API listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send('Hello world');
});