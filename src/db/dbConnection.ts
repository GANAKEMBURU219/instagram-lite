import { drizzle } from "drizzle-orm/node-postgres";
import dotenv from "dotenv"
import fs from "fs";
import { users } from "./schemas/userData.js";
import pg from "pg";
dotenv.config()


const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port:Number( process.env.PORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
});

export const db = drizzle(pool, {
  schema: {users},
});

db.execute("SELECT 1")
  .then(() => console.log(" CONNECTED SUCCESSFULLY"))
  .catch(() => console.error("FAILED TO CONNECT WITH DB"));