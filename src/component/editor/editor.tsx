// TypeScript users only add this code
import React, { useEffect, useState } from "react";
import type BaseEditor from "slate";
import { Operation } from "slate";
import { createEditor } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import type { articles } from "@/schema/articles";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: typeof BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export default function Editor() {
  const id = 1;

  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()));

  const [initialValue, setInitialValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  const [article, setArticle] = useState<typeof articles.$inferInsert>();

  useEffect(() => {
    fetch(`/api/articles/${id}`).then((res) =>
      res.json().then((res) => {
        console.log(`Initial article: ${JSON.stringify(res[0])}`);
        setArticle({
          id: res[0].id,
          authorId: res[0].authorId,
          title: res[0].title,
          body: res[0].body,
          exerpt: res[0].exerpt,
        });
        const elements = JSON.parse(res[0].body);
        setInitialValue(elements);
      }),
    );
  }, []);

  const saveArticle = (article: typeof articles.$inferInsert) => {
    console.log(`Saving article: ${JSON.stringify(article)}`);
    fetch(`/api/articles/${article.id}`, {
      method: "PATCH",
      body: JSON.stringify(article),
    }).then((res) =>
      res.json().then((res) => {
        console.log(`Modified article: ${JSON.stringify(res)}`);
      }),
    );
  };

  return (
    <>
      {article ? (
        <>
          <Slate
            editor={editor}
            initialValue={initialValue}
            onChange={(value) => {
              const isAstChange = editor.operations.some(
                (op: Operation) => "set_selection" !== op.type,
              );
              if (isAstChange) {
                console.log(`Content: ${JSON.stringify(value)}`);
                setArticle({
                  id: article.id,
                  authorId: article.authorId,
                  title: article.title,
                  body: value,
                  exerpt: article.exerpt,
                });
              }
            }}
          >
            <Editable />
          </Slate>
          <button onClick={() => saveArticle(article)}>Save</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
