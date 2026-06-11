import { useEffect, useState } from "react";
import "../index.css";
import ArticlePreview from "./ArticlePreview";
import type Article from "@/Article/Article";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <ul className="article-list">
      {articles?.map((article) => (
        <li key={article.title}>
          <ArticlePreview article={article} />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
