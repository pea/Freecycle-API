'use strict';

var express = require('express');
var router = express.Router();

/**
 * / Endpoint
 */

router.get('/', (req, res, next) => {
  res.render('home');
});

module.exports = router;