
module.exports = function() {
  window.fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=7b670b164aa941c88eef1d1350fa4296')
    .then(response => response.json())
    .then(function(response) {
      const { articles } = response;
      let content = '';
      articles.forEach(function(element) {
        const article = new ArticleDecorator(new Article(element));
        
        content += `
          <div class="row mt-3">
            <div class="media">
              <div class="col-4">
                <a href=${article.url}>
                  <img src=${article.urlToImage} width='100%'>
                </a>
              </div> 
              <div class="media-body col-8">
                <h5>${article.title}</h5>
                <div class="mb-3">${article.date}</div>
                <div>
                  ${article.description}
                  <a href=${article.url}>>></a>
                </div>
              </div>
            </div>
          </div>
          `;
      });
      document.getElementById('feed').innerHTML = content;
    });
}

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

  this.date = (function() {
    const date = new Date(article.publishedAt);
    return date.toLocaleDateString();
  })();
}
