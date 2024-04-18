import { Post } from "../entities/Post.ts"
import { PostRepositoryInterface } from "../repositories/PostRepositoryInterface.ts"

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
  constructor(private postRepository: PostRepositoryInterface) {
  }

  /**
   * API返却用の投稿一覧を取得する
   */
  public async findAll(): Promise<PostResponse[]> {
    const posts = await this.postRepository.findAll()
    return posts.map((post) => this.convertResponse(post))
  }

  /**
   * 投稿のレスポンスをAPI返却用に変換する
   */
  private convertResponse(post: Post): PostResponse {
    return {
      id: post.id,
      text: post.text.value,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }
  }
}
