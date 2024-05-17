import { Post } from "../../domain/post/entities/Post.ts"
import { PostRepositoryInterface } from "../../domain/post/repositories/PostRepositoryInterface.ts"

/**
 * 投稿のリポジトリ
 */
export class PostRepository implements PostRepositoryInterface {
  async findAll() {
    // TODO DBから取得する処理を要実装
    return await [
      new Post("afd3nd", "投稿文章1", new Date()),
      new Post("1sns32", "投稿文章2", new Date(), new Date()),
    ]
  }
}
