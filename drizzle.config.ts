import fs from "fs"
import dotenv from "dotenv"
dotenv.config()
export default {
    schema : "./src/db/schemas/*",
    out : "./drizzle",
    dialect : 'postgresql',
    dbCredentials:{
          host: process.env.DB_HOST,
          port:Number( process.env.PORT),
          user: process.env.USER,
          password: process.env.PASSWORD,
          database: process.env.DB,
          ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync("./ca.pem").toString(),
          },
    }
}
