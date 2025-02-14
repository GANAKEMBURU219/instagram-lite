import { Context } from "hono";
import { signupSchema, signinSchema } from "../validators/userValidator.js"
import { safeParse , flatten } from "valibot"
import { existedUsers , userData } from "../services/dbQueries.js";
import bcrypt from "bcrypt";
class Signup {
    async  userSignUp(c:Context){
        try{
            const body = await c.req.json();
            const validatedData = await safeParse(signupSchema,body,{abortEarly:true})
            if(!validatedData.success){
                return c.json({error:flatten(validatedData.issues).nested})
            } 
            const existedUser = await existedUsers(body);
            if(existedUser.length > 0){
               return c.json({message:"user already existed"},400)
            }
            const hashedPassword = await bcrypt.hash(body.password,10)
            body.password = hashedPassword;
            await userData(body);
            return c.json({ message: "user registered successful",user:body}, 201);
        } 
        catch (error) {
              return c.json({ error: "Internal server error" }, 500);
        }
    }
}
class Signin{
    async  userSignIn(c:Context){
        try{
            const body = await c.req.json();
            const validatedData = await safeParse(signinSchema,body,{abortEarly:true})
            if(!validatedData.success){
                return c.json({error:flatten(validatedData.issues).nested})
            }
            const existedUser =await existedUsers(body);
            if(existedUser.length === 0){
               return c.json({message:"user not existed"},400)
            }
            const passwordCompare = await bcrypt.compare(body.password,existedUser[0].password)
            if(!passwordCompare){
                return c.json({ message: " incorrect password"}, 400);
            }
            return c.json({ message: "user login successful",user:body}, 201);
        } 
        catch (error) {
              return c.json({ error: "Internal server error" }, 500);
        }
    }
}

export const signUp = new Signup();
export const signIn = new Signin();
