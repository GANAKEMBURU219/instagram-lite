import {db} from "../db/dbConnection.js"
import {users} from "../db/schemas/userData.js"
import { eq } from "drizzle-orm";
export const existedUsers =async  (body:any)=>{
    return await db.select().from(users).where(eq(users.email,body.email))
}
export const userData = async (body:any)=>{
    return await db.insert(users).values({
        firstname: body.firstname,
        lastname : body.lastname,
        phoneNumber: body.phoneNumber,
        email: body.email,
        password: body.password,
        gender : body.gender
    })
}