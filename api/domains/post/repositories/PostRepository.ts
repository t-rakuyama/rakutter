import { Post } from '../entities/Post.ts'

export class PostRepository {
  async findAll() {
    // TODO 要実装
    return [
      new Post('1', '投稿文章1', new Date()),
      new Post('2', '投稿文章2', new Date()),
    ]
  }
}
