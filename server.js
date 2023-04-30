const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./DB/connect');

const app = express();
const Port = process.env.Port || 3000;

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