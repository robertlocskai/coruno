import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/User";
import { AppRole } from "../models/AppRole";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "root",
  database: process.env.DATABASE_NAME || "coruno_database",
  entities: [User, AppRole],
  synchronize: true,
});
