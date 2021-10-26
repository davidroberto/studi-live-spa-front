import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

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
    <>
    <Header color="blue"/>
      <main>
        <h1>Nos derniers articles :</h1>
            <div>


              {articles.length > 0 ?
                <>
                  {articles.map(article => {
                    return (
                      <article key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                      </article>
                      
                    );
                  })}
                </>
              :
                <p>Loading</p>
              }
              


              
            </div>

      </main>
    </>

  );
}

export default Home;
