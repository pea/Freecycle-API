'use strict';

const parsePosts = require('../helpers/parsePosts');
const request = require('superagent');
const config = require('../constants/config');
const cheerio = require('cheerio');
const sugar = require('sugar');
const Throttle = require('superagent-throttle');

const throttle = new Throttle (
  { active: true, rate: 20, ratePer: 1000, concurrent: 10 }
);

const getPosts = groupName => {
  let promise = new Promise( (resolve,reject) => {
    const fr = config.freecycle;
    request
      .get(fr.url + groupName + fr.filter)
      .set('Cache-Control', 'no-cache')
      .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36')
      .use(throttle.plugin)
      .end( (err,res) => {
        if(err) {
          reject(err);
        } else {
          parsePosts(res.text, groupName).then( posts => {
            resolve(posts);
          });
        }
      });
  });
  return promise;
}

module.exports = getPosts;
