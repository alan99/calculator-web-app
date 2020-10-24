import { addRecord } from './records.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const jsonParser = bodyParser.json();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    console.log('Hello All');

    res.send('Hello World');
});

app.post('/addRecord', jsonParser, (req, res) => {
    const record = req.body;
    addRecord(record);

    res.send('success');
});

app.listen(3000);