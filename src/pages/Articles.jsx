import React, { useState, useEffect } from 'react';

function Home() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    (async function () {

      const url = "http://studi-live-spa-final:8888/api/articles";
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      });
    
      const articles = await response.json();

      setArticles(articles);
    })();

  }, []);

  return (

    <main>
      <h1>Nos derniers articles :</h1>
          <div>

            {articles.map(article => {
              return (
                <article key={article.id}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </article>
                
              );
            })}
            
          </div>


    </main>

  );
}

export default Home;
