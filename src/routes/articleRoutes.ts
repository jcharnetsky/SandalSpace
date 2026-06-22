import { articleDrizzleRepository } from "@/repository/drizzle/articleDrizzleRepository";
import type { BunRequest } from "bun";

const repository = articleDrizzleRepository;

export const articleRoutes = {
  "/api/articles": {
    // Get a list of all articles
    GET: async (req: BunRequest) => {
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
    // Delete an article by its ID
    DELETE: async (req: BunRequest) => {
      const id = Number(req.params.id);
      const article = await repository.deleteById(id);
      return Response.json({ deleted: article });
    },
  },
};
