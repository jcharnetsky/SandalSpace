import { useEffect, useState } from "react";
import type { Article } from "./article";
import ArticleList from "./articleList";

export default function ArticleListContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    fetch("/api/articles").then((res) =>
      res
        .json()
        .then((res) => {
          console.log(`Articles: ${JSON.stringify(res)}`);
          setArticles(res as Article[]);
        })
        .finally(() => setIsLoading(false)),
    );
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : articles ? (
    <ArticleList articles={articles} />
  ) : (
    <span>Error</span>
  );
}
