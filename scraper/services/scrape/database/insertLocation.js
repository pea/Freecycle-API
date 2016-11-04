'use strict';

const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
const config = require('../constants/config');

const dbConfig = config.db;

let insertLocation = (insertedPost, location_geometry) => {

  let data = {_id : insertedPost.new_val.id, location_geometry : location_geometry};

  const promise = new Promise( (resolve, reject) => {

    MongoClient.connect(dbConfig.url, (err, db) => {
      db.collection('posts').update(
        {
          _id: insertedPost.new_val.id
        },
        {
          _id: insertedPost.new_val.id,
          location_geometry: location_geometry
        }
      );
    });

    resolve();

  });
  return promise;
}

module.exports = insertLocation;
