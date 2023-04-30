// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

function initDb(callback) {
  if(_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

function getDb() {
  if (!_db) {
    throw Error('Database is not initialized');
  }
  return _db;
};

module.exports = {initDb, getDb};