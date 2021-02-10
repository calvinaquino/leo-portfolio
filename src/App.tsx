import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArticleView } from "./components/ArticleView";
import { SubmitView } from "./components/SubmitView";

import { DataStore } from "@aws-amplify/datastore";
import { Article } from "./models";

const Screen = styled.div`
  flex: 1;
`;

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
    <Screen>
      {articles.map((article) => (
        <ArticleView
          key={article.id}
          title={article.title}
          content={article.content ?? "No content"}
          onDelete={async () => {
            await DataStore.delete({ id: article.id });
          }}
        />
      ))}
      <SubmitView onSubmit={createArticle} />
    </Screen>
  );
};

export default App;
