import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c: any) => {
  return c.text('Hello, my first Hono app!')
})

export default app
