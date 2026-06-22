import type { Article } from "@/component/article/article";
import "../../index.css";
import "./ArticlePreview.css";
import TagList from "@/component/tag/tagList";

export default function ArticlePreview({ article }: { article: Article }) {
  const previewCharacterLimit = 500;

  let truncatedBody = article.body.substring(0, previewCharacterLimit);
  const lastSpaceIndex = truncatedBody.lastIndexOf(" ");

  // No spaces
  if (lastSpaceIndex === -1) {
    truncatedBody += "...";
  } else {
    truncatedBody = truncatedBody.substring(0, lastSpaceIndex) + "...";
  }

  return (
    <div className="bg-dark article-preview">
      <h1 className="text-dark article-title">{article.title}</h1>
      <h4 className="text-dark-secondary article-date-published">
        {new Date(article.created).toLocaleDateString()}
      </h4>
      <p className="text-dark-secondary article-body">{truncatedBody}</p>
      <TagList tags={article?.tags} />
    </div>
  );
}
