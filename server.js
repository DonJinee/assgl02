const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./DB/connect');

const app = express();
const Port = process.env.Port || 3000;

app.get('/', (req, res) => {
    res.send('Utibe Omachona');
})

app.get('/secondName', (req, res) => {
    res.send('Sunday Ochigbo');
})

app
   .use(bodyParser.json())
   .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
   })
   .use('/', require('./routes'))
   
mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(Port); 
        console.log(`Server is running on port ${Port}`);
        console.log('Database connected!!!')
    }
});