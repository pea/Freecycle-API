'use strict';

const r = require('rethinkdb');
const config = require('../constants/config');

const dbConfig = config.db;

let insertLocation = (insertedPost, location_geometry) => {

  let data = {id : insertedPost.new_val.id, location_geometry : location_geometry};

  const promise = new Promise( (resolve, reject) => {
    r.connect(dbConfig).then( conn => {
      r.table('posts')
        .insert(data, {conflict: 'update', returnChanges: true})
        .run(conn).then( res => {
            if (res.inserted > 0 || res.replaced > 0) {
              //console.log(" [location] Updated: " + res.replaced);
              resolve();
              conn.close();
            } else {
              //no geotags inserted
              reject(" [insertLocation] Perhaps no post given?");
              conn.close();
            }
        })
        .error( err => {
          conn.close( () => reject(err) )
        });
    });
  });
  return promise;
}

module.exports = insertLocation;
