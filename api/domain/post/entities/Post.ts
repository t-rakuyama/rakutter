import { PostText } from "../valueObjects/PostText.ts"

/**
 * 投稿
 */
export class Post {
  public readonly id: string
  public readonly text: PostText
  public readonly createdAt: Date
  public readonly updatedAt?: Date

  constructor(id: string, text: string, createdAt: Date, updatedAt?: Date) {
    this.id = id
    this.text = new PostText(text)
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
