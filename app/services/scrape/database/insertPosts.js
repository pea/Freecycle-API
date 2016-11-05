'use strict';

const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
const config = require('../constants/config');

const dbConfig = config.db;
const groups = config.freecycle.groups;

const insertPosts = data => {
  const promise = new Promise( (resolve, reject) => {
    if(!data){ resolve(null) }

    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) () => { db.close(); reject(err); }
      db.collection('posts').insert(data, (err,docsInserted) => {
        console.log(docsInserted);
      });
      db.close();
    });

  });
  return promise;
};

const _filterChanges = (response, group) => {
  if (response.inserted > 0 || response.replaced > 0) {
    console.log(" [" + group + "] New: " + response.inserted + " Updated: " + response.replaced);
    return response.changes;
  } else {
    console.log(" [" + group + "] Nothing new found");
    return null;
  }
};

module.exports = insertPosts;
