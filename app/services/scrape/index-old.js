'use strict';

const getGroup = require('./getGroup');
const getLocation = require('./getLocation');
const insertPosts = require('./insertPosts');
const insertGeotag = require('./insertGeotag');
const r = require('rethinkdb');

const config = require('./constants/config');
const groups = config.freecycle.groups;

const main = () => {
  groups.forEach( group => {
    getGroup(group, function(err, results){
      if (!err){
        //insert posts to DB
        insertPosts( results, response => {
          response.changes.forEach( insertedPost => {
            if (!!insertedPost) { getLocation(insertedPost, (err, geotag) => {
              if (!err) {
                insertGeotag(insertedPost, geotag, res => {
                  //tag inserted
                  //console.log("TAG TO INSERT: " + JSON.stringify(geotag));
                })
              } else {
                  console.log("[ERROR] there was an error getting the location: " + err);
                };
              })
            }
          });
        });
      } else {
        console.log("[ERROR] there was a scraping error: " + err);
      }
    });
  });
};

//----entry----
main();

//setInterval(main, 60*1000);
