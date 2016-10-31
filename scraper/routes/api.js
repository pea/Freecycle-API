'use strict';

var express = require('express');
var router = express.Router();

const r = require('rethinkdb');
const config = require('../services/scrape/constants/config');

const dbConfig = config.db;
const groups = config.freecycle.groups;

router.get('/offers/:group', (req, res, next) => {
  if (groups.indexOf(req.params.group) == -1) {
    return res.send({error: "InalidGroup"});
  }
  r.connect(dbConfig)
  .then( conn => {
      r.table("posts").filter({
        "group": req.params.group,
        "type": "offer"
      })
      .limit(100)
      .run(conn, (err, cursor) => {
        var rows = [];
        cursor.each((err, row) => {
          if (err) throw err;
          rows.push(row);
        }, () => {
          res.send(rows);
        }); 
      });
  });
});

module.exports = router;