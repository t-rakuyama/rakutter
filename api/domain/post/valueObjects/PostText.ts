/**
 * 投稿文章
 */
export class PostText {
  private static readonly MAX_LENGTH = 256

  constructor(private readonly value: string) {
    if (value.length > PostText.MAX_LENGTH) {
      throw new Error(
        `投稿文章は${PostText.MAX_LENGTH}字以内である必要があります。`,
      )
    }
  }

  getValue(): string {
    return this.value
  }
}
