'use strict';

window.fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=7b670b164aa941c88eef1d1350fa4296').then(function (response) {
  return response.json();
}).then(function (response) {
  var articles = response.articles;

  var content = '';
  articles.forEach(function (article) {
    var date = new Date(article.publishedAt);

    content += '\n        <div class="row mt-3">\n          <div class="media">\n            <div class="col-4">\n              <a href=' + article.url + '>\n                <img src=' + article.urlToImage + ' width=\'100%\'>\n              </a>\n            </div> \n            <div class="media-body col-8">\n              <h5>' + article.title + '</h5>\n              <div class="mb-3">' + date.toLocaleDateString() + '</div>\n              <div>\n                ' + article.description + '\n                <a href=' + article.url + '>>></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        ';
  });
  document.getElementById('feed').innerHTML = content;
});