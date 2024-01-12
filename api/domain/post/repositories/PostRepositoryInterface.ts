import { Post } from '../entities/Post.ts'

/**
 * 投稿のリポジトリインタフェース
 */
export interface PostRepositoryInterface {
  findAll(): Promise<Post[]>
}
