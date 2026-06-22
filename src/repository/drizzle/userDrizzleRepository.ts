import { BasicDrizzleRepository } from "../basicDrizzleRepository";
import { users } from "@/schema/users";

export const userDrizzleRepository = new BasicDrizzleRepository(users);
