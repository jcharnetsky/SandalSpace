import { useEffect, useState } from "react";
import type Article from "./Article";
import ArticleList from "./ArticleList";

export default function ArticleListContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles as Article[]);
      })
      .finally(() => setIsLoading(false));

    return;
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : articles ? (
    <ArticleList articles={articles} />
  ) : (
    <span>Error</span>
  );
}
