window.fetch('https://newsapi.org/v1/articles?source=bbc-news&apiKey=7b670b164aa941c88eef1d1350fa4296')
  .then(function(response) {
    return response.json();
   })
  .then(function(response) {
    const articles = response['articles'];
    let content = '';
    articles.forEach(function(article) {
      let date = new Date(article.publishedAt);
      
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
              <div class="mb-3">${date.toLocaleDateString()}</div>
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
