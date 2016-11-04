'use strict';

var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const config = require('../services/scrape/constants/config');

const dbConfig = config.db;
const groups = config.freecycle.groups;

/**
 * /api/offers Endpoint
 */

router.get('/offers', (req, res, next) => {
  MongoClient.connect(dbConfig.url, function(err, db) {
    db.collection('posts').find({}).toArray(function(error, documents) {
      if (err) throw error;
      db.close();
      res.send(documents);
    });
  });
});

/**
 * /api/offers/group Endpoint
 */

router.get('/offers/:group', (req, res, next) => {
  MongoClient.connect(dbConfig.url, function(err, db) {
    db.collection('posts').find({"group":req.params.group}).toArray(function(error, documents) {
      if (err) throw error;
      db.close();
      res.send(documents);
    });
  });
});

module.exports = router;