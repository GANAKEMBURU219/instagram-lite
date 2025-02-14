import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "./db/dbConnection.js"
import routes from "./routes/route.js"

const app = new Hono()

app.route('/', routes)

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
