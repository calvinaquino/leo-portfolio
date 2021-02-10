import React, { useState, useEffect } from "react";
import { ArticleView } from "./components/ArticleView";
import { SubmitView } from "./components/SubmitView";

import { DataStore } from "@aws-amplify/datastore";
import { Article } from "./models";
import { Container, Grid } from "semantic-ui-react";

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);

  const fetchArticles = async () => {
    console.log("fetchArticles");
    const articlesResult = await DataStore.query(Article);
    console.log({ articlesResult });
    setArticles(articlesResult);
  };

  const createArticle = async (title: string, content: string) => {
    console.log("createArticles");
    await DataStore.save(new Article({ title, content }));
  };

  const deleteArticle = async (article: Article) => {
    DataStore.delete(article);
  };

  useEffect(() => {
    console.log("subscribe to articles");
    const subscription = DataStore.observe(Article).subscribe(() => {
      console.log("atricle subscription event");
      fetchArticles();
    });
    fetchArticles();
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Container style={{ margin: 25 }}>
      {articles.map((article) => (
        <ArticleView
          key={article.id}
          title={article.title}
          content={article.content ?? "No content"}
          onDelete={() => deleteArticle(article)}
        />
      ))}
      <SubmitView onSubmit={createArticle} />
    </Container>
  );
};

export default App;
