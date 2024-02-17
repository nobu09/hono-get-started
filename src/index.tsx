import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

app.get('/', (c: any) => {
  return c.text('Hello, my first Hono app!')
})

app.get('/posts/:id', (c: any) => {
  const page = c.req.query('page')
  const id = c.req.param('id')
  c.header('X-Message', 'Hi!')

  return c.text(`You want see ${page} of ${id}`)
})

// POST
app.post('/posts', (c) => c.text('Created!', 201))

// DELETE
app.delete('/posts/:id', (c) => c.text(`${c.req.param('id')} is deleted!`))

const View: FC= () => {
  return (
    <html>
      <body>
        <h1>Hello, my first Hono JSX!</h1>
      </body>
    </html>
  )
}

app.get('/page', (c: any) => c.html(<View />))

export default app

