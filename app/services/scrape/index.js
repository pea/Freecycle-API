'use strict';

const getPosts = require('./api/getPosts');
const insertPosts = require('./database/insertPosts');
const getLocation = require('./api/getLocation');
const insertLocation = require('./database/insertLocation');
const r = require('rethinkdb');

const config = require('./constants/config');
const groups = config.freecycle.groups;

/*
1. get posts for a group
2. insert the posts to DB
3. if they are new posts, get their locations
4. insert locations to DB
*/

let scrape = group => {
  return getPosts(group).then( posts => {
      console.log(" [" + group + "] Scraped posts: " + (!!posts ? posts.length : 0));
      return insertPosts(posts); //post results to DB and return changes
    })

    /*.then( changes => {
      if (changes) {
        let promises = [];
        changes.forEach( post => {
          promises.push(
            getLocation(post)
              .then( location => {
                console.log(post);
                return insertLocation(post, location);
              })
              .catch( err => console.log(err))
          );
        })
        return Promise.all(promises);
      } else {*/
        return Promise.resolve(null);
      //}
    //});

    /*.then( () => {
      console.log(" [" + group + "] Finished");
    })

    .catch(err => console.log(err));*/
}

console.log("******[SCRAPING STARTED FOR " + groups.length + " groups]******");
let getAllPosts = groups.map( group => scrape(group) );
Promise.all(getAllPosts).then( () => console.log("******[SCRAPING FINISHED]******"));
