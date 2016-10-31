'use strict';

const request = require('superagent');
const config = require('../constants/config');
const Throttle = require('superagent-throttle');

const fr = config.freecycle;
const go = config.google;

const throttle = new Throttle (
  { active: true, rate: 10, ratePer: 1000, concurrent: 1 }
);

const getLocation = post => {
  const promise = new Promise( (resolve,reject) => {
    if (!!post.new_val.location) {
      request
        .get(go.geolocationURL)
        .query({ address : post.new_val.location, region : 'uk' })
        .set('Cache-Control', 'no-cache')
        .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36')
        .use(throttle.plugin)
        .end( (err,res) => {
          if (res && res.body && res.body.status && res.body.status === 'OK' && !err) {
            _filterLocations(res.body, resolve);
          } else if (res && res.body && res.body.status && res.body.status === 'ZERO_RESULTS') {
                resolve(null);
                console.log(" [Google] No location found");
              } else {
                reject(" [Google] API unknown error: " + err + res);
              }
          });
    } else {
      resolve(null);
      console.log(" [getLocation] No location given by user");
    }
  })
  return promise;
};

let _filterLocations = (locations, cb) => {
  let list = locations.results;
  let listGB = list.filter( location => location.address_components.some(_isInGB) );
  if (!!listGB[0]) { cb(listGB[0].geometry.location) } else {
    console.log(" [Google] No location found");
    cb(null);
  };
};

let _isInGB = component => component.short_name === 'GB';

module.exports = getLocation;
