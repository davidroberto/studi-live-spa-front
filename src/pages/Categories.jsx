import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    (async function () {

      const url = "http://studi-live-spa-final:8888/api/categories";
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      });
    
      const categories = await response.json();

      setCategories(categories);
    })();

  }, []);

  return (
    <>
      <Header color="yellow"/>
      <main>
        <h1>Hello Studi</h1>
          <div>

            {categories.map(category => {
              return (
                <article key={category.id}>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </article>
                
              );
            })}
            
          </div>
      </main>
    </>

  );
}

export default Categories;
