'use strict';

const cheerio = require('cheerio');
const sugar = require('sugar');
const config = require('../constants/config');

const parsePosts = (rawHTML, groupName) => {
  const $ = cheerio.load(rawHTML);
  return new Promise( (resolve, reject) => {
    let posts = [];

    $('tr').each(function(i, tr) {
      let post = {};
      let leftCell = $(tr).children().eq(0).text();
      let rightCell = $(tr).children().eq(1).text();

      post._id = leftCell.match(/#(\d+)/m)[1];
      post.type = leftCell.includes('OFFER') ? 'offer' : 'unknown';
      post.group = groupName;
      post.date = Date.create(leftCell.match(/\n.+\n(.+)/)[1].trim());
      post.description = rightCell.match(/(.+)/)[1].trim();

      if (rightCell.match(/(\([\S\s]+?\)+)/g) === null) {
        post.location = null;
      } else {
        post.location = rightCell.match(/(\([\S\s]+?\)+)/g).pop().trim();
      }

      if (!!post.location){
        post.description = post.description.replace(post.location, '').trim(); //remove location from description
        post.location = post.location.slice(1,-1).trim(); //remove the brackets
      }

      post.url = config.freecycle.url + post.group + '/posts/' + post.id;
      post.image_url = config.freecycle.url + post.group + '/post_image/' + post.id;

      posts.push(post);
    });

    if (!!posts[0]) {
      resolve(posts);
    } else {
      console.log(" [" + groupName + "] No posts in group");
      resolve(null); //no posts in group
    }
  });
}

module.exports = parsePosts;
