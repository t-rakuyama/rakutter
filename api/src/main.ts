const handler = (req: Request) => {
  console.log(req)
  return new Response('Hello World!', { status: 200 })
}

Deno.serve(handler)
