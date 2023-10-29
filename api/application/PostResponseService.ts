import { Post } from '../domain/post/entities/Post.ts'
import { PostRepository } from '../infrastructure/repositories/PostRepository.ts'

export type PostResponse = {
  id: string
  text: string
  createdAt: Date
  updatedAt?: Date
}

/**
 * 投稿のAPI返却用サービス
 */
export class PostResponseService {
  /**
   * API返却用の投稿一覧を取得する
   */
  public async findAll(): Promise<PostResponse[]> {
    const posts = await new PostRepository().findAll()
    return posts.map((post) => this.convertResponse(post))
  }

  /**
   * 投稿のレスポンスをAPI返却用に変換する
   */
  private convertResponse(post: Post): PostResponse {
    return {
      id: post.getId(),
      text: post.getText().getValue(),
      createdAt: post.getCreatedAt(),
      updatedAt: post.getUpdatedAt(),
    }
  }
}
