import { assertEquals } from 'https://deno.land/std@0.65.0/testing/asserts.ts'
import { spy, stub } from 'https://deno.land/x/mock@0.15.2/mod.ts'

import { PostRepository } from './PostRepository.ts'

Deno.test('findAllで投稿一覧を取得できる', async () => {
  // TODO DBから取得するように改修する際にテスト方法を検討
})
