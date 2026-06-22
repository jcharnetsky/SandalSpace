import { db } from "@/db";
import { articles } from "@/schema/articles";
import { eq } from "drizzle-orm";
import { BasicDrizzleRepository } from "../basicDrizzleRepository";

export const articleDrizzleRepository = new BasicDrizzleRepository(articles);
