import { assertEquals } from 'https://deno.land/std@0.65.0/testing/asserts.ts'

import { Post } from './Post.ts'

Deno.test('idを取得できる', () => {
  const id = 'xm3m4km24'
  const post = new Post(id, 'test text', new Date())

  assertEquals(post.getId(), id)
})

Deno.test('textを取得できる', () => {
  const text = 'test text'
  const post = new Post('xm3m4km24', text, new Date())

  assertEquals(post.getText().getValue(), text)
})

Deno.test('createdAtを取得できる', () => {
  const createdAt = new Date()
  const post = new Post('xm3m4km24', 'test text', createdAt)

  assertEquals(post.getCreatedAt(), createdAt)
})

Deno.test('updatedAtを取得できる', () => {
  const updatedAt = new Date()
  const post = new Post('xm3m4km24', 'test text', new Date(), updatedAt)

  assertEquals(post.getUpdatedAt(), updatedAt)
})
