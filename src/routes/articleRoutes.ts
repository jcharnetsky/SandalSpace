import { articleDrizzleRepository } from "@/repository/drizzle/articleDrizzleRepository";
import type { BunRequest } from "bun";
import z from "zod";

const repository = articleDrizzleRepository;

export const articleRoutes = {
  "/api/articles": {
    // Get a list of all articles
    GET: async () => {
      let response = {};
      await repository.getAll().then((result) => {
        console.log(`Articles: ${JSON.stringify(result)}`);
        response = result;
      });

      return Response.json(response);
    },
    // Create an article
    POST: async (req: BunRequest) => {
      let response = {};

      const body = await req.json();
      await repository.create(body).then((result) => {
        console.log(`Article: ${JSON.stringify(result)}`);
        response = result;
      });
      return Response.json(response);
    },
  },
  "/api/articles/:id": {
    // Get an article by its ID
    GET: async (req: BunRequest) => {
      const id = Number(req.params.id);
      const article = await repository.getById(id);
      return Response.json(article);
    },
    // Update an article by its ID
    PATCH: async (req: BunRequest) => {
      const data = await req.json();
      console.log(`PATCH article: ${JSON.stringify(data)}`);
      const Article = z.object({
        authorId: z.number(),
        title: z.string(),
        body: z.json(),
        exerpt: z.string(),
        tags: z.string().array().optional(),
      });

      const id = Number(req.params.id);
      const body = Article.parse(data);
      const article = await repository.updateById(id, body);
      return Response.json(article);
    },
    // Delete an article by its ID
    DELETE: async (req: BunRequest) => {
      const id = Number(req.params.id);
      const results = await repository.deleteById(id);

      console.log(`Result: ${JSON.stringify(results)}`);
      if (results[0].affectedRows == 0) {
        return new Response("Row does not exits", { status: 404 });
      } else if (results[0].affectedRows > 1) {
        // Should only ever delete one article
        return new Response("Server Error", { status: 500 });
      }
      return new Response("Deleted row");
    },
  },
};
