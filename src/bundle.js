//import { feed } from "./feed.js"
//'use strict';

document.getElementById('feedData').onclick = function() {
  require.ensure(['./feed'], function(require) {
    let feed = require('./feed');

    feed();
  });
};
