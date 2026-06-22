import { articles } from "./articles";
import { articlesTags } from "./articlesTags";
import { tags } from "./tags";
import { users } from "./users";

export type tables = typeof articles | typeof tags | typeof users;
