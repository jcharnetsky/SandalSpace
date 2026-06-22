import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/schema/",
  out: "./drizzle",
  casing: "snake_case",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
  },
});
