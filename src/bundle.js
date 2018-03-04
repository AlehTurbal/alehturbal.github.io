document.getElementById('feedData').onclick = function() {
  require.ensure(['./feed'], function(require) {
    let feed = require('./feed');

    feed();
  });
};
