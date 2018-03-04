webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  window.fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=7b670b164aa941c88eef1d1350fa4296').then(function (response) {
    return response.json();
  }).then(function (response) {
    var articles = response.articles;

    var content = '';
    articles.forEach(function (element) {
      var article = new ArticleDecorator(new Article(element));

      content += '\n          <div class="row mt-3">\n            <div class="media">\n              <div class="col-4">\n                <a href=' + article.url + '>\n                  <img src=' + article.urlToImage + ' width=\'100%\'>\n                </a>\n              </div> \n              <div class="media-body col-8">\n                <h5>' + article.title + '</h5>\n                <div class="mb-3">' + article.date + '</div>\n                <div>\n                  ' + article.description + '\n                  <a href=' + article.url + '>>></a>\n                </div>\n              </div>\n            </div>\n          </div>\n          ';
    });
    document.getElementById('feed').innerHTML = content;
  });
};

// prototype
function Article(article) {
  this.url = article.url;
  this.urlToImage = article.urlToImage;
  this.title = article.title;
  this.publishedAt = article.publishedAt;
  this.description = article.description;
}

// decorator
function ArticleDecorator(article) {
  this.url = article.url;
  this.urlToImage = article.urlToImage;
  this.title = article.title;
  this.description = article.description;
  this.publishedAt = article.publishedAt;

  this.date = function () {
    var date = new Date(article.publishedAt);
    return date.toLocaleDateString();
  }();
}

/***/ })
]);