import { assertEquals } from 'https://deno.land/std@0.65.0/testing/asserts.ts'

import { PostResponseService } from './PostResponseService.ts'
import { Post } from '../entities/Post.ts'
import { PostRepositoryInterface } from '../repositories/PostRepositoryInterface.ts'

class PostRepositoryMock implements PostRepositoryInterface {
  async findAll() {
    return await [
      new Post('1', '投稿文章', new Date('2023-12-22'), new Date('2023-12-23')),
    ]
  }
}

Deno.test('findAllでAPI返却用の投稿一覧を取得できる', async () => {
  const postResponseService = new PostResponseService(new PostRepositoryMock())
  const posts = await postResponseService.findAll()

  assertEquals(posts, [
    {
      id: '1',
      text: '投稿文章',
      createdAt: new Date('2023-12-22'),
      updatedAt: new Date('2023-12-23'),
    },
  ])
})
