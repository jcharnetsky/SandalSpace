import type { Article } from "@/component/article/article";
import "../../index.css";
import "./ArticlePreview.css";
import TagList from "@/component/tag/tagList";
import React from "react";

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <div className="bg-dark article-preview">
      <h1 className="text-dark article-title">{article.title}</h1>
      <h4 className="text-dark-secondary article-date-published">
        {new Date(article.created).toLocaleDateString()}
      </h4>
      <p className="text-dark-secondary article-body">{article.exerpt}</p>
      <TagList tags={article.tags} />
    </div>
  );
}
