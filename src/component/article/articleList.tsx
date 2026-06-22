import "../../index.css";
import type { Article } from "./article";
import ArticlePreview from "./articlePreview";

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
