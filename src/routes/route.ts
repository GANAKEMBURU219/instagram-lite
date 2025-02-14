import { Hono } from 'hono'
import {signUp,signIn} from "../controllers/userController.js"

const routes = new Hono()

routes.post('/signup',(c)=>signUp.userSignUp(c))
routes.post('/signin',(c)=>signIn.userSignIn(c))

export default routes;