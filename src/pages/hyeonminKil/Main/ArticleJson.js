import React, { useState, useEffect } from 'react';
import ArticleComponent from './ArticleComponent';

function ArticleJson() {
  const [articleComponentList, setArticleComponentList] = useState([]);
  useEffect(() => {
    fetch('/data/ArticleComponentData.json')
      .then(response => response.json())
      .then(data => setArticleComponentList(data));
  }, []);

  return (
    <>
      {articleComponentList.map(articleComponent => {
        return (
          <ArticleComponent
            key={articleComponent.id}
            name={articleComponent.name}
            like={articleComponent.like}
          />
        );
        // key={articleComponent.id}
        // {articleComponent.name}
        // {articleComponent.like}
      })}
    </>
  );
}
export default ArticleJson;
