import { PostText } from '../valueObjects/PostText.ts'

/**
 * 投稿
 */
export class Post {
  private readonly id: string
  private readonly text: PostText
  private readonly createdAt: Date
  private readonly updatedAt?: Date

  constructor(id: string, text: string, createdAt: Date, updatedAt?: Date) {
    this.id = id
    this.text = new PostText(text)
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  getId(): string {
    return this.id
  }

  getText(): PostText {
    return this.text
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt
  }
}
