import { Application } from 'https://deno.land/x/oak@v12.6.1/mod.ts'

import router from './router.ts'

const app = new Application()

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${hostname ?? 'localhost'}:${port}`,
  )
})
app.addEventListener('error', (e) => {
  console.log(e.error)
})
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
