import React from "react";

export default function TagList({ tags }: { tags?: string[] }) {
  return (
    <>
      {tags?.map((tag) => {
        return (
          <p className="text-dark-secondary" key={tag}>
            {tag}
          </p>
        );
      })}
    </>
  );
}
