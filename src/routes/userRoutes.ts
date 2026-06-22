import { articleDrizzleRepository as articleRepository } from "@/repository/drizzle/articleDrizzleRepository";
import { userDrizzleRepository } from "@/repository/drizzle/userDrizzleRepository";
import type { BunRequest } from "bun";

const repository = userDrizzleRepository;

export const userRoutes = {
  "/api/users": {
    // Get a list of all users
    GET: async (req: BunRequest) => {
      let response = {};

      await repository.getAll().then((result) => {
        console.log(`Users: ${JSON.stringify(result)}`);
        response = result;
      });

      return Response.json(response);
    },
    // Create a user
    POST: async (req: BunRequest) => {
      let response = {};

      const body = await req.json();
      await repository.create(body).then((result) => {
        console.log(`User: ${JSON.stringify(result)}`);
        response = result;
      });

      return Response.json(response);
    },
  },
  "/api/user/:id": {
    // Get a user by its ID
    GET: async (req: BunRequest) => {
      const id = Number(req.params.id);
      const article = await articleRepository.getById(id);
      return Response.json(article);
    },
    // Delete an article by its ID
    DELETE: async (req: BunRequest) => {
      const id = Number(req.params.id);
      const article = articleRepository.deleteById(id);
      return Response.json({ deleted: article });
    },
  },
};
