const Express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

const mysql = require('mysql');
let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "Vargas.2000",
    database: "house_community"
})

app.listen(port, () => {
    console.log(`Example API listening at http://localhost:${port}`);
    connection.connect(err => {
        if (err) throw err;
        console.log('Connected to DB!')
    })
});

//!GET Functions

app.get("/", (req, res) => {
    res.send('Hello world');
});

app.get('/api/users', (req, res) => {
    let query = `SELECT * FROM house_community.Usuarios`;
    connection.query(query, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.send(rows);
    });
})

app.get('/api/adverts', (req, res) => {
    let query = `SELECT * FROM house_community.Anuncios`;
    connection.query(query, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.send(rows);
    });
})

app.get('/api/properties', (req, res) => {
    let query = `SELECT * FROM house_community.Propiedades`;
    connection.query(query, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.send(rows);
    });
})

app.get('/api/residents', (req, res) => {
    let query = `SELECT * FROM house_community.Residentes`;
    connection.query(query, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.send(rows);
    });
})

//!POST Functions
app.post('/api/users', (req, res) => {
    let query = `INSERT INTO house_community.Usuarios (Email, Password, NumeroTel) VALUE (?,?,?)`;

    let values = [
        req.body['Email'],
        req.body['Password'],
        req.body['NumeroTel'],
    ]

    connection.query(query, values, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.json(`Added Successfully`);
    })
})

//!PUT Functios
app.put('/api/users', (req, res) => {
    let query = `INSERT INTO house_community.Usuarios (Email, Password, NumeroTel) VALUE (?,?,?)`;

    let values = [
        req.body['Email'],
        req.body['Password'],
        req.body['NumeroTel'],
    ]

    connection.query(query, values, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.json(`Added Successfully`);
    })
})

//!DELETE Functions
app.delete('/api/users', (req, res) => {
    let query = `INSERT INTO house_community.Usuarios (Email, Password, NumeroTel) VALUE (?,?,?)`;

    let values = [
        req.body['Email'],
        req.body['Password'],
        req.body['NumeroTel'],
    ]

    connection.query(query, values, (err, rows, fields) => {
        if (err) res.send('Failed');

        res.json(`Added Successfully`);
    })
})
