'use strict';

const r = require('rethinkdb');
const config = require('../constants/config');

const dbConfig = config.db;
const groups = config.freecycle.groups;

const insertPosts = data => {
  const promise = new Promise( (resolve, reject) => {
    if(!data){ resolve(null) }
    r.connect(dbConfig).then( conn => {
      r.table('posts')
        .insert(data, {conflict: 'update', returnChanges: true})
        .run(conn)
        .then( res => {
          conn.close( () => resolve( _filterChanges(res, data[0].group) ) )
        })
        .error( err => {
          conn.close( () => reject(err) )
        });
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
