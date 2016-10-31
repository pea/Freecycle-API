'use strict';

const r = require('rethinkdb');
const config = require('../constants/config');

const dbConfig = config.db;

r.connect(dbConfig)
.then( conn => {
  r.dbCreate('freecycle').run(conn);
  r.tableCreate('posts').run(conn);
});